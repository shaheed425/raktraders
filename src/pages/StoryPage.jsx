import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Shield, Users, Award, MapPin } from 'lucide-react'

export const StoryPage = () => {
  return (
    <div className="pt-28 pb-24 bg-[#F5F0E6] text-[#10120F] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#292A27]/60 mb-8">
          <Link to="/" className="hover:text-[#9C7733]">Home</Link>
          <span>/</span>
          <span className="text-[#9C7733] font-medium">Our Story</span>
        </div>

        {/* Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#C8A15A]" />
              <span className="text-[#9C7733] text-xs font-semibold tracking-[0.25em] uppercase">
                ESTABLISHED 1980
              </span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#10120F] leading-tight mb-6">
              Four Decades of Trust, Heritage &amp; Agrarian Mastery
            </h1>
            <p className="text-base sm:text-lg text-[#292A27]/85 font-light leading-relaxed mb-6">
              What began four decades ago as a humble partnership with generational arecanut growers in South Kanara (Mangalore) and Northern Kerala has blossomed into one of India’s most respected export and wholesale platforms for betel nut products.
            </p>
            <p className="text-sm text-[#292A27]/80 leading-relaxed font-normal">
              At RAK TRADERS, our philosophy has always been simple: honour the farmer, preserve the natural terroir of the Western Ghats, and process with uncompromising modern precision.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#C8A15A]/30 aspect-[4/5] bg-stone-300">
              <img
                src="/images/story-farmer.webp"
                alt="Arecanut harvest farmer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Historical Timeline */}
        <div className="py-12 border-t border-[#D6D2C9] mb-16">
          <h2 className="font-editorial text-3xl font-bold mb-10 text-center">
            The Historical Milestones of RAK Traders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { year: '1980', title: 'Foundational Trade', text: 'Initiated direct procurement in Mangalore mandi markets with a commitment to unadulterated betel nuts.' },
              { year: '1990', title: 'Estate Networks', text: 'Expanded contracts with family estates across Kasaragod, Vittal, and the lush foothills of Western Ghats.' },
              { year: '2000', title: 'Precision Cutting', text: 'Introduced hygienic mechanized sizing to produce our signature Diamond Cut and wafer-thin Chips Cut.' },
              { year: '2020', title: 'Export Terminal', text: 'Established direct container trade lanes through New Mangalore Port to UAE, Singapore, and global ports.' },
              { year: 'Today', title: 'The Benchmark', text: 'Combining traditional solar drying with 3-ply high-barrier packaging for international excellence.' }
            ].map(m => (
              <div key={m.year} className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D6D2C9] shadow-sm">
                <span className="font-editorial text-2xl font-bold text-[#9C7733] block mb-2">{m.year}</span>
                <h4 className="text-sm font-bold text-[#10120F] mb-1">{m.title}</h4>
                <p className="text-xs text-[#292A27]/80 leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery / Supporting Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-[#C8A15A]/25 aspect-[16/10]">
            <img src="/images/story-cluster.webp" alt="Golden arecanuts" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-[#C8A15A]/25 aspect-[16/10]">
            <img src="/images/story-aerial.webp" alt="Terraced plantation valley" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 rounded-3xl bg-[#10251B] text-[#F5F0E6] text-center space-y-4 shadow-2xl">
          <h3 className="font-editorial text-3xl font-bold">Experience the RAK Standard</h3>
          <p className="text-sm text-[#D6D2C9]/85 max-w-xl mx-auto">
            Discover our three cuts crafted with generations of reverence and dedication.
          </p>
          <div className="pt-2">
            <Link to="/shop" className="btn-gold text-xs px-8 py-3">
              Explore Our Three Cuts <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StoryPage
