import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import SlangCard from './components/SlangCard';
import JakselTranslator from './components/JakselTranslator';
import GenZQuiz from './components/GenZQuiz';
import AddWordModal from './components/AddWordModal';
import GachaModal from './components/GachaModal';
import IndonesianFlag from './components/IndonesianFlag';
import { CATEGORIES, INITIAL_SLANG_LIST, FUN_FACTS } from './data/slangData';
import { Search, X, Sparkles, ArrowUpDown, Bookmark, BookOpen } from 'lucide-react';

export default function App() {
  // Theme state: defaults to 'light', persists in localStorage
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('kamus_genz_theme');
        return saved === 'dark' ? 'dark' : 'light';
      } catch (e) {
        return 'light';
      }
    }
    return 'light';
  });

  const [slangList, setSlangList] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('kamus_genz_custom');
        if (saved) {
          const parsed = JSON.parse(saved);
          return [...parsed, ...INITIAL_SLANG_LIST];
        }
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_SLANG_LIST;
  });

  const [bookmarks, setBookmarks] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('kamus_genz_bookmarks');
        return saved ? JSON.parse(saved) : ['menyala-abangkuh', 'which-is', 'cegil'];
      } catch (e) {
        return ['menyala-abangkuh', 'which-is', 'cegil'];
      }
    }
    return ['menyala-abangkuh', 'which-is', 'cegil'];
  });

  const [activeTab, setActiveTab] = useState('dictionary'); // 'dictionary' | 'translator' | 'quiz' | 'bookmarks'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('trending'); // 'trending' | 'likes' | 'a-z' | 'z-a'
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isGachaModalOpen, setIsGachaModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [factIndex, setFactIndex] = useState(0);

  // Sync theme to root html element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('kamus_genz_theme', theme);
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  // Rotate fun fact every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % FUN_FACTS.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Save bookmarks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('kamus_genz_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarks]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleToggleBookmark = (id) => {
    setBookmarks((prev) => {
      if (prev.includes(id)) {
        showToast('Kata dihapus dari favorit');
        return prev.filter((item) => item !== id);
      } else {
        showToast('Kata berhasil disimpan di favorit! ⭐');
        return [...prev, id];
      }
    });
  };

  const handleAddSlang = (newSlang) => {
    setSlangList((prev) => [newSlang, ...prev]);
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('kamus_genz_custom');
        const customList = saved ? JSON.parse(saved) : [];
        localStorage.setItem('kamus_genz_custom', JSON.stringify([newSlang, ...customList]));
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleTagClick = (tag) => {
    setSearchQuery(tag);
    setActiveTab('dictionary');
    window.scrollTo({ top: 320, behavior: 'smooth' });
  };

  // Filter and sort items
  const filteredSlangList = useMemo(() => {
    let list = [...slangList];

    if (activeTab === 'bookmarks') {
      list = list.filter((item) => bookmarks.includes(item.id));
    }

    if (selectedCategory !== 'all') {
      list = list.filter((item) => item.category === selectedCategory);
    }

    if (selectedLevel !== 'all') {
      list = list.filter((item) => item.level === selectedLevel);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (item) =>
          item.term.toLowerCase().includes(q) ||
          item.meaning.toLowerCase().includes(q) ||
          item.origin?.toLowerCase().includes(q) ||
          item.tags?.some((t) => t.toLowerCase().includes(q)) ||
          item.example?.speakerA.toLowerCase().includes(q) ||
          item.example?.speakerB.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'trending') {
      list.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0) || (b.likes || 0) - (a.likes || 0));
    } else if (sortBy === 'likes') {
      list.sort((a, b) => (b.likes || 0) - (a.likes || 0));
    } else if (sortBy === 'a-z') {
      list.sort((a, b) => a.term.localeCompare(b.term));
    } else if (sortBy === 'z-a') {
      list.sort((a, b) => b.term.localeCompare(a.term));
    }

    return list;
  }, [slangList, activeTab, bookmarks, selectedCategory, selectedLevel, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col selection:bg-pink-500 selection:text-white transition-colors duration-200">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-pink-400 dark:border-pink-500/50 text-slate-800 dark:text-white px-4 py-3 rounded-2xl shadow-xl shadow-pink-500/10 dark:shadow-pink-500/20 text-xs sm:text-sm font-semibold">
            <Sparkles className="w-4 h-4 text-pink-500 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Navbar with Theme Toggle */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        bookmarkCount={bookmarks.length}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        onGachaClick={() => setIsGachaModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Area */}
      <main className="flex-1">

        {/* Hero Section */}
        {(activeTab === 'dictionary' || activeTab === 'bookmarks') && (
          <section className="relative pt-10 pb-8 sm:pt-16 sm:pb-12 border-b border-slate-200/80 dark:border-slate-900 overflow-hidden transition-colors">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-400/10 dark:bg-pink-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <div className="absolute top-10 right-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
              
              {/* Fun Fact Ticker */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 mb-6 shadow-xs transition-colors">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                </span>
                <span className="font-bold text-pink-600 dark:text-pink-400">Tahukah Kamu?</span>
                <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">|</span>
                <span className="text-slate-600 dark:text-slate-300 italic truncate max-w-xs sm:max-w-md">
                  {FUN_FACTS[factIndex]}
                </span>
              </div>

              {/* Title with SVG Flag (No broken emoji fonts) */}
              <h1 className="font-heading font-black text-3xl sm:text-6xl text-slate-900 dark:text-slate-100 tracking-tight leading-tight mb-4 flex items-center justify-center flex-wrap gap-2 sm:gap-3">
                <span>Kamus Gaul</span>
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-400 dark:via-purple-300 dark:to-cyan-400 bg-clip-text text-transparent">
                  Gen Z Indonesia
                </span>
                <IndonesianFlag className="w-8 h-5 sm:w-11 sm:h-7 rounded-md ml-1" />
              </h1>

              <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
                Panduan kosakata gaul anak Jaksel, tren TikTok & Twitter/X, dinamika asmara, hingga istilah tongkrongan biar lu ga pernah kena <span className="text-pink-600 dark:text-pink-300 font-semibold">FOMO</span> lagi!
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative mb-7">
                <div className="relative flex items-center">
                  <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari kata slang, arti, atau tag... (misal: 'Menyala', 'Which is', 'Cegil', 'Rizz')"
                    className="w-full bg-white dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-900 focus:bg-white dark:focus:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-pink-500/80 rounded-2xl pl-12 pr-12 py-3.5 text-sm sm:text-base text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-pink-500/10 shadow-md dark:shadow-xl transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
                      title="Hapus pencarian"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Clean Category Pills (Single Emoji, No Text Wrap) */}
              <div className="flex items-center justify-center flex-wrap gap-2.5 max-w-4xl mx-auto">
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 active:scale-95 ${
                        isSelected
                          ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/25 scale-105'
                          : 'bg-white hover:bg-slate-100 dark:bg-slate-900/80 dark:hover:bg-slate-800 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white border border-slate-200 dark:border-slate-800 shadow-xs'
                      }`}
                    >
                      <span className="text-sm shrink-0">{cat.icon}</span>
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Friendly Disclaimer (Icon-free, clean centered pill) */}
              <div className="max-w-2xl mx-auto mt-7 px-5 py-2.5 rounded-xl sm:rounded-full bg-amber-50/70 dark:bg-amber-500/10 border border-amber-200/80 dark:border-amber-500/25 text-amber-900/90 dark:text-amber-200/90 text-[11px] sm:text-xs leading-relaxed text-center shadow-xs transition-colors">
                <p>
                  <strong>Disclaimer:</strong> Dibuat murni untuk hiburan & ragam bahasa gaul (<em>purely for fun</em>), tanpa ada maksud menyinggung atau mendiskriminasi pihak manapun. Tetap santai & saling <em>respect</em>! ✌️
                </p>
              </div>

            </div>
          </section>
        )}

        {/* Tab Views */}
        {activeTab === 'translator' && (
          <JakselTranslator onShowToast={showToast} />
        )}

        {activeTab === 'quiz' && (
          <GenZQuiz onShowToast={showToast} />
        )}

        {(activeTab === 'dictionary' || activeTab === 'bookmarks') && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            
            {/* Filter Bar & Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800/80 transition-colors">
              <div className="flex items-center gap-2">
                <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  {activeTab === 'bookmarks' ? (
                    <>
                      <Bookmark className="w-5 h-5 text-pink-500" />
                      <span>Kosakata Tersimpan ({filteredSlangList.length})</span>
                    </>
                  ) : (
                    <>
                      <BookOpen className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
                      <span>Daftar Slang ({filteredSlangList.length})</span>
                    </>
                  )}
                </h2>
              </div>

              {/* Level & Sort Filters */}
              <div className="flex items-center flex-wrap gap-2.5 text-xs">
                
                {/* Level selector */}
                <div className="flex items-center gap-1 bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
                  <span className="text-slate-500 dark:text-slate-400 px-2 font-medium">Level:</span>
                  {['all', 'pemula', 'menengah', 'sepuh'].map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setSelectedLevel(lvl)}
                      className={`px-3 py-1.5 rounded-lg font-semibold capitalize whitespace-nowrap transition-all ${
                        selectedLevel === lvl
                          ? 'bg-purple-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                      }`}
                    >
                      {lvl === 'all' ? 'Semua' : lvl}
                    </button>
                  ))}
                </div>

                {/* Sort selector */}
                <div className="flex items-center gap-1 bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
                  <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 ml-1.5 shrink-0" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent text-slate-700 dark:text-slate-200 font-semibold focus:outline-none px-2 py-1.5 cursor-pointer text-xs"
                  >
                    <option value="trending" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">🔥 Paling Hype</option>
                    <option value="likes" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">❤️ Paling Disukai</option>
                    <option value="a-z" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">A - Z</option>
                    <option value="z-a" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">Z - A</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Slang Card Grid */}
            {filteredSlangList.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {filteredSlangList.map((slang) => (
                  <SlangCard
                    key={slang.id}
                    slang={slang}
                    isBookmarked={bookmarks.includes(slang.id)}
                    onToggleBookmark={handleToggleBookmark}
                    onTagClick={handleTagClick}
                    onShowToast={showToast}
                  />
                ))}
              </div>
            ) : (
              /* Empty state */
              <div className="text-center py-16 px-4 bg-white dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-slate-800/80 max-w-xl mx-auto shadow-xs">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-3xl">
                  🧐
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-800 dark:text-slate-200 mb-1">
                  Kata tidak ditemukan
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                  {activeTab === 'bookmarks'
                    ? 'Belum ada kata yang kamu simpan. Klik ikon bookmark pada kata apapun untuk menyimpannya di sini!'
                    : `Tidak ada kata yang cocok dengan "${searchQuery}". Ingin menambahkan istilah ini ke kamus?`}
                </p>
                {activeTab === 'dictionary' && (
                  <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/20 hover:brightness-110 active:scale-95 transition-all"
                  >
                    + Usulkan Kata Ini
                  </button>
                )}
              </div>
            )}

          </section>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 py-10 px-4 sm:px-6 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 dark:text-slate-400">
          
          <div className="flex items-center gap-3">
            <span className="text-xl">🔥</span>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">
                  KamusGenZ.id
                </span>
                <IndonesianFlag className="w-4 h-2.5" />
              </div>
              <p className="text-slate-500 dark:text-slate-400">
                Ensiklopedia Bahasa Gaul & Budaya Pop Gen Z Indonesia
              </p>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-4 text-xs font-medium">
            <button onClick={() => setActiveTab('dictionary')} className="hover:text-pink-600 dark:hover:text-pink-300 transition-colors">
              Kamus
            </button>
            <button onClick={() => setActiveTab('translator')} className="hover:text-pink-600 dark:hover:text-pink-300 transition-colors">
              Penerjemah Jaksel
            </button>
            <button onClick={() => setActiveTab('quiz')} className="hover:text-pink-600 dark:hover:text-pink-300 transition-colors">
              Kuis Gen Z
            </button>
            <button onClick={() => setIsGachaModalOpen(true)} className="hover:text-pink-600 dark:hover:text-pink-300 transition-colors">
              Gacha Kata
            </button>
            <button onClick={() => setIsAddModalOpen(true)} className="hover:text-pink-600 dark:hover:text-pink-300 transition-colors">
              Usul Kata
            </button>
          </div>

          <div className="text-center md:text-right text-slate-500 dark:text-slate-400 space-y-1">
            <p>Dibuat santai buat seru-seruan bareng teman tongkrongan ✨</p>
            <p className="text-[11px] text-slate-400 dark:text-slate-500">Purely for fun &amp; pop culture. No hate, no discrimination ✌️</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AddWordModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddSlang={handleAddSlang}
        onShowToast={showToast}
      />

      <GachaModal
        isOpen={isGachaModalOpen}
        onClose={() => setIsGachaModalOpen(false)}
        slangList={slangList}
        onShowToast={showToast}
      />

    </div>
  );
}
