import { turso } from '../../lib/turso';

export const prerender = false;

export async function GET({ url }) {
  try {
    const clientId = url.searchParams.get('clientId');
    if (!clientId) {
      return new Response(JSON.stringify({ success: true, likedWordIds: [] }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const result = await turso.execute({
      sql: 'SELECT word_id FROM word_likes WHERE client_id = ?',
      args: [clientId],
    });

    const likedWordIds = result.rows.map((r) => r.word_id);
    return new Response(JSON.stringify({ success: true, likedWordIds }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching liked words:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { wordId, clientId } = body;

    if (!wordId || !clientId) {
      return new Response(JSON.stringify({ success: false, error: 'wordId dan clientId wajib disertakan' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Check if client already liked this word
    const checkRes = await turso.execute({
      sql: 'SELECT id FROM word_likes WHERE word_id = ? AND client_id = ?',
      args: [wordId, clientId],
    });

    let liked = false;

    if (checkRes.rows.length > 0) {
      // Unlike
      await turso.batch([
        {
          sql: 'DELETE FROM word_likes WHERE word_id = ? AND client_id = ?',
          args: [wordId, clientId],
        },
        {
          sql: 'UPDATE words SET likes = MAX(0, likes - 1) WHERE id = ?',
          args: [wordId],
        },
      ]);
      liked = false;
    } else {
      // Like
      const likeId = `like-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
      await turso.batch([
        {
          sql: 'INSERT INTO word_likes (id, word_id, client_id, created_at) VALUES (?, ?, ?, ?)',
          args: [likeId, wordId, clientId, Date.now()],
        },
        {
          sql: 'UPDATE words SET likes = likes + 1 WHERE id = ?',
          args: [wordId],
        },
      ]);
      liked = true;
    }

    // Get current likes count
    const wordRes = await turso.execute({
      sql: 'SELECT likes FROM words WHERE id = ?',
      args: [wordId],
    });

    const currentLikes = wordRes.rows.length > 0 ? Number(wordRes.rows[0].likes) : 0;

    return new Response(JSON.stringify({ success: true, liked, likes: currentLikes }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error toggling like:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
