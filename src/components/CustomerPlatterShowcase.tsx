import React, { useState } from 'react';
import { Users, Flame, Heart, Maximize2, X, Smartphone, Monitor, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const CustomerPlatterShowcase: React.FC = () => {
  // Format mode:
  // 'tall' = Tall rectangular portrait format (TikTok / Reel / phone camera shape) - big, filling, uncropped
  // 'wide' = Wide cinematic banner format
  const [frameFormat, setFrameFormat] = useState<'tall' | 'wide'>('tall');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // High quality accurate AI adaptation of customers enjoying the food platter at Vuma Classic
  const displayImage = '/src/assets/images/vuma_patrons_vertical_platter_1792350417035.jpg';

  const platterWhatsAppUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Vuma Classic! 🔥 I would like to order a large communal Ugqoko Food Platter for sharing. Please advise options and pricing!'
  )}`;

  return (
    <section id="customer-platter-showcase" className="py-20 sm:py-24 bg-[#0E0305] text-[#F8EFE4] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-red-800/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25070B] border border-red-800/50 text-[#FDE5A9] text-xs font-bold tracking-widest uppercase">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>Real Moments • Communal Ugqoko Feast</span>
            <Flame className="w-3.5 h-3.5 text-red-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Customers Enjoying Over The Food Platter
          </h2>

          <p className="text-[#D8BEAD] text-sm sm:text-base leading-relaxed">
            The true magic of Vuma Classic is seeing friends and family gathered together around our
            large carved wooden <span className="text-[#FDE5A9] font-bold">ugqoko</span> eating board.
            Presented in a <span className="text-[#FDE5A9] font-bold">tall rectangular TikTok-style fullness</span> so
            the full spread of flame-grilled cuts, dumplings, and smiling faces fills the view boldly.
          </p>
        </div>

        {/* Outer Frame Wrapper */}
        <div
          className={`mx-auto transition-all duration-300 ${
            frameFormat === 'tall' ? 'max-w-4xl' : 'max-w-6xl'
          }`}
        >
          {/* Main Card with glowing border */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-red-900/60 hover:border-[#FDE5A9]/60 bg-[#140306] transition-all duration-300 shadow-2xl">
            {/* Top Status & Controls Bar */}
            <div className="bg-[#1C0508]/95 border-b border-red-900/40 px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center gap-1.5 bg-[#2B080D] border border-amber-500/40 text-amber-200 text-xs font-bold px-3 py-1.5 rounded-xl">
                  <Smartphone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>TikTok / Reel Vertical Fullness • 9:16 Uncropped</span>
                </div>
              </div>

              <div className="flex items-center flex-wrap gap-2">
                {/* Format Toggle (Tall Rectangular Fullness vs Wide) */}
                <div className="inline-flex items-center rounded-xl bg-black/60 border border-red-900/40 p-0.5 text-xs">
                  <button
                    type="button"
                    onClick={() => setFrameFormat('tall')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      frameFormat === 'tall'
                        ? 'bg-gradient-to-r from-[#990C13] to-[#73050A] text-[#FFF2CE] shadow'
                        : 'text-[#D8BEAD] hover:text-white'
                    }`}
                    title="Tall rectangular TikTok/Reel frame - full vertical view without cropping"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Tall Rectangular (TikTok Style)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrameFormat('wide')}
                    className={`px-2.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                      frameFormat === 'wide'
                        ? 'bg-gradient-to-r from-[#990C13] to-[#73050A] text-[#FFF2CE] shadow'
                        : 'text-[#D8BEAD] hover:text-white'
                    }`}
                    title="Wide landscape banner frame"
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Wide Banner</span>
                  </button>
                </div>

                {/* Expand / Full Size Lightbox */}
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="inline-flex items-center gap-1.5 p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-[#2A080D] hover:bg-[#3D0A11] text-[#E5D0C2] hover:text-white border border-red-800/60 text-xs font-semibold shadow transition-all cursor-pointer"
                  title="View photo in fullscreen"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-amber-300" />
                  <span className="hidden sm:inline">Fullscreen</span>
                </button>
              </div>
            </div>

            {/* Picture Presentation Canvas */}
            <div className="relative w-full bg-[#050102] overflow-hidden group">
              {frameFormat === 'tall' ? (
                /* Tall Rectangular TikTok / Reel fullness mode */
                <div className="w-full flex items-center justify-center bg-gradient-to-b from-[#0A0204] via-[#050102] to-[#120306] p-0">
                  <div className="w-full max-w-2xl mx-auto flex items-center justify-center relative">
                    <img
                      src={displayImage}
                      alt="Customers enjoying over the food platter served at Vuma Classic"
                      className="w-full h-auto max-h-[82vh] sm:max-h-[88vh] object-contain sm:object-cover sm:aspect-[9/16] block transition-all duration-300 group-hover:scale-[1.01] shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              ) : (
                /* Wide banner mode */
                <img
                  src={displayImage}
                  alt="Customers enjoying over the food platter served at Vuma Classic"
                  className="w-full h-[450px] sm:h-[580px] lg:h-[680px] object-cover object-center block transition-all duration-300 group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                />
              )}

              {/* Floating Badge (TikTok / Reel Fullness) */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 bg-black/80 backdrop-blur-md border border-[#FDE5A9]/30 text-[#FDE5A9] text-[11px] font-bold px-3 py-1 rounded-full shadow-lg">
                  <Smartphone className="w-3 h-3 text-amber-400" />
                  <span>Vertical 9:16 Full Rectangular Fit</span>
                </span>
              </div>

              {/* Quick Floating Action on Hover */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between gap-3 pointer-events-none z-10">
                <span className="text-xs font-bold text-[#FDE5A9] drop-shadow-md">
                  Vuma Classic • Communal Ugqoko Platter Table
                </span>
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="p-2 rounded-lg bg-black/80 hover:bg-black text-white text-xs shadow-lg transition-all cursor-pointer pointer-events-auto flex items-center gap-1.5"
                  title="Expand to Full Size"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-amber-300" />
                  <span>Zoom Full Size</span>
                </button>
              </div>
            </div>

            {/* Caption Placed Just Below The Picture */}
            <div className="bg-[#190407] border-t border-red-900/50 p-5 sm:p-7 lg:p-8">
              <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FDE5A9]">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                    <span>279 Main Street, Maboneng • The Communal Ugqoko Table</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    Customers Sharing Over The Food Platter Served
                  </h3>
                  <p className="text-sm sm:text-base text-[#DCC7B8] leading-relaxed italic">
                    &ldquo;Eating together from a single wooden ugqoko board builds family. Food hot off the grill, seasoned with soul, and shared with good conversation.&rdquo;
                  </p>
                </div>

                <div className="shrink-0 flex flex-col sm:items-end gap-3 border-t md:border-t-0 md:border-l border-red-900/40 pt-4 md:pt-0 md:pl-6">
                  <div className="text-left md:text-right">
                    <span className="text-xs uppercase tracking-wider text-[#FDE5A9]/80 font-semibold block">Ugqoko Feast</span>
                    <span className="text-xs text-[#BFA898] block">Serves 2 – 6 Friends</span>
                  </div>
                  <a
                    href={platterWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md transition-all active:scale-95"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>Order Platter on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Strip below the showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-[#160407] border border-red-900/30 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#8C070D]/40 text-[#FDE5A9] flex items-center justify-center shrink-0 mt-0.5">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">True Communal Spirit</h4>
              <p className="text-[12px] text-[#BFA898] mt-0.5">
                Platters served for 2 to 6 people on traditional wood boards for real shared dining.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#160407] border border-red-900/30 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#8C070D]/40 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Hot Off The Coals</h4>
              <p className="text-[12px] text-[#BFA898] mt-0.5">
                Sizzling boerewors coils, golden braaied chicken, and fresh chakalaka sides.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#160407] border border-red-900/30 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#8C070D]/40 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
              <Heart className="w-4 h-4 text-red-400" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#FDE5A9] uppercase tracking-wider">Carved Ugqoko Board</h4>
              <p className="text-[12px] text-[#BFA898] mt-0.5">
                Steaming dombolo, pap, braai meat, and chakalaka shared straight from the wood.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-7xl flex items-center justify-between pb-3 border-b border-red-900/40">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#FDE5A9]">
                Customers Enjoying Over The Food Platter • Full Resolution View
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={platterWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>Order Platter</span>
              </a>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="w-full flex-1 flex items-center justify-center py-4 overflow-auto">
            <img
              src={displayImage}
              alt="Customers enjoying over platter full size"
              className="max-w-full max-h-[88vh] object-contain rounded-2xl shadow-2xl"
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
