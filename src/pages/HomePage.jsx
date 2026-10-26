import React, { useState } from 'react'
import HeroSection from '../components/home/HeroSection'
import StorySection from '../components/home/StorySection'
import ProductsSection from '../components/home/ProductsSection'
import ProcessSection from '../components/home/ProcessSection'
import QualitySection from '../components/home/QualitySection'
import GlobalReachSection from '../components/home/GlobalReachSection'
import ContactSection from '../components/home/ContactSection'
import EnquiryModal from '../components/common/EnquiryModal'
import VideoModal from '../components/common/VideoModal'

export const HomePage = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [defaultProduct, setDefaultProduct] = useState('')

  const handleOpenQuote = (productName = '') => {
    setDefaultProduct(typeof productName === 'string' ? productName : '')
    setIsEnquiryOpen(true)
  }

  return (
    <main className="w-full">
      {/* 1. HERO CONTAINER (Clean Solid #10110F) */}
      <HeroSection 
        onOpenVideo={() => setIsVideoOpen(true)} 
      />

      {/* 2. OUR STORY SECTION (Warm Ivory #F5F0E6) */}
      <StorySection />

      {/* 3. E-COMMERCE PRODUCT SECTION (Deep Forest Green #10251B) */}
      <ProductsSection 
        onSelectProduct={handleOpenQuote}
      />

      {/* 4. OUR PROCESS SECTION (Warm Ivory #F5F0E6) */}
      <ProcessSection 
        onOpenVideo={() => setIsVideoOpen(true)} 
      />

      {/* 5. QUALITY SECTION (Split Dark #10120F & South India Map) */}
      <QualitySection />

      {/* 6. GLOBAL REACH SECTION (Warm Ivory to Shipping Port) */}
      <GlobalReachSection 
        onOpenEnquiry={() => handleOpenQuote()} 
      />

      {/* 7. CONTACT / FINAL CTA (Deep Black #10120F & Ivory Panel) */}
      <ContactSection 
        onOpenQuote={() => handleOpenQuote()} 
        onOpenContact={() => handleOpenQuote()}
      />

      {/* Modals */}
      <EnquiryModal 
        isOpen={isEnquiryOpen} 
        onClose={() => setIsEnquiryOpen(false)} 
        defaultProduct={defaultProduct}
      />

      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
      />
    </main>
  )
}

export default HomePage
