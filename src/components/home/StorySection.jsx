import React from 'react'
import { Leaf, Users, ShieldCheck, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const StorySection = () => {
  const milestones = [
    { year: '1980', title: 'A Humble Beginning', desc: 'Started trade in coastal Mangalore' },
    { year: '1990', title: 'Expanding Our Network', desc: 'Direct farmer partnerships across Kerala' },
    { year: '2000', title: 'Strengthening Supply Chain', desc: 'Modernized drying & grading infrastructure' },
    { year: '2020', title: 'Global Partnerships', desc: 'Direct bulk exports to Middle East & Asia' },
    { year: 'Today', title: 'Still Rooted, Always Growing.', desc: 'The trusted benchmark in premium arecanut' }
  ]

  const trustBadges = [
    {
      icon: <Leaf className="w-5 h-5 text-[#C8A15A]" />,
      title: 'Deep Rooted Heritage',
      desc: '4+ decades of agricultural mastery'
    },
    {
      icon: <Users className="w-5 h-5 text-[#C8A15A]" />,
      title: 'Generations of Expertise',
      desc: 'Direct ties with master growers'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#C8A15A]" />,
      title: 'Trusted Worldwide',
      desc: 'Rigorous export-grade compliance'
    }
  ]

  return (
    <section 
      id="our-story-section"
      className="relative py-20 lg:py-28 bg-[#F5F0E6] text-[#10120F] overflow-hidden"
    >
      {/* Background Subtle Warm Grain */}
      <div className="absolute inset-0 bg-ivory-texture pointer-events-none opacity-80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Vertical Timeline */}
          <div className="lg:col-span-3 order-3 lg:order-1">
            <div className="relative pl-6 space-y-7 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1.5px] before:bg-[#C8A15A]/40">
              {milestones.map((m, idx) => (
                <div key={m.year} className="relative group text-left">
                  {/* Timeline Node */}
                  <span className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-[#C8A15A] ring-4 ring-[#F5F0E6] shadow-sm group-hover:scale-125 transition-transform" />
                  
                  {/* Year */}
                  <h4 className="font-editorial text-lg sm:text-xl font-bold text-[#10120F] group-hover:text-[#9C7733] transition-colors leading-none mb-1">
                    {m.year}
                  </h4>
                  
                  {/* Title & Desc */}
                  <p className="text-xs font-semibold text-[#10120F]/85 tracking-wide">
                    {m.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Column: Magazine Photo Composition */}
          <div className="lg:col-span-5 order-2 lg:order-2">
            <div className="grid grid-cols-12 gap-3 items-center">
              {/* Main Farmer Image with Organic Shape */}
              <div className="col-span-8 rounded-2xl overflow-hidden shadow-xl border border-[#C8A15A]/25 aspect-[4/5] group bg-stone-200">
                <img
                  src="/images/story-farmer.webp"
                  alt="Arecanut farmer sorting harvested crop in plantation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Two Stacked Photos */}
              <div className="col-span-4 space-y-3">
                {/* Ripe Bunch */}
                <div className="rounded-xl overflow-hidden shadow-md border border-[#C8A15A]/20 aspect-square group bg-stone-200">
                  <img
                    src="/images/story-cluster.webp"
                    alt="Ripe golden arecanuts on tree"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Aerial View */}
                <div className="rounded-xl overflow-hidden shadow-md border border-[#C8A15A]/20 aspect-[3/4] group bg-stone-200">
                  <img
                    src="/images/story-aerial.webp"
                    alt="Lush green terraced arecanut plantation valley"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Trust Badges */}
          <div className="lg:col-span-4 text-left order-1 lg:order-3">
            {/* Small Gold Section Label */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#C8A15A]" />
              <span className="text-[#9C7733] text-xs font-semibold tracking-[0.25em] uppercase">
                OUR STORY
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-4xl font-semibold leading-tight text-[#10120F] mb-4">
              Four Decades of Trust &amp; Tradition
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-base text-[#292A27]/85 leading-relaxed font-normal mb-8">
              What started as a humble trading journey in South India has grown into a legacy of quality, relationships and unwavering trust. RAK Traders has been sourcing premium arecanuts from the fertile lands of Mangalore and Kerala, delivering value to markets across the globe.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#D6D2C9]">
              {trustBadges.map((b) => (
                <div key={b.title} className="text-center group">
                  <div className="w-10 h-10 mx-auto rounded-full bg-[#FAF7F2] border border-[#C8A15A]/40 flex items-center justify-center shadow-sm group-hover:border-[#C8A15A] transition-colors mb-2">
                    {b.icon}
                  </div>
                  <h4 className="text-[11px] font-semibold text-[#10120F] leading-tight">
                    {b.title}
                  </h4>
                </div>
              ))}
            </div>

            {/* Link to Full Story */}
            <div className="mt-8">
              <Link
                to="/story"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#9C7733] hover:text-[#10120F] transition-colors"
              >
                <span>Read Our Full Heritage Journey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default StorySection
