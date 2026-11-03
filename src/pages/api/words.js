import { turso } from '../../lib/turso';

export const prerender = false;

export async function GET() {
  try {
    const result = await turso.execute('SELECT * FROM words ORDER BY likes DESC, created_at DESC');
    
    const words = result.rows.map((row) => ({
      id: row.id,
      term: row.term,
      pronunciation: row.pronunciation || '',
      category: row.category,
      level: row.level || 'pemula',
      meaning: row.meaning,
      origin: row.origin || '',
      example: {
        speakerA: row.speaker_a || '',
        speakerB: row.speaker_b || '',
      },
      tags: row.tags ? (typeof row.tags === 'string' ? JSON.parse(row.tags) : row.tags) : [],
      likes: Number(row.likes) || 0,
      isCustom: Boolean(row.is_custom),
      trending: Boolean(row.trending),
      createdAt: row.created_at,
    }));

    return new Response(JSON.stringify({ success: true, data: words }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching words from Turso:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { term, pronunciation, category, level, meaning, origin, example, tags } = body;

    if (!term || !meaning) {
      return new Response(JSON.stringify({ success: false, error: 'Kata dan arti wajib diisi' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const id = body.id || `word-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    const speakerA = example?.speakerA || '';
    const speakerB = example?.speakerB || '';
    const tagsJson = JSON.stringify(tags || []);
    const now = Date.now();

    await turso.execute({
      sql: `
        INSERT INTO words (
          id, term, pronunciation, category, level, meaning, origin, speaker_a, speaker_b, tags, likes, is_custom, trending, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 1, 0, ?)
      `,
      args: [
        id,
        term.trim(),
        pronunciation?.trim() || `[${term.toLowerCase()}]`,
        category || 'populer',
        level || 'pemula',
        meaning.trim(),
        origin?.trim() || 'Usulan komunitas Gen Z',
        speakerA.trim(),
        speakerB.trim(),
        tagsJson,
        now,
      ],
    });

    const newWord = {
      id,
      term: term.trim(),
      pronunciation: pronunciation?.trim() || `[${term.toLowerCase()}]`,
      category: category || 'populer',
      level: level || 'pemula',
      meaning: meaning.trim(),
      origin: origin?.trim() || 'Usulan komunitas Gen Z',
      example: { speakerA, speakerB },
      tags: tags || [],
      likes: 1,
      isCustom: true,
      trending: false,
      createdAt: now,
    };

    return new Response(JSON.stringify({ success: true, data: newWord }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error creating word in Turso:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
