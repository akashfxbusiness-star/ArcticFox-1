import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { Send, Globe, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onJoinTelegram: () => void;
  onVisitWebsite: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onJoinTelegram, onVisitWebsite }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/[0.04] py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
      id="main-header"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo (Left) */}
        <Logo size={32} />

        {/* Action Button (Right) */}
        <div className="flex items-center">
          <button
            onClick={onJoinTelegram}
            className="rounded-full bg-brand hover:bg-amber-500 text-black font-semibold text-xs md:text-sm py-2 px-5 transition-all duration-300 cursor-pointer flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,154,31,0.25)] hover:shadow-[0_0_20px_rgba(255,154,31,0.45)] uppercase tracking-wide"
          >
            <span>Join Telegram</span>
            <Send size={12} className="translate-x-[0.5px] translate-y-[-0.5px]" />
          </button>
        </div>
      </div>
    </header>
  );
};
