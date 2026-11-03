import React, { useState } from 'react';
import { ArrowLeftRight, Sparkles, Copy, Check, RotateCcw, Flame, Wand2 } from 'lucide-react';
import { JAKSEL_DICTIONARY_MAP } from '../data/slangData';

const PRESET_EXAMPLES = [
  {
    title: '💼 Lelah Kerja Kantor',
    text: 'Saya sangat lelah karena banyak pekerjaan di kantor, jujur saja suasana kantor membuat saya khawatir dan ingin liburan.'
  },
  {
    title: '💔 PDKT Gantung',
    text: 'Teman saya tiba-tiba menghilang tanpa kabar setelah kencan pertama, tanpa status dan membuat saya terlalu banyak berpikir.'
  },
  {
    title: '🔥 Pamer Pencapaian',
    text: 'Proyek baru saya akhirnya selesai dengan hebat sekali, kawan saya bilang ini keren sekali dan tidak ada tandingannya.'
  },
  {
    title: '🧘 Jaga Ketenangan',
    text: 'Sebenarnya kamu harus membuat batasan pribadi agar tidak terus menerus meragukan diri sendiri.'
  }
];

export default function JakselTranslator({ onShowToast }) {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [mode, setMode] = useState('formal-to-jaksel'); // 'formal-to-jaksel' | 'jaksel-to-formal'
  const [intensity, setIntensity] = useState('medium'); // 'chill' | 'medium' | 'overkill'
  const [isCopied, setIsCopied] = useState(false);

  // Translation engine
  const handleTranslate = () => {
    if (!inputText.trim()) {
      setOutputText('');
      return;
    }

    if (mode === 'formal-to-jaksel') {
      let result = inputText;

      // Apply mapping
      JAKSEL_DICTIONARY_MAP.forEach(({ regex, replacement }) => {
        result = result.replace(regex, replacement);
      });

      // Intensity modifications
      if (intensity === 'chill') {
        // Light touch: just basic replacements
      } else if (intensity === 'medium') {
        if (!result.includes('which is') && Math.random() > 0.4) {
          result = result.replace(/,\s*/, ', which is ');
        }
      } else if (intensity === 'overkill') {
        // Overkill Gen Z mode
        result = `Jujurly ya, ${result.toLowerCase()}`;
        result = result.replace(/\b(bagus|keren|hebat)\b/gi, 'no counter menyala abangkuh 🔥');
        result = result.replace(/\b(sedih|kecewa)\b/gi, 'kena mental brutal');
        result = `${result} — and that's on periodt! Slay abis no debat 💅`;
      }

      setOutputText(result);
    } else {
      // Reverse mode: Jaksel to Formal Indonesian
      let result = inputText;
      const reverseMap = [
        { regex: /\bjujurly\b/gi, replacement: 'sejujurnya' },
        { regex: /\bwhich is\b/gi, replacement: 'yang mana' },
        { regex: /\bburnout parah\b/gi, replacement: 'sangat kelelahan' },
        { regex: /\bburnout\b/gi, replacement: 'kelelahan kerja' },
        { regex: /\bvibes-nya\b/gi, replacement: 'suasananya' },
        { regex: /\bvibes\b/gi, replacement: 'suasana' },
        { regex: /\bhealing\b/gi, replacement: 'berlibur menenangkan pikiran' },
        { regex: /\bghosting\b/gi, replacement: 'menghilang tanpa kabar' },
        { regex: /\bcut off\b/gi, replacement: 'memutus tali silaturahmi' },
        { regex: /\bdelulu\b/gi, replacement: 'berkhayal' },
        { regex: /\bflexing\b/gi, replacement: 'pamer' },
        { regex: /\bno counter\b/gi, replacement: 'sangat luar biasa tak terkalahkan' },
        { regex: /\bmenyala abangkuh\b/gi, replacement: 'sangat mengagumkan' },
        { regex: /\bred flag\b/gi, replacement: 'berkarakter buruk' },
        { regex: /\bgreen flag\b/gi, replacement: 'berkarakter baik' },
        { regex: /\boverthinking\b/gi, replacement: 'terlalu banyak cemas' },
        { regex: /\bgua\b/gi, replacement: 'saya' },
        { regex: /\bgw\b/gi, replacement: 'saya' },
        { regex: /\blu\b/gi, replacement: 'kamu' },
        { regex: /\bbestie\b/gi, replacement: 'sahabat' },
        { regex: /\bspill\b/gi, replacement: 'menceritakan secara terbuka' },
      ];

      reverseMap.forEach(({ regex, replacement }) => {
        result = result.replace(regex, replacement);
      });

      setOutputText(result);
    }
  };

  const handleCopy = () => {
    if (!outputText) return;
    navigator.clipboard.writeText(outputText).then(() => {
      setIsCopied(true);
      if (onShowToast) onShowToast('Hasil terjemahan berhasil disalin! 📋');
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const handleReset = () => {
    setInputText('');
    setOutputText('');
  };

  const handlePresetClick = (text) => {
    setInputText(text);
    setTimeout(() => {
      let result = text;
      JAKSEL_DICTIONARY_MAP.forEach(({ regex, replacement }) => {
        result = result.replace(regex, replacement);
      });
      setOutputText(result);
    }, 50);
  };

  const toggleMode = () => {
    setMode(prev => prev === 'formal-to-jaksel' ? 'jaksel-to-formal' : 'formal-to-jaksel');
    setInputText(outputText);
    setOutputText(inputText);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-10">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
          <span>Jaksel-ifier AI Translator</span>
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-slate-100 mb-3">
          Penerjemah Bahasa Gaul & Jaksel
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Ubah kalimat bahasa Indonesia baku jadi obrolan gaul anak Jakarta Selatan & Gen Z dalam sekejap, atau sebaliknya!
        </p>
      </div>

      {/* Preset Pills */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
          <Flame className="w-3.5 h-3.5 text-orange-500 dark:text-orange-400" />
          <span>Coba Kalimat Contoh (Klik langsung):</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {PRESET_EXAMPLES.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => handlePresetClick(preset.text)}
              className="text-xs font-medium bg-white hover:bg-slate-100 dark:bg-slate-900/90 dark:hover:bg-slate-800 text-slate-700 hover:text-pink-600 dark:text-slate-300 dark:hover:text-pink-300 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-xl transition-all active:scale-95 text-left shadow-xs"
            >
              {preset.title}
            </button>
          ))}
        </div>
      </div>

      {/* Control Bar: Mode and Intensity */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 mb-6 shadow-xs transition-colors">
        
        {/* Mode Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
            {mode === 'formal-to-jaksel' ? 'Baku / Normal' : 'Jaksel / Gen Z'}
          </span>
          
          <button
            onClick={toggleMode}
            className="p-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:brightness-110 active:scale-95 transition-all shadow-md shadow-pink-500/20"
            title="Tukar arah terjemahan"
          >
            <ArrowLeftRight className="w-4 h-4" />
          </button>
          
          <span className="text-xs font-bold text-pink-600 dark:text-pink-400">
            {mode === 'formal-to-jaksel' ? 'Jaksel & Gen Z 🥑' : 'Bahasa Baku (Sopan) 📖'}
          </span>
        </div>

        {/* Intensity Selector (for formal-to-jaksel) */}
        {mode === 'formal-to-jaksel' && (
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-slate-500 dark:text-slate-400 font-medium">Level Slang:</span>
            <div className="inline-flex bg-slate-100 dark:bg-slate-950 p-1 rounded-xl border border-slate-200 dark:border-slate-800 transition-colors">
              <button
                onClick={() => setIntensity('chill')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  intensity === 'chill' ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                Santai
              </button>
              <button
                onClick={() => setIntensity('medium')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  intensity === 'medium' ? 'bg-pink-500/20 text-pink-700 dark:text-pink-300 font-bold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                Jakselian
              </button>
              <button
                onClick={() => setIntensity('overkill')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  intensity === 'overkill' ? 'bg-purple-500/20 text-purple-700 dark:text-purple-300 font-bold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                Overkill 🔥
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Split Translation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        
        {/* Input Card */}
        <div className="flex flex-col rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 focus-within:border-pink-500/80 transition-colors shadow-xs">
          <div className="flex items-center justify-between mb-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-bold text-slate-800 dark:text-slate-300">
              {mode === 'formal-to-jaksel' ? 'Teks Bahasa Indonesia Baku' : 'Teks Bahasa Jaksel / Gen Z'}
            </span>
            <span>{inputText.length} karakter</span>
          </div>

          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={
              mode === 'formal-to-jaksel'
                ? 'Ketik kalimat baku di sini... (contoh: "Saya merasa lelah dan khawatir karena pekerjaan kantor...")'
                : 'Ketik kalimat Jaksel di sini... (contoh: "Jujurly gw lagi burnout parah gegara kerjaan which is bikin anxiety...")'
            }
            rows={6}
            className="w-full bg-transparent text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none resize-none text-sm sm:text-base leading-relaxed"
          />

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between mt-auto">
            <button
              onClick={handleReset}
              className="text-xs text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Bersihkan</span>
            </button>

            <button
              onClick={handleTranslate}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <Wand2 className="w-4 h-4" />
              <span>Terjemahkan</span>
            </button>
          </div>
        </div>

        {/* Output Card */}
        <div className="flex flex-col rounded-3xl bg-white dark:bg-slate-900/90 border border-purple-200 dark:border-purple-500/30 p-4 sm:p-5 relative overflow-hidden shadow-xs">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-bold text-pink-600 dark:text-pink-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{mode === 'formal-to-jaksel' ? 'Hasil Bahasa Jaksel & Gen Z' : 'Hasil Bahasa Indonesia Baku'}</span>
            </span>

            {outputText && (
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 dark:text-slate-300 dark:hover:text-white dark:bg-slate-800/80 dark:hover:bg-slate-800 px-2.5 py-1 rounded-lg transition-colors"
                title="Salin hasil"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Salin</span>
                  </>
                )}
              </button>
            )}
          </div>

          <div className="min-h-[140px] text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-200 font-medium whitespace-pre-wrap">
            {outputText ? (
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-200 dark:via-purple-200 dark:to-cyan-200 bg-clip-text text-transparent font-medium">
                {outputText}
              </span>
            ) : (
              <span className="text-slate-400 italic">
                Hasil terjemahan gaul akan otomatis muncul di sini setelah kamu klik 'Terjemahkan' atau pilih contoh di atas...
              </span>
            )}
          </div>

          {outputText && (
            <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
              <span>Status: Siap dipamerkan di Twitter/X & grup WhatsApp! 🔥</span>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
