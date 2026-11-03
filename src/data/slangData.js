export const CATEGORIES = [
  { id: 'all', label: 'Semua Kata', icon: '✨', count: 80 },
  { id: 'populer', label: 'Paling Hype', icon: '🔥', count: 18 },
  { id: 'jaksel', label: 'Jaksel Culture', icon: '🥑', count: 16 },
  { id: 'percintaan', label: 'Asmara & Dating', icon: '💘', count: 18 },
  { id: 'medsos', label: 'TikTok & X', icon: '📱', count: 15 },
  { id: 'tongkrongan', label: 'Tongkrongan', icon: '🤙', count: 13 },
  { id: 'brainrot', label: 'Brainrot & Global', icon: '👾', count: 12 },
];

export const INITIAL_SLANG_LIST = [
  {
    id: 'menyala-abangkuh',
    term: 'Menyala Abangkuh 🔥',
    pronunciation: '[me-nya-la a-bang-kuh]',
    category: 'populer',
    level: 'pemula',
    meaning: 'Pujian atau apresiasi antusias terhadap seseorang yang tampil keren, berprestasi, atau bertindak meyakinkan. Sering disertai emoji api, ilmu padi, atau salam salim.',
    origin: 'Awalnya dari komentar pesepakbola amatir/tarkam di Instagram dan TikTok Indonesia, lalu meledak dipakai di seluruh tongkrongan dan media sosial.',
    example: {
      speakerA: 'Bro, gua barusan keterima magang di unicorn idaman nih!',
      speakerB: 'Menyala abangkuh! 🔥 Tetap ilmu padi, jangan lupa kasih paham bos lu besok!'
    },
    tags: ['viral', 'pujian', 'tongkrongan', 'ilmu padi'],
    likes: 342,
    trending: true
  },
  {
    id: 'cegil',
    term: 'Cegil (Cewek Gila)',
    pronunciation: '[ce-gil]',
    category: 'percintaan',
    level: 'pemula',
    meaning: 'Istilah untuk perempuan yang sangat obsesif, nekat, ekspresif berlebihan, atau rela berkorban ekstrem demi cowok/crush yang disukai (sering dikaitkan dengan lagu NIKI "High School in Jakarta").',
    origin: 'Twitter/X dan TikTok Indonesia seputar pergosipan romansa anak muda.',
    example: {
      speakerA: 'Masa dia rela nungguin cowoknya nongkrong 6 jam di parkiran tanpa disapa?',
      speakerB: 'Udah cegil era banget itu mah, ga ketolong delulunya.'
    },
    tags: ['cinta', 'obsesi', 'tiktok', 'relatable'],
    likes: 289,
    trending: true
  },
  {
    id: 'cogil',
    term: 'Cogil (Cowok Gila)',
    pronunciation: '[co-gil]',
    category: 'percintaan',
    level: 'pemula',
    meaning: 'Lawan kata dari Cegil. Cowok dengan tingkah laku random, nekat, red flag tapi karismatik, atau obsesif dan tidak terduga terhadap pasangannya.',
    origin: 'Kolektif pop culture TikTok Indonesia setelah ramainya tren cegil.',
    example: {
      speakerA: 'Mantan lu kenapa masih nge-spam transfer Rp 1.000 cuma buat tulis pesan di berita transfer?',
      speakerB: 'Asli cogil abis, udah gua block WhatsApp malah lewat m-Banking!'
    },
    tags: ['cinta', 'nekat', 'toxic', 'romansa'],
    likes: 245,
    trending: true
  },
  {
    id: 'skena',
    term: 'Skena',
    pronunciation: '[ske-na]',
    category: 'populer',
    level: 'pemula',
    meaning: 'Akronim santai dari "Sua, cengKErama, kelaNA". Merujuk ke subkultur anak muda penikmat musik indie, outfit Docmart/Salomon, totebag kanvas, kaos band vintage, vape/pod, dan nongkrong di kedai kopi artisan.',
    origin: 'Komunitas musik independen lokal & perbincangan Twitter/TikTok tentang stereotip gaya hidup urban.',
    example: {
      speakerA: 'Outfit lu hari ini udah skena banget, tinggal beli kopi V60 sama tenteng buku filsafat.',
      speakerB: 'Biar keliatan indie pol bro pas nonton festival akhir pekan.'
    },
    tags: ['outfit', 'indie', 'kopi', 'lifestyle'],
    likes: 310,
    trending: true
  },
  {
    id: 'starboy',
    term: 'Starboy',
    pronunciation: '[star-boy]',
    category: 'populer',
    level: 'pemula',
    meaning: 'Cowok dengan persona glamor, misterius, stylish (sering pakai kemeja hitam/kulit, chain kalung, parfum mewah), percaya diri tinggi layaknya karakter lagu The Weeknd.',
    origin: 'Terinspirasi lagu "Starboy" - The Weeknd, viral di TikTok sebagai filter dan aesthetic cowok dingin menawan.',
    example: {
      speakerA: 'Itu anak baru gayanya cuek tapi harum semerbak, jalan aja cool banget.',
      speakerB: 'Lagi mode starboy dia, jangan disapa ntar luntur auranya!'
    },
    tags: ['aesthetic', 'style', 'tiktok', 'aura'],
    likes: 198,
    trending: false
  },
  {
    id: 'which-is',
    term: 'Which Is',
    pronunciation: '[wi-cis]',
    category: 'jaksel',
    level: 'pemula',
    meaning: 'Frasa penghubung Bahasa Inggris yang artinya "yang mana" atau "hal tersebut". Menjadi ciri khas paling ikonik dari gaya bicara anak Jakarta Selatan yang mencampur bahasa.',
    origin: 'Komunitas ekspat dan perkantoran gaul Jakarta Selatan (SCBD, Senopati, Citos).',
    example: {
      speakerA: 'Kemarin kantor gua ngadain townhall mendadak, which is bikin agenda meeting vendor gua reschedule semua.',
      speakerB: 'Pusing banget sih, which is emang bos lu agak impulsif.'
    },
    tags: ['jaksel', 'percakapan', 'scbd', 'bahasa gado-gado'],
    likes: 420,
    trending: true
  },
  {
    id: 'jujurly',
    term: 'Jujurly',
    pronunciation: '[ju-jur-li]',
    category: 'jaksel',
    level: 'pemula',
    meaning: 'Plesetan antara kata Bahasa Indonesia "jujur" dan akhiran adverb bahasa Inggris "-ly" (artinya sejujurnya / frankly speaking / to be honest).',
    origin: 'Ragaman bahasa gaul Jaksel & media sosial Twitter anak muda.',
    example: {
      speakerA: 'Gimana rasa matcha latte kafe baru depan stasiun?',
      speakerB: 'Jujurly kemanisan parah, which is kurang kerasa pait autentik matcha-nya.'
    },
    tags: ['jaksel', 'jujur', 'ekspresi', 'opini'],
    likes: 380,
    trending: true
  },
  {
    id: 'rizz',
    term: 'Rizz / Unspoken Rizz',
    pronunciation: '[riz]',
    category: 'brainrot',
    level: 'pemula',
    meaning: 'Kemampuan atau karisma alami memikat dan menggoda lawan jenis secara santai dan meyakinkan tanpa harus banyak bicara.',
    origin: 'Singkatan dari "chaRIZZma", dipopulerkan streamer Kai Cenat lalu diserap total oleh Gen Z Indonesia.',
    example: {
      speakerA: 'Dia baru ngelirik sambil senyum tipis aja udah bikin cewek itu salting brutal.',
      speakerB: 'Gila sih, unspoken rizz-nya beneran no counter!'
    },
    tags: ['karisma', 'flirting', 'pesona', 'global'],
    likes: 312,
    trending: true
  },
  {
    id: 'situationship',
    term: 'Situationship',
    pronunciation: '[si-cu-ey-sen-syip]',
    category: 'percintaan',
    level: 'menengah',
    meaning: 'Hubungan romantis tanpa status resmi; lebih dari sekadar teman biasa tapi bukan pacar resmi, seringkali penuh ketidakpastian (ambigu).',
    origin: 'Istilah kencan modern barat yang diadopsi luas anak muda urban Indonesia.',
    example: {
      speakerA: 'Udah jalan 8 bulan sering dinner bareng, tapi pas ditanya kita apa, dia bilang jalanin aja.',
      speakerB: 'Fix itu lu kejebak di situationship, mending cut off daripada makan ati.'
    },
    tags: ['dating', 'status', 'gantung', 'galau'],
    likes: 275,
    trending: true
  },
  {
    id: 'backburner',
    term: 'Backburner',
    pronunciation: '[bek-ber-ner]',
    category: 'percintaan',
    level: 'menengah',
    meaning: 'Orang yang dijadikan opsi cadangan dalam hubungan asmara; disimpan untuk dihubungi sewaktu-waktu saat pilihan utama tidak berhasil.',
    origin: 'Dari analogi kompor bagian belakang, dipopulerkan lagi secara masif oleh lagu NIKI "Backburner".',
    example: {
      speakerA: 'Dia cuma ngechat kalau lagi berantem sama pacarnya doang.',
      speakerB: 'Sadar bro, lu cuma dijadiin backburner sama dia. Mundur alon-alon!'
    },
    tags: ['cadangan', 'niki', 'friendzone', 'sadboy'],
    likes: 260,
    trending: false
  },
  {
    id: 'love-bombing',
    term: 'Love Bombing',
    pronunciation: '[laf bom-bing]',
    category: 'percintaan',
    level: 'menengah',
    meaning: 'Taktik manipulatif berupa menghujani seseorang dengan perhatian, hadiah, dan janji manis berlebihan di awal PDKT untuk membuat korban cepat luluh dan bergantung.',
    origin: 'Psikologi populer yang viral di Twitter dan TikTok Indonesia saat membahas relasi beracun.',
    example: {
      speakerA: 'Baru kenal 3 hari tapi udah ngirim bunga ke kantor, manggil sayang, dan ngajak nikah tahun depan.',
      speakerB: 'Hati-hati, itu textbook love bombing. Ntar sebulan lagi bisa langsung ghosting.'
    },
    tags: ['manipulasi', 'redflag', 'pdkt', 'psikologi'],
    likes: 230,
    trending: false
  },
  {
    id: 'ghosting',
    term: 'Ghosting',
    pronunciation: '[gos-ting]',
    category: 'percintaan',
    level: 'pemula',
    meaning: 'Menghilang tiba-tiba tanpa kabar, penjelasan, atau perpisahan sama sekali dari hubungan percakapan atau romansa.',
    origin: 'Slang internet global yang telah menjadi kosa kata wajib generasi Z tanah air.',
    example: {
      speakerA: 'Semalem masih telponan sampe jam 2 pagi, paginya pas gua WA centang satu dan bio IG ilang.',
      speakerB: 'Selamat, kamu resmi kena ghosting tanpa pesangon.'
    },
    tags: ['menghilang', 'patah hati', 'dating', 'chat'],
    likes: 310,
    trending: false
  },
  {
    id: 'orbiting',
    term: 'Orbiting',
    pronunciation: '[or-bi-ting]',
    category: 'percintaan',
    level: 'menengah',
    meaning: 'Kondisi di mana seseorang sudah tidak pernah membalas chat (ghosting), tapi masih rajin melihat Instagram Story atau menyukai postingan sosmedmu.',
    origin: 'Tren perbincangan digital culture tentang mantan/crush yang belum tuntas.',
    example: {
      speakerA: 'Chat gua diarsip sama dia, tapi tiap bikin story dia orang pertama yang view.',
      speakerB: 'Dia cuma orbiting doang, jangan baper dulu!'
    },
    tags: ['stalking', 'ig story', 'mantan', 'sosmed'],
    likes: 195,
    trending: false
  },
  {
    id: 'soft-launching',
    term: 'Soft Launching',
    pronunciation: '[soft lon-cing]',
    category: 'medsos',
    level: 'menengah',
    meaning: 'Mengunggah keberadaan pacar baru di media sosial secara samar-samar (misal: hanya foto tangan berpegangan, siluet punggung, atau dua cangkir kopi) tanpa memperlihatkan wajah atau tag akun.',
    origin: 'Adopsi istilah marketing produk ke dalam gaya pacaran Gen Z di Instagram.',
    example: {
      speakerA: 'Lihat story si Nadya deh, ada foto tangan cowok megang setir mobil.',
      speakerB: 'Wah, doi lagi soft launching pacar barunya tuh!'
    },
    tags: ['instagram', 'pacaran', 'kode', 'sosmed'],
    likes: 285,
    trending: true
  },
  {
    id: 'hard-launching',
    term: 'Hard Launching',
    pronunciation: '[hard lon-cing]',
    category: 'medsos',
    level: 'menengah',
    meaning: 'Kebalikan dari soft launching; langsung mengumumkan pacar baru secara terang-terangan dengan foto wajah jelas dan tag akun profil di feed utama.',
    origin: 'Istilah marketing digital yang dipasangkan dengan tren soft launch.',
    example: {
      speakerA: 'Kemarin masih misterius, hari ini langsung feed foto studio bareng berdua.',
      speakerB: 'Mantap, akhirnya di-hard launch juga ke khalayak ramai!'
    },
    tags: ['pamer', 'pacaran', 'instagram', 'official'],
    likes: 210,
    trending: false
  },
  {
    id: 'red-flag',
    term: 'Red Flag 🚩',
    pronunciation: '[red fleg]',
    category: 'percintaan',
    level: 'pemula',
    meaning: 'Tanda bahaya atau sifat buruk seseorang yang menunjukkan bahwa menjalin hubungan dengannya akan toxic dan merugikan.',
    origin: 'Metafora sinyal bahaya internasional yang sangat lazim dipakai di tongkrongan.',
    example: {
      speakerA: 'Dia suka ngomongin semua mantannya sebagai cewek gila.',
      speakerB: 'Red flag berjalan sih itu, mending putar balik sekarang juga!'
    },
    tags: ['bahaya', 'toxic', 'karakter', 'peringatan'],
    likes: 350,
    trending: true
  },
  {
    id: 'green-flag',
    term: 'Green Flag 🟢',
    pronunciation: '[grin fleg]',
    category: 'percintaan',
    level: 'pemula',
    meaning: 'Sinyal positif atau sifat dewasa yang menandakan seseorang aman, tulus, dan sehat untuk dijadikan pasangan hidup.',
    origin: 'Pasangan kontras dari istilah Red Flag.',
    example: {
      speakerA: 'Tiap kali beda pendapat, dia selalu dengerin dengan tenang dan nyari solusi bareng.',
      speakerB: 'Green flag banget! Pertahanin, cowok spek malaikat itu langka.'
    },
    tags: ['positif', 'sehat', 'idaman', 'relationship'],
    likes: 290,
    trending: false
  },
  {
    id: 'beige-flag',
    term: 'Beige Flag 🟨',
    pronunciation: '[beys fleg]',
    category: 'percintaan',
    level: 'menengah',
    meaning: 'Kebiasaan atau perilaku pasangan yang unik, aneh, atau konyol tapi tidak berbahaya (bukan red flag maupun green flag).',
    origin: 'Tren TikTok video evaluasi sifat pacar yang aneh tapi lucu.',
    example: {
      speakerA: 'Cowok gua kalau makan bakso kuahnya harus dipisah di piring ceper.',
      speakerB: 'Hahaha itu beige flag terlucu yang pernah gua denger.'
    },
    tags: ['lucu', 'unik', 'kebiasaan', 'dating'],
    likes: 180,
    trending: false
  },
  {
    id: 'delulu',
    term: 'Delulu & Solulu',
    pronunciation: '[de-lu-lu & so-lu-lu]',
    category: 'populer',
    level: 'pemula',
    meaning: 'Delulu singkatan dari "Delusional" (berkhayal tingkat tinggi/halu). Sering dipadukan dengan jargon "Being delulu is the only solulu (solution)".',
    origin: 'Komunitas K-Pop stan di Twitter/TikTok lalu merambah ke perbincangan umum Gen Z se-Indonesia.',
    example: {
      speakerA: 'Gua yakin idol K-Pop itu noleh pas konser karena dia naksir sama gua!',
      speakerB: 'Tingkat delulu lu udah masuk stadium akhir ya sob.'
    },
    tags: ['halu', 'kpop', 'lucu', 'angan-angan'],
    likes: 315,
    trending: true
  },
  {
    id: 'tantrum',
    term: 'Tantrum',
    pronunciation: '[tan-trum]',
    category: 'populer',
    level: 'pemula',
    meaning: 'Reaksi emosi meledak-ledak, ngambek heboh, atau merajuk secara dramatis layaknya balita, sering dipakai secara hiperbolis dan bercanda antar teman.',
    origin: 'Istilah psikologi perkembangan anak yang kini dipakai santai untuk orang dewasa.',
    example: {
      speakerA: 'Gua ga dapet tiket konser band favorit padahal udah stand by dari jam 9!',
      speakerB: 'Awas jangan tantrum di kantor, malu diliat HRD.'
    },
    tags: ['emosi', 'ngambek', 'lucu', 'drama'],
    likes: 220,
    trending: false
  },
  {
    id: 'spill-the-tea',
    term: 'Spill The Tea / Spill',
    pronunciation: '[spil de ti]',
    category: 'medsos',
    level: 'pemula',
    meaning: 'Membongkar rahasia, menceritakan gosip panas, atau membeberkan kronologi kejadian kontroversial.',
    origin: 'Drag culture Afrika-Amerika ("T" untuk Truth), diserap slang internet global dan sangat dominan di Twitter/X Indonesia.',
    example: {
      speakerA: 'Gua tahu alasan sebenarnya kenapa influencer itu putus kontrak sama brand-nya.',
      speakerB: 'Drop link dong atau buruan spill the tea di grup, jangan bikin kepo!'
    },
    tags: ['gosip', 'bocoran', 'twitter', 'drama'],
    likes: 340,
    trending: true
  },
  {
    id: 'tubir',
    term: 'Tubir',
    pronunciation: '[tu-bir]',
    category: 'medsos',
    level: 'pemula',
    meaning: 'Kebalikan kata dari "Ribut". Perdebatan sengit, adu argumen, atau perselisihan panas di media sosial (khususnya Twitter/X).',
    origin: 'Slang bahasa walikan/kebalik khas Indonesia yang menjadi tradisi linimasa medsos.',
    example: {
      speakerA: 'Linimasa X lagi rame banget bahas bubur diaduk vs ga diaduk lagi.',
      speakerB: 'Biasalah, bahan tubir harian warga Twitter pas tanggal tua.'
    },
    tags: ['debat', 'twitter', 'ribut', 'netizen'],
    likes: 270,
    trending: false
  },
  {
    id: 'salfok',
    term: 'Salfok (Salah Fokus)',
    pronunciation: '[sal-fok]',
    category: 'medsos',
    level: 'pemula',
    meaning: 'Perhatian teralihkan ke objek atau detail kecil yang tidak penting daripada fokus utama foto, video, atau pembicaraan.',
    origin: 'Bahasa internet Indonesia awal dekade 2010-an yang tetap abadi digunakan Gen Z.',
    example: {
      speakerA: 'Videonya padahal bahas tutorial masak rendang.',
      speakerB: 'Tapi penontonnya pada salfok sama kucing di belakang yang lagi salto.'
    },
    tags: ['fokus', 'kocak', 'komentar', 'tiktok'],
    likes: 215,
    trending: false
  },
  {
    id: 'no-counter',
    term: 'No Counter',
    pronunciation: '[no kaun-ter]',
    category: 'tongkrongan',
    level: 'pemula',
    meaning: 'Tidak ada tandingannya, tidak bisa dibantah, atau tidak ada yang bisa mengalahkan saking hebatnya.',
    origin: 'Istilah game MOBA (Mobile Legends, Dota 2) di mana hero tertentu tak memiliki kelemahan lawan, kini dipakai luas dalam kehidupan sehari-hari.',
    example: {
      speakerA: 'Gimana rasa mie instan kuah pas lagi hujan deres di puncak?',
      speakerB: 'Wah itu mah no counter bro, kenikmatan hakiki tiada tara!'
    },
    tags: ['game', 'terbaik', 'pujian', 'tongkrongan'],
    likes: 305,
    trending: true
  },
  {
    id: 'gg-gaming',
    term: 'GG / GG Gaming',
    pronunciation: '[ji-ji gey-ming]',
    category: 'tongkrongan',
    level: 'pemula',
    meaning: 'Singkatan dari "Good Game". Di tongkrongan digunakan untuk memuji kehebatan spektakuler seseorang atau sebaliknya (ironis) saat situasi sudah pasrah dan tamat.',
    origin: 'Dunia esport / gaming kompetitif.',
    example: {
      speakerA: 'Dia berhasil ngerjain skripsi 50 halaman cuma dalam semalam!',
      speakerB: 'Asli GG gaming parah staminanya, bukan manusia kaleng-kaleng.'
    },
    tags: ['game', 'esport', 'hebat', 'takjub'],
    likes: 240,
    trending: false
  },
  {
    id: 'gaskeun',
    term: 'Gaskeun / Gasken',
    pronunciation: '[gas-keun]',
    category: 'tongkrongan',
    level: 'pemula',
    meaning: 'Ayo berangkat, lakukan sekarang tanpa ragu, atau tancap gas.',
    origin: 'Perpaduan metafora pedal gas motor dengan akhiran bahasa Sunda "-keun". Sangat universal di seluruh Indonesia.',
    example: {
      speakerA: 'Nanti malam mau nongkrong di angkringan baru ga?',
      speakerB: 'Gaskeun lah, jam 8 gua jemput ya!'
    },
    tags: ['ajakan', 'semangat', 'tongkrongan', 'sunda-nasional'],
    likes: 310,
    trending: false
  },
  {
    id: 'ngabers',
    term: 'Ngabers',
    pronunciation: '[nga-bers]',
    category: 'tongkrongan',
    level: 'pemula',
    meaning: 'Panggilan untuk komunitas pemuda hobi motor matic berisik (knalpot brong, spion bar-end), nongkrong malam (sunmori/night ride), dan sering memanggil temannya dengan kata "Ngab" (kebalikan dari Bang).',
    origin: 'Komunitas otomotif dan meme motor di media sosial Indonesia.',
    example: {
      speakerA: 'Itu rombongan Aerox di flyover knalpotnya berisik amat tengah malem.',
      speakerB: 'Biasa, para ngabers lagi unjuk gigi keliling kota.'
    },
    tags: ['motor', 'tongkrongan', 'budaya jalanan', 'ngab'],
    likes: 265,
    trending: false
  },
  {
    id: 'slay',
    term: 'Slay 💅',
    pronunciation: '[sley]',
    category: 'populer',
    level: 'pemula',
    meaning: 'Ungkapan pujian saat seseorang tampil luar biasa keren, memukau, atau sukses menyelesaikan sesuatu dengan sempurna (nailing it).',
    origin: 'Ballroom & queer culture era 1980-an yang kini jadi ekspresi harian anak muda di seluruh dunia termasuk Indonesia.',
    example: {
      speakerA: 'OOTD lo hari ini buat sidang wisuda kece badai banget!',
      speakerB: 'Thanks bestie! Slay all day pokoknya!'
    },
    tags: ['pujian', 'kece', 'outfit', 'keren'],
    likes: 330,
    trending: true
  },
  {
    id: 'let-him-cook',
    term: 'Let Him Cook / Cooking',
    pronunciation: '[let him kuk]',
    category: 'brainrot',
    level: 'menengah',
    meaning: 'Biarkan dia beraksi, menyampaikan argumen, atau merencanakan sesuatu tanpa diinterupsi karena hasilnya diprediksi bakal hebat atau mencengangkan.',
    origin: 'Meme rapper Lil B dan olahraga basket NBA, meledak di TikTok dan Twitter anime/gaming Indo.',
    example: {
      speakerA: 'Tunggu dulu, ide presentasi dia barusan ada benernya juga.',
      speakerB: 'Hold on, let him cook! Dengerin sampai tuntas dulu penjelasannya.'
    },
    tags: ['meme', 'argumen', 'dukungan', 'tiktok'],
    likes: 278,
    trending: true
  },
  {
    id: 'lowkey',
    term: 'Lowkey',
    pronunciation: '[low-ki]',
    category: 'jaksel',
    level: 'pemula',
    meaning: 'Secara diam-diam, terselubung, tidak terang-terangan, atau sedikit merasakan sesuatu tapi enggan mengakuinya terang-terangan.',
    origin: 'Slang bahasa Inggris yang mendarah daging di kosakata anak Jaksel.',
    example: {
      speakerA: 'Lu kesel ya gara-gara dia telat datang?',
      speakerB: 'Gua lowkey agak bete sih, tapi ya sudahlah malas drama.'
    },
    tags: ['jaksel', 'perasaan', 'santai', 'rahasia'],
    likes: 295,
    trending: false
  },
  {
    id: 'highkey',
    term: 'Highkey',
    pronunciation: '[hay-ki]',
    category: 'jaksel',
    level: 'menengah',
    meaning: 'Kebalikan dari lowkey. Secara terang-terangan, sangat jelas, atau tanpa rasa malu mengakui sesuatu dengan intensitas tinggi.',
    origin: 'Kosakata kontras dari lowkey di pergaulan Jaksel.',
    example: {
      speakerA: 'Lu suka sama barista yang di kasir tadi ya?',
      speakerB: 'Gua highkey naksir berat, senyumnya manis banget tolong!'
    },
    tags: ['jaksel', 'terang-terangan', 'ekspresi', 'intens'],
    likes: 210,
    trending: false
  },
  {
    id: 'canon-event',
    term: 'Canon Event',
    pronunciation: '[ke-nen i-vent]',
    category: 'populer',
    level: 'menengah',
    meaning: 'Kejadian pahit atau peristiwa memalukan dalam hidup seseorang yang tak terelakkan dan tidak boleh digagalkan oleh orang lain, karena peristiwa itulah yang membentuk kedewasaan karakternya.',
    origin: 'Film Spider-Man: Across the Spider-Verse (2023) yang kemudian dijadikan meme refleksi kehidupan anak muda.',
    example: {
      speakerA: 'Temen kita lagi bucin parah sama orang red flag, perlu kita tegur ga?',
      speakerB: 'Jangan dihalangi, itu canon event dia biar nanti belajar hidup mandiri.'
    },
    tags: ['spiderman', 'kehidupan', 'pelajaran', 'meme'],
    likes: 310,
    trending: true
  },
  {
    id: 'yapper',
    term: 'Yapper / Yap',
    pronunciation: '[yep-per]',
    category: 'brainrot',
    level: 'menengah',
    meaning: 'Orang yang hobi bicara panjang lebar tiada henti tanpa jeda, seringkali tentang hal-hal random atau tidak terlalu penting (banyak omong/cerewet).',
    origin: 'TikTok slang global untuk merepresentasikan orang yang tak bisa berhenti berbicara ("yapping").',
    example: {
      speakerA: 'Cerita lu dari tadi udah 45 menit padahal intinya cuma salah beli saus.',
      speakerB: 'Sorry ya, jiwa yapper gua emang gampang kepancing kalau lagi ngopi.'
    },
    tags: ['cerewet', 'tiktok', 'ngobrol', 'tongkrongan'],
    likes: 260,
    trending: true
  },
  {
    id: 'mewing',
    term: 'Mewing',
    pronunciation: '[myu-wing]',
    category: 'brainrot',
    level: 'sepuh',
    meaning: 'Pose menempelkan lidah ke langit-langit mulut untuk mempertajam garis rahang (jawline). Dalam bahasa gaul, sering diperagakan dengan menaruh jari telunjuk di bibir tanda menyuruh orang diam demi menjaga ketampanan.',
    origin: 'Teknik ortotropik Dr. John Mew yang diubah Gen Z menjadi gestur meme absurd di TikTok.',
    example: {
      speakerA: 'Woy ditanya dosen malah nempelin telunjuk di bibir sambil nunjuk dagu!',
      speakerB: 'Sssttt jangan ganggu, dia lagi streak mewing demi aura sigma.'
    },
    tags: ['absurd', 'jawline', 'tiktok', 'meme'],
    likes: 285,
    trending: true
  },
  {
    id: 'sigma',
    term: 'Sigma / Sigma Male',
    pronunciation: '[sig-ma]',
    category: 'brainrot',
    level: 'pemula',
    meaning: 'Sosok penyendiri yang keren, mandiri, tidak butuh validasi sosial atau mengejar wanita, fokus pada pengembangan diri (sering dipadukan dengan ekspresi wajah Patrick Bateman).',
    origin: 'Hierarki sosial internet barat yang diadaptasi satir oleh anak muda Indonesia.',
    example: {
      speakerA: 'Dia ditawari nongkrong malah milih push rank sambil baca buku ekonomi.',
      speakerB: 'Definisi sigma male sesungguhnya, dingin tak tersentuh!'
    },
    tags: ['dingin', 'mandiri', 'meme', 'ironis'],
    likes: 290,
    trending: false
  },
  {
    id: 'skibidi',
    term: 'Skibidi',
    pronunciation: '[ski-bi-di]',
    category: 'brainrot',
    level: 'sepuh',
    meaning: 'Kata seruan absurd tanpa arti pasti yang kerap diartikan sebagai sesuatu yang aneh, jelek, keren, atau sekadar kata tempelan pelengkap kalimat anak zaman now.',
    origin: 'Serial animasi viral YouTube "Skibidi Toilet" oleh DaFuq!?Boom! yang mengawali era brainrot Gen Alpha & Gen Z muda.',
    example: {
      speakerA: 'Gaya lu hari ini beneran skibidi banget dah.',
      speakerB: 'Maksudnya apa coba? Udah keracunan brainrot YouTube lu ya!'
    },
    tags: ['brainrot', 'absurd', 'generasi-alpha', 'meme'],
    likes: 220,
    trending: false
  },
  {
    id: 'gyatt',
    term: 'Gyatt / Gyat',
    pronunciation: '[gyat]',
    category: 'brainrot',
    level: 'menengah',
    meaning: 'Singkatan dari seruan "God damn!" ketika melihat seseorang dengan bentuk tubuh bagian belakang (pinggul/pantat) yang sangat menonjol atau menarik perhatian.',
    origin: 'Streamer Twitch (YourRAGE, Kai Cenat) yang menjamur di komentar medsos remaja.',
    example: {
      speakerA: 'Lihat selebgram itu lewat pake gaun ketat...',
      speakerB: 'Refleks teriak gyatt seisi ruangan!'
    },
    tags: ['reaksi', 'twitch', 'tiktok', 'tubuh'],
    likes: 195,
    trending: false
  },
  {
    id: 'pick-me',
    term: 'Pick Me (Girl / Boy)',
    pronunciation: '[pik mi]',
    category: 'populer',
    level: 'pemula',
    meaning: 'Seseorang yang merendahkan gendernya sendiri demi mendapatkan simpati, pujian, atau perhatian khusus dari lawan jenis ("aku beda dari cewek/cowok lain").',
    origin: 'Fenomena psikososial media sosial yang viral di TikTok.',
    example: {
      speakerA: 'Dia bilang: "Gua mah gasuka dandan ribet kayak cewek lain, gua lebih suka motoran sama cowok".',
      speakerB: 'Klasik pick me girl move banget, caper level dewa.'
    },
    tags: ['caper', 'karakter', 'sindiran', 'sosial'],
    likes: 360,
    trending: true
  },
  {
    id: 'cringe',
    term: 'Cringe',
    pronunciation: '[krinj]',
    category: 'populer',
    level: 'pemula',
    meaning: 'Perasaan geli, jijik, atau malu luar biasa saat melihat tingkah laku seseorang yang norak, sok asik, atau canggung.',
    origin: 'Kata serapan bahasa Inggris yang sudah menjadi kosakata wajib percakapan tongkrongan.',
    example: {
      speakerA: 'Lu nonton video dia nge-gombalin kasir minimarket demi konten ga?',
      speakerB: 'Gua langsung skip, ga kuat nahan cringe-nya!'
    },
    tags: ['malu', 'norak', 'reaksi', 'konten'],
    likes: 310,
    trending: false
  },
  {
    id: 'sus',
    term: 'Sus (Suspicious)',
    pronunciation: '[sas]',
    category: 'populer',
    level: 'pemula',
    meaning: 'Mencurigakan, janggal, atau meragukan; merasa ada hal aneh yang disembunyikan.',
    origin: 'Populer dari game "Among Us" saat mencari impostor, lalu diserap ke bahasa sehari-hari.',
    example: {
      speakerA: 'Tiba-tiba dia minjemin mobil tanpa diminta dan gamau dibalikin bensinnya.',
      speakerB: 'Sus banget perilakunya, pasti ada maunya tuh.'
    },
    tags: ['curiga', 'among us', 'waspada', 'game'],
    likes: 230,
    trending: false
  },
  {
    id: 'cap-no-cap',
    term: 'No Cap / Cap',
    pronunciation: '[no kep / kep]',
    category: 'populer',
    level: 'menengah',
    meaning: '"Cap" artinya bohong/omong kosong. "No Cap" artinya sungguhan, jujur tanpa tipu-tipu (serius beneran).',
    origin: 'AAVE (African American Vernacular English) musik Hip-Hop yang merambah tongkrongan global dan lokal.',
    example: {
      speakerA: 'Makanan di warung pecel lele tenda biru itu terenak se-kota, no cap!',
      speakerB: 'Setuju gua, sambelnya gaada tandingannya.'
    },
    tags: ['fakta', 'jujur', 'hiphop', 'pemberitahuan'],
    likes: 270,
    trending: false
  },
  {
    id: 'fomo',
    term: 'FOMO (Fear of Missing Out)',
    pronunciation: '[fo-mo]',
    category: 'populer',
    level: 'pemula',
    meaning: 'Rasa cemas atau takut ketinggalan tren, berita hangat, konser viral, atau aktivitas seru yang sedang digandrungi orang lain.',
    origin: 'Psikologi modern era internet yang sangat relevan dengan gaya hidup konsumtif urban.',
    example: {
      speakerA: 'Padahal ga terlalu suka matcha, tapi ikutan antri 3 jam demi beli cookies viral.',
      speakerB: 'Dasar korban FOMO, besok-besok juga udah sepi.'
    },
    tags: ['tren', 'psikologi', 'lifestyle', 'medsos'],
    likes: 380,
    trending: true
  },
  {
    id: 'jomo',
    term: 'JOMO (Joy of Missing Out)',
    pronunciation: '[jo-mo]',
    category: 'populer',
    level: 'menengah',
    meaning: 'Kebalikan dari FOMO. Perasaan damai dan bahagia saat tidak ikut-ikutan tren yang melelahkan, lebih memilih rebahan di rumah dengan tenang.',
    origin: 'Gerakan tandingan gaya hidup lambat (slow living) Gen Z.',
    example: {
      speakerA: 'Malam minggu orang pada party di Senopati, lu di rumah aja?',
      speakerB: 'Gua lagi menikmati fase JOMO bro, nonton Netflix sambil ngemil martabak itu surga.'
    },
    tags: ['santai', 'tenang', 'slow-living', 'introvert'],
    likes: 245,
    trending: false
  },
  {
    id: 'healing',
    term: 'Healing',
    pronunciation: '[hi-ling]',
    category: 'jaksel',
    level: 'pemula',
    meaning: 'Secara harfiah penyembuhan luka batin, namun di Indonesia maknanya bergeser santai menjadi: liburan, jalan-jalan, atau nongkrong cantik untuk melepas penat stres kerja/kuliah.',
    origin: 'Pergeseran makna psikoterapi klinis menjadi jargon wisata media sosial Indonesia.',
    example: {
      speakerA: 'Baru hari Selasa tapi revisi klien udah 15 kali bolak-balik.',
      speakerB: 'Vibes-nya udah butuh healing ke Ubud nih sebelum meledak.'
    },
    tags: ['liburan', 'stres', 'jaksel', 'lifestyle'],
    likes: 360,
    trending: true
  },
  {
    id: 'kena-mental',
    term: 'Kena Mental',
    pronunciation: '[ke-na men-tal]',
    category: 'tongkrongan',
    level: 'pemula',
    meaning: 'Kondisi down, ciut nyali, syok, atau minder berat akibat diserang kata-kata pedas, kalah adu argumen, atau mengalami kegagalan tak terduga.',
    origin: 'Streamer Mobile Legends & PUBG Mobile Indonesia saat taunting lawan.',
    example: {
      speakerA: 'Si Andre kok langsung diem seribu bahasa sehabis didebat?',
      speakerB: 'Kena mental dia bro, argumennya langsung dipatahkan total.'
    },
    tags: ['down', 'ciut', 'game', 'perasaan'],
    likes: 295,
    trending: false
  },
  {
    id: 'bocil-kematian',
    term: 'Bocil Kematian',
    pronunciation: '[bo-cil ke-ma-ti-an]',
    category: 'tongkrongan',
    level: 'menengah',
    meaning: 'Julukan untuk bocah-bocah kecil yang tingkah lakunya sangat jahil, barbar, bising, atau sering bikin onar tak terkendali di dunia nyata maupun game online.',
    origin: 'Dipopulerkan oleh streamer YouTube gaming legendaris Windah Basudara.',
    example: {
      speakerA: 'Rental PS sebelah kenapa rame banget teriak-teriak?',
      speakerB: 'Lagi diserbu gerombolan bocil kematian main bola jam segini.'
    },
    tags: ['windah', 'youtube', 'lucu', 'komunitas'],
    likes: 310,
    trending: true
  },
  {
    id: 'gatekeep',
    term: 'Gatekeep / Gatekeeping',
    pronunciation: '[geyt-kip]',
    category: 'medsos',
    level: 'menengah',
    meaning: 'Sengaja merahasiakan informasi bagus (seperti tempat makan enak, thrift shop murah, atau lagu indie bagus) agar tidak diketahui khalayak banyak dan tidak berubah jadi pasaran.',
    origin: 'Jargon internet global seputar pelestarian eksklusivitas komunitas.',
    example: {
      speakerA: 'Spill dong lokasi hidden gem coffeeshop di postingan lu kemarin!',
      speakerB: 'Sorry banget, yang ini wajib gua gatekeep biar ga penuh sama anak TikTok.'
    },
    tags: ['rahasia', 'eksklusif', 'tempat', 'twitter'],
    likes: 240,
    trending: false
  },
  {
    id: 'side-eye',
    term: 'Bombastic Side Eye 👀',
    pronunciation: '[bom-bas-tik sayd ay]',
    category: 'medsos',
    level: 'menengah',
    meaning: 'Tatapan melirik ke samping dengan ekspresi curiga, menghakimi, atau tidak percaya atas tingkah aneh seseorang.',
    origin: 'Sound TikTok viral yang menggunakan suara wanita mengeja "Bombastic side eye, criminal offensive side eye".',
    example: {
      speakerA: 'Dia ngaku ga pernah selingkuh, padahal kemarin ketahuan jalan sama cewek lain.',
      speakerB: 'Gua langsung kasih bombastic side eye ke mukanya!'
    },
    tags: ['lirikan', 'tiktok', 'sindiran', 'meme'],
    likes: 295,
    trending: false
  },
  {
    id: 'touch-grass',
    term: 'Touch Grass',
    pronunciation: '[tac gres]',
    category: 'brainrot',
    level: 'menengah',
    meaning: 'Sindiran menyuruh seseorang keluar rumah, berhenti menatap layar gadget, dan kembali ke dunia nyata karena kelakuannya di internet sudah terlalu berlebihan atau terputus dari realitas.',
    origin: 'Slang komunitas gamer/forum internet internasional yang lazim dipakai di Twitter Indo.',
    example: {
      speakerA: 'Dia debat 12 jam nonstop di X cuma buat bela anime fiktif.',
      speakerB: 'Beneran butuh touch grass itu orang, kasihan matanya.'
    },
    tags: ['dunia nyata', 'sindiran', 'internet', 'istirahat'],
    likes: 250,
    trending: false
  },
  {
    id: 'npc',
    term: 'NPC (Non-Playable Character)',
    pronunciation: '[en-pi-si]',
    category: 'brainrot',
    level: 'menengah',
    meaning: 'Julukan untuk orang yang perilakunya seperti figuran game: tidak punya opini pribadi, perilakunya datar dan repetitif, atau bertingkah aneh tanpa ekspresi.',
    origin: 'Istilah game RPG yang bermutasi jadi julukan gaya hidup di TikTok.',
    example: {
      speakerA: 'Temen sekantor lu kenapa kalau diajak ngobrol cuma ngangguk sambil senyum kaku?',
      speakerB: 'Gua curiga dia aslinya NPC yang diprogram buat ngisi meja kosong.'
    },
    tags: ['game', 'figuran', 'tiktok', 'absurd'],
    likes: 275,
    trending: true
  },
  {
    id: 'burnout',
    term: 'Burnout',
    pronunciation: '[ber-nawt]',
    category: 'jaksel',
    level: 'pemula',
    meaning: 'Kelelahan emosional, fisik, dan mental kronis yang diakibatkan oleh beban kerja atau rutinitas harian yang menumpuk tanpa istirahat memadai.',
    origin: 'Istilah kesehatan kerja yang sangat melekat di percakapan kaum pekerja muda SCBD Jakarta.',
    example: {
      speakerA: 'Lembur seminggu penuh bikin otak gua nge-freeze pas ngetik email.',
      speakerB: 'Tanda-tanda burnout akut itu, ambil cuti sebelum ambruk!'
    },
    tags: ['kerja', 'kantor', 'kesehatan mental', 'scbd'],
    likes: 310,
    trending: false
  },
  {
    id: 'overthinking',
    term: 'Overthinking',
    pronunciation: '[o-ver-ting-king]',
    category: 'jaksel',
    level: 'pemula',
    meaning: 'Memikirkan hal-hal kecil secara berlebihan hingga memicu rasa cemas, panik, dan gelisah yang tidak perlu, terutama di larut malam.',
    origin: 'Psikologi populer yang menjadi curhatan paling umum di media sosial.',
    example: {
      speakerA: 'Udah jam 2 malem kok masih update status galau di Close Friend?',
      speakerB: 'Lagi overthinking mikirin masa depan 10 tahun ke depan bro.'
    },
    tags: ['cemas', 'malam', 'galau', 'mental'],
    likes: 375,
    trending: true
  },
  {
    id: 'boundaries',
    term: 'Boundaries / Healthy Boundaries',
    pronunciation: '[bawn-de-ris]',
    category: 'jaksel',
    level: 'menengah',
    meaning: 'Batasan personal yang sehat agar orang lain tidak semena-mena mencampuri urusan pribadi atau mengeksploitasi waktu dan tenaga kita.',
    origin: 'Psikologi relasi antar manusia yang kerap digunakan dalam obrolan ala Jaksel.',
    example: {
      speakerA: 'Bos gua suka chat jam 11 malam nanya file presentasi.',
      speakerB: 'Lu harus tegas pasang boundaries, jangan dibalas sampai jam kerja besok.'
    },
    tags: ['batasan', 'privasi', 'sehat', 'jaksel'],
    likes: 240,
    trending: false
  },
  {
    id: 'valid',
    term: 'Valid / No Debat',
    pronunciation: '[va-lid]',
    category: 'jaksel',
    level: 'pemula',
    meaning: 'Pernyataan bahwa perasaan atau pendapat seseorang itu masuk akal, sah, dapat dimaklumi, dan tidak perlu didebat lagi.',
    origin: 'Istilah validasi emosional dalam pergaulan Gen Z.',
    example: {
      speakerA: 'Capek banget rasanya harus pura-pura ramah seharian.',
      speakerB: 'Perasaan lu sangat valid kok, wajar kalau energi lu habis.'
    },
    tags: ['dukungan', 'empati', 'pendapat', 'jaksel'],
    likes: 280,
    trending: false
  },
  {
    id: 'clout-chasing',
    term: 'Clout Chasing / Pansos',
    pronunciation: '[klawt cey-sing]',
    category: 'medsos',
    level: 'menengah',
    meaning: 'Mencari popularitas murahan dengan cara numpang tenar, ikut nimbrung drama seleb, atau bikin sensasi palsu di media sosial.',
    origin: 'Hip-hop slang barat "Clout" (pengaruh/tenar) disandingkan dengan istilah lokal "Pansos" (panjat sosial).',
    example: {
      speakerA: 'Kenapa dia tiba-tiba posting video ngelabrak selebgram ternama?',
      speakerB: 'Biasa, taktik clout chasing biar followers-nya nambah drastis.'
    },
    tags: ['pansos', 'sensasi', 'followers', 'drama'],
    likes: 205,
    trending: false
  },
  {
    id: 'gaslight',
    term: 'Gaslighting / Gaslight',
    pronunciation: '[ges-layt]',
    category: 'percintaan',
    level: 'menengah',
    meaning: 'Bentuk manipulasi psikologis di mana pelaku membuat korban meragukan ingatan, kewarasan, atau persepsinya sendiri.',
    origin: 'Film klasik "Gaslight" (1944) yang menjadi terminologi hubungan manipulatif terpopuler Gen Z.',
    example: {
      speakerA: 'Dia yang ketahuan selingkuh, tapi malah bentak gua dan bilang gua yang bikin dia stres.',
      speakerB: 'Buset, itu lu lagi di-gaslight parah! Jangan percaya omongannya.'
    },
    tags: ['manipulasi', 'toxic', 'psikologi', 'bahaya'],
    likes: 310,
    trending: true
  },
  {
    id: 'bare-minimum',
    term: 'Bare Minimum',
    pronunciation: '[ber mi-ni-mem]',
    category: 'percintaan',
    level: 'menengah',
    meaning: 'Standar paling dasar yang memang seharusnya dilakukan seseorang (misal: mengabari jika sudah sampai, membalas chat sopan), namun sering disalahartikan sebagai perlakuan istimewa.',
    origin: 'Wacana dating standards di linimasa TikTok & X Indonesia.',
    example: {
      speakerA: 'Pacar gua baik banget, kalau nyebrang jalan tangan gua dipegangin!',
      speakerB: 'Sis, itu mah cuma bare minimum sebagai cowok, jangan terharu dulu.'
    },
    tags: ['standar', 'dating', 'ekspektasi', 'romansa'],
    likes: 290,
    trending: false
  },
  {
    id: 'main-character',
    term: 'Main Character Syndrome',
    pronunciation: '[meyn ke-rek-ter sin-drom]',
    category: 'populer',
    level: 'menengah',
    meaning: 'Sikap orang yang merasa hidupnya adalah film dan dirinya adalah tokoh utama, sedangkan orang lain di sekitarnya hanyalah pemeran pembantu yang wajib mengaguminya.',
    origin: 'Tren video estetik TikTok di mana kreator berjalan lambat dengan musik sinematik.',
    example: {
      speakerA: 'Kenapa dia jalan di lorong kantor pake kacamata hitam sambil natap jendela penuh drama?',
      speakerB: 'Lagi kumat main character syndrome-nya, biarin aja menikmati hidup.'
    },
    tags: ['estetik', 'caper', 'tiktok', 'gaya'],
    likes: 260,
    trending: false
  },
  {
    id: 'ijbol',
    term: 'IJBOL',
    pronunciation: '[ij-bol]',
    category: 'medsos',
    level: 'sepuh',
    meaning: 'Akronim dari "I Just Burst Out Laughing" (gua barusan ngakak meledak sampai guling-guling). Sering dipakai menggantikan LOL, LMAO, atau WKWK di X/Twitter.',
    origin: 'K-Pop Twitter fandom global yang kini diadopsi oleh anak medsos Gen Z Indonesia.',
    example: {
      speakerA: 'Lihat video kucing nyungsep ke tempat sampah ini dehh!',
      speakerB: 'IJBOL sumpah, perut gua keram ketawa sendirian di halte.'
    },
    tags: ['tertawa', 'kpop', 'twitter', 'akronim'],
    likes: 240,
    trending: true
  },
  {
    id: 'dry-text',
    term: 'Dry Text / Dry Texter',
    pronunciation: '[dray teks]',
    category: 'percintaan',
    level: 'menengah',
    meaning: 'Gaya membalas pesan yang sangat singkat, dingin, tanpa emoji, dan tidak berniat memanjangkan percakapan (misal cuma jawab "Y", "Oh", "Gpp").',
    origin: 'Budaya texting di aplikasi kencan & media sosial.',
    example: {
      speakerA: 'Gua ngetik cerita 3 paragraf, dia cuma balas "oke".',
      speakerB: 'Fix dry texter abis, tandanya dia emang ga tertarik sama lu.'
    },
    tags: ['chat', 'dingin', 'cuek', 'pdkt'],
    likes: 275,
    trending: false
  },
  {
    id: 'cut-off',
    term: 'Cut Off',
    pronunciation: '[kat of]',
    category: 'jaksel',
    level: 'pemula',
    meaning: 'Memutuskan kontak hubungan pertemanan atau asmara secara sepihak dan tegas karena orang tersebut dianggap membawa energi negatif atau merugikan.',
    origin: 'Bahasa Jaksel dalam konteks pertemanan dan menjaga kesehatan mental.',
    example: {
      speakerA: 'Lu kok ga pernah nongkrong lagi bareng sirkel lama lu?',
      speakerB: 'Udah gua cut off semua, isinya cuma saling gibah dan nyinyir toxic.'
    },
    tags: ['tegas', 'putus-kontak', 'mental', 'pertemanan'],
    likes: 315,
    trending: false
  },
  {
    id: 'flexing',
    term: 'Flexing',
    pronunciation: '[flek-sing]',
    category: 'populer',
    level: 'pemula',
    meaning: 'Pamer harta, pencapaian, barang mewah, atau gaya hidup hedon di media sosial untuk mendapatkan decak kagum atau validasi orang lain.',
    origin: 'Slang rap Amerika yang diadopsi massal oleh media dan netizen Indonesia.',
    example: {
      speakerA: 'Dia foto saldo m-banking terus di-upload ke story dengan caption "masih bersyukur".',
      speakerB: 'Halah, flexing terselubung itu namanya.'
    },
    tags: ['pamer', 'harta', 'sosmed', 'scbd'],
    likes: 280,
    trending: false
  },
  {
    id: 'rent-free',
    term: 'Rent Free',
    pronunciation: '[rent fri]',
    category: 'medsos',
    level: 'menengah',
    meaning: 'Suatu hal, meme, atau omongan seseorang yang terus terngiang-ngiang dan menempel di kepala tanpa bisa dilupakan (tinggal gratis di pikiran).',
    origin: 'Ungkapan bahasa Inggris "Living rent-free in my head".',
    example: {
      speakerA: 'Joget lagu TikTok itu kenapa muter terus di kepala ya?',
      speakerB: 'Asli tinggal rent free di otak gua juga dari pagi.'
    },
    tags: ['ngiang-ngiang', 'meme', 'pikiran', 'lagu'],
    likes: 230,
    trending: false
  },
  {
    id: 'ate-and-left-no-crumbs',
    term: 'Ate (And Left No Crumbs)',
    pronunciation: '[eyt end left no krams]',
    category: 'populer',
    level: 'menengah',
    meaning: 'Ungkapan pujian bahwa seseorang tampil atau mengeksekusi sesuatu dengan sangat sempurna tanpa celah sedikit pun (melahap habis performa sampai tak tersisa remah-remah).',
    origin: 'AAVE & pop music fan culture di medsos internasional dan lokal.',
    example: {
      speakerA: 'Koreografi dance cover grup mereka pas pentas seni rapi banget!',
      speakerB: 'She ate and left no crumbs! Juara satu pasti ditangan.'
    },
    tags: ['pujian', 'sempurna', 'penampilan', 'hebat'],
    likes: 265,
    trending: true
  },
  {
    id: 'mutualan',
    term: 'Mutualan',
    pronunciation: '[mu-tu-al-an]',
    category: 'medsos',
    level: 'pemula',
    meaning: 'Ajakan untuk saling follow (mengikuti) akun satu sama lain di media sosial (khususnya Twitter/X atau TikTok) agar saling terhubung.',
    origin: 'Dari kata "Mutual friends / Mutual followers" yang di-Indonesia-kan dengan imbuhan -an.',
    example: {
      speakerA: 'Halo kak, sesama pecinta kucing nih, yuk mutualan di X!',
      speakerB: 'Drop akun lu sini, langsung gua folback sekarang.'
    },
    tags: ['follow', 'twitter', 'sosmed', 'koneksi'],
    likes: 250,
    trending: false
  },
  {
    id: 'menye-menye',
    term: 'Menye-menye',
    pronunciation: '[me-nye me-nye]',
    category: 'tongkrongan',
    level: 'pemula',
    meaning: 'Sikap yang cengeng, lemah, bertele-tele, manja berlebihan, atau kurang berjiwa tegas dalam menghadapi masalah.',
    origin: 'Bahasa percakapan gaul santai perkotaan Indonesia.',
    example: {
      speakerA: 'Baru ditolak gebetan sekali aja nangisnya udah tiga hari tiga malam.',
      speakerB: 'Udah jangan menye-menye, bangkit lagi cari yang lain!'
    },
    tags: ['manja', 'cengeng', 'tongkrongan', 'nasehat'],
    likes: 235,
    trending: false
  },
  {
    id: 'mogging',
    term: 'Mogging / Mogged',
    pronunciation: '[mo-ging]',
    category: 'brainrot',
    level: 'sepuh',
    meaning: 'Tampil jauh lebih menarik secara fisik, tinggi badan, atau aura karisma dibanding orang di sebelahnya hingga orang di sebelahnya terlihat kalah telak.',
    origin: 'Subkultur looksmaxxing internet yang viral di TikTok anak muda.',
    example: {
      speakerA: 'Pas foto bareng, dia berdiri di tengah dengan rahang tegas dan postur tegak.',
      speakerB: 'Gila, kita semua auto ke-mogged di fotonya!'
    },
    tags: ['looksmaxxing', 'tampan', 'aura', 'tiktok'],
    likes: 215,
    trending: false
  },
  {
    id: 'fanum-tax',
    term: 'Fanum Tax',
    pronunciation: '[fa-nem teks]',
    category: 'brainrot',
    level: 'sepuh',
    meaning: 'Tindakan mencuri atau mencomot sedikit makanan milik teman secara seenaknya saat sedang kumpul bersama.',
    origin: 'Streamer Fanum yang sering merebut makanan milik Kai Cenat saat live stream di AMP House.',
    example: {
      speakerA: 'Kentang goreng gua baru dateng kok udah berkurang separuh?',
      speakerB: 'Sorry bro, kena fanum tax pas lu ke toilet tadi.'
    },
    tags: ['makanan', 'tongkrongan', 'streamer', 'iseng'],
    likes: 190,
    trending: false
  },
  {
    id: 'trauma-dumping',
    term: 'Trauma Dumping',
    pronunciation: '[traw-ma dam-ping]',
    category: 'jaksel',
    level: 'menengah',
    meaning: 'Mencurahkan segala masalah traumatis pribadi, kepedihan hidup, atau drama keluarga secara mendadak kepada orang lain tanpa meminta izin dan tanpa melihat kesiapan mental lawan bicara.',
    origin: 'Edukasi kesehatan mental kontemporer di kalangan milenial & Gen Z.',
    example: {
      speakerA: 'Baru kenalan 10 menit di coffee shop, dia langsung cerita detail perceraian orang tuanya.',
      speakerB: 'Waduh, kena trauma dumping dadakan, langsung pusing pasti kepalamu.'
    },
    tags: ['curhat', 'mental', 'jaksel', 'batas'],
    likes: 260,
    trending: false
  },
  {
    id: 'convo',
    term: 'Convo / Keep the Convo Going',
    pronunciation: '[kon-vo]',
    category: 'jaksel',
    level: 'pemula',
    meaning: 'Kependekan dari "conversation" (percakapan). Sering dibahas saat PDKT untuk menilai apakah seseorang asyik diajak bertukar obrolan atau tidak.',
    origin: 'Bahasa campur Jaksel & online dating culture (Tinder/Bumble).',
    example: {
      speakerA: 'Kenapa lu ga lanjut jalan sama dia?',
      speakerB: 'Convo-nya ga nyambung sama sekali, kayak interogasi saksi sidang.'
    },
    tags: ['ngobrol', 'pdkt', 'bumble', 'jaksel'],
    likes: 240,
    trending: false
  },
  {
    id: 'template',
    term: 'Template',
    pronunciation: '[tem-pleyt]',
    category: 'medsos',
    level: 'pemula',
    meaning: 'Pola perkataan, gaya gombalan, atau alasan basi yang selalu diulang-ulang persis tanpa keaslian personal.',
    origin: 'Dunia digital desain/coding yang dijadikan satir untuk manusia yang tidak kreatif.',
    example: {
      speakerA: 'Dia bilang: "Kamu terlalu baik buat aku, aku mau fokus karir dulu".',
      speakerB: 'Alasan template dari zaman Majapahit itu mah, jangan dipercaya.'
    },
    tags: ['basi', 'alasan', 'klasik', 'sosmed'],
    likes: 270,
    trending: false
  },
  {
    id: 'mansplaining',
    term: 'Mansplaining',
    pronunciation: '[men-spley-ning]',
    category: 'jaksel',
    level: 'menengah',
    meaning: 'Kondisi di mana seorang pria menjelaskan sesuatu kepada perempuan dengan nada menggurui atau meremehkan, seolah-olah perempuan tersebut tidak paham apa-apa padahal perempuan itu ahlinya.',
    origin: 'Kritik sosiologis gender modern yang diadopsi obrolan intelek Jaksel.',
    example: {
      speakerA: 'Dia ngajarin gua cara ngoding Python padahal gua udah 4 tahun kerja jadi senior engineer.',
      speakerB: 'Puncak mansplaining sih itu, malesin banget dengernya.'
    },
    tags: ['menggurui', 'diskusi', 'kantor', 'jaksel'],
    likes: 225,
    trending: false
  },
  {
    id: 'mixed-signals',
    term: 'Mixed Signals',
    pronunciation: '[miks sig-nels]',
    category: 'percintaan',
    level: 'menengah',
    meaning: 'Sinyal ambigu atau membingungkan dalam hubungan romantis; hari ini sangat manis dan perhatian, besoknya sangat dingin dan menjauh.',
    origin: 'Psikologi percintaan anak muda yang bikin lelah hati.',
    example: {
      speakerA: 'Kadang dia bilang kangen, tapi kalau diajak ketemu selalu seribu alasan.',
      speakerB: 'Capek ngadepin orang yang suka ngasih mixed signals, tinggalin aja.'
    },
    tags: ['ambigu', 'galau', 'dating', 'bingung'],
    likes: 285,
    trending: false
  },
  {
    id: 'salty',
    term: 'Salty',
    pronunciation: '[sol-ti]',
    category: 'populer',
    level: 'menengah',
    meaning: 'Merasa kesal, iri, sewot, atau pahit hati atas keberhasilan atau keberuntungan orang lain.',
    origin: 'Slang bahasa Inggris yang identik dengan rasa asin garam (pahit/dengki).',
    example: {
      speakerA: 'Kenapa akun itu nyinyir pas tim esport kita menang turnamen?',
      speakerB: 'Biasa, haters emang salty kalau liat orang lain berprestasi.'
    },
    tags: ['iri', 'kesal', 'nyinyir', 'komentar'],
    likes: 220,
    trending: false
  },
  {
    id: 'romanized',
    term: 'Romantisasi (Romanticizing)',
    pronunciation: '[ro-man-ti-sayz]',
    category: 'jaksel',
    level: 'menengah',
    meaning: 'Membuat hal-hal yang sebenarnya melelahkan, sulit, atau miris (seperti lembur sampai subuh, macet di jalan, atau patah hati) terlihat indah, estetik, dan bermakna puitis.',
    origin: 'Kritik sosial terhadap tren konten sinematik di TikTok/Instagram Reels.',
    example: {
      speakerA: 'Dia bikin video estetik kehujanan di halte sambil denger lagu indie.',
      speakerB: 'Kebanyakan romantisasi penderitaan, padahal pulangnya meriang masuk angin.'
    },
    tags: ['estetik', 'reels', 'puitis', 'ironis'],
    likes: 265,
    trending: false
  },
  {
    id: 'vibes',
    term: 'Vibes / Good Vibes',
    pronunciation: '[vaybs]',
    category: 'jaksel',
    level: 'pemula',
    meaning: 'Suasana, energi, atau kesan emosional yang terpancar dari suatu tempat, orang, musik, atau situasi.',
    origin: 'Singkatan dari "vibrations", pilar kosakata anak gaul metropolitan.',
    example: {
      speakerA: 'Tempat ngopi di bawah pohon rindang ini tenang banget ya.',
      speakerB: 'Iya, vibes-nya dapet banget buat kerja santai atau baca novel.'
    },
    tags: ['suasana', 'energi', 'tempat', 'jaksel'],
    likes: 350,
    trending: false
  },
  {
    id: 'pov',
    term: 'POV (Point of View)',
    pronunciation: '[pi-o-vi]',
    category: 'medsos',
    level: 'pemula',
    meaning: 'Secara teori sudut pandang orang pertama (kamera seolah-olah mata kita). Sering dipakai sebagai awalan sketsa drama atau video situasi di TikTok/Reels.',
    origin: 'Teknik sinematografi dan penulisan yang jadi format konten paling viral di dunia.',
    example: {
      speakerA: 'POV: Lu lagi pura-pura ngetik sibuk pas bos lewat di depan meja kerja.',
      speakerB: 'Hahaha relate banget sumpah sama video itu!'
    },
    tags: ['tiktok', 'reels', 'sketsa', 'relate'],
    likes: 310,
    trending: false
  },
  {
    id: 'breadcrumbing',
    term: 'Breadcrumbing',
    pronunciation: '[bred-kram-bing]',
    category: 'percintaan',
    level: 'sepuh',
    meaning: 'Taktik manipulatif hanya memberi sedikit harapan palsu (remah-remah roti) sesekali, cukup untuk membuat gebetan tidak pergi, tanpa pernah berniat berkomitmen sungguhan.',
    origin: 'Dongeng Hansel & Gretel yang dijadikan analogi hubungan manipulatif zaman now.',
    example: {
      speakerA: 'Tiap gua mau move on, dia tiba-tiba reply story "lagi apa?". Pas gua bales malah ilang lagi.',
      speakerB: 'Itu breadcrumbing bro, lu cuma dikasih remah-remah biar tetap ada di genggamannya.'
    },
    tags: ['palsu', 'harapan', 'toxic', 'dating'],
    likes: 240,
    trending: false
  },
  {
    id: 'periodt',
    term: 'Periodt / Period 💅',
    pronunciation: '[pi-ri-yed]',
    category: 'populer',
    level: 'menengah',
    meaning: 'Tanda titik mutlak di akhir kalimat yang menegaskan bahwa pernyataan tersebut sudah final, benar 100%, dan tidak ada ruang untuk perdebatan lagi.',
    origin: 'AAVE budaya pop internet global yang viral di kalangan netizen perempuan.',
    example: {
      speakerA: 'Perempuan mandiri yang punya penghasilan sendiri itu paling keren, and that is on periodt!',
      speakerB: 'Fakta mutlak tanpa sanggahan!'
    },
    tags: ['tegas', 'final', 'pemberitahuan', 'slay'],
    likes: 235,
    trending: false
  }
];

export const JAKSEL_DICTIONARY_MAP = [
  // Words to replace in translator
  { regex: /\bsebenarnya\b/gi, replacement: 'jujurly' },
  { regex: /\bsejujurnya\b/gi, replacement: 'jujurly' },
  { regex: /\bjujur saja\b/gi, replacement: 'jujurly' },
  { regex: /\byang mana\b/gi, replacement: 'which is' },
  { regex: /\bhal tersebut\b/gi, replacement: 'which is' },
  { regex: /\bsangat lelah\b/gi, replacement: 'burnout parah' },
  { regex: /\blelah sekali\b/gi, replacement: 'burnout abis' },
  { regex: /\bkelelahan\b/gi, replacement: 'burnout' },
  { regex: /\bkhawatir\b/gi, replacement: 'anxiety' },
  { regex: /\bcemas\b/gi, replacement: 'overthinking' },
  { regex: /\bterlalu banyak berpikir\b/gi, replacement: 'overthinking gila-gilaan' },
  { regex: /\bsuasana\b/gi, replacement: 'vibes' },
  { regex: /\bsuasana hatinya\b/gi, replacement: 'vibes-nya' },
  { regex: /\bliburan\b/gi, replacement: 'healing' },
  { regex: /\bistirahat jalan-jalan\b/gi, replacement: 'healing santai' },
  { regex: /\bsaya\b/gi, replacement: 'gua' },
  { regex: /\baku\b/gi, replacement: 'gw' },
  { regex: /\bkamu\b/gi, replacement: 'lu' },
  { regex: /\banda\b/gi, replacement: 'lu' },
  { regex: /\bteman\b/gi, replacement: 'bestie' },
  { regex: /\bkawan\b/gi, replacement: 'circle gua' },
  { regex: /\bmemilih\b/gi, replacement: 'prefer' },
  { regex: /\blebih suka\b/gi, replacement: 'prefer' },
  { regex: /\bbagaimanapun\b/gi, replacement: 'somehow' },
  { regex: /\bentah kenapa\b/gi, replacement: 'somehow' },
  { regex: /\bsecara harfiah\b/gi, replacement: 'literally' },
  { regex: /\bbenar-benar\b/gi, replacement: 'literally' },
  { regex: /\bsungguh\b/gi, replacement: 'literally' },
  { regex: /\bsangat\b/gi, replacement: 'bgt' },
  { regex: /\bsekali\b/gi, replacement: 'parah' },
  { regex: /\btidak masuk akal\b/gi, replacement: 'make no sense' },
  { regex: /\bmasuk akal\b/gi, replacement: 'makes sense sih' },
  { regex: /\bkeren sekali\b/gi, replacement: 'menyala abangkuh 🔥' },
  { regex: /\bhebat sekali\b/gi, replacement: 'slay abis no counter' },
  { regex: /\bmenghilang tanpa kabar\b/gi, replacement: 'ghosting' },
  { regex: /\bmemutuskan hubungan\b/gi, replacement: 'cut off' },
  { regex: /\bmemutuskan pertemanan\b/gi, replacement: 'cut off pertemanan' },
  { regex: /\bbatasan\b/gi, replacement: 'boundaries' },
  { regex: /\bbatasan pribadi\b/gi, replacement: 'personal boundaries' },
  { regex: /\bmeragukan diri\b/gi, replacement: 'kena gaslight' },
  { regex: /\bmengkhayal\b/gi, replacement: 'delulu' },
  { regex: /\bkhayalan\b/gi, replacement: 'delulu moment' },
  { regex: /\bmemamerkan\b/gi, replacement: 'flexing' },
  { regex: /\bpamer\b/gi, replacement: 'flexing tipis-tipis' },
  { regex: /\bberbicara terus-menerus\b/gi, replacement: 'yapping tiada henti' },
  { regex: /\btertarik secara diam-diam\b/gi, replacement: 'lowkey naksir' },
  { regex: /\bdiam-diam\b/gi, replacement: 'lowkey' },
  { regex: /\bterang-terangan\b/gi, replacement: 'highkey' },
  { regex: /\bmencurigakan\b/gi, replacement: 'sus banget' },
  { regex: /\bmemalukan\b/gi, replacement: 'cringe abis' },
  { regex: /\bnorak\b/gi, replacement: 'cringe' },
  { regex: /\btanpa status\b/gi, replacement: 'situationship' },
  { regex: /\bcadangan\b/gi, replacement: 'backburner' },
  { regex: /\btanda bahaya\b/gi, replacement: 'red flag 🚩' },
  { regex: /\bsifat baik\b/gi, replacement: 'green flag 🟢' },
  { regex: /\bngobrol\b/gi, replacement: 'convo' },
  { regex: /\bpercakapan\b/gi, replacement: 'convo' },
  { regex: /\bmenurut saya\b/gi, replacement: 'in my opinion which is' },
  { regex: /\bpada akhirnya\b/gi, replacement: 'at the end of the day' },
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'Temen lo jalan sama seseorang udah 6 bulan, rajin telponan tiap malam, tapi pas ditanya "kalian pacaran?", jawabannya: "kita jalanin aja dulu tanpa label". Hubungan ini disebut...',
    options: [
      { text: 'Situationship', correct: true, feedback: 'Tepat banget! Status abu-abu tanpa komitmen resmi adalah definisi hakiki Situationship.' },
      { text: 'Green Flag Relationship', correct: false, feedback: 'Salah bro! Yang ini justru bikin overthinking tiap malam.' },
      { text: 'Soft Launching', correct: false, feedback: 'Soft launching itu pamer foto siluet/tangan pacar di IG story.' },
      { text: 'Backburner', correct: false, feedback: 'Bukan, kalau backburner itu orang yang sengaja disimpen jadi cadangan.' },
    ],
    explanation: 'Situationship adalah hubungan lebih dari teman tapi tanpa kepastian komitmen pacaran.'
  },
  {
    id: 2,
    question: 'Kalau ada temen kantor lu yang sukses presentasi di depan direksi dan dapet pujian, reaksi tongkrongan paling otentik adalah meneriakkan...',
    options: [
      { text: 'Menyala Abangkuh! Tetap Ilmu Padi 🔥🌾', correct: true, feedback: 'Top markotop! Kasih paham abangkuh, berkelas!' },
      { text: 'Selamat ya saudara sekalian atas prestasinya', correct: false, feedback: 'Kaku banget buset, lu lagi upacara bendera?' },
      { text: 'Dry texting dulu ga sih?', correct: false, feedback: 'Dry text itu balas chat singkat dingin kayak kulkas.' },
      { text: 'Jangan lupa tantrum ya!', correct: false, feedback: 'Tantrum mah ngamuk-ngamuk anak kecil.' },
    ],
    explanation: '"Menyala Abangkuh" adalah jargon apresiasi paling meledak buat merayakan keberhasilan teman.'
  },
  {
    id: 3,
    question: 'Apa arti sebenarnya kalau cewek di tongkrongan bilang: "Aduh jujurly gua lagi di Cegil Era nih"?',
    options: [
      { text: 'Dia lagi super nekat, bucin obsessif, dan rela ngelakuin hal gila demi cowok pujaannya', correct: true, feedback: 'Akurat! Cegil (Cewek Gila) bangga mengakui kenekatan asmaranya.' },
      { text: 'Dia lagi pengen berantem fisik sama orang', correct: false, feedback: 'Bukan berantem fisik ya, ini soal urusan cinta dan obsesi halu.' },
      { text: 'Dia baru aja lulus kuliah jurusan psikologi', correct: false, feedback: 'Jauh banget hubungannya wkwk.' },
      { text: 'Dia mau cut-off semua orang di hidupnya', correct: false, feedback: 'Itu namanya lagi fase detoks sosial, bukan cegil.' },
    ],
    explanation: 'Cegil (Cewek Gila) merujuk pada perempuan yang ekspresif, bucin akut, dan nekat demi sang pujaan hati.'
  },
  {
    id: 4,
    question: 'Pernah denger kalimat: "Dia tuh karismatik banget, ga perlu banyak omong tapi cewek-cewek langsung naksir". Sifat ini dalam bahasa Gen Z dinamakan...',
    options: [
      { text: 'Unspoken Rizz', correct: true, feedback: '100! Karisma alami tanpa banyak cakap itu puncak unspoken rizz.' },
      { text: 'Yapper sejati', correct: false, feedback: 'Yapper justru orang yang ngoceh ga berhenti-berhenti.' },
      { text: 'Pick Me Boy', correct: false, feedback: 'Pick me boy itu caper sok beda biar dikasihani cewek.' },
      { text: 'Bombastic Side Eye', correct: false, feedback: 'Ini ekspresi lirikan curiga/menghakimi.' },
    ],
    explanation: 'Rizz berasal dari kata "charisma", dan Unspoken Rizz adalah daya tarik pesona tanpa harus banyak bicara.'
  },
  {
    id: 5,
    question: 'Lu mau makan di tempat tersembunyi yang enak banget, tapi lu gamau orang TikTok tau supaya tempatnya ga rame dan ga antre. Tindakan ini disebut...',
    options: [
      { text: 'Gatekeeping / Gatekeep', correct: true, feedback: 'Tepat! Menjaga info rahasia biar tetap eksklusif disebut gatekeep.' },
      { text: 'Love Bombing', correct: false, feedback: 'Love bombing itu menghujani perhatian palsu di awal PDKT.' },
      { text: 'Touch Grass', correct: false, feedback: 'Touch grass itu menyuruh orang keluar rumah dan nikmati dunia nyata.' },
      { text: 'Canon Event', correct: false, feedback: 'Canon event itu takdir kepahitan hidup yang wajib dialami.' },
    ],
    explanation: 'Gatekeep adalah tindakan sengaja menyembunyikan info hidden gem agar tidak viral.'
  },
  {
    id: 6,
    question: 'Pasangan lu ketahuan chat mesra sama mantannya, tapi pas lu konfrontasi, dia malah marah balik dan bilang: "Kamu yang bikin aku kesepian sampai chat mantan, kamu jahat!". Lu lagi kena...',
    options: [
      { text: 'Gaslighting brutal', correct: true, feedback: 'Benar sekali! Memutarbalikkan fakta hingga korban merasa bersalah adalah gaslighting.' },
      { text: 'Green Flag moment', correct: false, feedback: 'Ini red flag merah membara, lari sekencang mungkin!' },
      { text: 'Mewing streak', correct: false, feedback: 'Mewing mah latihan rahang wkwk.' },
      { text: 'Bare Minimum', correct: false, feedback: 'Bukan, ini toxic manipulation.' },
    ],
    explanation: 'Gaslighting adalah manipulasi psikologis agar korban meragukan realitas dan merasa dirinya yang salah.'
  },
  {
    id: 7,
    question: 'Orang tua atau bos lu nanya: "Kemarin kamu bilang mau Healing ke Bandung, maksudnya kamu sakit apa?". Cara terbaik jelasin maksud Gen Z adalah...',
    options: [
      { text: 'Bukan sakit fisik pak/bu, maksudnya mau liburan dan refreshing buat ngilangin stres kerjaan', correct: true, feedback: 'Mantap! Di kamus Gen Z, healing itu sama dengan liburan/refreshing santai.' },
      { text: 'Saya mau operasi usus buntu di Bandung', correct: false, feedback: 'Malah panik satu kantor nanti!' },
      { text: 'Saya mau adu tubir sama warga lokal', correct: false, feedback: 'Malah disuruh ke kantor polisi ntar.' },
      { text: 'Saya mau push rank Mobile Legends sampai mythical glory', correct: false, feedback: 'Bisa dipotong gaji langsung.' },
    ],
    explanation: 'Dalam ragam gaul Indonesia modern, kata "Healing" sudah bergeser makna menjadi liburan penyegar pikiran.'
  }
];

export const FUN_FACTS = [
  'Tahukah kamu? Kata "Which Is" dan "Literally" pertama kali meledak sebagai stereotip anak Jaksel sekitar tahun 2017-2018 di Twitter!',
  'Istilah "Menyala Abangkuh 🔥" awalnya sering dipakai oleh pemain futsal dan sepak bola tarkam di kolom komentar Instagram.',
  'Kata "Rizz" dinobatkan sebagai Oxford Word of the Year 2023 karena popularitasnya yang luar biasa di kalangan Gen Z dunia!',
  'Akronim "Cegil" dan "Cogil" menjadi sangat populer di Indonesia seiring tren sound lagu-lagu galau di TikTok pada pertengahan 2023.',
  'Frasa "Skena" awalnya merupakan singkatan dari "Sua, Cengkerama, Kelana", tapi kini sering dihubungkan dengan outfit Docmart dan kaos band vintage!'
];
