import React from 'react';
import { Sparkles, PlusCircle, Sun, Moon } from 'lucide-react';
import IndonesianFlag from './IndonesianFlag';

export default function Navbar({ activeTab, setActiveTab, bookmarkCount, onOpenAddModal, onGachaClick, theme, onToggleTheme }) {
  const navItems = [
    { id: 'dictionary', label: 'Kamus Gaul' },
    { id: 'translator', label: 'Penerjemah Jaksel', badge: 'Viral' },
    { id: 'quiz', label: 'Kuis Level Gen Z' },
    { id: 'bookmarks', label: 'Tersimpan', count: bookmarkCount },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/90 dark:bg-slate-950/85 border-b border-slate-200/90 dark:border-slate-800/90 transition-colors duration-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-3">
          
          {/* Logo (Compact & No Subtitle) */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group shrink-0"
            onClick={() => setActiveTab('dictionary')}
          >
            <div className="relative">
              <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 p-0.5 shadow-sm shadow-pink-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center transition-colors">
                  <span className="text-base sm:text-lg animate-pulse">🔥</span>
                </div>
              </div>
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500"></span>
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-400 dark:via-purple-300 dark:to-cyan-400 bg-clip-text text-transparent">
                KamusGenZ
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full font-bold bg-pink-50 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300 border border-pink-200 dark:border-pink-500/30">
                <IndonesianFlag className="w-3.5 h-2.5" />
                <span>ID</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation Pills (Compact, Text-Only / No Icons) */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-900/90 p-1 rounded-xl border border-slate-200 dark:border-slate-800 shadow-inner transition-colors">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[8px] px-1 py-0.2 rounded-full font-bold bg-amber-400 text-slate-950 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}
                  {item.count !== undefined && item.count > 0 && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full font-bold bg-pink-500/20 text-pink-700 dark:bg-pink-500/40 dark:text-pink-200 border border-pink-400/40">
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action buttons + Theme Toggle (Compact) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-300 dark:hover:border-slate-700 transition-all active:scale-95 shadow-xs flex items-center justify-center shrink-0"
              title={theme === 'dark' ? 'Ganti ke Mode Terang (Light Mode)' : 'Ganti ke Mode Gelap (Dark Mode)'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '10s' }} />
              ) : (
                <Moon className="w-3.5 h-3.5 text-indigo-600" />
              )}
            </button>

            {/* Gacha Button */}
            <button
              onClick={onGachaClick}
              className="h-8.5 sm:h-9 inline-flex items-center gap-1.5 px-3 rounded-lg text-xs font-bold whitespace-nowrap bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/20 transition-all active:scale-95 shadow-xs shrink-0"
              title="Acak kata slang hari ini"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
              <span>Gacha</span>
            </button>

            {/* Add Word Button */}
            <button
              onClick={onOpenAddModal}
              className="h-8.5 sm:h-9 inline-flex items-center gap-1.5 px-3 sm:px-3.5 rounded-lg text-xs font-bold whitespace-nowrap bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-xs hover:shadow-pink-600/30 hover:brightness-110 transition-all active:scale-95 shrink-0"
            >
              <PlusCircle className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">Tambah Kata</span>
              <span className="sm:hidden">Usul</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation bar for tablets and phones (Compact, Text-Only / No Icons) */}
        <div className="flex lg:hidden items-center justify-start gap-1 py-1.5 border-t border-slate-200/80 dark:border-slate-800/60 overflow-x-auto text-xs no-scrollbar">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 py-1.5 px-2.5 rounded-lg whitespace-nowrap font-medium text-xs transition-colors shrink-0 ${
                  isActive
                    ? 'bg-pink-500/15 dark:bg-pink-500/20 text-pink-700 dark:text-pink-300 border border-pink-500/30 dark:border-pink-500/40 font-bold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 bg-slate-100/60 dark:bg-slate-900/60 border border-transparent'
                }`}
              >
                <span>{item.label}</span>
                {item.count !== undefined && item.count > 0 && (
                  <span className="text-[9px] bg-pink-500/20 dark:bg-pink-500/40 text-pink-700 dark:text-pink-200 px-1 py-0.2 rounded-full font-bold">
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
}
