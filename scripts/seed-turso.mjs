import { createClient } from '@libsql/client';
import dotenv from 'dotenv';
import { INITIAL_SLANG_LIST } from '../src/data/slangData.js';

dotenv.config();

const client = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

async function seed() {
  console.log('1. Creating tables in Turso...');

  await client.execute(`
    CREATE TABLE IF NOT EXISTS words (
      id TEXT PRIMARY KEY,
      term TEXT NOT NULL,
      pronunciation TEXT,
      category TEXT NOT NULL,
      level TEXT DEFAULT 'pemula',
      meaning TEXT NOT NULL,
      origin TEXT,
      speaker_a TEXT,
      speaker_b TEXT,
      tags TEXT,
      likes INTEGER DEFAULT 0,
      is_custom INTEGER DEFAULT 0,
      trending INTEGER DEFAULT 0,
      created_at INTEGER
    );
  `);

  await client.execute(`
    CREATE TABLE IF NOT EXISTS word_likes (
      id TEXT PRIMARY KEY,
      word_id TEXT NOT NULL,
      client_id TEXT NOT NULL,
      created_at INTEGER,
      UNIQUE(word_id, client_id)
    );
  `);

  console.log(`2. Seeding ${INITIAL_SLANG_LIST.length} slang entries into Turso...`);

  let insertedCount = 0;
  for (const item of INITIAL_SLANG_LIST) {
    try {
      await client.execute({
        sql: `
          INSERT INTO words (
            id, term, pronunciation, category, level, meaning, origin, speaker_a, speaker_b, tags, likes, is_custom, trending, created_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(id) DO UPDATE SET
            term = excluded.term,
            pronunciation = excluded.pronunciation,
            category = excluded.category,
            level = excluded.level,
            meaning = excluded.meaning,
            origin = excluded.origin,
            speaker_a = excluded.speaker_a,
            speaker_b = excluded.speaker_b,
            tags = excluded.tags;
        `,
        args: [
          item.id,
          item.term,
          item.pronunciation || '',
          item.category,
          item.level || 'pemula',
          item.meaning,
          item.origin || '',
          item.example?.speakerA || '',
          item.example?.speakerB || '',
          JSON.stringify(item.tags || []),
          item.likes || 0,
          item.isCustom ? 1 : 0,
          item.trending ? 1 : 0,
          Date.now(),
        ],
      });
      insertedCount++;
    } catch (e) {
      console.error(`Failed to insert ${item.id}:`, e);
    }
  }

  console.log(`✅ Successfully seeded/updated ${insertedCount} words in Turso database!`);
  
  const countRes = await client.execute('SELECT COUNT(*) as total FROM words');
  console.log(`Total words in database: ${countRes.rows[0].total}`);
}

seed().catch(console.error);
