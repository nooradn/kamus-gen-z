# Kamus Gen Z Indonesia 🇮🇩🔥
*Ensiklopedia Bahasa Gaul, Slang Anak Jaksel, TikTok, Twitter/X & Budaya Tongkrongan Terkini*

Website interaktif dan modern yang merangkum kosa kata slang populer Gen Z Indonesia secara mendalam, lengkap dengan asal-usul, cara baca, contoh percakapan nyata, penerjemah bahasa Jaksel otomatis, dan kuis uji level gaul!

---

## 🚀 Fitur Utama

1. **⚡ Ditenagai Astro 5 (Ultra Fast Performance & Islands Architecture)**
   - Pre-rendered HTML yang super cepat, SEO-friendly, dan hemat bandwidth.
   - Menggunakan arsitektur Astro Islands (`client:load`) untuk hidrasi komponen interaktif.

2. **☀️ / 🌙 Dukungan Mode Terang (Default) & Mode Gelap**
   - Desain Light Mode yang bersih, cerah, modern, dan berkontras tinggi (*clean aesthetic*).
   - Tombol toggle tema instan di bilah navigasi dengan ikon interaktif (☀️ / 🌙).
   - Anti-flicker script bawaan di `<head>` agar tema langsung konsisten sejak frame pertama.

3. **📱 Top Navbar Kompak & Rapi**
   - Navbar ramping dengan navigasi teks proporsional.
   - Menggunakan bendera Indonesia SVG vektor murni (bebas broken font/missing glyphs di OS apapun).

4. **📖 Ensiklopedia Slang Lengkap (80+ Kata & Bertambah)**
   - Kategori terstruktur: *Paling Hype*, *Jaksel Culture*, *Asmara & Percintaan*, *TikTok & X*, *Tongkrongan*, *Brainrot & Global*.
   - Panduan pelafalan/fonetik (contoh: `[wi-cis]`, `[ce-gil]`, `[riz]`).
   - Penjelasan asal-usul budaya dan konteks sosial di Indonesia.
   - Contoh dialog chat nyata (A & B).
   - Audio pengucapan suara kata (Speech Synthesis).
   - Filter cepat berdasarkan kategori, level kesulitan (*Pemula, Menengah, Sepuh*), dan pencarian instan.

5. **🔄 Penerjemah Bahasa Jaksel (Jaksel-ifier AI)**
   - Terjemahkan kalimat baku / formal jadi gaya obrolan anak Jakarta Selatan & Gen Z.
   - Mode reverse: Terjemahkan bahasa gaul ke Bahasa Indonesia Baku yang sopan (aman dikirim ke atasan kantor / orang tua!).
   - Pilihan intensitas: *Santai*, *Jakselian*, hingga *Overkill*.
   - Preset contoh sekali klik (*Lelah Kerja, PDKT Gantung, Pamer Prestasi, Batasan Diri*).

6. **🎯 Kuis "Seberapa Gen Z Kamu?"**
   - 7 skenario pertanyaan situasional tongkrongan dan asmara.
   - Penjelasan edukatif di setiap jawaban.
   - Skor otomatis & gelar persona Gen Z (*Maharaja FYP & Sepuh Gen Z*, *Anak Jaksel Tulen*, *Gen Z Kasual*, atau *Boomer Nyasar*).
   - Efek selebrasi konfeti dan tombol bagikan skor ke medsos.

7. **🎲 Gacha Kata Slang Acak**
   - Fitur seru untuk menemukan kosa kata acak hari ini dengan animasi putar.

8. **🔖 Simpan Favorit & Sukai Kata**
   - Simpan kata-kata favorit ke memori lokal browser (`localStorage`).
   - Tombol like interaktif pada setiap kartu kata.

9. **➕ Usulkan Kata Baru (Dukungan Komunitas)**
   - Pengunjung dapat menambahkan kata baru lengkap dengan contoh dan kategori, langsung tersimpan di browser secara dinamis.

---

## 🛠️ Tech Stack

- **Astro 5** (Static Site Generator & Islands Architecture)
- **React 19** (`@astrojs/react`)
- **Tailwind CSS v4** (dengan `@custom-variant dark`)
- **Lucide React** (Modern Iconography)
- **Canvas-Confetti** (Micro-interactions)
- **Web Speech API** (Audio Pronunciation)

---

## 🏃 Cara Menjalankan

```bash
# Masuk ke direktori
cd /home/agent/.gemini/antigravity-cli/scratch/kamus-gen-z

# Jalankan server pengembangan
npm run dev

# Build produksi
npm run build

# Preview build produksi
npm run preview
```
Server berjalan di `http://localhost:5173/`.
