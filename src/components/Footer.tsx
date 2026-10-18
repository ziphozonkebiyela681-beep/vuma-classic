import React from 'react';
import { Flame, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { VumaLogo } from './VumaLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C0203] text-[#E5D2C2] border-t border-red-950/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-red-950/60">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <VumaLogo variant="compact" />

            <p className="text-xs text-[#BFA695] leading-relaxed">
              Authentic South African flame-grilled braai, 5-hour simmered Mogodu, fluffy pap, and
              the lively evening pulse of Maboneng.
            </p>

            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FDE5A9]/90">
              • FLAME GRILLED •
            </div>
          </div>

          {/* Col 2: Location & Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Visit Us in Maboneng
            </h4>
            <div className="space-y-2 text-xs text-[#D1B8A5]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>279 Main Street, Maboneng, Johannesburg, 2094</span>
              </div>
              <p className="pt-2 text-white font-medium">Open 7 Days a Week</p>
              <p>Mon - Thu: 11:00 AM – 10:00 PM</p>
              <p className="text-amber-300 font-medium">Fri - Sat: 11:00 AM – 01:00 AM</p>
              <p>Sun: 11:00 AM – 10:00 PM</p>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#D1B8A5]">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Flame-Grilled Braai Menu
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Slow-Cooked Mogodu & Pap
                </a>
              </li>
              <li>
                <a href="#vibe" className="hover:text-white transition-colors">
                  The Maboneng Weekend Vibe
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location & Secure Parking
                </a>
              </li>
              <li>
                <a href="#heritage" className="hover:text-white transition-colors">
                  Our Culinary Heritage
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Get In Touch
            </h4>
            <div className="space-y-2.5 text-xs text-[#D1B8A5]">
              <a
                href="tel:+27729349236"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>+27 72 934 9236</span>
              </a>
              <a
                href="https://wa.me/27729349236"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>WhatsApp: 072 934 9236</span>
              </a>
              <a
                href="mailto:jvuma24@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-red-400" />
                <span>jvuma24@gmail.com</span>
              </a>
              <a
                href="https://www.mrdfood.com/search?query=Vuma+Classic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#FDE5A9] hover:text-white font-semibold pt-1"
              >
                <span>🛵 Available on Mr D Food</span>
              </a>
            </div>

            <div className="pt-1">
              <span className="text-[11px] text-amber-300 block font-medium">
                🚚 We Make Deliveries for Certain Quantity
              </span>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-[#A68F80] block mb-2">Follow the Flame</span>
              <div className="flex items-center gap-3 text-[#FDE5A9]">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#200609] hover:bg-[#340A0F] transition-colors"
                  aria-label="Follow Vuma Classic on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#200609] hover:bg-[#340A0F] transition-colors"
                  aria-label="Follow Vuma Classic on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9B8576]">
          <p>© {new Date().getFullYear()} Vuma Classic. All rights reserved. 279 Main Street, Maboneng, Johannesburg.</p>
          <div className="flex items-center gap-4">
            <span>Traditional South African Cuisine</span>
            <span aria-hidden="true">·</span>
            <span>Flame Grilled Fresh Daily</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
