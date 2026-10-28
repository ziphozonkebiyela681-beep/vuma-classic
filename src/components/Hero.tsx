import React, { useState, useEffect } from 'react';
import { Flame, MapPin, Phone, ExternalLink, MessageSquare, Utensils, Heart, Award, Sparkles, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface HeroProps {
  onExploreMenu: () => void;
}

interface StaffView {
  id: 'kitchen' | 'braai';
  label: string;
  badge: string;
  title: string;
  image: string;
  caption: string;
  detail: string;
}

const STAFF_VIEWS: StaffView[] = [
  {
    id: 'kitchen',
    label: 'Cooking In The Shop',
    badge: 'Inside Kitchen • Food Made With Love',
    title: 'Cooking Fresh Daily With Love',
    image: '/src/assets/images/vuma_indoor_kitchen_cooks_1792352906891.jpg',
    caption: 'Our determined cooks preparing rich traditional stews, tender mogodu & steaming fluffy pap with heart.',
    detail: 'Made with love & generational heritage'
  },
  {
    id: 'braai',
    label: 'Braai Masters Outside',
    badge: 'Street Embers • Determined & Great Service',
    title: 'Determined Braai Masters Outside',
    image: '/src/assets/images/vuma_outdoor_braai_masters_1792352907198.jpg',
    caption: 'Our passionate braai masters expertly searing flame-grilled chicken & boerewors with warm, friendly service.',
    detail: 'Flawless coals & warm hospitable service'
  }
];

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  const [activeStaffIndex, setActiveStaffIndex] = useState(0);
  const activeStaff = STAFF_VIEWS[activeStaffIndex];

  // Auto-rotate the revolving card gently every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStaffIndex((prev) => (prev + 1) % STAFF_VIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const heroImageSrc = '/src/assets/images/vuma_evening_storefront_1792352280835.jpg';

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-36 pb-12 overflow-hidden">
      {/* Background Hero Image with dark crimson & evening ambient lighting scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImageSrc}
          alt="Vuma Classic evening storefront at 279 Main St Maboneng illuminated with glowing braai fire"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-[1.15]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120406] via-[#120406]/65 to-[#120406]/75" />
        <div className="absolute inset-0 bg-radial from-red-600/20 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headlines & Order CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Location & Determined Spirit Taglines */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#34080D]/90 border border-red-500/40 text-[#FDE5A9] text-xs font-bold backdrop-blur-sm">
                <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>279 Main Street, Maboneng, Johannesburg</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#240609]/90 border border-amber-500/40 text-amber-300 text-xs font-semibold">
                <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
                <span>Good Service • Food Made With Love</span>
              </div>
            </div>

            {/* Hero Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] text-balance">
              Traditional Soul. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE5A9] via-[#FFD369] to-[#F28B82]">
                Flame-Grilled Mastery
              </span>{' '}
              in Maboneng.
            </h1>

            {/* Description Prose highlighting determination, good service, and food made with love */}
            <p className="text-base sm:text-lg text-[#F1DFCF] max-w-2xl leading-relaxed font-normal">
              Where the coals stay red-hot and the heritage runs deep. Powered by a truly <strong className="text-white font-bold">determined team</strong> who 
              pride themselves on <strong className="text-amber-300 font-bold">warm, welcoming service</strong> and <strong className="text-[#FDE5A9] font-bold">making every meal with genuine love</strong>. 
              From rich slow-simmered stews cooked with heart inside the shop, to prime braai cuts charred over open embers outside. 
              Served on authentic carved wooden <strong className="text-[#FDE5A9] font-semibold">ugqoko</strong> eating boards.
            </p>

            {/* Action Buttons: Online Order on Youzime + Direct Call / WhatsApp + Menu */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href={RESTAURANT_INFO.youzimeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-sm sm:text-base font-bold text-[#140406] bg-gradient-to-r from-[#FDE5A9] via-[#FFD369] to-[#F5C768] hover:from-white hover:to-[#FFD369] rounded-xl shadow-lg shadow-amber-950/50 transition-all duration-200 active:scale-95 flex items-center gap-2 group border border-amber-200/50"
              >
                <ShoppingBag className="w-4 h-4 text-[#8C070D]" />
                <span>Order on youzime.co.za</span>
                <ExternalLink className="w-4 h-4 text-[#8C070D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="px-5 py-3.5 text-sm sm:text-base font-bold text-[#FDE5A9] bg-[#2C070B]/85 hover:bg-[#3D0A0F] border border-red-800/60 rounded-xl transition-all duration-200 active:scale-95 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {RESTAURANT_INFO.displayPhone}</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Vuma Classic! 🔥 I would like to place an order from your menu at 279 Main Street, Maboneng.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-sm sm:text-base font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-xl shadow-lg shadow-emerald-950/40 transition-all duration-200 active:scale-95 flex items-center gap-2 border border-emerald-300/30"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Order on WhatsApp</span>
              </a>

              <button
                onClick={onExploreMenu}
                className="px-4 py-3.5 text-sm sm:text-base font-semibold text-[#D4BCAB] hover:text-white bg-transparent hover:bg-white/5 rounded-xl transition-colors flex items-center gap-2"
              >
                <Flame className="w-4 h-4 text-red-500" />
                <span>View Menu (from R15)</span>
              </button>
            </div>

            {/* Quick Ordering & Delivery Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#EAD2BF]/90">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Online Order on youzime.co.za</span>
              </div>
              <span className="text-red-800" aria-hidden="true">/</span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-red-600/35 via-amber-500/30 to-red-600/35 border border-amber-400 shadow-[0_0_18px_rgba(245,158,11,0.6)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-80" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-300 shadow-[0_0_8px_#F59E0B]" />
                </span>
                <span className="font-extrabold text-amber-200 tracking-wide uppercase text-[11px] drop-shadow-[0_0_6px_rgba(253,224,71,0.7)]">
                  Deliveries at Vuma are based on the quantity!
                </span>
              </div>
              <span className="text-red-800" aria-hidden="true">/</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Sit-in & Takeaway at 279 Main St</span>
              </div>
            </div>
          </div>

          {/* Right Column: REVOLVING STAFF CARD (Kitchen Cooks & Braai Masters) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Back ambient flame glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600/35 to-amber-500/20 rounded-3xl blur-xl opacity-75" />

              {/* Revolving Card */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#24060A] to-[#140306] border-2 border-red-600/70 shadow-2xl">
                
                {/* Top Revolving Switcher Tabs: Cooking In Shop vs Braai Masters Outside */}
                <div className="bg-gradient-to-r from-[#4E080F] via-[#650B14] to-[#3B050B] p-2.5 border-b border-red-700/60 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 w-full">
                    {STAFF_VIEWS.map((tab, idx) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveStaffIndex(idx)}
                        className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer flex items-center justify-center gap-1.5 ${
                          activeStaffIndex === idx
                            ? 'bg-gradient-to-r from-[#B8141F] to-[#800307] text-[#FFF2CE] shadow-md border border-red-400/50'
                            : 'bg-black/40 text-[#D8BEAD] hover:text-white hover:bg-black/60'
                        }`}
                      >
                        {tab.id === 'kitchen' ? (
                          <Utensils className="w-3.5 h-3.5 text-amber-300" />
                        ) : (
                          <Flame className="w-3.5 h-3.5 text-red-400" />
                        )}
                        <span>{tab.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Main Revolving Photo Display */}
                <div className="relative w-full aspect-[4/3] bg-black overflow-hidden group">
                  <img
                    src={activeStaff.image}
                    alt={activeStaff.title}
                    className="w-full h-full object-cover object-center block transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Scrim with Badge & Caption */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/95 via-black/50 to-transparent">
                    <div className="inline-flex items-center gap-1.5 bg-red-700/90 border border-red-400/50 text-[#FFF2CE] text-[10px] sm:text-xs font-extrabold px-3 py-1 rounded-md shadow mb-1.5">
                      <Heart className="w-3 h-3 text-red-300 fill-red-300" />
                      <span>{activeStaff.badge}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white font-medium drop-shadow-md leading-snug">
                      {activeStaff.caption}
                    </p>
                  </div>
                </div>

                {/* Bottom Bar: Highlighting Determination, Great Service & Love */}
                <div className="p-4 bg-[#1C0508] border-t border-red-900/60 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#FDE5A9] font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Really Determined • Great Service • Made With Love</span>
                    </span>
                    <span className="text-red-400 font-semibold text-[11px]">
                      279 Main St
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                    <div className="bg-[#2B080D] rounded-xl p-2 border border-red-800/40 text-center">
                      <span className="block text-[#A89080] text-[10px] uppercase font-semibold">Direct Call</span>
                      <span className="font-bold text-[#FDE5A9]">{RESTAURANT_INFO.displayPhone}</span>
                    </div>
                    <a
                      href={RESTAURANT_INFO.youzimeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#2B080D] hover:bg-[#3D0A11] rounded-xl p-2 border border-red-800/40 text-center transition-colors block"
                    >
                      <span className="block text-[#A89080] text-[10px] uppercase font-semibold">Online Order</span>
                      <span className="font-bold text-amber-300">youzime.co.za</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Item Feature Metric / Value Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#1D0609]/90 border border-red-900/50 backdrop-blur-md">
          <div className="p-3 text-center sm:text-left">
            <span className="text-xs uppercase tracking-wider text-[#FDE5A9]/70 font-semibold block">Cooking Style</span>
            <span className="text-base font-bold text-white block mt-0.5">Live Hardwood Braai</span>
            <span className="text-xs text-[#CBB29E] mt-0.5 block">Charred over red-hot coals</span>
          </div>
          <div className="p-3 text-center sm:text-left border-l border-red-900/40">
            <span className="text-xs uppercase tracking-wider text-[#FDE5A9]/70 font-semibold block">Traditional Serving</span>
            <span className="text-base font-bold text-white block mt-0.5">Served on Ugqoko</span>
            <span className="text-xs text-[#CBB29E] mt-0.5 block">Carved wooden eating platters</span>
          </div>
          <div className="p-3 text-center sm:text-left border-l border-red-900/40">
            <span className="text-xs uppercase tracking-wider text-[#FDE5A9]/70 font-semibold block">Our Promise</span>
            <span className="text-base font-bold text-white block mt-0.5">Made With Love</span>
            <span className="text-xs text-[#CBB29E] mt-0.5 block">Determined crew & good service</span>
          </div>
          <div className="p-3 text-center sm:text-left border-l border-red-900/40">
            <span className="text-xs uppercase tracking-wider text-[#FDE5A9]/70 font-semibold block">Precinct Location</span>
            <span className="text-base font-bold text-white block mt-0.5">279 Main Street</span>
            <span className="text-xs text-[#CBB29E] mt-0.5 block">Maboneng, Johannesburg</span>
          </div>
        </div>
      </div>
    </section>
  );
};
