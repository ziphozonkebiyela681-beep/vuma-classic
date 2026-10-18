import React, { useState } from 'react';
import { Flame, Music, Volume2, Star, Sparkles } from 'lucide-react';
import { VIBE_HIGHLIGHTS, REVIEWS } from '../data/menuData';

export const VibeGallery: React.FC = () => {
  const [selectedVibeIndex, setSelectedVibeIndex] = useState(0);

  const activeVibe = VIBE_HIGHLIGHTS[selectedVibeIndex];
  const currentVibeImage = activeVibe.image;

  return (
    <section id="vibe" className="py-24 bg-[#100305] text-[#F8EFE4] relative overflow-hidden">
      {/* Decorative radial lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-red-700/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#FDE5A9]">
            <Music className="w-3.5 h-3.5 text-amber-400" />
            <span>The Maboneng Spirit & Soul</span>
            <Flame className="w-3.5 h-3.5 text-red-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            The Vibe at 279 Main Street
          </h2>

          <p className="text-[#DAC2B0] text-sm sm:text-base leading-relaxed">
            Vuma Classic isn't just about eating—it's an experience. Live wood embers crackling,
            deep basslines of South African house & amapiano, and genuine warmth that makes everyone
            feel at home.
          </p>
        </div>

        {/* Featured Vibe Showcase (Interactive Bento / Split Feature) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1A0508] border border-red-900/40 rounded-3xl p-6 sm:p-8 shadow-2xl">
          {/* Left Column: Interactive Selector & Story */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#FDE5A9] font-semibold">
                {activeVibe.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {activeVibe.title}
              </h3>
              <p className="text-sm font-medium text-[#F4C59A]">
                {activeVibe.subtitle}
              </p>
            </div>

            <p className="text-sm text-[#CFB7A5] leading-relaxed">
              {activeVibe.description}
            </p>

            {/* Selector Tabs */}
            <div className="pt-2 flex flex-col gap-2">
              <span className="text-xs uppercase tracking-wider text-[#A48F80] font-semibold">
                Explore the Experience
              </span>
              <div className="grid grid-cols-2 gap-2">
                {VIBE_HIGHLIGHTS.map((vibe, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedVibeIndex(idx)}
                    className={`p-3 text-left rounded-xl text-xs font-semibold transition-all ${
                      selectedVibeIndex === idx
                        ? 'bg-[#8C070D] text-[#FFF2D1] border border-[#FDE5A9]/30 shadow-md'
                        : 'bg-[#25070B] text-[#BFA695] border border-red-900/30 hover:text-white hover:bg-red-950/40'
                    }`}
                  >
                    <span className="block truncate">{vibe.title}</span>
                    <span className="text-[10px] opacity-75 font-normal block">{vibe.tag}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Atmosphere Soundtrack Banner */}
            <div className="p-4 rounded-xl bg-[#2A080D] border border-red-800/40 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#E03131] flex items-center justify-center text-white shrink-0">
                <Volume2 className="w-4 h-4 animate-pulse" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-white truncate">Curated Soundtrack</p>
                <p className="text-[11px] text-[#D4BCAB] truncate">Deep Soulful Amapiano & Afro-House every weekend</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero High-Res Photography */}
          <div className="lg:col-span-7 h-[340px] sm:h-[440px] rounded-2xl overflow-hidden relative shadow-lg group">
            <img
              src={currentVibeImage}
              alt={activeVibe.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20" />
            

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#FDE5A9] font-bold">279 Main Street</span>
                <p className="text-sm font-semibold">{activeVibe.title}</p>
              </div>
              <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-[#FDE5A9] border border-red-500/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Maboneng Live</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Community Voices / Testimonials */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-[#FDE5A9] font-bold">Loved By Jozi</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">What Our Guests Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-[#1C0508] border border-red-900/40 p-6 rounded-2xl flex flex-col justify-between space-y-4 shadow-md"
              >
                <div className="space-y-3">
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-sm text-[#E2CFC0] leading-relaxed italic font-serif">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-red-950/70">
                  <p className="text-sm font-bold text-white">{review.author}</p>
                  <p className="text-xs text-[#A89080]">{review.role}</p>
                  <div className="mt-2 text-[11px] text-[#FDE5A9]">
                    <span>Fav: {review.favoriteDish}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
