import React, { useState } from 'react';
import { X, Sparkles, PlusCircle } from 'lucide-react';

export default function AddWordModal({ isOpen, onClose, onAddSlang, onShowToast }) {
  const [term, setTerm] = useState('');
  const [pronunciation, setPronunciation] = useState('');
  const [category, setCategory] = useState('populer');
  const [level, setLevel] = useState('pemula');
  const [meaning, setMeaning] = useState('');
  const [origin, setOrigin] = useState('');
  const [speakerA, setSpeakerA] = useState('');
  const [speakerB, setSpeakerB] = useState('');
  const [tagsInput, setTagsInput] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim() || !meaning.trim()) {
      alert('Harap isi nama kata dan artinya!');
      return;
    }

    const newSlang = {
      id: `custom-${Date.now()}`,
      term: term.trim(),
      pronunciation: pronunciation.trim() ? `[${pronunciation.replace(/[\[\]]/g, '')}]` : `[${term.toLowerCase()}]`,
      category,
      level,
      meaning: meaning.trim(),
      origin: origin.trim() || 'Usulan komunitas Gen Z Indonesia',
      example: {
        speakerA: speakerA.trim() || 'Bro, tau istilah baru ini ga?',
        speakerB: speakerB.trim() || `Iya dong, ${term.trim()} lagi sering dipake!`
      },
      tags: tagsInput ? tagsInput.split(',').map(t => t.trim().toLowerCase()).filter(Boolean) : ['komunitas'],
      likes: 1,
      isCustom: true,
      trending: false
    };

    onAddSlang(newSlang);
    if (onShowToast) onShowToast(`Kata "${term}" berhasil ditambahkan ke kamus! 🎉`);
    onClose();

    // Reset form
    setTerm('');
    setPronunciation('');
    setCategory('populer');
    setLevel('pemula');
    setMeaning('');
    setOrigin('');
    setSpeakerA('');
    setSpeakerB('');
    setTagsInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-7 shadow-2xl relative transition-colors">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-1">
          <span className="p-1.5 rounded-xl bg-pink-500/15 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400 border border-pink-500/30">
            <Sparkles className="w-4 h-4" />
          </span>
          <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-slate-100">
            Usulkan Kata Slang Baru
          </h3>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
          Punya kosa kata gaul baru yang belum terdaftar? Tambahkan agar teman-teman ga ketinggalan tren!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Kata / Istilah Slang <span className="text-pink-500">*</span>
            </label>
            <input
              type="text"
              required
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Contoh: Mewing, Starboy, Delulu..."
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Cara Pengucapan (Opsional)
              </label>
              <input
                type="text"
                value={pronunciation}
                onChange={(e) => setPronunciation(e.target.value)}
                placeholder="Contoh: [star-boy]"
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-pink-500 transition-colors"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Kategori
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-pink-500 transition-colors cursor-pointer"
              >
                <option value="populer">🔥 Paling Hype</option>
                <option value="jaksel">🥑 Jaksel Culture</option>
                <option value="percintaan">💘 Asmara & Dating</option>
                <option value="medsos">📱 TikTok & Twitter/X</option>
                <option value="tongkrongan">🤙 Tongkrongan & Ngabers</option>
                <option value="brainrot">👾 Brainrot & Slang Global</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Level Kesulitan
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['pemula', 'menengah', 'sepuh'].map((lvl) => (
                <button
                  type="button"
                  key={lvl}
                  onClick={() => setLevel(lvl)}
                  className={`py-2 rounded-xl font-semibold capitalize transition-all border ${
                    level === lvl
                      ? 'bg-pink-500/15 text-pink-700 border-pink-400 dark:bg-pink-500/20 dark:text-pink-300 dark:border-pink-500/50'
                      : 'bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-950 dark:text-slate-400 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Definisi / Arti Kata <span className="text-pink-500">*</span>
            </label>
            <textarea
              required
              rows={3}
              value={meaning}
              onChange={(e) => setMeaning(e.target.value)}
              placeholder="Jelaskan artinya dengan bahasa santai yang gampang dipahami..."
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-pink-500 transition-colors resize-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Asal-usul / Konteks (Opsional)
            </label>
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="Contoh: Viral dari sound TikTok, game Mobile Legends, dll..."
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 transition-colors">
            <span className="font-semibold text-slate-700 dark:text-slate-300 text-xs block">
              Contoh Dialog Obrolan:
            </span>
            <input
              type="text"
              value={speakerA}
              onChange={(e) => setSpeakerA(e.target.value)}
              placeholder="Orang A: (contoh kalimat pemantik)"
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-1.5 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 text-xs"
            />
            <input
              type="text"
              value={speakerB}
              onChange={(e) => setSpeakerB(e.target.value)}
              placeholder="Orang B: (balasan yang memakai kata ini)"
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-1.5 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 text-xs"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Tags (pisahkan dengan koma)
            </label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="viral, tiktok, outfit, santai"
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Publikasikan Kata</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
