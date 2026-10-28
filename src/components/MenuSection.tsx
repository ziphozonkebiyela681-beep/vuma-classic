import React, { useState, useMemo } from 'react';
import { Flame, Search, UtensilsCrossed, Truck, Phone, Mail, MessageSquare, Sparkles, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/menuData';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'main-course' | 'grills' | 'drinks-extras'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlySignatures, setOnlySignatures] = useState(false);

  const getItemImage = (item: MenuItem): string | undefined => {
    return item.image;
  };

  const categories = [
    { id: 'all', label: 'All Menu' },
    { id: 'main-course', label: 'Main Course (R70)' },
    { id: 'grills', label: 'Flame Grills' },
    { id: 'drinks-extras', label: 'Drinks & Extras' },
  ] as const;

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.traditionalName && item.traditionalName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSignature = !onlySignatures || item.isSignature || item.isPopular;

      return matchesCategory && matchesSearch && matchesSignature;
    });
  }, [activeCategory, searchQuery, onlySignatures]);

  const getItemWhatsAppUrl = (item: MenuItem): string => {
    const text = `Hello Vuma Classic! 🔥 I would like to order: *${item.name}* (R${item.price})${
      item.servingSize ? ` - ${item.servingSize}` : ''
    }. Please confirm availability and prep time! Siyabonga.`;
    return `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="menu" className="py-20 bg-[#140406] text-[#F8EFE4] relative">
      {/* Background ambience */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#120406] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#FDE5A9]">
            <Flame className="w-3.5 h-3.5 text-red-500" />
            <span>Official Vuma Classic Food Menu</span>
            <Flame className="w-3.5 h-3.5 text-red-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Food Menu & Grills
          </h2>

          <p className="text-[#DAC2B0] text-sm sm:text-base leading-relaxed">
            Flame-grilled over live hardwood coals and hearty traditional pots prepared fresh at
            279 Main Street, Maboneng.
          </p>

          {/* ILLUMINATED DELIVERY NOTICE CARD - LIGHTS UP */}
          <div className="relative mx-auto max-w-2xl mt-6 p-0.5 rounded-2xl bg-gradient-to-r from-amber-400 via-red-500 to-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.6)]">
            <div className="bg-gradient-to-r from-[#2B060B] via-[#38080E] to-[#2B060B] rounded-[14px] px-5 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left border border-amber-400/40">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-red-600 text-white shadow-[0_0_15px_rgba(245,158,11,0.8)] shrink-0">
                  <Truck className="w-5 h-5 text-white animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-80" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-300 shadow-[0_0_8px_#F59E0B]" />
                    </span>
                    <span className="text-xs sm:text-sm font-black tracking-wide uppercase text-amber-300 drop-shadow-[0_0_10px_rgba(253,224,71,0.9)]">
                      Deliveries at Vuma are based on the quantity!
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#E8D0BE] mt-0.5 font-medium">
                    Direct deliveries depend on order quantity. Call or WhatsApp us to verify delivery for your order!
                  </p>
                </div>
              </div>
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Vuma Classic! 🔥 I would like to inquire about a delivery order based on quantity.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-3.5 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition-all shadow-md active:scale-95 flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>Inquire Delivery</span>
              </a>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-2 bg-[#200609] border border-red-900/50 rounded-2xl">
          {/* Category Tabs (Segmented controls) */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#8C070D] to-[#690308] text-[#FFF2D1] shadow-md border border-[#FDE5A9]/20'
                    : 'text-[#D0B7A3] hover:text-white hover:bg-red-950/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input & Popular Toggle */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-red-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search beef stew, wors, chicken..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-[#160406] border border-red-900/60 rounded-xl text-white placeholder-red-300/40 focus:outline-none focus:ring-1 focus:ring-red-400"
              />
            </div>

            <button
              onClick={() => setOnlySignatures(!onlySignatures)}
              className={`px-3 py-2 text-xs font-semibold rounded-xl border transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                onlySignatures
                  ? 'bg-[#8C070D] text-[#FDE5A9] border-[#FDE5A9]/40'
                  : 'bg-[#180406] text-[#CBB29E] border-red-900/60 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>House Favorites</span>
            </button>
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#1D0609] rounded-2xl border border-red-900/40">
            <UtensilsCrossed className="w-10 h-10 text-red-500/60 mx-auto mb-3" />
            <p className="text-lg font-medium text-white">No dishes found matching your search</p>
            <p className="text-sm text-[#BFA695] mt-1">Try clearing your search terms or picking another category.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setOnlySignatures(false);
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-[#180406] bg-[#FDE5A9] rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const displayImage = getItemImage(item);

              return (
                <div
                  key={item.id}
                  className="group flex flex-col justify-between bg-[#1C0508] border border-red-900/40 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-200 hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-red-950/40"
                >
                  {/* Photo or Header Motif */}
                  {displayImage ? (
                    <div className="relative h-44 w-full overflow-hidden bg-black/40">
                      <img
                        src={displayImage}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C0508] via-transparent to-black/30" />
                      
                      {item.isSignature && (
                        <div className="absolute top-3 left-3 bg-[#8C070D]/90 backdrop-blur-sm border border-[#FDE5A9]/30 text-[#FFF2D1] text-[11px] font-bold px-2.5 py-1 rounded-md shadow">
                          Signature
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="p-4 pb-0 flex items-center justify-between text-xs text-[#D8BFA9]">
                      <div className="flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5 text-red-500" />
                        <span className="capitalize font-semibold text-[#FDE5A9]">
                          {item.category === 'main-course'
                            ? 'Main Course'
                            : item.category === 'grills'
                            ? 'Flame Grill'
                            : 'Drinks & Extras'}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Card Content Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Traditional Subtitle */}
                      {item.traditionalName && (
                        <p className="text-xs font-serif italic text-[#FDE5A9]/80 mb-1">
                          {item.traditionalName}
                        </p>
                      )}

                      {/* Item Name */}
                      <h3 className="text-lg font-bold text-white group-hover:text-[#FDE5A9] transition-colors leading-snug">
                        {item.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#CDB4A2] mt-2 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Metadata row (unboxed, separated by middot) */}
                      <div className="mt-3 flex items-center gap-2 text-[11px] text-[#A89080]">
                        {item.servingSize && <span>{item.servingSize}</span>}
                        {item.servingSize && item.tags && item.tags[0] && (
                          <span aria-hidden="true">·</span>
                        )}
                        {item.tags && item.tags[0] && <span>{item.tags[0]}</span>}
                      </div>
                    </div>

                    {/* Price & Action Row */}
                    <div className="mt-5 pt-4 border-t border-red-950/70 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] text-[#A68F80] block uppercase tracking-wider font-semibold">Price</span>
                        <span className="text-2xl font-bold text-[#FDE5A9] font-mono tabular-nums">
                          R{item.price}
                        </span>
                      </div>

                      <a
                        href={getItemWhatsAppUrl(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 active:scale-95 bg-emerald-600 hover:bg-emerald-500 text-white shadow-md hover:shadow-emerald-950/40"
                        aria-label={`Order ${item.name} via WhatsApp`}
                      >
                        <MessageSquare className="w-4 h-4 text-emerald-100" />
                        <span>Order on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Direct Call & Delivery Contact Box */}
        <div className="mt-14 p-6 rounded-2xl bg-[#26060A] border-2 border-red-800/60 shadow-[0_0_25px_rgba(220,38,38,0.3)] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-red-600/35 via-amber-500/35 to-red-600/35 border border-amber-400/80 shadow-[0_0_15px_rgba(245,158,11,0.5)]">
              <span className="w-2 h-2 rounded-full bg-amber-300 animate-ping" />
              <span className="text-xs font-black uppercase text-amber-200 tracking-wide drop-shadow-[0_0_6px_rgba(253,224,71,0.8)]">
                DELIVERIES AT VUMA ARE BASED ON THE QUANTITY!
              </span>
            </div>
            <h4 className="text-base font-bold text-white">Call or WhatsApp for Direct Orders & Quantity Deliveries</h4>
            <p className="text-xs sm:text-sm text-[#CDB4A2]">
              Phone: <span className="text-white font-semibold">{RESTAURANT_INFO.phone}</span> • Email: <span className="text-white font-semibold">{RESTAURANT_INFO.email}</span> • 279 Main St, Maboneng
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={RESTAURANT_INFO.youzimeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#FFD369] text-[#140406] hover:bg-white transition-all shadow-md flex items-center gap-2 border border-amber-300/40 active:scale-95"
            >
              <ShoppingBag className="w-4 h-4 text-[#8C070D]" />
              <span>Order on youzime.co.za</span>
            </a>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Vuma%20Classic!%20I%20would%20like%20to%20place%20a%20food%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#25D366] text-white hover:bg-[#20ba5a] transition-colors shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
