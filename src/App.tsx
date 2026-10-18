/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { CustomerPlatterShowcase } from './components/CustomerPlatterShowcase';
import { VibeGallery } from './components/VibeGallery';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { RESTAURANT_INFO } from './data/menuData';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const handleExploreMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const generalWhatsAppUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Vuma Classic! 🔥 I would like to place an order from your menu at 279 Main Street, Maboneng.'
  )}`;

  return (
    <div className="min-h-screen bg-[#120406] text-[#F8EFE4] flex flex-col font-sans selection:bg-[#E03131] selection:text-white relative">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onExploreMenu={handleExploreMenu} />

        <MenuSection />

        {/* Large Customers Enjoying Over Food Platter Showcase */}
        <CustomerPlatterShowcase />

        <VibeGallery />

        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Direct Order Button */}
      <aside aria-label="WhatsApp Direct Order" className="fixed bottom-5 right-5 z-40">
        <a
          href={generalWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl shadow-emerald-950/70 hover:shadow-emerald-900/90 border-2 border-emerald-300/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          title="Chat & Order directly via WhatsApp"
        >
          <div className="w-8 h-8 rounded-xl bg-black/15 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
            <MessageSquare className="w-4 h-4 fill-white" />
          </div>
          <div className="text-left">
            <span className="text-xs font-black tracking-wide uppercase block text-white drop-shadow-sm">
              Order on WhatsApp
            </span>
            <span className="text-[10px] text-emerald-100 block font-medium">
              Direct chat • 072 934 9236
            </span>
          </div>
        </a>
      </aside>
    </div>
  );
}
