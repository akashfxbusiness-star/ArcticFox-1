import React from 'react';
import { TelegramInviteScreen } from './components/TelegramInviteScreen';

export default function App() {
  // Directly open Telegram on CTA click
  const handleOpenTelegram = () => {
    window.open('https://t.me/ArcticFoxEA', '_blank', 'noopener,noreferrer');
  };

  // Directly open Official Website on link click
  const handleOpenWebsite = () => {
    window.open('https://arcticfox.app', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-brand/30 selection:text-brand" id="app-root">
      {/* Centered High-Converting Screen */}
      <main>
        <TelegramInviteScreen
          onJoinTelegram={handleOpenTelegram}
          onVisitWebsite={handleOpenWebsite}
        />
      </main>
    </div>
  );
}
