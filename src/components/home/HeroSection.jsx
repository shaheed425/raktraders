import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, ArrowDown, Leaf, ShieldCheck, Recycle, Globe } from 'lucide-react'

export const HeroSection = ({ onOpenVideo }) => {
  const scrollToNext = () => {
    const el = document.getElementById('our-story-section')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      id="hero-section"
      className="relative w-full h-[100svh] max-h-[670px] min-h-[580px] md:max-h-none md:h-auto md:min-h-[100svh] overflow-hidden bg-cover bg-no-repeat text-[#F5F0E6] flex flex-col justify-end md:justify-between pt-16 pb-[80px] sm:pb-20 md:pt-32 md:pb-16 lg:pb-20 select-none"
    >
      {/* Dynamic Responsive Background Image & Position Style */}
      <style>{`
        #hero-section {
          background-image: url('/hero_mobile/adakka.webp');
          background-position: center 65%;
          background-size: cover;
        }
        @media (min-width: 768px) {
          #hero-section {
            background-image: url('/hero_desktop/hero-desktop-master.webp');
            background-position: center right;
            background-size: cover;
          }
        }
      `}</style>

      {/* Atmospheric Vignette & Contrast Gradients */}
      {/* Mobile Vignette */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/90 pointer-events-none md:hidden" 
        aria-hidden="true" 
      />
      <div 
        className="absolute inset-y-0 left-0 w-[90%] bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none md:hidden" 
        aria-hidden="true" 
      />
      
      {/* Desktop Directional Gradient: soft vignette on text side for crisp legibility */}
      <div 
        className="hidden md:block absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-[#0C0E0B]/90 via-[#0C0E0B]/50 to-transparent pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="hidden md:block absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0C0E0B]/70 to-transparent pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Desktop Location Indicator (Top Right - Matching Reference Image) */}
      <div className="absolute top-28 right-8 lg:right-16 z-20 hidden md:flex flex-col items-end text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
        <p className="text-[#F5F0E6] font-serif text-lg tracking-wide leading-tight">Mangalore</p>
        <p className="text-[#D6D2C9] font-serif text-base leading-tight">Kerala</p>
        
        <div className="flex items-center gap-2 mt-2">
          <span className="w-5 h-[1px] bg-[#C8A15A]/60" />
          <span className="text-[#C8A15A] text-[9px] font-mono tracking-[0.25em] uppercase">TO THE WORLD</span>
          <span className="w-5 h-[1px] bg-[#C8A15A]/60" />
        </div>

        {/* Vertical line with dot & Globe icon */}
        <div className="flex flex-col items-center mt-3 mr-7">
          <span className="w-[1px] h-6 bg-[#C8A15A]/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5B869] my-1 shadow-[0_0_8px_#E5B869]" />
          <span className="w-[1px] h-6 bg-[#C8A15A]/50 mb-2" />
          <Globe className="w-5 h-5 text-[#E5B869] stroke-[1.4] opacity-90 hover:rotate-45 transition-transform duration-500" />
        </div>
      </div>

      {/* Main Hero Content (Left Side - Aligned with Navbar Logo) */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 mb-[30px] md:mb-0">
        <div className="max-w-xl xl:max-w-2xl text-left pt-[30px] md:pt-[40px]">
          
          {/* Eyebrow Label: — SINCE 1980 */}
          <div className="hidden md:inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1.5px] bg-[#C8A15A]" />
            <span className="text-[#C8A15A] text-xs font-semibold tracking-[0.28em] uppercase font-sans drop-shadow-md">
              SINCE 1980
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-editorial text-[2.2rem] sm:text-[2.8rem] md:text-5xl lg:text-[4.2rem] xl:text-[4.75rem] font-medium leading-[1.08] tracking-tight text-[#F5F0E6] mb-3 sm:mb-4 drop-shadow-[0_2px_18px_rgba(0,0,0,0.95)]">
            <span className="block">
              Tradition in
            </span>
            <span className="block">
              Every <span className="text-[#E5B869] italic font-serif">Granule.</span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-[13px] sm:text-sm md:text-base lg:text-[1.05rem] text-[#D6D2C9]/90 max-w-[300px] sm:max-w-md md:max-w-lg font-sans font-light leading-relaxed mb-6 md:mb-9 drop-shadow-md">
            Premium arecanut products from the fertile lands of Mangalore &amp; Kerala, crafted for a global tomorrow.
          </p>

          {/* Mobile Action Button */}
          <div className="flex md:hidden mt-1 mb-5">
            <Link
              to="/shop"
              id="hero-cta-explore-mobile"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E5B869] hover:bg-[#DFC287] text-[#10120F] font-sans font-semibold text-xs sm:text-sm shadow-xl shadow-black/70 transition-all active:scale-95 cursor-pointer"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
            </Link>
          </div>

          {/* Desktop Action CTAs (Sleek Reduced Radius) */}
          <div className="hidden md:flex flex-wrap items-center gap-4 mb-10 lg:mb-12">
            <Link
              to="/shop"
              id="hero-cta-explore"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#E5B869] hover:bg-[#DFC287] text-[#10120F] font-sans font-semibold text-sm sm:text-base shadow-xl shadow-black/50 hover:shadow-[#E5B869]/25 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </Link>

            <button
              onClick={onOpenVideo || scrollToNext}
              id="hero-cta-story"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#10110F]/70 hover:bg-[#181D15] border border-[#C8A15A]/40 hover:border-[#C8A15A] text-[#F5F0E6] text-sm sm:text-base transition-all group backdrop-blur-md cursor-pointer shadow-lg active:scale-95"
            >
              <span className="w-6 h-6 rounded-full bg-transparent border border-[#C8A15A] flex items-center justify-center text-[#C8A15A] group-hover:scale-110 transition-transform">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </span>
              <span className="font-sans font-medium">Our Story</span>
            </button>
          </div>

          {/* Desktop Trust Badges (Horizontal Row matching Reference) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 pt-2 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <Leaf className="w-4 h-4 text-[#E5B869] stroke-[1.6] flex-shrink-0" />
              <div className="text-left leading-tight">
                <p className="text-[12px] font-medium text-[#F5F0E6] font-sans">Selected</p>
                <p className="text-[10px] text-[#D6D2C9]/70 font-sans">Estates</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#E5B869] stroke-[1.6] flex-shrink-0" />
              <div className="text-left leading-tight">
                <p className="text-[12px] font-medium text-[#F5F0E6] font-sans">Premium</p>
                <p className="text-[10px] text-[#D6D2C9]/70 font-sans">Quality</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Recycle className="w-4 h-4 text-[#E5B869] stroke-[1.6] flex-shrink-0" />
              <div className="text-left leading-tight">
                <p className="text-[12px] font-medium text-[#F5F0E6] font-sans">Sustainable</p>
                <p className="text-[10px] text-[#D6D2C9]/70 font-sans">Sourcing</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-[#E5B869] stroke-[1.6] flex-shrink-0" />
              <div className="text-left leading-tight">
                <p className="text-[12px] font-medium text-[#F5F0E6] font-sans">Global</p>
                <p className="text-[10px] text-[#D6D2C9]/70 font-sans">Export</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Feature Badges at Bottom */}
      <div className="relative w-full max-w-sm sm:max-w-md mx-auto px-4 sm:px-6 z-20 md:hidden pb-1">
        <div className="grid grid-cols-4 items-start text-center w-full">
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center mb-1.5 backdrop-blur-[2px] bg-black/30 shadow-md">
              <Leaf className="w-4 h-4 text-[#E5B869] stroke-[1.5]" />
            </div>
            <p className="text-[10px] text-[#F5F0E6] leading-tight font-sans font-medium">Selected</p>
            <p className="text-[10px] text-[#D6D2C9]/80 leading-tight font-sans">Estates</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center mb-1.5 backdrop-blur-[2px] bg-black/30 shadow-md">
              <ShieldCheck className="w-4 h-4 text-[#E5B869] stroke-[1.5]" />
            </div>
            <p className="text-[10px] text-[#F5F0E6] leading-tight font-sans font-medium">Premium</p>
            <p className="text-[10px] text-[#D6D2C9]/80 leading-tight font-sans">Quality</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center mb-1.5 backdrop-blur-[2px] bg-black/30 shadow-md">
              <Recycle className="w-4 h-4 text-[#E5B869] stroke-[1.5]" />
            </div>
            <p className="text-[10px] text-[#F5F0E6] leading-tight font-sans font-medium">Sustainable</p>
            <p className="text-[10px] text-[#D6D2C9]/80 leading-tight font-sans">Sourcing</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center mb-1.5 backdrop-blur-[2px] bg-black/30 shadow-md">
              <Globe className="w-4 h-4 text-[#E5B869] stroke-[1.5]" />
            </div>
            <p className="text-[10px] text-[#F5F0E6] leading-tight font-sans font-medium">Global</p>
            <p className="text-[10px] text-[#D6D2C9]/80 leading-tight font-sans">Export</p>
          </div>
        </div>
      </div>

      {/* Desktop Scroll Down Button (Bottom Right - Matching Reference Image) */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 right-8 lg:right-16 z-20 hidden md:flex flex-col items-center gap-2 text-xs text-[#D6D2C9] hover:text-[#E5B869] transition-colors group cursor-pointer"
        aria-label="Scroll down to Our Story"
      >
        <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#E5B869] group-hover:bg-[#E5B869]/15 transition-all shadow-xl backdrop-blur-sm">
          <ArrowDown className="w-4 h-4 text-[#E5B869] group-hover:translate-y-0.5 transition-transform" />
        </span>
        <span className="tracking-[0.22em] uppercase text-[9px] font-mono text-[#D6D2C9]/80 group-hover:text-[#E5B869]">SCROLL DOWN</span>
      </button>
    </section>
  )
}

export default HeroSection
