import React, { useState } from 'react';
import { X, Sparkles, Dices, Volume2, Share2, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function GachaModal({ isOpen, onClose, slangList, onShowToast }) {
  const [currentSlang, setCurrentSlang] = useState(() => {
    return slangList[Math.floor(Math.random() * slangList.length)];
  });
  const [isSpinning, setIsSpinning] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const handleRollAgain = () => {
    setIsSpinning(true);
    let count = 0;
    const interval = setInterval(() => {
      const randomItem = slangList[Math.floor(Math.random() * slangList.length)];
      setCurrentSlang(randomItem);
      count++;
      if (count > 8) {
        clearInterval(interval);
        setIsSpinning(false);
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      }
    }, 80);
  };

  const handlePlayAudio = () => {
    if ('speechSynthesis' in window && currentSlang) {
      const cleanWord = currentSlang.term.replace(/[^\w\s]/gi, '');
      const utterance = new SpeechSynthesisUtterance(cleanWord);
      utterance.lang = 'id-ID';
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCopy = () => {
    if (!currentSlang) return;
    const textToCopy = `🎲 Hasil Gacha Slang Gen Z:\n\n*${currentSlang.term}*\nArti: ${currentSlang.meaning}\n\nKamus Gen Z Indonesia 🔥`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      if (onShowToast) onShowToast('Hasil gacha disalin! 🎲');
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-500/30 rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl relative text-center overflow-hidden transition-colors">
        
        {/* Glow */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/10 dark:bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-300 dark:border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-bold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
          <span>Gacha Kata Gaul Hari Ini</span>
        </div>

        {/* Slang Card Inside */}
        <div className={`p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 mb-6 transition-all ${isSpinning ? 'scale-95 opacity-70 animate-pulse' : 'scale-100'}`}>
          <div className="flex items-center justify-center gap-2 mb-1">
            <h3 className="font-heading font-black text-2xl text-slate-900 dark:text-slate-100">
              {currentSlang?.term}
            </h3>
            <button
              onClick={handlePlayAudio}
              className="p-1 rounded-lg text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              title="Dengarkan pengucapan"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs font-mono text-purple-600 dark:text-purple-400 mb-3">
            {currentSlang?.pronunciation}
          </p>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            {currentSlang?.meaning}
          </p>

          {currentSlang?.example && (
            <div className="text-xs bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800/80 text-left space-y-1 transition-colors">
              <p className="text-slate-400 font-medium">Contoh:</p>
              <p className="text-slate-700 dark:text-slate-300 italic">"{currentSlang.example.speakerA}"</p>
              <p className="text-pink-600 dark:text-pink-300 italic font-semibold">"{currentSlang.example.speakerB}"</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handleRollAgain}
            disabled={isSpinning}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20"
          >
            <Dices className={`w-4 h-4 ${isSpinning ? 'animate-spin' : ''}`} />
            <span>{isSpinning ? 'Mengacak...' : 'Gacha Lagi! 🎲'}</span>
          </button>

          <button
            onClick={handleCopy}
            className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 transition-colors flex items-center gap-1.5 border border-slate-200 dark:border-transparent"
          >
            {isCopied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            <span>{isCopied ? 'Tersalin' : 'Bagikan'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
