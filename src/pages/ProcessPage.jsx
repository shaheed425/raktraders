import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Play, Sparkles, Filter, Scissors, Sun, PackageCheck, ArrowRight, ShieldCheck } from 'lucide-react'
import VideoModal from '../components/common/VideoModal'

export const ProcessPage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const detailedSteps = [
    {
      num: '01',
      title: 'Ethical Plantation Sourcing & Selection',
      desc: 'Our agronomists visit vetted multi-generation family farms across Dakshina Kannada and Kasaragod. Only mature palms (12–25 years old) that yield nuts with tight fibrous structure and deep amber kernel color are selected.',
      spec: 'Maturity Index: Grade Super AAA'
    },
    {
      num: '02',
      title: 'Hygienic De-Husking & Multi-Stage Cleaning',
      desc: 'Harvested nuts are immediately transported to our Mangalore processing unit. Nuts are gently de-husked, eliminating non-nut debris, washed in pure borehole water, and graded across vibrating optical screens.',
      spec: 'Cleanliness: 100% Free from foreign materials'
    },
    {
      num: '03',
      title: 'Engineered Precision Cutting & Shaping',
      desc: 'Our proprietary cutting machinery applies surgical stainless steel blades to create our three distinct profiles: Diamond Cut (faceted crystalline chunks), Salli Cut (thin uniform slivers), and Chips Cut (wafer-thin coin discs).',
      spec: 'Uniformity Tolerance: ±0.3mm variance'
    },
    {
      num: '04',
      title: 'Natural Solar Curing & Moisture Calibration',
      desc: 'Arecanuts are slow-cured in hygienic polyhouse solar dryers on elevated food-grade racks. Constant airflow prevents mould formation while preserving the rich essential oils and tannins.',
      spec: 'Calibrated Moisture: Strictly under 11%'
    },
    {
      num: '05',
      title: 'Aroma-Lock Packaging & Global Dispatch',
      desc: 'Cured cuts are nitrogen-flushed into 3-ply heavy foil stand-up pouches or multi-walled export jute sacks with poly liners to ensure 24 months of natural shelf life.',
      spec: 'Packaging Standard: Food Grade ISO/FSSAI Certified'
    }
  ]

  return (
    <div className="pt-28 pb-24 bg-[#F5F0E6] text-[#10120F] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#292A27]/60 mb-8">
          <Link to="/" className="hover:text-[#9C7733]">Home</Link>
          <span>/</span>
          <span className="text-[#9C7733] font-medium">Our Process</span>
        </div>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#C8A15A]" />
              <span className="text-[#9C7733] text-xs font-semibold tracking-[0.25em] uppercase">
                ESTATE TO EXCELLENCE
              </span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#10120F] mb-6">
              Precision Engineering Meets Ancestral Agronomy
            </h1>
            <p className="text-base sm:text-lg text-[#292A27]/85 font-light leading-relaxed mb-6">
              Processing arecanuts requires equal parts reverence for tradition and scientific diligence. At RAK TRADERS, our five-stage processing protocol transforms raw harvested fruit into pristine export-grade granules.
            </p>
            <button
              onClick={() => setIsVideoOpen(true)}
              className="btn-gold text-xs px-6 py-3 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current mr-1" />
              <span>Watch the 4K Process Video (03:54)</span>
            </button>
          </div>

          <div className="lg:col-span-5">
            <div 
              onClick={() => setIsVideoOpen(true)}
              className="rounded-3xl overflow-hidden shadow-2xl border border-[#C8A15A]/30 aspect-[16/10] relative group cursor-pointer"
            >
              <img src="/images/process-facility.webp" alt="Processing facility" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#FAF7F2] text-[#10120F] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Deep-Dive Steps */}
        <div className="space-y-6 mb-16">
          {detailedSteps.map(step => (
            <div key={step.num} className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#D6D2C9] shadow-sm flex flex-col md:flex-row gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-[#10251B] text-[#C8A15A] font-editorial text-2xl font-bold flex items-center justify-center shrink-0">
                {step.num}
              </div>
              <div className="flex-1">
                <h3 className="font-editorial text-2xl font-bold text-[#10120F] mb-2">{step.title}</h3>
                <p className="text-sm text-[#292A27]/85 leading-relaxed font-normal mb-3">{step.desc}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-[#EAE5D9] text-[#9C7733] text-xs font-mono font-semibold">
                  {step.spec}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#10251B] text-[#F5F0E6] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold">Inspect Our Finished Cuts</h3>
            <p className="text-xs sm:text-sm text-[#D6D2C9]/80 mt-1">Available in retail pouches and commercial bulk containers.</p>
          </div>
          <Link to="/shop" className="btn-gold text-xs px-6 py-3 whitespace-nowrap">
            View All Products <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

      </div>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </div>
  )
}

export default ProcessPage
