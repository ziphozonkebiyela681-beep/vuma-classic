import React from 'react';

interface VumaLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'badge' | 'text-only' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const VumaLogo: React.FC<VumaLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md'
}) => {
  // SVG Graphic replicating the exact official Vuma Classic logo provided by the user
  const LogoSVG = ({ showBackground = true }: { showBackground?: boolean }) => (
    <svg
      viewBox="0 0 500 500"
      className="w-full h-full select-none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Vuma Classic - Flame Grilled"
    >
      <defs>
        {/* Rich crimson radial gradient matching the exact uploaded logo */}
        <radialGradient id="vumaRedRadial" cx="50%" cy="45%" r="68%">
          <stop offset="0%" stopColor="#BD121B" />
          <stop offset="30%" stopColor="#9E0A12" />
          <stop offset="65%" stopColor="#6E0207" />
          <stop offset="100%" stopColor="#380003" />
        </radialGradient>

        {/* Warm creamy ivory gradient for braai stand and typography */}
        <linearGradient id="vumaCream" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF7DE" />
          <stop offset="100%" stopColor="#FEE4A3" />
        </linearGradient>

        {/* Subtle 3D drop shadow matching the emblem */}
        <filter id="vumaShadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="3.5" stdDeviation="3.5" floodColor="#260003" floodOpacity="0.75" />
        </filter>

        <filter id="textGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#180002" floodOpacity="0.8" />
        </filter>
      </defs>

      {/* 1. Rich Crimson Vignette Background */}
      {showBackground && (
        <rect width="500" height="500" rx="42" fill="url(#vumaRedRadial)" />
      )}

      {/* Main Group with 3D drop shadow */}
      <g filter="url(#vumaShadow)">
        {/* ============================================================== */}
        {/* 1. BRAAI STAND WITH COALS & SIZZLING BOEREWORS COILS           */}
        {/* ============================================================== */}
        <g id="braai-stand" transform="translate(0, 10)">
          {/* Half drum bowl outline & body */}
          <path
            d="M 172 170 C 168 180 182 210 250 210 C 318 210 332 180 328 170 C 324 163 314 162 305 163 C 275 168 225 168 195 163 C 186 162 176 163 172 170 Z"
            fill="url(#vumaCream)"
          />

          {/* Left curved teardrop handle */}
          <path
            d="M 178 172 C 158 168 152 180 160 190 C 168 198 182 192 182 184"
            fill="none"
            stroke="url(#vumaCream)"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Right curved teardrop handle */}
          <path
            d="M 322 172 C 342 168 348 180 340 190 C 332 198 318 192 318 184"
            fill="none"
            stroke="url(#vumaCream)"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* 3 Tripod legs tapering downwards */}
          {/* Left leg angled outward */}
          <path
            d="M 204 200 L 178 258"
            stroke="url(#vumaCream)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Center leg straight down */}
          <path
            d="M 250 210 L 250 268"
            stroke="url(#vumaCream)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Right leg angled outward */}
          <path
            d="M 296 200 L 322 258"
            stroke="url(#vumaCream)"
            strokeWidth="10"
            strokeLinecap="round"
          />

          {/* Sizzling meats / Boerewors coils on the top grill grate */}
          {/* 4 angled sausage segments */}
          <path
            d="M 194 164 C 200 152 214 152 222 163"
            stroke="url(#vumaCream)"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 218 162 C 226 148 242 148 250 161"
            stroke="url(#vumaCream)"
            strokeWidth="6.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 248 160 C 256 146 272 146 280 159"
            stroke="url(#vumaCream)"
            strokeWidth="6.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 278 158 C 286 146 300 148 308 160"
            stroke="url(#vumaCream)"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          {/* Right curl flourish on grill */}
          <path
            d="M 306 158 C 314 148 326 150 328 158"
            stroke="url(#vumaCream)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* ============================================================== */}
        {/* 2. "-VUMA CLASSIC-" SCRIPT CALLIGRAPHY WITH SIGNATURE FLOURISHES*/}
        {/* ============================================================== */}
        <g id="brand-typography">
          {/* Left horizontal spatula line / flourish leading to "V" */}
          <path
            d="M 38 305 C 32 305 32 296 40 295 L 94 295 C 104 295 114 300 120 305 Z"
            fill="url(#vumaCream)"
          />
          <rect x="70" y="297" width="28" height="7" rx="3.5" fill="url(#vumaCream)" />

          {/* Stylized script wordmark text */}
          <text
            x="248"
            y="330"
            textAnchor="middle"
            fontFamily="'Pacifico', 'Yellowtail', 'Caveat', cursive, sans-serif"
            fontSize="82"
            fontWeight="bold"
            fontStyle="italic"
            letterSpacing="-1.5"
            fill="url(#vumaCream)"
            filter="url(#textGlow)"
          >
            Vuma Classic
          </text>

          {/* Right flourish / tail extending from the 'c' */}
          <path
            d="M 420 292 C 436 286 458 286 472 292 C 480 295 478 302 470 303 C 452 304 436 300 422 306 C 438 312 458 310 472 314 C 478 316 476 322 468 322 C 446 324 428 318 416 310"
            fill="url(#vumaCream)"
          />
        </g>

        {/* ============================================================== */}
        {/* 3. "• FLAME GRILLED •" SUBTITLE                                  */}
        {/* ============================================================== */}
        <g id="subtitle" transform="translate(0, 385)">
          {/* Left solid dot */}
          <circle cx="128" cy="-6" r="6" fill="url(#vumaCream)" />

          {/* Clean bold geometric uppercase title */}
          <text
            x="250"
            y="0"
            textAnchor="middle"
            fontFamily="'Outfit', 'Plus Jakarta Sans', sans-serif"
            fontSize="23"
            fontWeight="800"
            letterSpacing="7.5"
            fill="url(#vumaCream)"
            filter="url(#textGlow)"
          >
            FLAME GRILLED
          </text>

          {/* Right solid dot */}
          <circle cx="372" cy="-6" r="6" fill="url(#vumaCream)" />
        </g>
      </g>
    </svg>
  );

  // Variant: Badge (Circular or Rounded emblem with rich crimson background)
  if (variant === 'badge') {
    return (
      <div className={`relative overflow-hidden rounded-3xl p-4 sm:p-6 bg-gradient-to-br from-[#A5080E] via-[#7B0307] to-[#450003] border-2 border-[#FEE49B]/50 shadow-[0_10px_35px_rgba(165,8,14,0.45)] flex items-center justify-center ${className}`}>
        <div className="w-full aspect-square max-w-[280px] flex items-center justify-center">
          <LogoSVG showBackground={false} />
        </div>
      </div>
    );
  }

  // Variant: Compact (Horizontal format for Navbar and Action strips)
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {/* Exact emblem icon badge */}
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#A5080E] via-[#800307] to-[#4A0105] p-1 border border-[#FEE49B]/60 shadow-[0_4px_15px_rgba(165,8,14,0.5)] shrink-0 flex items-center justify-center overflow-hidden">
          <LogoSVG showBackground={false} />
        </div>

        {/* Cursive Brand Typography with Subtitle */}
        <div className="flex flex-col leading-tight">
          <span className="font-script-brand text-2xl sm:text-[26px] font-bold tracking-tight text-[#FFF4D4] drop-shadow-sm">
            Vuma Classic
          </span>
          <span className="text-[8px] sm:text-[9px] font-extrabold tracking-[0.22em] uppercase text-[#FEE4A3] mt-0.5">
            • FLAME GRILLED •
          </span>
        </div>
      </div>
    );
  }

  // Variant: Text-only
  if (variant === 'text-only') {
    return (
      <div className={`inline-flex flex-col items-center ${className}`}>
        <span className="font-script-brand text-3xl sm:text-4xl font-bold tracking-tight text-[#FFF4D4] drop-shadow-md">
          Vuma Classic
        </span>
        <span className="text-[10px] font-extrabold tracking-[0.25em] uppercase text-[#FEE4A3] mt-0.5">
          • FLAME GRILLED •
        </span>
      </div>
    );
  }

  // Variant: Icon-only
  if (variant === 'icon') {
    return (
      <div className={`aspect-square rounded-2xl bg-gradient-to-br from-[#A5080E] via-[#800307] to-[#4A0105] p-2 border border-[#FEE4A3]/60 shadow-lg flex items-center justify-center ${className}`}>
        <LogoSVG showBackground={false} />
      </div>
    );
  }

  // Full default view: Exact 1:1 replica of the user's uploaded image with crimson background
  return (
    <div className={`w-full max-w-[360px] aspect-square mx-auto flex items-center justify-center rounded-3xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.7)] ${className}`}>
      <LogoSVG showBackground={true} />
    </div>
  );
};
