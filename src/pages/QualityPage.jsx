import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, CheckCircle2, Award, Globe, Search, ArrowRight } from 'lucide-react'
import SouthIndiaMap from '../components/common/SouthIndiaMap'

export const QualityPage = () => {
  return (
    <div className="pt-28 pb-24 bg-[#10120F] text-[#F5F0E6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#D6D2C9]/60 mb-8">
          <Link to="/" className="hover:text-[#C8A15A]">Home</Link>
          <span>/</span>
          <span className="text-[#DFC287] font-medium">Quality Benchmark</span>
        </div>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#C8A15A]" />
              <span className="text-[#C8A15A] text-xs font-semibold tracking-[0.25em] uppercase">
                SOURCE INTEGRITY
              </span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Quality Begins at the Source
            </h1>
            <p className="text-base sm:text-lg text-[#D6D2C9]/85 font-light leading-relaxed mb-6">
              We believe that exceptional betel nut products cannot be manufactured in a laboratory; they are born in the mineral-rich soils of South Kanara and the rain-washed Western Ghats of Kerala.
            </p>
            <p className="text-sm text-[#D6D2C9]/75 leading-relaxed font-normal">
              Every shipment is tested for moisture levels, zero synthetic dyes, and total aflatoxin compliance before receiving export clearance.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#C8A15A]/30 aspect-[4/3] group">
              <img src="/images/quality-hands.webp" alt="Hands holding arecanuts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>

        {/* Quality Pillars & Map */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#10251B]/40 border border-[#292A27] mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-editorial text-3xl font-bold text-[#DFC287]">
                Four Immutable Standards of RAK Traders
              </h2>

              <div className="space-y-4">
                {[
                  { title: 'Careful Selection', desc: 'Hand-picked from certified mature palms, rejecting underdeveloped or bruised kernels.' },
                  { title: 'Hygienically Processed', desc: 'Zero contact with ground soil during curing. Stainless steel cutting surfaces only.' },
                  { title: 'Consistent Quality', desc: 'Moisture tightly controlled under 11% using calibrated digital halogen moisture meters.' },
                  { title: 'Global Standards', desc: 'Certified for international phytosanitary and food safety import regulations.' }
                ].map(item => (
                  <div key={item.title} className="p-4 rounded-xl bg-[#10120F] border border-[#292A27] flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#C8A15A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-editorial text-lg font-bold text-[#F5F0E6]">{item.title}</h4>
                      <p className="text-xs text-[#D6D2C9]/80 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <SouthIndiaMap />
            </div>

          </div>
        </div>

        {/* Lab Specs Grid */}
        <div className="mb-16">
          <h3 className="font-editorial text-2xl font-bold mb-6 text-center">
            Certified Laboratory Export Tolerances
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Moisture Content', value: '< 10.5%', desc: 'Safe for tropical storage' },
              { label: 'Extraneous Matter', value: '0.00%', desc: 'Zero foreign debris or dust' },
              { label: 'Aflatoxins B1+B2+G1+G2', value: 'Compliant', desc: 'Passes EU & GCC thresholds' },
              { label: 'Chemical Preservation', value: 'None (0%)', desc: 'Pure solar dehydration' }
            ].map(lab => (
              <div key={lab.label} className="p-5 rounded-2xl bg-[#292A27]/30 border border-[#292A27] text-center">
                <span className="text-xs text-[#D6D2C9]/70 uppercase tracking-wider">{lab.label}</span>
                <p className="font-editorial text-3xl font-bold text-[#C8A15A] my-2">{lab.value}</p>
                <p className="text-[11px] text-[#D6D2C9]/60">{lab.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default QualityPage
