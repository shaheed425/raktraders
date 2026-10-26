import React from 'react'
import { Leaf, Shield, Star, Globe, Search } from 'lucide-react'
import SouthIndiaMap from '../common/SouthIndiaMap'

export const QualitySection = () => {
  const qualityPillars = [
    {
      icon: <Leaf className="w-5 h-5 text-[#C8A15A]" />,
      title: 'Careful Selection',
      desc: 'Only the best arecanuts'
    },
    {
      icon: <Shield className="w-5 h-5 text-[#C8A15A]" />,
      title: 'Hygienically Processed',
      desc: 'For natural purity'
    },
    {
      icon: <Star className="w-5 h-5 text-[#C8A15A]" />,
      title: 'Consistent Quality',
      desc: 'Across all batches'
    },
    {
      icon: <Globe className="w-5 h-5 text-[#C8A15A]" />,
      title: 'Global Standards',
      desc: 'For international markets'
    }
  ]

  return (
    <section 
      id="quality-section"
      className="relative bg-[#10120F] text-[#F5F0E6] overflow-hidden border-t border-[#292A27]/60"
    >
      {/* =========================================================================
          MOBILE VIEW (lg:hidden) - EXACT REPLICA OF USER REFERENCE IMAGE 1
          ========================================================================= */}
      <div className="lg:hidden p-4 sm:p-6">
        <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#141A16] via-[#0E120F] to-[#0A0D0B] border border-[#292A27] shadow-2xl text-left">
          
          {/* Top Hands Holding Arecanuts Photo with Gradient Overlay */}
          <div className="relative w-full h-[270px] sm:h-[310px] overflow-hidden">
            <img
              src="/images/quality-hands.webp"
              alt="Hands cupping selected arecanuts"
              className="w-full h-full object-cover object-top"
            />
            {/* Seamless gradient into dark section below */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0E120F]/50 to-[#0E120F]" />
          </div>

          {/* Content Body Below Image */}
          <div className="px-6 pt-1 pb-8 sm:px-8 sm:pb-10 -mt-6 relative z-10 space-y-5">
            
            {/* Heading & Subtitle */}
            <div>
              <h2 className="font-editorial text-3xl font-bold text-[#F5F0E6] leading-tight mb-2">
                Quality Begins<br />at the Source.
              </h2>
              <p className="text-xs sm:text-sm text-[#D6D2C9]/85 font-light leading-relaxed">
                Sourced from the finest estates of Mangalore &amp; Kerala, ensuring purity in every granule.
              </p>
            </div>

            {/* 4 Quality Pillars with Gold Circular Icons Matching Reference */}
            <div className="space-y-4 pt-1">
              {qualityPillars.map((item) => (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full border border-[#C8A15A] flex items-center justify-center shrink-0 text-[#C8A15A] bg-black/40 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-editorial text-base font-bold text-[#F5F0E6] leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#D6D2C9]/70 font-sans mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* =========================================================================
          DESKTOP VIEW (hidden lg:grid) - PRESERVED EXISTING SPLIT LAYOUT
          ========================================================================= */}
      <div className="hidden lg:grid grid-cols-12 min-h-[580px]">
        
        {/* Left Side: Full-height Close-up Photograph of Hands Holding Arecanuts */}
        <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full group overflow-hidden bg-stone-900">
          <img
            src="/images/quality-hands.webp"
            alt="Hands cupping carefully selected premium arecanuts showing rich marbling"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Vignette Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#10120F] via-[#10120F]/40 to-transparent pointer-events-none" />

          {/* Text Overlaid in Bottom Area */}
          <div className="absolute bottom-8 left-8 right-8 z-20 text-left">
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-4xl font-semibold leading-tight text-[#F5F0E6] mb-3">
              Quality<br />Begins at<br />the Source.
            </h2>

            {/* Sourced Badge */}
            <div className="inline-flex items-center gap-2 bg-[#10120F]/80 backdrop-blur-md border border-[#C8A15A]/40 px-3.5 py-1.5 rounded-full shadow-lg">
              <Search className="w-3.5 h-3.5 text-[#C8A15A]" />
              <span className="text-xs text-[#D6D2C9] font-light">
                Sourced from the finest estates of Mangalore &amp; Kerala.
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Deep Black/Forest Green with 4 Pillars & South India Map */}
        <div className="lg:col-span-7 bg-[#10251B]/40 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Four Quality Pillars (Left subcolumn) */}
            <div className="md:col-span-7 space-y-6 text-left">
              {qualityPillars.map((item) => (
                <div key={item.title} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#10120F] border border-[#C8A15A]/40 flex items-center justify-center shrink-0 group-hover:border-[#C8A15A] transition-colors shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#F5F0E6] group-hover:text-[#DFC287] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#D6D2C9]/75 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* South India Map (Right subcolumn) */}
            <div className="md:col-span-5 flex items-center justify-center border-t md:border-t-0 md:border-l border-[#292A27]/80 pt-6 md:pt-0 md:pl-6">
              <SouthIndiaMap />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default QualitySection
