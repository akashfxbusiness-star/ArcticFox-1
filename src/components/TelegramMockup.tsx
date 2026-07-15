import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Pin, Send, ShieldCheck, Heart, ThumbsUp, Flame, Check, Copy } from 'lucide-react';
import arcticFoxLogo from '../assets/images/arcticfox-logo.png';

interface MockMessage {
  id: string;
  type: 'pinned' | 'latest' | 'ea' | 'gold' | 'announcement';
  title: string;
  timestamp: string;
  content: React.ReactNode;
  reactions: { emoji: string; count: number; active?: boolean }[];
}

export const TelegramMockup: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [messages, setMessages] = useState<MockMessage[]>([
    {
      id: 'msg-pinned',
      type: 'pinned',
      title: 'Pinned Message',
      timestamp: 'Pinned',
      content: (
        <div className="text-neutral-300 space-y-2">
          <p>
            Welcome to the official <strong>ArcticFox Community</strong> channel. 
            This is the only authenticated channel for official releases, gold analysis, and setups.
          </p>
          <div className="p-2.5 rounded-xl bg-black/40 border border-neutral-900 text-[11px] font-mono text-neutral-400">
            Official Handle: @ArcticFoxEA
          </div>
        </div>
      ),
      reactions: [
        { emoji: '🔥', count: 324 },
        { emoji: '❤️', count: 182 },
      ],
    },
    {
      id: 'msg-latest',
      type: 'latest',
      title: 'Latest Update',
      timestamp: '09:30 AM',
      content: (
        <div className="text-neutral-300 space-y-2">
          <p className="text-brand font-semibold font-mono text-xs">📢 SYSTEM UPDATE</p>
          <p>
            Direct support channels are now fully active inside the group. Members can access setup 
            assistance directly from verified developers by utilizing the help command.
          </p>
        </div>
      ),
      reactions: [
        { emoji: '👍', count: 112 },
        { emoji: '🔥', count: 85 },
      ],
    },
    {
      id: 'msg-ea',
      type: 'ea',
      title: 'EA Version Update',
      timestamp: 'Yesterday',
      content: (
        <div className="text-neutral-300 space-y-2.5">
          <p className="text-brand font-semibold font-mono text-xs">🚀 SIGNAL REPORT: ELITE SELECTION</p>
          <p>
            The latest market algorithm signals have been processed for all members.
          </p>
          <div className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
            <span className="block text-xs font-bold text-white uppercase font-mono">Changelog Highlights:</span>
            <ul className="space-y-1 text-[11px] text-neutral-400 font-mono">
              <li>• High-accuracy trend reversal confirmation</li>
              <li>• Risk-adjusted position sizing model</li>
              <li>• Live institutional order flow tracking</li>
            </ul>
          </div>
        </div>
      ),
      reactions: [
        { emoji: '🔥', count: 421 },
        { emoji: '🚀', count: 219 },
      ],
    },
    {
      id: 'msg-gold',
      type: 'gold',
      title: 'Gold Market Update',
      timestamp: '2 days ago',
      content: (
        <div className="text-neutral-300 space-y-2">
          <p className="text-emerald-500 font-semibold font-mono text-xs">📈 XAUUSD MARKET BRIEF</p>
          <p>
            Gold is consolidating within a clear ascending channel on the 4-hour timeframe. 
            Strong demand is concentrated in the $2,342 support zone. Look for clean breakout confirmation.
          </p>
          {/* Simulated chart line */}
          <div className="h-32 rounded-xl bg-black/60 border border-neutral-900 p-2 relative overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 300 100">
              <path
                d="M 10 80 L 50 70 L 100 75 L 150 50 L 200 65 L 250 35 L 290 10"
                fill="none"
                stroke="#FF8A00"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="290" cy="10" r="3" fill="#FF8A00" />
            </svg>
          </div>
        </div>
      ),
      reactions: [
        { emoji: '📈', count: 184 },
        { emoji: '👀', count: 96 },
      ],
    },
    {
      id: 'msg-announcement',
      type: 'announcement',
      title: 'Community Announcement',
      timestamp: '3 days ago',
      content: (
        <div className="text-neutral-300 space-y-2">
          <p className="text-indigo-400 font-semibold font-mono text-xs">📢 VIP MEMBER DISPATCH</p>
          <p>
            Exclusive setups, user manuals, and customized preset files have been consolidated into the official folder. 
            All resources are completely open to members.
          </p>
        </div>
      ),
      reactions: [
        { emoji: '🎉', count: 154 },
        { emoji: '❤️', count: 110 },
      ],
    },
  ]);

  const handleReaction = (msgId: string, emoji: string) => {
    setMessages(prev =>
      prev.map(msg => {
        if (msg.id !== msgId) return msg;
        return {
          ...msg,
          reactions: msg.reactions.map(react => {
            if (react.emoji !== emoji) return react;
            const active = !react.active;
            return {
              ...react,
              count: active ? react.count + 1 : react.count - 1,
              active,
            };
          }),
        };
      })
    );
  };

  return (
    <section
      id="preview-section"
      className="py-16 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto relative border-t border-neutral-900"
    >
      {/* Background soft lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-brand/5 blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-xs font-mono font-semibold tracking-widest text-brand uppercase block mb-2">
          Live Feed
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight">
          Community Preview
        </h2>
      </div>

      {/* Telegram App Frame Mockup */}
      <div className="border border-neutral-800 bg-neutral-950 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[520px]">
        
        {/* Telegram Header */}
        <div className="p-4 border-b border-neutral-900 bg-neutral-950/90 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-black border border-brand/40 flex items-center justify-center overflow-hidden shrink-0">
              <img src={arcticFoxLogo} alt="ArcticFox Logo" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5 font-display">
                ArcticFox Community
                <ShieldCheck size={14} className="text-brand" />
              </h4>
              <p className="text-[11px] text-neutral-400">
                15,842 members • <span className="text-emerald-500 font-semibold">2,410 online</span>
              </p>
            </div>
          </div>
          
          <div className="flex h-8 items-center gap-1.5 px-3 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Public Channel</span>
          </div>
        </div>

        {/* Pinned message bar */}
        <div className="px-4 py-2 bg-neutral-900/30 border-b border-neutral-900/60 flex items-center gap-2 text-xs shrink-0 text-left">
          <Pin size={11} className="text-brand rotate-45 shrink-0" />
          <span className="text-brand font-semibold">Pinned:</span>
          <span className="text-neutral-400 truncate">Welcome to the official ArcticFox Community channel. This is...</span>
        </div>

        {/* Messages Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-left scrollbar-thin">
          {messages.map((msg) => (
            <div key={msg.id} className="flex gap-3">
              {/* Message Avatar */}
              <div className="h-8 w-8 rounded-full bg-black border border-brand/30 flex items-center justify-center overflow-hidden shrink-0">
                <img src={arcticFoxLogo} alt="ArcticFox Logo" className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 min-w-0">
                {/* Meta details */}
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-xs font-bold text-white font-display">ArcticFox Community</span>
                  <span className="text-[9px] text-neutral-500 font-mono">{msg.timestamp}</span>
                </div>

                {/* Message bubble */}
                <div className="rounded-2xl rounded-tl-none bg-neutral-900/50 border border-neutral-900 p-4 text-xs leading-relaxed max-w-xl">
                  {msg.content}

                  {/* Reaction panel */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {msg.reactions.map((react, rIdx) => (
                      <button
                        key={rIdx}
                        onClick={() => handleReaction(msg.id, react.emoji)}
                        className={`flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-mono transition-all cursor-pointer ${
                          react.active
                            ? 'bg-brand/10 border-brand/40 text-brand font-bold'
                            : 'bg-neutral-950 border-neutral-900 text-neutral-400 hover:text-white'
                        }`}
                      >
                        <span>{react.emoji}</span>
                        <span>{react.count}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom invitation action strip */}
        <div className="p-3 border-t border-neutral-900 bg-neutral-950 text-center shrink-0">
          <span className="text-[10px] font-mono text-neutral-500">You are previewing the official ArcticFox public feed</span>
        </div>
      </div>
    </section>
  );
};
