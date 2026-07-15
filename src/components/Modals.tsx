import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, X, Shield, ArrowUpRight, AlertTriangle, ExternalLink, QrCode } from 'lucide-react';
import { Logo } from './Logo';

interface TelegramModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

interface WebsiteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const TelegramModal: React.FC<TelegramModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing Secure Gate...');

  useEffect(() => {
    if (isOpen) {
      setProgress(0);
      setStatus('Initializing Secure Gate...');
      
      const timer1 = setTimeout(() => setStatus('Verifying Official Telegram Handle...'), 600);
      const timer2 = setTimeout(() => setStatus('Generating Invitation Handshake...'), 1400);
      const timer3 = setTimeout(() => setStatus('Redirect Link Secured!'), 2200);

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 4;
        });
      }, 80);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearInterval(interval);
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            id="modal-backdrop-tg"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 p-6 shadow-2xl glow-box"
            id="telegram-modal"
          >
            {/* Soft background orange glow */}
            <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-brand/10 blur-2xl" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors p-1.5 hover:bg-neutral-900 rounded-full"
            >
              <X size={18} />
            </button>

            {/* Content */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-900/80 border border-neutral-800 text-brand">
                <Send size={28} className="translate-x-[-1px] translate-y-[1px]" />
              </div>

              <h3 className="font-display text-xl font-bold text-white tracking-tight">
                LAUNCHING OFFICIAL CHANNEL
              </h3>
              <p className="mt-1.5 text-xs font-mono text-neutral-400">
                t.me/ArcticFoxEA
              </p>

              {/* Secure Handshake Animation Block */}
              <div className="my-6 w-full rounded-2xl border border-neutral-900 bg-neutral-950/60 p-4">
                <div className="mb-2 flex items-center justify-between text-left">
                  <span className="flex items-center gap-1.5 text-xs font-medium text-neutral-300">
                    <Shield size={12} className="text-brand" />
                    {status}
                  </span>
                  <span className="font-mono text-xs text-brand font-semibold">{progress}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-900">
                  <motion.div
                    className="h-full bg-brand"
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: 'easeOut' }}
                  />
                </div>

                <div className="mt-4 flex items-center justify-around gap-2 pt-2 border-t border-neutral-900">
                  <div className="text-center">
                    <span className="block text-lg font-bold text-white">12.4K</span>
                    <span className="text-[10px] text-neutral-500 uppercase font-mono">Members</span>
                  </div>
                  <div className="h-8 w-px bg-neutral-900" />
                  <div className="text-center">
                    <span className="block text-lg font-bold text-emerald-500">1.8K</span>
                    <span className="text-[10px] text-neutral-500 uppercase font-mono">Online</span>
                  </div>
                </div>
              </div>

              {/* QR Code Segment for Desktop users */}
              <div className="mb-5 flex flex-col items-center justify-center gap-2">
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900/20 p-2.5">
                  {/* Styled Mock QR Code */}
                  <svg width="84" height="84" viewBox="0 0 100 100" className="text-neutral-400">
                    <rect x="0" y="0" width="25" height="25" fill="#FF8A00" />
                    <rect x="5" y="5" width="15" height="15" fill="black" />
                    <rect x="75" y="0" width="25" height="25" fill="#FF8A00" />
                    <rect x="80" y="5" width="15" height="15" fill="black" />
                    <rect x="0" y="75" width="25" height="25" fill="#FF8A00" />
                    <rect x="5" y="80" width="15" height="15" fill="black" />
                    {/* Random QR squares */}
                    <rect x="35" y="10" width="10" height="10" fill="#888" />
                    <rect x="50" y="5" width="10" height="10" fill="#FF8A00" />
                    <rect x="35" y="35" width="15" height="15" fill="#aaa" />
                    <rect x="10" y="35" width="15" height="10" fill="#FF8A00" />
                    <rect x="60" y="30" width="10" height="10" fill="#FF8A00" />
                    <rect x="75" y="45" width="15" height="15" fill="#666" />
                    <rect x="40" y="60" width="15" height="10" fill="#888" />
                    <rect x="60" y="70" width="15" height="15" fill="#FF8A00" />
                    <rect x="35" y="80" width="10" height="10" fill="#aaa" />
                  </svg>
                </div>
                <span className="flex items-center gap-1 text-[10px] text-neutral-500 font-mono">
                  <QrCode size={10} /> Scan with phone to open instantly
                </span>
              </div>

              {/* Main Button */}
              <button
                onClick={onConfirm}
                disabled={progress < 100}
                className={`flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 px-4 font-display font-semibold transition-all duration-300 ${
                  progress < 100
                    ? 'bg-neutral-900 text-neutral-500 cursor-not-allowed'
                    : 'bg-brand text-black hover:bg-orange-500 glow-button'
                }`}
              >
                <span>OPEN IN TELEGRAM</span>
                <ArrowUpRight size={18} />
              </button>

              <button
                onClick={onClose}
                className="mt-3.5 text-xs text-neutral-400 hover:text-white underline transition-colors"
              >
                Cancel and return
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const WebsiteModal: React.FC<WebsiteModalProps> = ({ isOpen, onClose, onConfirm }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            id="modal-backdrop-web"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 p-6 shadow-2xl"
            id="website-modal"
          >
            {/* Yellow alert background glow */}
            <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-amber-500/10 blur-2xl" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors p-1.5 hover:bg-neutral-900 rounded-full"
            >
              <X size={18} />
            </button>

            {/* Content */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500">
                <AlertTriangle size={28} />
              </div>

              <h3 className="font-display text-xl font-bold text-white tracking-tight">
                HOLD ON A SECOND!
              </h3>
              <p className="mt-2 text-sm text-neutral-300 px-1 leading-relaxed">
                You are about to visit the main corporate page. Over <span className="text-brand font-semibold">95% of our daily gold analysis</span>, high-performance preset updates, and members-only discount campaigns are announced <span className="underline decoration-brand underline-offset-4">inside our Telegram community first</span>.
              </p>

              <div className="mt-5 w-full rounded-2xl bg-neutral-900/40 border border-neutral-900 p-4 text-left">
                <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider mb-2 text-center text-brand">
                  Exclusive Telegram Privileges
                </h4>
                <ul className="space-y-1.5 text-xs text-neutral-400">
                  <li className="flex items-center gap-2">
                    <span className="text-brand">✓</span> Real-time MT4/MT5 EA setup configurations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand">✓</span> Direct support from senior strategy developers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand">✓</span> Weekly members-only promotion campaigns
                  </li>
                </ul>
              </div>

              {/* Recommendation Choice */}
              <div className="mt-6 flex flex-col w-full gap-2.5">
                <button
                  onClick={onClose} // Closes modal and keeps them on landing page to click Join Telegram
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand text-black py-3 px-4 font-display font-semibold hover:bg-orange-500 transition-colors glow-button"
                >
                  <Send size={16} />
                  <span>STAY & JOIN TELEGRAM</span>
                </button>

                <button
                  onClick={onConfirm} // Confirms redirect to website
                  className="flex w-full items-center justify-center gap-1.5 rounded-2xl border border-neutral-800 bg-transparent text-neutral-400 hover:text-white hover:bg-neutral-900 py-3 px-4 text-xs font-mono transition-all"
                >
                  <span>CONTINUE TO CORPORATE SITE</span>
                  <ExternalLink size={12} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
