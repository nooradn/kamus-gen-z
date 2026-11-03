# Kamus Gen Z Indonesia 🇮🇩🔥
*Ensiklopedia Bahasa Gaul, Slang Anak Jaksel, TikTok, Twitter/X & Budaya Tongkrongan Terkini*

Website interaktif dan modern yang merangkum kosa kata slang populer Gen Z Indonesia secara mendalam, lengkap dengan asal-usul, cara baca, contoh percakapan nyata, penerjemah bahasa Jaksel otomatis, kuis uji level gaul, serta **integrasi Cloud Database Turso (libSQL)** untuk penyimpanan like dan entri kata komunitas secara *real-time*.

---

## 🚀 Fitur Utama

1. **⚡ Ditenagai Astro 5 (Ultra Fast Performance & Islands Architecture)**
   - Pre-rendered HTML yang super cepat, SEO-friendly, dan hemat bandwidth.
   - Menggunakan arsitektur Astro Islands (`client:load`) untuk hidrasi komponen interaktif.
   - Server-Side Endpoints via `@astrojs/node` untuk integrasi database dinamis.

2. **🗄️ Cloud Database Real-Time (Turso / libSQL on Edge)**
   - **Live Word Sync**: Kosakata slang baru yang diusulkan pengguna langsung tersimpan di cloud database Turso dan dapat diakses semua pengunjung.
   - **Atomic Like & Anti-Spam**: Sistem like terdistribusi dengan transaksi atomik batch libSQL dan constraint unik per perangkat/klien.

3. **☀️ / 🌙 Dukungan Mode Terang (Default) & Mode Gelap**
   - Desain Light Mode yang bersih, cerah, modern, dan berkontras tinggi (*clean aesthetic*).
   - Tombol toggle tema instan di bilah navigasi dengan ikon interaktif (☀️ / 🌙).
   - Anti-flicker script bawaan di `<head>` agar tema langsung konsisten sejak frame pertama.

4. **📱 Top Navbar Kompak & Rapi**
   - Navbar ramping dengan navigasi teks proporsional.
   - Menggunakan bendera Indonesia SVG vektor murni (bebas broken font/missing glyphs di OS apapun).

5. **📖 Ensiklopedia Slang Lengkap (80+ Kata & Bertambah)**
   - Kategori terstruktur: *Paling Hype*, *Jaksel Culture*, *Asmara & Percintaan*, *TikTok & X*, *Tongkrongan*, *Brainrot & Global*.
   - Panduan pelafalan/fonetik (contoh: `[wi-cis]`, `[ce-gil]`, `[riz]`).
   - Penjelasan asal-usul budaya dan konteks sosial di Indonesia.
   - Contoh dialog chat nyata (A & B).
   - Audio pengucapan suara kata (Web Speech API).
   - Filter cepat berdasarkan kategori, level kesulitan (*Pemula, Menengah, Sepuh*), dan pencarian instan.

6. **🔄 Penerjemah Bahasa Jaksel (Jaksel-ifier AI)**
   - Terjemahkan kalimat baku / formal jadi gaya obrolan anak Jakarta Selatan & Gen Z.
   - Mode reverse: Terjemahkan bahasa gaul ke Bahasa Indonesia Baku yang sopan (aman dikirim ke atasan kantor / orang tua!).
   - Pilihan intensitas: *Santai*, *Jakselian*, hingga *Overkill*.
   - Preset contoh sekali klik (*Lelah Kerja, PDKT Gantung, Pamer Prestasi, Batasan Diri*).

7. **🎯 Kuis "Seberapa Gen Z Kamu?"**
   - 7 skenario pertanyaan situasional tongkrongan dan asmara.
   - Penjelasan edukatif di setiap jawaban.
   - Skor otomatis & gelar persona Gen Z (*Maharaja FYP & Sepuh Gen Z*, *Anak Jaksel Tulen*, *Gen Z Kasual*, atau *Boomer Nyasar*).
   - Efek selebrasi konfeti dan tombol bagikan skor ke medsos.

8. **🎲 Gacha Kata Slang Acak**
   - Fitur seru untuk menemukan kosa kata acak hari ini dengan animasi gacha interaktif.

9. **➕ Usulkan Kata Baru (Dukungan Komunitas)**
   - Pengunjung dapat berkontribusi menambahkan kosa kata baru lengkap dengan contoh kalimat dan asal-usulnya. Kata yang disetujui/disubmit langsung masuk ke database Turso.

---

## 🛠️ Tech Stack

| Layer | Teknologi | Keterangan |
| :--- | :--- | :--- |
| **Framework** | [Astro 5](https://astro.build/) | SSR / Hybrid islands architecture |
| **Database** | [Turso](https://turso.tech/) (`@libsql/client`) | Serverless distributed SQLite on edge |
| **Frontend UI** | [React 19](https://react.dev/) | Dynamic islands & state management |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first CSS |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent icons |
| **Audio** | Web Speech API | Native browser speech synthesis |
| **Effects** | Canvas Confetti | Gamification micro-interactions |

---

## 🗄️ Integrasi Cloud Database (Turso libSQL)

Aplikasi ini menggunakan **Turso**, platform database serverless berbasis libSQL (fork SQLite open-source) dengan latensi ultra-rendah dan kemampuan multi-region edge replication.

### 1. Skema Database

Turso menyimpan dua tabel utama:

#### `words` (Data Kosakata Slang)
```sql
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
  tags TEXT,                     -- JSON array format string: ["jaksel", "kolega"]
  likes INTEGER DEFAULT 0,
  is_custom INTEGER DEFAULT 0,   -- 1 jika diusulkan oleh pengunjung
  trending INTEGER DEFAULT 0,
  created_at INTEGER
);
```

#### `word_likes` (Pencatatan Like & Anti-Spam)
```sql
CREATE TABLE IF NOT EXISTS word_likes (
  id TEXT PRIMARY KEY,
  word_id TEXT NOT NULL,
  client_id TEXT NOT NULL,
  created_at INTEGER,
  UNIQUE(word_id, client_id)     -- Mencegah duplicate like dari client yang sama
);
```

### 2. API Endpoints (`/api/*`)

Astro menyediakan endpoint serverless di sisi server:

- **`GET /api/words`**  
  Mengambil seluruh entri kata dari Turso yang diurutkan berdasarkan `likes DESC, created_at DESC`.

- **`POST /api/words`**  
  Menyimpan usulan kosa kata baru dari formulir modal komunitas ke dalam tabel `words`.

- **`GET /api/like?clientId={id}`**  
  Mengembalikan daftar `word_id` yang telah di-like oleh perangkat/klien saat ini (untuk memulihkan status ikon hati aktif).

- **`POST /api/like`**  
  Toggle like/unlike menggunakan **batch transaction** atomik di libSQL:
  - Jika `(word_id, client_id)` sudah ada: Menghapus record di `word_likes` dan mengurangi counter `likes` di `words`.
  - Jika belum ada: Menambahkan record baru di `word_likes` dan menambah counter `likes` di `words`.

### 3. Client Optimistic Update
Untuk menjamin pengalaman pengguna yang instan tanpa lag:
- Ketika tombol like ditekan, status dan angka like langsung diperbarui di UI secara optimis (*optimistic update*).
- Jika request API ke Turso mengalami kegagalan, state akan di-rollback otomatis dan notifikasi error ditampilkan via toast.

---

## 📁 Struktur Direktori

```text
kamus-gen-z/
├── astro.config.mjs         # Konfigurasi Astro (Node SSR adapter & React integration)
├── package.json             # Dependensi project (@libsql/client, astro, react, tailwind)
├── .env.example             # Template variabel lingkungan
├── scripts/
│   └── seed-turso.mjs       # Script migrasi & seeding awal 80+ kata ke Turso
└── src/
    ├── lib/
    │   └── turso.js         # Inisialisasi libSQL Client instance
    ├── pages/
    │   ├── index.astro      # Root page HTML wrapper dengan theme anti-flicker script
    │   └── api/
    │       ├── words.js     # Endpoint REST API: fetch & submit kata
    │       └── like.js      # Endpoint REST API: toggle & status like
    ├── components/
    │   ├── Header.jsx       # Header & Navbar (Logo, SVG Flag, Theme toggle)
    │   ├── SlangCard.jsx    # Kartu kata (Like, Audio, Dialog, Bagikan)
    │   ├── JakselTranslator.jsx # Mesin penerjemah 2 arah Jaksel ⇄ Baku
    │   ├── QuizModal.jsx    # Kuis interaktif 7 level kepribadian
    │   ├── AddWordModal.jsx # Form usulkan kata baru ke Turso
    │   └── GachaModal.jsx   # Modal gacha kosa kata acak
    ├── data/
    │   └── slangData.js     # Master data referensi kosa kata slang awal
    └── App.jsx              # Komponen utama React (Filter, Search, State sync)
```

---

## 🏃 Panduan Menjalankan Proyek

### 1. Prasyarat
- Node.js versi `>= 20.x` (direkomendasikan Node.js 22 LTS).
- Akun dan database [Turso](https://turso.tech/).

### 2. Instalasi & Setup Database

```bash
# 1. Masuk ke direktori
cd kamus-gen-z

# 2. Instal dependensi
npm install

# 3. Buat file .env dan masukkan kredensial Turso Anda
cp .env.example .env
```

Isi file `.env`:
```env
TURSO_DATABASE_URL=libsql://kamusgenz-xxxx.aws-ap-northeast-1.turso.io
TURSO_AUTH_TOKEN=eyJhbGciOi...
```

### 3. Migrasi & Seeding Data Awal

Jalankan script berikut untuk membuat tabel dan mengimpor 80+ kosakata slang awal ke database Turso:

```bash
node scripts/seed-turso.mjs
```
*Output sukses:*
```text
1. Creating tables in Turso...
2. Seeding 79 slang entries into Turso...
✅ Successfully seeded/updated 79 words in Turso database!
Total words in database: 79
```

### 4. Jalankan Development Server

```bash
npm run dev
```
Buka browser di: `http://localhost:5173/`

### 5. Build Produksi & Menjalankan Server Node

```bash
# Kompilasi project
npm run build

# Jalankan server Astro Node.js
npm run start
```

---

## 🌐 Panduan Deployment

### Vercel / Netlify
1. Ganti adapter di `astro.config.mjs` ke `@astrojs/vercel` atau `@astrojs/netlify` jika diinginkan.
2. Tambahkan Environment Variables di dashboard hosting:
   - `TURSO_DATABASE_URL`
   - `TURSO_AUTH_TOKEN`
3. Deploy!

### VPS / Docker / Standalone Server
Aplikasi ini sudah dikonfigurasi menggunakan adapter resmi `@astrojs/node` mode `standalone`.
Cukup jalankan:
```bash
HOST=0.0.0.0 PORT=3000 node --env-file=.env ./dist/server/entry.mjs
```

---

## 💡 Disclaimer

Website ini dibuat murni untuk edukasi linguistik, hiburan, dan dokumentasi ragam bahasa gaul pop culture (*purely for fun*), tanpa ada maksud menyinggung atau mendiskriminasi pihak/kelompok manapun. Tetap santai & saling *respect*! ✌️
