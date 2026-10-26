import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Package, Box, Handshake, Anchor, Globe, Truck, FileCheck } from 'lucide-react'
import EnquiryModal from '../components/common/EnquiryModal'

export const GlobalReachPage = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)

  return (
    <div className="pt-28 pb-24 bg-[#10120F] text-[#F5F0E6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#D6D2C9]/60 mb-8">
          <Link to="/" className="hover:text-[#C8A15A]">Home</Link>
          <span>/</span>
          <span className="text-[#DFC287] font-medium">Global Reach</span>
        </div>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#C8A15A]" />
              <span className="text-[#C8A15A] text-xs font-semibold tracking-[0.25em] uppercase">
                WORLDWIDE EXPORT LOGISTICS
              </span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Delivering South Indian Tradition Worldwide
            </h1>
            <p className="text-base sm:text-lg text-[#D6D2C9]/85 font-light leading-relaxed mb-6">
              With dedicated shipping berths at New Mangalore Port (NMPT) and Cochin Sea Port, RAK TRADERS bridges the ancient spice lands of Karnataka and Kerala with premier distributors, confectionery houses, and pan-masala manufactures across 18 countries.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="btn-gold text-xs px-6 py-3 cursor-pointer"
              >
                <span>Request Container Export Quotation</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#C8A15A]/30 aspect-[16/10] group">
              <img src="/images/shipping-port.webp" alt="Shipping port at sunset" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>

        {/* Export Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <Package className="w-6 h-6 text-[#C8A15A]" />,
              title: 'Export-Ready Packaging',
              desc: 'Heavy-duty 25kg & 50kg poly-lined jute bags with vacuum protection to withstand humid ocean transit.'
            },
            {
              icon: <Box className="w-6 h-6 text-[#C8A15A]" />,
              title: 'Bulk & FCL Capabilities',
              desc: 'Reliable shipment of 20ft (15 MT) and 40ft (26 MT) Full Container Loads with palletization upon request.'
            },
            {
              icon: <FileCheck className="w-6 h-6 text-[#C8A15A]" />,
              title: 'Full Trade Documentation',
              desc: 'Phytosanitary Certificates, Certificate of Origin (COO), Commercial Invoices, Packing Lists and Bill of Lading.'
            },
            {
              icon: <Anchor className="w-6 h-6 text-[#C8A15A]" />,
              title: 'Flexible Trade Terms',
              desc: 'FOB Mangalore/Cochin, CIF Dubai/Jebel Ali, Singapore, or custom destination ports under secure LC terms.'
            }
          ].map(c => (
            <div key={c.title} className="p-6 rounded-3xl bg-[#292A27]/25 border border-[#292A27] hover:border-[#C8A15A]/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#10251B] border border-[#C8A15A]/40 flex items-center justify-center mb-4">
                {c.icon}
              </div>
              <h3 className="font-editorial text-xl font-bold mb-2">{c.title}</h3>
              <p className="text-xs text-[#D6D2C9]/80 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Global Destinations */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#10251B] border border-[#C8A15A]/30 mb-16">
          <h3 className="font-editorial text-3xl font-bold mb-6 text-center text-[#DFC287]">
            Key Global Trade Corridors
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-[#10120F]/60 border border-[#292A27]">
              <p className="font-editorial text-xl font-bold text-[#F5F0E6]">UAE &amp; GCC</p>
              <p className="text-xs text-[#C8A15A] mt-1">Dubai, Sharjah, Dammam, Muscat</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#10120F]/60 border border-[#292A27]">
              <p className="font-editorial text-xl font-bold text-[#F5F0E6]">Southeast Asia</p>
              <p className="text-xs text-[#C8A15A] mt-1">Singapore, Port Klang, Penang</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#10120F]/60 border border-[#292A27]">
              <p className="font-editorial text-xl font-bold text-[#F5F0E6]">Europe</p>
              <p className="text-xs text-[#C8A15A] mt-1">London, Rotterdam, Hamburg</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#10120F]/60 border border-[#292A27]">
              <p className="font-editorial text-xl font-bold text-[#F5F0E6]">North America</p>
              <p className="text-xs text-[#C8A15A] mt-1">New York, Toronto, Vancouver</p>
            </div>
          </div>
        </div>

      </div>

      <EnquiryModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  )
}

export default GlobalReachPage
