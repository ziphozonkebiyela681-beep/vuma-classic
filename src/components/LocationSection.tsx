import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, ShieldCheck, Flame, Maximize2, X, SlidersHorizontal, Eye, MessageSquare, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { VumaLogo } from './VumaLogo';

export const LocationSection: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Accurate AI adaptation of the storefront at 279 Main Street with Zulu patrons enjoying a feast on ugqoko in the evening
  const displayImage = '/src/assets/images/vuma_evening_zulu_ugqoko_storefront_1792353665643.jpg';

  return (
    <section id="location" className="py-24 bg-[#140406] text-[#F8EFE4] relative overflow-hidden">
      {/* Ambient Red Glow in Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-700/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#FDE5A9] px-4 py-1.5 rounded-full bg-[#36080E] border border-red-600/60 shadow-lg">
            <Flame className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>Evening in The City of Gold • Maboneng</span>
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            279 Main Street, Maboneng
          </h2>

          <p className="text-[#DAC2B0] text-sm sm:text-base leading-relaxed">
            Located in the heart of Johannesburg’s urban cultural district. When dusk falls, step into our 
            vibrant <strong className="text-red-400 font-bold">illuminated crimson storefront</strong> glowing under warm bistro string lights,
            where friends gather around the table to eat flame-grilled meats and dumplings from authentic wooden <strong className="text-[#FDE5A9] font-bold">ugqoko</strong> boards.
          </p>
        </div>

        {/* FEATURED: Outside Of The Place Showcase Card - Shaped to Photo */}
        <div className="mb-14">
          <div className="relative rounded-3xl overflow-hidden border-2 border-red-600/70 hover:border-red-500 bg-[#160307] transition-all duration-300 shadow-[0_0_50px_rgba(220,38,38,0.28)]">
            
            {/* Top Status & Controls Bar with Red Theme */}
            <div className="bg-gradient-to-r from-[#4E080F] via-[#650B14] to-[#3B050B] border-b border-red-700/60 px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="inline-flex items-center gap-2 bg-[#750C16] border border-red-400/60 text-[#FFF2CE] text-xs font-extrabold px-3.5 py-1.5 rounded-xl shadow-md">
                  <Flame className="w-3.5 h-3.5 text-amber-300 fill-amber-300 shrink-0" />
                  <span>Evening Storefront & Zulu Ugqoko Feast • 279 Main St</span>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold text-red-200/90 bg-black/40 px-2.5 py-1 rounded-lg border border-red-800/50">
                  <Sparkles className="w-3 h-3 text-amber-400" /> Shaped to Photo • Authentic Zulu Atmosphere
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Expand / Full Size Lightbox */}
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="inline-flex items-center gap-1.5 p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-[#730A14] hover:bg-[#8F0D19] text-[#FFF2CE] border border-red-400/60 text-xs font-bold shadow-md transition-all cursor-pointer active:scale-95"
                  title="View photo full size"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-amber-300" />
                  <span className="hidden sm:inline">Fullscreen</span>
                </button>
              </div>
            </div>

            {/* Picture Presentation: SHAPED TO PHOTO - Complete natural uncropped view */}
            <div className="relative w-full bg-[#050102] overflow-hidden group flex items-center justify-center">
              <img
                src={displayImage}
                alt="Outside storefront at 279 Main Street, Maboneng with Zulu patrons enjoying a flame-grilled feast from a traditional carved wooden ugqoko platter in the evening"
                className="w-full h-auto block object-contain transition-all duration-300 group-hover:scale-[1.005]"
                referrerPolicy="no-referrer"
              />

              {/* LOGO AT THE SHOP PICTURE: Official Vuma Classic Branded Crest Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-3 bg-gradient-to-r from-[#6E050B]/95 via-[#8F0B13]/95 to-[#540206]/95 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl border-2 border-[#FDE5A9]/80 shadow-[0_10px_35px_rgba(0,0,0,0.85)]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 drop-shadow-md">
                  <VumaLogo variant="badge" size="sm" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] sm:text-xs font-extrabold tracking-widest uppercase text-[#FDE5A9]">
                      Official Storefront
                    </span>
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
                  </div>
                  <div className="text-xs sm:text-sm font-black text-white tracking-wide leading-tight">
                    VUMA CLASSIC
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-red-200/90 font-medium">
                    279 Main St, Maboneng • Flame Grilled
                  </div>
                </div>
              </div>

              {/* Bottom Right Shop Design Watermark Plaque */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 hidden sm:flex items-center gap-2 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-red-500/50 text-xs font-semibold text-[#FFF2CE] shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open Street Braai • Red Facade & Sidewalk Tables</span>
              </div>

              {/* Floating Overlay on Image Hover */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between gap-3 pointer-events-none">
                <span className="text-xs sm:text-sm font-bold text-[#FDE5A9] drop-shadow-md">
                  279 Main Street Storefront • Signature Crimson Red Design & Braai Grill
                </span>
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="p-1.5 px-3 rounded-lg bg-red-800 hover:bg-red-700 text-white text-xs font-bold shadow-lg transition-all cursor-pointer pointer-events-auto flex items-center gap-1.5 border border-red-400/50"
                  title="Expand to Full Size"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-amber-300" />
                  <span>Zoom Full Size</span>
                </button>
              </div>
            </div>

            {/* Caption Section Placed Cleanly Just Below The Image with Red Design Emphasis */}
            <div className="bg-gradient-to-b from-[#1C0508] to-[#120305] border-t-2 border-red-700/60 p-5 sm:p-7 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs uppercase font-extrabold tracking-wider text-red-400">
                      Zulu Communal Feast & Evening Street Braai
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    The Outside Of The Place In The Evening (279 Main Street)
                  </h3>

                  <p className="text-xs sm:text-sm text-[#DAC2B0] max-w-3xl leading-relaxed">
                    At dusk, our authentic corner storefront at <strong className="text-white">279 Main Street</strong> comes alive with the true spirit of Zulu hospitality.
                    Gathered around our sidewalk tables under warm bistro string lights, <span className="text-red-400 font-bold">Zulu friends and patrons share an authentic feast served directly from the traditional carved wooden ugqoko platter</span>—flame-grilled chicken quarters, sizzling boerewors coils, steaming dombolo dumplings, and spicy chakalaka. The glowing half-drum braai pit crackles with red embers, filling the evening Johannesburg air with woodsmoke.
                  </p>
                </div>

                {/* Badges / Highlights Incorporating Ugqoko & Zulu Culture */}
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <div className="px-3.5 py-1.5 rounded-xl bg-[#3D0A11] border border-red-600/70 text-[#FFF2CE] text-xs font-bold flex items-center gap-1.5 shadow-sm">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    <span>Eating on Ugqoko Boards</span>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-xl bg-[#3D0A11] border border-red-600/70 text-[#FDE5A9] text-xs font-bold flex items-center gap-1.5 shadow-sm">
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    <span>Zulu People & Atmosphere</span>
                  </div>
                </div>
              </div>

              {/* Bottom Feature Highlights Bar */}
              <div className="pt-3 border-t border-red-900/60 flex flex-wrap items-center justify-between gap-3 text-xs text-[#DAC2B0]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>24-Hour Precinct Security • Street & Main Street Life Parkade Parking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Red Outdoor Sidewalk Tables • Live Street Braai Coals • Indoor Dining</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Grid: Hours & Contact Information + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Hours & Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-gradient-to-b from-[#21060A] to-[#170407] border-2 border-red-800/60 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="space-y-6">
              {/* Address card */}
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-red-400 font-extrabold flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500" /> Exact Location
                </span>
                <p className="text-xl sm:text-2xl font-black text-white">279 Main Street</p>
                <p className="text-sm text-[#CFB6A3]">
                  Maboneng Precinct, City and Suburban, Johannesburg, 2094, South Africa
                </p>
              </div>

              {/* Trading Hours */}
              <div className="space-y-3 pt-4 border-t border-red-900/70">
                <span className="text-xs uppercase tracking-wider text-[#FDE5A9] font-bold flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" /> Trading Hours
                </span>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between py-1 border-b border-red-950/40">
                    <span className="text-[#DAC2B0]">Monday – Thursday</span>
                    <span className="font-semibold text-white">11:00 AM – 10:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-red-950/40 text-amber-300">
                    <span className="font-medium">Friday – Saturday (Braai & Beats)</span>
                    <span className="font-semibold">11:00 AM – 01:00 AM</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#DAC2B0]">Sunday (Soul Food Sundays)</span>
                    <span className="font-semibold text-white">11:00 AM – 10:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Precinct Security & Parking */}
              <div className="p-4 rounded-xl bg-[#2D080E] border border-red-700/50 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#FDE5A9] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Precinct Security & Parking</span>
                </div>
                <p className="text-[#D3BCAC]">
                  Maboneng Precinct features 24-hour dedicated security patrols. Street parking is
                  available directly along Main Street and Fox Street, plus access to the Main Street
                  Life Parkade.
                </p>
              </div>
            </div>

            {/* Direct Contact & Order Buttons */}
            <div className="pt-4 border-t border-red-900/70 space-y-2.5">
              <a
                href={RESTAURANT_INFO.mrDFoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#FDE5A9] via-[#FDE5A9] to-[#F5C768] hover:from-white hover:to-[#FDE5A9] text-[#140406] text-xs font-black flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 border border-[#FFF2CE]/40"
              >
                <span>Order on Mr D Food</span>
                <Navigation className="w-3.5 h-3.5 text-[#8C070D]" />
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="px-4 py-2.5 rounded-xl bg-[#2F080E] hover:bg-[#450C14] border border-red-700/60 text-[#FFF2D1] text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call: {RESTAURANT_INFO.displayPhone}</span>
                </a>

                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Vuma Classic! 🔥 I would like to place an order from your menu at 279 Main Street, Maboneng.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp Order</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map Preview & Heritage Story */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            {/* Visual Map Simulator */}
            <div className="relative h-72 sm:h-80 rounded-3xl overflow-hidden border-2 border-red-800/60 shadow-2xl bg-[#0F0204]">
              {/* Stylized dark map backdrop with red grid lines */}
              <div className="absolute inset-0 bg-[#160407] opacity-90">
                <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E03131" strokeWidth="0.75" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Street lines schematic in crimson red */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 120 Q 300 140 800 130" stroke="#8C070D" strokeWidth="12" fill="none" />
                  <path d="M 220 0 L 260 400" stroke="#5A0409" strokeWidth="8" fill="none" />
                  <path d="M 520 0 L 490 400" stroke="#5A0409" strokeWidth="8" fill="none" />
                </svg>
              </div>

              {/* Map Marker Pin */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                <div className="relative group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#9B0F15] to-[#E03131] border-2 border-[#FFF2D1] shadow-2xl flex items-center justify-center animate-bounce">
                    <Flame className="w-8 h-8 text-[#FFF2D1]" />
                  </div>
                  <div className="w-6 h-2 bg-black/60 rounded-full blur-sm mx-auto mt-2" />
                </div>

                <div className="mt-4 bg-[#140406]/95 border border-red-500/60 px-5 py-3 rounded-2xl shadow-xl backdrop-blur-md max-w-sm">
                  <p className="font-bold text-white text-base">Vuma Classic</p>
                  <p className="text-xs text-[#FDE5A9]">279 Main St, Maboneng, Johannesburg</p>
                </div>

                <a
                  href="https://maps.google.com/?q=279+Main+Street+Maboneng+Johannesburg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-5 py-2.5 rounded-xl text-xs font-bold text-[#180406] bg-gradient-to-r from-[#FDE5A9] to-[#F5C768] hover:from-white hover:to-[#FDE5A9] shadow-lg flex items-center gap-2 transition-transform active:scale-95"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#8C070D]" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Heritage Story Callout (id="heritage") with Red Design Touch */}
            <div id="heritage" className="bg-gradient-to-b from-[#21060A] to-[#170407] border-2 border-red-800/60 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#8C070D] to-[#B3131B] border border-red-400/50 flex items-center justify-center text-[#FFF2D1] shadow-md">
                  <Flame className="w-5 h-5 fill-[#FFF2D1]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">The Vuma Classic Heritage & Ugqoko</h3>
                  <p className="text-xs text-[#FDE5A9]">Flame-Grilled on Embers • Served on Carved Timber</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#D3BCAE] leading-relaxed">
                Vuma was born from the timeless South African ritual of gathering around the braai stand.
                We believe that food cooked over live hardwood fire and served on traditional wooden <strong className="text-[#FDE5A9]">ugqoko</strong> eating boards carries a communal warmth that connects people. From rich slow-cooked Mogodu, beef stew, and hardbody chicken to sizzling steak & wors meals, every plate honors our ancestors and feeds the soul.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal with Logo */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-7xl flex items-center justify-between pb-3 border-b border-red-800/50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 shrink-0">
                <VumaLogo variant="badge" size="sm" />
              </div>
              <div>
                <span className="text-sm font-bold text-[#FFF2CE] block">
                  The Outside Of The Place (279 Main Street) • Full Resolution
                </span>
                <span className="text-xs text-red-300">Vuma Classic Red Storefront Design & Braai</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="w-full flex-1 flex items-center justify-center py-4 overflow-auto relative">
            <img
              src={displayImage}
              alt="Outside storefront full size"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border-2 border-red-600/50"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="text-center text-xs text-[#D8BEAD]">
            Press ESC or click close to return to the showcase
          </div>
        </div>
      )}
    </section>
  );
};
