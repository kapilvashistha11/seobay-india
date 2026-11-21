import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function BrandLogo({ className = '', variant = 'dark' }: BrandLogoProps) {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Custom Vector Brand Mark */}
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform flex-shrink-0">
        <svg
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Stylized Search & Trajectory Path */}
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.35-4.35" />
          <path d="M8 11h6" strokeWidth="2.5" />
          <path d="M11 8v6" strokeWidth="2.5" />
        </svg>
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-950"></span>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className={`font-black text-xl tracking-tight ${isDark ? 'text-slate-950' : 'text-white'}`}>
            SeoBay
          </span>
          <span className="font-extrabold text-xl text-blue-500">.in</span>
        </div>
        <span className={`text-[10px] font-mono tracking-widest uppercase font-semibold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
          India · Search Visibility
        </span>
      </div>
    </div>
  );
}
