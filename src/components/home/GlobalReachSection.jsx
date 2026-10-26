import React from 'react'
import { ArrowRight, Package, Box, Handshake, Anchor } from 'lucide-react'

export const GlobalReachSection = ({ onOpenEnquiry }) => {
  const exportServices = [
    {
      icon: <Package className="w-4 h-4 text-[#C8A15A]" />,
      title: 'Export Ready Packaging',
      desc: 'Vacuum barrier pouches & 25kg / 50kg jute sacks'
    },
    {
      icon: <Box className="w-4 h-4 text-[#C8A15A]" />,
      title: 'Bulk Supply Capabilities',
      desc: 'FCL / LCL shipments from Mangalore & Cochin ports'
    },
    {
      icon: <Handshake className="w-4 h-4 text-[#C8A15A]" />,
      title: 'Global Trade Partnerships',
      desc: 'Direct trade desks in UAE, Singapore & Southeast Asia'
    },
    {
      icon: <Anchor className="w-4 h-4 text-[#C8A15A]" />,
      title: 'Reliable Logistics',
      desc: 'Phytosanitary inspection & rapid vessel dispatch'
    }
  ]

  return (
    <section 
      id="global-reach-section"
      className="relative py-20 lg:py-28 bg-[#F5F0E6] text-[#10120F] overflow-hidden"
    >
      {/* Background Subtle Warm Grain */}
      <div className="absolute inset-0 bg-ivory-texture pointer-events-none opacity-80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Copy & CTA */}
          <div className="lg:col-span-5 text-left">
            {/* Small Gold Section Label */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#C8A15A]" />
              <span className="text-[#9C7733] text-xs font-semibold tracking-[0.25em] uppercase">
                GLOBAL REACH
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-editorial text-4xl sm:text-5xl font-semibold leading-[1.1] text-[#10120F] mb-5">
              Delivering<br />Tradition Worldwide
            </h2>

            {/* Short Paragraph */}
            <p className="text-sm sm:text-base text-[#292A27]/85 font-normal leading-relaxed mb-8 max-w-md">
              RAK Traders supplies premium arecanut products to international markets with reliable logistics, custom packaging and consistent quality.
            </p>

            {/* CTA: Partner With Us */}
            <button
              onClick={onOpenEnquiry}
              id="btn-partner-with-us"
              className="btn-gold text-xs sm:text-sm px-6 py-3.5 shadow-md shadow-[#C8A15A]/25 cursor-pointer"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* Right Column: Cinematic Shipping Port Photograph with Bottom-Docked Glass Ribbon */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#C8A15A]/30 aspect-[16/11] sm:aspect-[16/10] group bg-stone-900 flex flex-col justify-end">
              <img
                src="/images/shipping-port.webp"
                alt="Container cargo ship at international shipping port at golden sunset"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Atmospheric Vignette over image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0C]/90 via-[#0B0F0C]/25 to-transparent pointer-events-none" />

              {/* Bottom Docked Glassmorphism Export Services Ribbon - Ultra-slim on mobile */}
              <div className="relative z-10 bg-[#0E1310]/85 backdrop-blur-xl border-t border-[#C8A15A]/30 p-2 sm:p-2.5 md:p-4 text-left">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5 md:gap-3.5">
                  {exportServices.map((service) => (
                    <div key={service.title} className="flex items-center md:items-start gap-1.5 sm:gap-2 group/srv">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-[#10251B] border border-[#C8A15A]/50 flex items-center justify-center shrink-0 text-[#C8A15A] [&>svg]:w-3 [&>svg]:h-3 sm:[&>svg]:w-3.5 sm:[&>svg]:h-3.5 md:[&>svg]:w-4 md:[&>svg]:h-4">
                        {service.icon}
                      </div>
                      <div className="min-w-0">
                        {/* Heading only on mobile with compact font size */}
                        <h4 className="font-editorial text-[10px] sm:text-xs md:text-sm font-semibold md:font-bold text-[#F5F0E6] group-hover/srv:text-[#DFC287] transition-colors leading-tight truncate">
                          {service.title}
                        </h4>
                        {/* Detailed description hidden on mobile as requested, shown on desktop/tablet */}
                        <p className="hidden md:block text-[9px] sm:text-[10px] text-[#D6D2C9]/75 leading-snug mt-0.5 line-clamp-2">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default GlobalReachSection
