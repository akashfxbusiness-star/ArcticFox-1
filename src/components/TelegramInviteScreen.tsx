import React from 'react';
import { Shield, Lock, ShieldAlert } from 'lucide-react';
import arcticFoxLogo from '../assets/images/arcticfox-logo.png';

interface TelegramInviteScreenProps {
  onJoinTelegram: () => void;
  onVisitWebsite?: () => void;
}

export const TelegramInviteScreen: React.FC<TelegramInviteScreenProps> = ({
  onJoinTelegram,
}) => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-center font-sans select-none overflow-hidden bg-black text-white px-4 py-8 sm:py-12">
      
      {/* 1. Starfield Particle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* 2. Space Horizon & Atmospheric Glow (Exactly behind card, matching screenshot) */}
      <div className="absolute top-[49%] left-1/2 -translate-x-1/2 w-[220%] sm:w-[160%] md:w-[130%] max-w-[1200px] aspect-[4/1] rounded-[50%] border-t-[1.5px] border-[#FF9A1F]/30 bg-gradient-to-b from-[#FF9A1F]/[0.1] via-[#FF9A1F]/[0.01] to-transparent blur-[2px] pointer-events-none z-0" />
      <div className="absolute top-[48.5%] left-1/2 -translate-x-1/2 w-[80%] max-w-[600px] h-[18px] bg-gradient-to-r from-transparent via-[#FF9A1F]/40 to-transparent blur-[8px] pointer-events-none z-0" />
      <div className="absolute top-[42%] left-1/2 -translate-x-1/2 w-[240px] h-[240px] bg-[#FF9A1F]/[0.08] rounded-full blur-[100px] pointer-events-none z-0" />

      {/* 3. Orbital Concentric Rings around the logo */}
      <div className="absolute top-[4%] left-1/2 -translate-x-1/2 w-[360px] h-[360px] rounded-full border border-[#FF9A1F]/[0.08] pointer-events-none z-0">
        {/* Glow point on orbit */}
        <div className="absolute top-[15%] left-[12%] w-1.5 h-1.5 rounded-full bg-[#FF9A1F] shadow-[0_0_10px_#FF9A1F] opacity-80" />
      </div>
      <div className="absolute top-[0%] left-1/2 -translate-x-1/2 w-[480px] h-[480px] rounded-full border border-white/[0.03] pointer-events-none z-0">
        <div className="absolute top-[32%] left-[82%] w-1 h-1 rounded-full bg-[#FF9A1F] shadow-[0_0_8px_#FF9A1F] opacity-50" />
      </div>

      {/* Main Content (Z-indexed, beautifully bounded and centered) */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[520px] mx-auto">
        
        {/* Main Title: ArcticFox (Pure White & Gold Accent) */}
        <div className="flex flex-col items-center mb-5">
          <h1 className="font-sans font-bold text-[40px] sm:text-[44px] tracking-tight text-white leading-none">
            Arctic<span className="text-[#FF9A1F]">Fox</span>
          </h1>
        </div>

        {/* Delicate Golden Accent line with ✦ */}
        <div className="flex items-center justify-center gap-3 w-28 mb-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#FF9A1F]/30" />
          <div className="w-1 h-1 rounded-full bg-[#FF9A1F] opacity-80" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#FF9A1F]/30" />
        </div>

        {/* Sub-headline description */}
        <div className="max-w-sm text-center mb-5">
          <p className="text-[#9E9E9E] text-[10.5px] sm:text-[12px] font-normal leading-relaxed tracking-wider">
            Official Telegram channel for traders.<br />
            Free <span className="text-[#FF9A1F] font-semibold">EA download</span>, free <span className="text-[#FF9A1F] font-semibold">trial access</span>,<br />
            market insights and a <span className="text-[#FF9A1F] font-semibold">successful community</span>.
          </p>
        </div>

        {/* Central Premium Floating Card (Exactly matching layout, dimensions and verified status) */}
        <div
          onClick={onJoinTelegram}
          className="w-full max-w-[480px] rounded-2xl bg-[#09090C]/85 border border-white/[0.08] backdrop-blur-xl p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:border-[#FF9A1F]/30 hover:shadow-[0_0_25px_rgba(255,154,31,0.06)] transition-all duration-300 relative group overflow-hidden mb-6"
        >
          {/* Subtle gold inner glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FF9A1F]/[0.01] to-transparent pointer-events-none" />

          {/* Left part of the card: Avatar & Concentric rings */}
          <div className="flex items-center gap-4 text-left">
            <div className="relative">
              {/* Gold ring surrounding the avatar */}
              <div className="absolute inset-[-3px] rounded-full border border-[#FF9A1F]/20 group-hover:scale-105 transition-all duration-300" />
              
              <div className="h-14 w-14 rounded-full bg-[#030303] flex items-center justify-center border border-white/[0.08] shadow-inner overflow-hidden">
                {/* Official ArcticFox Logo */}
                <img
                  src={arcticFoxLogo}
                  alt="ArcticFox Official Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping small circular blue Telegram icon */}
              <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-[#24A1DE] border-2 border-[#09090C] flex items-center justify-center text-white shadow-md">
                {/* Official Telegram paper plane path */}
                <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-white">
                  <path d="M19.89 3.91L2.09 10.77C.87 11.26.88 11.94 1.87 12.24L6.44 13.67L17.04 6.98C17.54 6.68 18 6.84 17.62 7.18L9.04 14.92L8.71 19.83C9.2 19.83 9.41 19.61 9.68 19.34L11.99 17.1L16.79 20.64C17.67 21.13 18.31 20.88 18.53 19.83L21.68 4.97C22 3.69 21.19 3.11 20.35 3.49L19.89 3.91Z" />
                </svg>
              </div>
            </div>

            {/* Card Content Text */}
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-1.5">
                <h3 className="font-sans font-bold text-base text-white tracking-wide">
                  ArcticFox
                </h3>
                {/* Verified Blue Telegram Check Badge */}
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#24A1DE] shrink-0" title="Verified Badge">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              
              <p className="text-[#8E8E93] text-xs font-normal">
                Official Telegram Channel
              </p>

              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/[0.04] border border-emerald-500/20 w-fit mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span className="text-[#10B981] font-sans text-[10px] font-bold tracking-wider uppercase">
                  ACTIVE
                </span>
              </div>
            </div>
          </div>

          {/* Right Part: Rounded-square glassy black button tile with white paper plane */}
          <div className="h-12 w-12 rounded-xl bg-gradient-to-b from-white/[0.08] to-white/[0.01] border border-white/[0.06] shadow-xl flex items-center justify-center text-white shrink-0 group-hover:border-[#FF9A1F]/30 group-hover:scale-105 transition-all duration-300 relative">
            {/* Real Telegram paper plane */}
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
              <path d="M19.89 3.91L2.09 10.77C.87 11.26.88 11.94 1.87 12.24L6.44 13.67L17.04 6.98C17.54 6.68 18 6.84 17.62 7.18L9.04 14.92L8.71 19.83C9.2 19.83 9.41 19.61 9.68 19.34L11.99 17.1L16.79 20.64C17.67 21.13 18.31 20.88 18.53 19.83L21.68 4.97C22 3.69 21.19 3.11 20.35 3.49L19.89 3.91Z" />
            </svg>
          </div>
        </div>

        {/* 4. Three horizontal feature rows with vertical separators (Exactly below card, matching screenshot) */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-7 text-left relative z-10 w-full max-w-md">
          {/* Item 1 */}
          <div className="flex items-center gap-2 flex-1 justify-center">
            {/* Download Cloud SVG */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-[#FF9A1F] shrink-0">
              <path d="M12 17V11M12 17L9 14M12 17L15 14" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 16.5A4.5 4.5 0 0 0 17.5 8h-1.3A7.5 7.5 0 1 0 5.5 15.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="leading-tight">
              <p className="text-white text-[9.5px] font-extrabold tracking-wider uppercase">FREE EA</p>
              <p className="text-[#8E8E93] text-[8.5px] font-medium tracking-wider uppercase">DOWNLOAD</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-5 w-[1px] bg-white/[0.08]" />

          {/* Item 2 */}
          <div className="flex items-center gap-2 flex-1 justify-center">
            {/* Shield Check SVG */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-[#FF9A1F] shrink-0">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 11l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="leading-tight">
              <p className="text-white text-[9.5px] font-extrabold tracking-wider uppercase">FREE TRIAL</p>
              <p className="text-[#8E8E93] text-[8.5px] font-medium tracking-wider uppercase">ACCESS</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-5 w-[1px] bg-white/[0.08]" />

          {/* Item 3 */}
          <div className="flex items-center gap-2 flex-1 justify-center">
            {/* Group/Users SVG */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-[#FF9A1F] shrink-0">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
            </svg>
            <div className="leading-tight">
              <p className="text-white text-[9.5px] font-extrabold tracking-wider uppercase">SUCCESSFUL</p>
              <p className="text-[#8E8E93] text-[8.5px] font-medium tracking-wider uppercase">COMMUNITY</p>
            </div>
          </div>
        </div>

        {/* 5. Glowing CTA Button (Perfect matching golden metallic gradient) */}
        <div className="w-full max-w-[480px] mb-6">
          <button
            onClick={onJoinTelegram}
            className="w-full cursor-pointer flex items-center justify-center gap-4 py-3.5 px-8 rounded-xl bg-gradient-to-b from-[#FFA726] via-[#FB8C00] to-[#E65100] text-black font-sans font-black text-sm sm:text-base tracking-[0.1em] uppercase transition-all duration-300 active:scale-[0.99] shadow-[0_12px_35px_rgba(255,122,0,0.35)] hover:shadow-[0_16px_45px_rgba(255,122,0,0.5)] border-t border-white/[0.15] relative group"
          >
            {/* Real Telegram paper plane inside JOIN TELEGRAM button */}
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-black shrink-0">
              <path d="M19.89 3.91L2.09 10.77C.87 11.26.88 11.94 1.87 12.24L6.44 13.67L17.04 6.98C17.54 6.68 18 6.84 17.62 7.18L9.04 14.92L8.71 19.83C9.2 19.83 9.41 19.61 9.68 19.34L11.99 17.1L16.79 20.64C17.67 21.13 18.31 20.88 18.53 19.83L21.68 4.97C22 3.69 21.19 3.11 20.35 3.49L19.89 3.91Z" />
            </svg>
            
            {/* Thin black divider line */}
            <div className="h-4 w-[1.5px] bg-black/25 shrink-0" />

            <span>JOIN TELEGRAM</span>
          </button>
        </div>

        {/* 6. Bottom Trust Badges (Matching screenshot exactly) */}
        <div className="flex items-center justify-center gap-4 text-[#6E6E73] font-sans text-[11px] sm:text-xs font-normal">
          <div className="flex items-center gap-1.5">
            <Lock size={12} className="text-[#6E6E73]" />
            <span>100% Free</span>
          </div>
          <span className="text-[#FF9A1F]/20">|</span>
          <div className="flex items-center gap-1.5">
            <Shield size={12} className="text-[#6E6E73]" />
            <span>SECURE</span>
          </div>
          <span className="text-[#FF9A1F]/20">|</span>
          <div className="flex items-center gap-1.5">
            <ShieldAlert size={12} className="text-[#6E6E73]" />
            <span>NO SPAM</span>
          </div>
        </div>

      </div>

    </div>
  );
};
