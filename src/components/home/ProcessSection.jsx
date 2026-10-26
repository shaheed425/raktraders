import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Play, ArrowRight, Sparkles, Filter, Scissors, Sun, PackageCheck, ChevronDown } from 'lucide-react'

export const ProcessSection = ({ onOpenVideo }) => {
  const [openMobileStep, setOpenMobileStep] = useState(null)

  const steps = [
    {
      num: '01',
      title: 'Sourcing & Selection',
      icon: <Sparkles className="w-5 h-5 text-[#C8A15A]" />,
      desc: 'Hand-picked from certified estates in Mangalore & Kerala'
    },
    {
      num: '02',
      title: 'Cleaning & Grading',
      icon: <Filter className="w-5 h-5 text-[#C8A15A]" />,
      desc: 'De-husked, thoroughly cleansed & multi-tier sorted'
    },
    {
      num: '03',
      title: 'Cutting & Shaping',
      icon: <Scissors className="w-5 h-5 text-[#C8A15A]" />,
      desc: 'Engineered cutting into Diamond, Salli & Chips cuts'
    },
    {
      num: '04',
      title: 'Drying & Quality Check',
      icon: <Sun className="w-5 h-5 text-[#C8A15A]" />,
      desc: 'Traditional solar curing with strict moisture control'
    },
    {
      num: '05',
      title: 'Packaging & Dispatch',
      icon: <PackageCheck className="w-5 h-5 text-[#C8A15A]" />,
      desc: 'Vacuum-sealed barrier pouches and export sacks'
    }
  ]

  return (
    <section 
      id="our-process-section"
      className="relative py-20 lg:py-28 bg-[#F5F0E6] text-[#10120F] overflow-hidden"
    >
      {/* Background Subtle Warm Grain */}
      <div className="absolute inset-0 bg-ivory-texture pointer-events-none opacity-80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            MOBILE VIEW (lg:hidden) - EXACT REPLICA OF REFERENCE PIC 3
            ========================================================================= */}
        <div className="lg:hidden flex flex-col space-y-6 text-left pb-10">
          {/* Eyebrow Label with Dash */}
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[1.5px] bg-[#C8A15A]" />
            <span className="text-[#9C7733] text-xs font-semibold tracking-[0.25em] uppercase font-sans">
              OUR PROCESS
            </span>
          </div>

          {/* Editorial Headline */}
          <h2 className="font-editorial text-3xl sm:text-4xl font-semibold leading-[1.15] text-[#10120F]">
            From Estate<br />to Excellence.
          </h2>

          {/* Description Copy */}
          <p className="text-sm text-[#292A27]/85 font-normal leading-relaxed">
            Every arecanut goes through a careful process of selection, cleaning, cutting, drying and quality checks to ensure consistent excellence in every batch.
          </p>

          {/* Video Thumbnail Card with Centered Play Button */}
          <div 
            onClick={onOpenVideo}
            className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-xl border border-[#C8A15A]/30 group cursor-pointer bg-stone-300"
          >
            <img
              src="/images/process-facility.webp"
              alt="Hygienic arecanut processing facility"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-[#10120F]/20 group-hover:bg-[#10120F]/10 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm border border-white/50 flex items-center justify-center text-black shadow-xl group-hover:scale-110 transition-all">
                <Play className="w-6 h-6 fill-black ml-0.5" />
              </div>
            </div>
          </div>

          {/* 5 Stacked Process Step Cards */}
          <div className="space-y-2.5 pt-1">
            {steps.map((step) => {
              const isOpen = openMobileStep === step.num
              return (
                <div
                  key={step.num}
                  className="rounded-2xl bg-[#FAF7F2] border border-[#C8A15A]/25 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenMobileStep(isOpen ? null : step.num)}
                    className="w-full p-3.5 flex items-center justify-between gap-3 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      {/* Step Number Badge */}
                      <span className="w-7 h-7 rounded-full bg-white border border-[#C8A15A]/30 flex items-center justify-center text-[11px] font-bold text-[#10120F] font-mono shadow-xs shrink-0">
                        {step.num}
                      </span>

                      {/* Icon inside soft warm circle */}
                      <div className="w-9 h-9 rounded-full bg-[#F5EFE6] border border-[#C8A15A]/40 flex items-center justify-center shrink-0">
                        {step.icon}
                      </div>

                      {/* Title */}
                      <span className="text-sm font-semibold text-[#10120F] font-sans">
                        {step.title}
                      </span>
                    </div>

                    {/* Chevron Arrow */}
                    <ChevronDown className={`w-4 h-4 text-[#9C7733] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Collapsible Content */}
                  {isOpen && (
                    <div className="px-4 pb-3.5 pt-1 text-xs text-[#292A27]/80 border-t border-[#D6D2C9]/50 animate-fadeIn">
                      <p>{step.desc}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Bottom Full-Width Pill Action Button */}
          <button
            onClick={onOpenVideo}
            className="w-full py-3.5 px-6 rounded-full bg-[#E5B869] hover:bg-[#DFC287] text-[#10120F] font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#E5B869]/20 transition-all cursor-pointer active:scale-98"
          >
            <span>Watch Our Process</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* =========================================================================
            DESKTOP VIEW (hidden lg:block) - PRESERVED EXISTING DESKTOP LAYOUT
            ========================================================================= */}
        <div className="hidden lg:block">
          {/* Top Split Layout: Content Left & Capsule Video Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
            
            {/* Left Column */}
            <div className="lg:col-span-5 text-left">
              {/* Small Gold Label */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-[1.5px] bg-[#C8A15A]" />
                <span className="text-[#9C7733] text-xs font-semibold tracking-[0.25em] uppercase">
                  OUR PROCESS
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-editorial text-4xl sm:text-5xl font-semibold leading-[1.15] text-[#10120F] mb-5">
                From Estate<br />to Excellence.
              </h2>

              {/* Copy */}
              <p className="text-sm sm:text-base text-[#292A27]/85 font-normal leading-relaxed mb-8 max-w-md">
                Every arecanut goes through a careful process of selection, cleaning, cutting, drying and quality checks to ensure consistent excellence in every batch.
              </p>

              {/* CTA Button */}
              <button
                onClick={onOpenVideo}
                id="btn-watch-process"
                className="btn-gold text-xs sm:text-sm px-6 py-3 shadow-md shadow-[#C8A15A]/25 cursor-pointer"
              >
                <span>Watch Our Process</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Right Column: Capsule Video Thumbnail with Calligraphy & Badge */}
            <div className="lg:col-span-7 relative">
              
              {/* Script Calligraphy Accent Top Right (Lifted above video) */}
              <div className="absolute -top-11 sm:-top-13 right-4 z-20 hidden sm:block">
                <span className="font-script text-2xl sm:text-3xl text-[#9C7733] select-none transform rotate-[-3deg] inline-block drop-shadow-sm">
                  A Journey of Care and Craftsmanship
                </span>
                <div className="w-24 h-4 border-b-2 border-[#C8A15A]/60 -mt-1 ml-auto rounded-full" />
              </div>

              {/* Capsule Shaped Video Box */}
              <div 
                onClick={onOpenVideo}
                className="relative rounded-[2.5rem] overflow-hidden aspect-[16/9] shadow-2xl border border-[#C8A15A]/30 group cursor-pointer bg-stone-300"
              >
                <img
                  src="/images/process-facility.webp"
                  alt="Modern hygienic arecanut sorting and processing facility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark subtle overlay for contrast */}
                <div className="absolute inset-0 bg-[#10120F]/30 group-hover:bg-[#10120F]/20 transition-colors" />

                {/* Centered Large Gold Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FAF7F2]/90 backdrop-blur-sm border border-[#C8A15A] flex items-center justify-center text-[#10120F] group-hover:scale-110 group-hover:bg-[#C8A15A] group-hover:text-[#10120F] shadow-2xl transition-all duration-300">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                  </div>
                </div>

                {/* Bottom Right Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-[#10120F]/85 backdrop-blur-md border border-[#C8A15A]/40 px-3.5 py-1.5 rounded-xl flex items-center gap-3 shadow-lg">
                  <span className="bg-[#C8A15A] text-[#10120F] text-[10px] font-bold px-1.5 py-0.5 rounded font-mono">
                    03:54
                  </span>
                  <span className="text-[11px] text-[#F5F0E6] font-medium hidden sm:inline">
                    See how we turn natural arecanuts into premium products
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Five-Step Process Timeline Below */}
          <div className="pt-10 border-t border-[#D6D2C9]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative">
              {steps.map((step, idx) => (
                <div key={step.num} className="relative group text-left p-3">
                  
                  {/* Arrow connector between steps on desktop */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-7 -right-2 text-[#C8A15A]/50 z-10">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}

                  {/* Step Circle with Outlined Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-full bg-[#FAF7F2] border border-[#C8A15A]/40 flex items-center justify-center shadow-sm group-hover:border-[#C8A15A] group-hover:bg-[#FAF7F2] transition-colors">
                      {step.icon}
                    </div>
                    <span className="font-editorial text-sm font-bold text-[#9C7733] tracking-wider">
                      {step.num}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h4 className="font-editorial text-base sm:text-lg font-bold text-[#10120F] group-hover:text-[#9C7733] transition-colors mb-1">
                    {step.title}
                  </h4>

                  {/* Step Description */}
                  <p className="text-xs text-[#292A27]/80 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProcessSection
