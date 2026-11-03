import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { HelpCircle, CheckCircle2, XCircle, Trophy, RotateCcw, Share2, Sparkles, ArrowRight } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/slangData';

const PERSONAS = [
  {
    minScore: 90,
    title: '👑 Maharaja FYP & Sepuh Gen Z',
    badge: 'Sepuh Tertinggi',
    color: 'from-pink-500 to-purple-600',
    desc: 'Gila sih, lu khatam semua slang anak Jaksel, Twitter, TikTok sampai istilah brainrot! Tongkrongan manapun lu masuk pasti auto nyambung no counter!',
  },
  {
    minScore: 70,
    title: '🕶️ Anak Jaksel Tulen & Gaul Abis',
    badge: 'Jakselian Pro',
    color: 'from-purple-500 to-cyan-500',
    desc: 'Lu fasih banget pake bahasa gaul, boundaries lu aman, dan ga gampang kena delulu atau red flag. Tinggal dikit lagi jadi sepuh!',
  },
  {
    minScore: 40,
    title: '📱 Gen Z Kasual / Millennial Gaul',
    badge: 'Penikmat Santai',
    color: 'from-amber-500 to-orange-500',
    desc: 'Lu paham istilah-istilah yang sering viral di FYP, tapi kadang masih mikir dua kali kalau diajak ngomong bahasa Jaksel tingkat dewa.',
  },
  {
    minScore: 0,
    title: '🦖 Generasi Pra-Sejarah / Boomer Nyasar',
    badge: 'Butuh Belajar',
    color: 'from-slate-600 to-slate-800',
    desc: 'Waduh, lu kayaknya habis bertapa di gua ya? Wajib banget rajin baca Kamus Gen Z ini biar ga melongo pas diajak ngobrol adik tingkat!',
  },
];

export default function GenZQuiz({ onShowToast }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const question = QUIZ_QUESTIONS[currentIdx];
  const totalQuestions = QUIZ_QUESTIONS.length;

  const handleSelectOption = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = question.options[index].correct;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setIsAnswered(false);
    setQuizFinished(false);
  };

  const scorePercentage = Math.round((score / totalQuestions) * 100);
  const persona = PERSONAS.find(p => scorePercentage >= p.minScore) || PERSONAS[PERSONAS.length - 1];

  const handleShareScore = () => {
    const text = `🔥 Gua dapet skor ${scorePercentage}% (${score}/${totalQuestions}) di Kuis Seberapa Gen Z Kamu!\nGelar gua: "${persona.title}".\n\nCoba uji level kegaulan lu di Kamus Gen Z Indonesia!`;
    navigator.clipboard.writeText(text).then(() => {
      if (onShowToast) onShowToast('Hasil kuis berhasil disalin! Pamerkan ke status WhatsApp / X 🔥');
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-10">
      
      {!quizFinished ? (
        <div className="rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors">
          
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Progress Header */}
          <div className="flex items-center justify-between mb-4 text-xs font-bold text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5 text-pink-600 dark:text-pink-400">
              <HelpCircle className="w-4 h-4" />
              <span>Pertanyaan {currentIdx + 1} dari {totalQuestions}</span>
            </span>
            <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              Skor Sementara: {score}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-8">
            <div
              className="h-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 rounded-full"
              style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
            ></div>
          </div>

          {/* Question Text */}
          <h3 className="font-heading font-extrabold text-lg sm:text-2xl text-slate-900 dark:text-slate-100 leading-snug mb-6">
            {question.question}
          </h3>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {question.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              let btnStyle = 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/70 dark:bg-slate-950/60 text-slate-800 dark:text-slate-300 shadow-xs';

              if (isAnswered) {
                if (option.correct) {
                  btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-500/15 text-emerald-800 dark:text-emerald-200';
                } else if (isSelected && !option.correct) {
                  btnStyle = 'border-red-500 bg-red-50 dark:bg-red-500/15 text-red-800 dark:text-red-200';
                } else {
                  btnStyle = 'border-slate-200/50 dark:border-slate-800/40 bg-slate-50/30 dark:bg-slate-950/30 text-slate-400 opacity-60';
                }
              } else if (isSelected) {
                btnStyle = 'border-pink-500 bg-pink-50 dark:bg-pink-500/20 text-pink-900 dark:text-white';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-2xl border text-left font-medium text-sm sm:text-base transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-slate-200 dark:bg-slate-800 text-xs font-bold flex items-center justify-center text-slate-700 dark:text-slate-300 shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option.text}</span>
                  </div>

                  {isAnswered && option.correct && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  )}
                  {isAnswered && isSelected && !option.correct && (
                    <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {isAnswered && (
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 mb-6 animate-fadeIn transition-colors">
              <p className="text-xs font-semibold text-pink-600 dark:text-pink-400 mb-1 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Penjelasan Bahasa Gaul:</span>
              </p>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {question.options[selectedOption]?.feedback || question.explanation}
              </p>
            </div>
          )}

          {/* Action Button */}
          {isAnswered && (
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-2xl font-bold text-sm bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/25 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>{currentIdx < totalQuestions - 1 ? 'Lanjut Soal Berikutnya' : 'Lihat Hasil Akhir'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      ) : (
        /* Quiz Result View */
        <div className="rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xl dark:shadow-2xl text-center relative overflow-hidden transition-colors">
          
          <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 p-1 flex items-center justify-center shadow-xl shadow-pink-500/20">
            <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[22px] flex items-center justify-center transition-colors">
              <Trophy className="w-10 h-10 text-amber-500 animate-pulse" />
            </div>
          </div>

          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-pink-500/15 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300 border border-pink-500/30 mb-3 inline-block">
            Hasil Tes Bahasa Gaul
          </span>

          <h3 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 dark:text-slate-100 mb-2">
            {scorePercentage}%
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
            Kamu menjawab benar <strong>{score}</strong> dari <strong>{totalQuestions}</strong> pertanyaan.
          </p>

          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 max-w-xl mx-auto mb-8 transition-colors">
            <span className="text-xs font-bold text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-lg mb-2 inline-block">
              {persona.badge}
            </span>
            <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-400 dark:via-purple-300 dark:to-cyan-400 mb-2">
              {persona.title}
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {persona.desc}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleRestart}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 transition-colors flex items-center gap-2 border border-slate-200 dark:border-transparent"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulangi Kuis</span>
            </button>

            <button
              onClick={handleShareScore}
              className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/25 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              <span>Bagikan Hasil Kuis</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
