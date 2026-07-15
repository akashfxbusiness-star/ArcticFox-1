import React from 'react';
import { motion } from 'motion/react';
import { Send, Globe } from 'lucide-react';

interface FinalCTAProps {
  onJoinTelegram: () => void;
  onVisitWebsite: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onJoinTelegram, onVisitWebsite }) => {
  return (
    <section
      id="cta-section"
      className="py-24 px-6 md:px-8 max-w-4xl mx-auto relative border-t border-neutral-900 overflow-hidden text-center"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Headline */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
          Ready to Join?
        </h2>

        {/* One sentence description only */}
        <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light max-w-md leading-relaxed">
          Stay connected with every ArcticFox update directly inside Telegram.
        </p>

        {/* Large Orange Button (JOIN TELEGRAM) */}
        <div className="mt-8 w-full max-w-xs">
          <button
            onClick={onJoinTelegram}
            className="w-full cursor-pointer flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-brand text-black font-display font-extrabold text-base transition-all duration-300 hover:bg-orange-500 glow-button group"
          >
            <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <span>JOIN TELEGRAM</span>
          </button>
        </div>

        {/* Small Secondary Link */}
        <button
          onClick={onVisitWebsite}
          className="mt-5 text-xs text-neutral-500 hover:text-brand transition-colors cursor-pointer font-mono uppercase tracking-wider flex items-center gap-1.5"
        >
          <Globe size={12} />
          <span>Visit ArcticFox Website</span>
        </button>
      </div>
    </section>
  );
};
