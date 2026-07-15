import React from 'react';
import arcticFoxLogo from '../assets/images/arcticfox-logo.png';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 32 }) => {
  return (
    <div className={`flex items-center gap-2.5 font-display ${className}`} id="arcticfox-logo">
      <img
        src={arcticFoxLogo}
        alt="ArcticFox EA Logo"
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="rounded-full object-cover filter drop-shadow-[0_0_8px_rgba(255,138,0,0.4)] shrink-0"
      />
      <span className="font-bold tracking-wider text-xl uppercase font-display bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
        Arctic<span className="text-brand">Fox EA</span>
      </span>
    </div>
  );
};
