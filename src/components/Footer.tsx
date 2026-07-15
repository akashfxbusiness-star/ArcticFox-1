import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onJoinTelegram: () => void;
  onVisitWebsite: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onJoinTelegram, onVisitWebsite }) => {
  return (
    <footer className="border-t border-white/[0.04] bg-black py-8 px-6 md:px-8 text-neutral-500 font-sans" id="main-footer">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        
        {/* Left: Branding & Tagline */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-display font-semibold text-white tracking-wider uppercase text-xs">
              Arctic<span className="text-brand">Fox</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-700" />
            <span className="text-neutral-500 text-[11px] font-medium tracking-wide">
              Official Telegram Community
            </span>
          </div>
          <p className="text-[10px] font-mono text-neutral-600">
            © {new Date().getFullYear()} ArcticFox. All rights reserved.
          </p>
        </div>

        {/* Right: Direct Navigation Links */}
        <div className="flex items-center gap-6 font-medium text-[11px] uppercase tracking-wider font-mono">
          <button
            onClick={onJoinTelegram}
            className="hover:text-brand text-neutral-400 transition-colors cursor-pointer"
          >
            Join Telegram
          </button>
          <span className="text-neutral-800">|</span>
          <button
            onClick={onVisitWebsite}
            className="hover:text-brand text-neutral-400 transition-colors cursor-pointer"
          >
            Official Website
          </button>
        </div>

      </div>
    </footer>
  );
};
