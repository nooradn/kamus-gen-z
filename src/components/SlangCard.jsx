import React, { useState } from 'react';
import { Volume2, Bookmark, Heart, Share2, Check, MessageCircle, Info } from 'lucide-react';

const LEVEL_CONFIG = {
  pemula: { label: 'Pemula', color: 'bg-emerald-500/10 text-emerald-700 border-emerald-300 dark:bg-emerald-500/15 dark:text-emerald-400 dark:border-emerald-500/30' },
  menengah: { label: 'Menengah', color: 'bg-amber-500/10 text-amber-700 border-amber-300 dark:bg-amber-500/15 dark:text-amber-400 dark:border-amber-500/30' },
  sepuh: { label: 'Sepuh', color: 'bg-purple-500/10 text-purple-700 border-purple-300 dark:bg-purple-500/15 dark:text-purple-400 dark:border-purple-500/30' },
};

const CATEGORY_NAMES = {
  populer: { label: 'Hype', icon: '🔥' },
  jaksel: { label: 'Jaksel', icon: '🥑' },
  percintaan: { label: 'Asmara', icon: '💘' },
  medsos: { label: 'Medsos', icon: '📱' },
  tongkrongan: { label: 'Tongkrongan', icon: '🤙' },
  brainrot: { label: 'Brainrot', icon: '👾' },
};

export default function SlangCard({ slang, isBookmarked, isLiked, onToggleBookmark, onToggleLike, onTagClick, onShowToast }) {
  const [isCopied, setIsCopied] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const levelInfo = LEVEL_CONFIG[slang.level] || LEVEL_CONFIG.pemula;
  const categoryInfo = CATEGORY_NAMES[slang.category] || { label: slang.category, icon: '✨' };

  const handleLike = () => {
    if (onToggleLike) {
      onToggleLike(slang.id);
    }
  };

  const handleCopy = () => {
    const textToCopy = `📖 *${slang.term}* ${slang.pronunciation}\n\n💡 *Arti:* ${slang.meaning}\n\n💬 *Contoh Obrolan:*\nA: "${slang.example?.speakerA}"\nB: "${slang.example?.speakerB}"\n\n📌 Kamus Gen Z Indonesia - kamusgenz.id`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      if (onShowToast) onShowToast(`Berhasil disalin! Siap dipamerkan ke tongkrongan ✨`);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const handlePlayAudio = () => {
    if ('speechSynthesis' in window) {
      setIsPlayingAudio(true);
      const cleanWord = slang.term.replace(/[^\w\s]/gi, '');
      const utterance = new SpeechSynthesisUtterance(cleanWord);
      utterance.lang = 'id-ID';
      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    } else {
      if (onShowToast) onShowToast('Browser kamu tidak mendukung audio speech.');
    }
  };

  return (
    <article className="group relative rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/90 hover:border-pink-400 dark:hover:border-pink-500/40 p-5 sm:p-6 transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-pink-500/10 dark:hover:shadow-pink-500/5 hover:-translate-y-1 flex flex-col justify-between">
      
      {/* Decorative gradient blur on hover */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>

      <div>
        {/* Top Badges & Actions */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="flex items-center flex-wrap gap-1.5">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 transition-colors">
              <span>{categoryInfo.icon}</span>
              <span>{categoryInfo.label}</span>
            </span>

            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${levelInfo.color}`}>
              {levelInfo.label}
            </span>

            {slang.trending && (
              <span className="inline-flex items-center gap-0.5 text-[11px] font-black px-2 py-0.5 rounded-full bg-gradient-to-r from-orange-500/15 to-red-500/15 dark:from-orange-500/20 dark:to-red-500/20 text-orange-600 dark:text-orange-400 border border-orange-400/40 dark:border-orange-500/40 animate-pulse">
                🔥 HYPE
              </span>
            )}

            {slang.isCustom && (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300 border border-cyan-400/40 dark:border-cyan-500/40">
                👤 Komunitas
              </span>
            )}
          </div>

          {/* Quick Bookmark Toggle */}
          <button
            onClick={() => onToggleBookmark(slang.id)}
            className={`p-2 rounded-xl transition-all ${
              isBookmarked
                ? 'bg-pink-500/15 text-pink-600 border border-pink-400/40 dark:bg-pink-500/20 dark:text-pink-400 dark:border-pink-500/40'
                : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
            title={isBookmarked ? 'Hapus dari favorit' : 'Simpan kata ini'}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Term and Pronunciation */}
        <div className="mb-3">
          <div className="flex items-baseline gap-2">
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-slate-100 group-hover:text-pink-600 dark:group-hover:text-pink-300 transition-colors">
              {slang.term}
            </h3>
            <button
              onClick={handlePlayAudio}
              disabled={isPlayingAudio}
              className={`p-1 rounded-lg text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors ${isPlayingAudio ? 'animate-bounce text-pink-500' : ''}`}
              title="Dengarkan pengucapan kata"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs font-mono text-purple-600 dark:text-purple-400/90 tracking-wide mt-0.5">
            {slang.pronunciation}
          </p>
        </div>

        {/* Meaning */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-4">
          {slang.meaning}
        </p>

        {/* Context / Origin */}
        {slang.origin && (
          <div className="mb-4 text-xs text-slate-600 dark:text-slate-400 flex items-start gap-1.5 bg-slate-50 dark:bg-slate-950/40 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800/50 transition-colors">
            <Info className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
            <span><strong className="text-slate-800 dark:text-slate-300 font-semibold">Asal-usul:</strong> {slang.origin}</span>
          </div>
        )}

        {/* Example Dialogue */}
        {slang.example && (
          <div className="bg-slate-50 dark:bg-slate-950/80 rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 dark:border-slate-800/80 space-y-2 mb-4 transition-colors">
            <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
              <MessageCircle className="w-3 h-3 text-pink-500" />
              <span>Contoh di Kehidupan Nyata:</span>
            </div>

            <div className="flex gap-2.5 items-start">
              <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 text-[10px] font-bold flex items-center justify-center text-slate-700 dark:text-slate-400 shrink-0 mt-0.5">
                A
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-snug">
                "{slang.example.speakerA}"
              </p>
            </div>

            <div className="flex gap-2.5 items-start">
              <span className="w-5 h-5 rounded-full bg-pink-100 dark:bg-pink-900/60 text-[10px] font-bold flex items-center justify-center text-pink-700 dark:text-pink-300 shrink-0 mt-0.5 border border-pink-200 dark:border-pink-700/50">
                B
              </span>
              <p className="text-xs text-pink-700 dark:text-pink-200 font-medium leading-snug">
                "{slang.example.speakerB}"
              </p>
            </div>
          </div>
        )}

        {/* Tags */}
        {slang.tags && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {slang.tags.map((tag) => (
              <button
                key={tag}
                onClick={() => onTagClick && onTagClick(tag)}
                className="text-[11px] font-medium text-slate-600 hover:text-purple-700 bg-slate-100 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-cyan-300 dark:bg-slate-800/40 dark:hover:bg-slate-800 px-2 py-0.5 rounded-md transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Footer Actions: Likes and Copy */}
      <div className="pt-3 border-t border-slate-200/90 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 transition-colors">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all active:scale-95 ${
            isLiked
              ? 'text-pink-600 dark:text-pink-400 bg-pink-500/10 font-bold'
              : 'hover:text-pink-600 dark:hover:text-pink-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
          }`}
          title={isLiked ? 'Batal suka' : 'Suka kata ini'}
        >
          <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current text-pink-500' : ''}`} />
          <span>{slang.likes || 0}</span>
        </button>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 dark:bg-slate-800/60 dark:hover:bg-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors"
          title="Salin penjelasan kata"
        >
          {isCopied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Tersalin!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5" />
              <span>Bagikan</span>
            </>
          )}
        </button>
      </div>

    </article>
  );
}
