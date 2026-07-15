import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const TrustIndicators: React.FC = () => {
  const items = [
    'Official ArcticFox Updates',
    'Institutional Grade Analytics',
    'Real-time Market Dispatches',
    'Direct Analyst Community Access',
  ];

  return (
    <section
      id="trust-section"
      className="py-16 px-6 md:px-8 max-w-2xl mx-auto text-center relative border-t border-neutral-900"
    >
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-brand/5 blur-[80px] pointer-events-none" />

      {/* Section Header */}
      <div className="mb-10">
        <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight">
          Why Traders Join
        </h2>
      </div>

      {/* Minimalistic 4 Check Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex items-center gap-3 p-4 rounded-2xl border border-neutral-900 bg-neutral-950/40 hover:bg-neutral-950 hover:border-neutral-800 transition-all duration-300"
          >
            <CheckCircle2 size={18} className="text-brand shrink-0" />
            <span className="text-sm font-medium text-neutral-200">{item}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
