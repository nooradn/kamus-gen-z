import React from 'react';

export default function IndonesianFlag({ className = "w-5 h-3.5" }) {
  return (
    <span
      className={`inline-flex items-center overflow-hidden rounded-[3px] border border-slate-300 dark:border-slate-700/80 shadow-xs align-middle shrink-0 ${className}`}
      title="Indonesia"
      aria-label="Bendera Indonesia"
    >
      <svg viewBox="0 0 3 2" className="w-full h-full block">
        <rect width="3" height="1" fill="#e11d48" />
        <rect y="1" width="3" height="1" fill="#ffffff" />
      </svg>
    </span>
  );
}
