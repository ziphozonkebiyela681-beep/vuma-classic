import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ExternalLink, MessageSquare } from 'lucide-react';
import { VumaLogo } from './VumaLogo';
import { RESTAURANT_INFO } from '../data/menuData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsAppUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Vuma Classic! 🔥 I would like to place an order from your menu at 279 Main Street, Maboneng.'
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#140406]/95 backdrop-blur-md shadow-xl border-b border-red-950/60 py-2.5'
          : 'bg-gradient-to-b from-[#120406]/95 via-[#120406]/70 to-transparent py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* ZONE 1: Brand Wordmark (Single text/brand element) */}
          <a
            href="#"
            className="flex items-center gap-2 text-slate-100 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded-lg"
            aria-label="Vuma Classic Home"
          >
            <VumaLogo variant="compact" />
          </a>

          {/* ZONE 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#F4DDC4]">
            <a
              href="#menu"
              className="hover:text-[#FFF2D1] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-red-500 underline-offset-8"
            >
              The Menu
            </a>
            <a
              href="#customer-platter-showcase"
              className="hover:text-[#FFF2D1] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-red-500 underline-offset-8"
            >
              Customer Platter
            </a>
            <a
              href="#vibe"
              className="hover:text-[#FFF2D1] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-red-500 underline-offset-8"
            >
              The Vibe & Ugqoko
            </a>
            <a
              href="#location"
              className="hover:text-[#FFF2D1] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-red-500 underline-offset-8"
            >
              279 Main St
            </a>
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="text-[#FDE5A9] hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{RESTAURANT_INFO.displayPhone}</span>
            </a>
          </nav>

          {/* ZONE 3: Primary actions */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Direct WhatsApp Order CTA Button */}
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-xl shadow-md transition-all active:scale-95 whitespace-nowrap shrink-0 cursor-pointer border border-emerald-300/30"
              title="Order directly via WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Order</span>
            </a>

            {/* Primary Action Button: Order on Mr D Food */}
            <a
              href={RESTAURANT_INFO.mrDFoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-bold text-[#140406] bg-gradient-to-r from-[#FDE5A9] via-[#FDE5A9] to-[#F5C768] hover:from-white hover:to-[#FDE5A9] rounded-xl shadow-md transition-all active:scale-95 whitespace-nowrap shrink-0 border border-[#FFF2CE]/40"
            >
              <span>Mr D</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#8C070D]" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#F4DDC4] hover:text-white rounded-lg focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#180508] border-b border-red-900/60 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="flex justify-center pb-2 border-b border-red-950/80">
            <VumaLogo variant="text-only" />
          </div>
          <div className="flex flex-col gap-3 pt-2 text-base font-medium">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F4DDC4] hover:text-[#FFF2D1] py-2 border-b border-red-950/40"
            >
              The Menu & Grills
            </a>
            <a
              href="#customer-platter-showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F4DDC4] hover:text-[#FFF2D1] py-2 border-b border-red-950/40"
            >
              Customer Platter Showcase
            </a>
            <a
              href="#vibe"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F4DDC4] hover:text-[#FFF2D1] py-2 border-b border-red-950/40"
            >
              The Vibe & Ugqoko Boards
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F4DDC4] hover:text-[#FFF2D1] py-2 border-b border-red-950/40"
            >
              Location & Hours (279 Main St)
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={RESTAURANT_INFO.mrDFoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center font-bold text-[#140406] bg-gradient-to-r from-[#FDE5A9] to-[#F5C768] rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <span>Order on Mr D Food</span>
              <ExternalLink className="w-4 h-4 text-[#8C070D]" />
            </a>
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="w-full py-2.5 text-center text-xs font-semibold text-[#FDE5A9] border border-red-900/60 rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" /> Call: {RESTAURANT_INFO.displayPhone}
            </a>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20Vuma%20Classic!%20I%20would%20like%20to%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-xs font-semibold bg-[#25D366] text-white rounded-xl flex items-center justify-center gap-2"
            >
              <span>WhatsApp Direct Order</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
