import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BrandLogo from './BrandLogo'
import { Mail, Phone, MapPin, ArrowUp, Lock, ArrowRight, LayoutGrid, Leaf, Headphones, ChevronDown } from 'lucide-react'

export const Footer = () => {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (sectionId) => {
    setOpenSection(prev => prev === sectionId ? null : sectionId)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#0E100D] text-[#F5F0E6] border-t border-[#292A27] overflow-hidden">
      
      {/* =========================================================================
          MOBILE VIEW FOOTER (md:hidden) — EXACT MATCH TO REFERENCE IMAGE
      ========================================================================= */}
      <div className="md:hidden relative px-5 pt-12 pb-36 text-left">
        {/* Background Arecanut Accent on Top Right */}
        <div 
          className="absolute -top-4 -right-6 w-[290px] h-[330px] pointer-events-none opacity-60 mix-blend-lighten bg-no-repeat bg-contain bg-right-top"
          style={{ backgroundImage: "url('/images/hero-arecanut-bowl.webp')" }}
          aria-hidden="true"
        />

        {/* Ambient Dark Forest Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#0C150F]/70 via-[#070D08]/92 to-[#040705] pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="relative z-10">
          {/* Brand Logo */}
          <div className="mb-4">
            <BrandLogo size="normal" light={false} />
          </div>

          {/* Intro Description */}
          <p className="text-sm text-[#D6D2C9]/85 font-light leading-relaxed max-w-[280px]">
            Leading the export and wholesale of authentic arecanut products from Mangalore &amp; Kerala since 1980. Preserving ancestral agrarian integrity with global quality standards.
          </p>

          {/* Social Icons (Facebook, Instagram, LinkedIn, YouTube) */}
          <div className="flex items-center gap-3 mt-6">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/90 hover:text-[#C8A15A] hover:border-[#C8A15A]/40 hover:bg-white/10 transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/90 hover:text-[#C8A15A] hover:border-[#C8A15A]/40 hover:bg-white/10 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>

            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/90 hover:text-[#C8A15A] hover:border-[#C8A15A]/40 hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/90 hover:text-[#C8A15A] hover:border-[#C8A15A]/40 hover:bg-white/10 transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

          {/* FSSAI & APEDA Export Standards Pill Button */}
          <div className="mt-6">
            <Link
              to="/quality"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C8A15A]/60 bg-black/25 text-[#DFC287] hover:text-[#F5F0E6] hover:border-[#C8A15A] text-xs font-medium tracking-wide transition-colors"
            >
              <span className="whitespace-nowrap">FSSAI &amp; APEDA Export Standards</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C8A15A] shrink-0" />
            </Link>
          </div>

          {/* Divider */}
          <div className="border-t border-white/[0.08] mt-8 mb-2" />

          {/* Collapsible Accordion Sections */}
          <div className="divide-y divide-white/[0.08]">
            
            {/* 1. Explore */}
            <div>
              <button
                onClick={() => toggleSection('explore')}
                className="w-full py-4 flex items-center justify-between text-left group cursor-pointer"
                aria-expanded={openSection === 'explore'}
              >
                <div className="flex items-center gap-3.5">
                  <LayoutGrid className="w-5 h-5 text-[#C8A15A] shrink-0" />
                  <span className="font-editorial text-lg font-bold text-[#F5F0E6] tracking-wide whitespace-nowrap">
                    Explore
                  </span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-white/60 transition-transform duration-200 shrink-0 ${
                    openSection === 'explore' ? 'rotate-180 text-[#C8A15A]' : ''
                  }`} 
                />
              </button>
              {openSection === 'explore' && (
                <ul className="pb-4 pt-1 pl-8 space-y-2.5 text-sm text-[#D6D2C9]/80 animate-fadeIn">
                  <li><Link to="/" className="hover:text-[#C8A15A] transition-colors block py-0.5">Home</Link></li>
                  <li><Link to="/story" className="hover:text-[#C8A15A] transition-colors block py-0.5">Our Story</Link></li>
                  <li><Link to="/shop" className="hover:text-[#C8A15A] transition-colors block py-0.5">All Products</Link></li>
                  <li><Link to="/process" className="hover:text-[#C8A15A] transition-colors block py-0.5">Our Process</Link></li>
                  <li><Link to="/contact" className="hover:text-[#C8A15A] transition-colors block py-0.5">Contact Us</Link></li>
                </ul>
              )}
            </div>

            {/* 2. Our Three Cuts */}
            <div>
              <button
                onClick={() => toggleSection('cuts')}
                className="w-full py-4 flex items-center justify-between text-left group cursor-pointer"
                aria-expanded={openSection === 'cuts'}
              >
                <div className="flex items-center gap-3.5">
                  <Leaf className="w-5 h-5 text-[#C8A15A] shrink-0" />
                  <span className="font-editorial text-lg font-bold text-[#F5F0E6] tracking-wide whitespace-nowrap">
                    Our Three Cuts
                  </span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-white/60 transition-transform duration-200 shrink-0 ${
                    openSection === 'cuts' ? 'rotate-180 text-[#C8A15A]' : ''
                  }`} 
                />
              </button>
              {openSection === 'cuts' && (
                <ul className="pb-4 pt-1 pl-8 space-y-2.5 text-sm text-[#D6D2C9]/80 animate-fadeIn">
                  <li>
                    <Link to="/products/diamond-cut" className="hover:text-[#C8A15A] transition-colors flex items-center justify-between pr-4 py-0.5">
                      <span>Diamond Cut</span>
                      <span className="text-[10px] text-[#C8A15A]">Premium</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/salli-cut" className="hover:text-[#C8A15A] transition-colors flex items-center justify-between pr-4 py-0.5">
                      <span>Salli Cut</span>
                      <span className="text-[10px] text-[#C8A15A]">Traditional</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/chips-cut" className="hover:text-[#C8A15A] transition-colors flex items-center justify-between pr-4 py-0.5">
                      <span>Chips Cut</span>
                      <span className="text-[10px] text-[#C8A15A]">Value Added</span>
                    </Link>
                  </li>
                  <li className="pt-1.5">
                    <Link to="/track-order" className="text-xs text-[#DFC287] hover:underline flex items-center gap-1">
                      Track Your Order →
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* 3. Head Office */}
            <div>
              <button
                onClick={() => toggleSection('office')}
                className="w-full py-4 flex items-center justify-between text-left group cursor-pointer"
                aria-expanded={openSection === 'office'}
              >
                <div className="flex items-center gap-3.5">
                  <MapPin className="w-5 h-5 text-[#C8A15A] shrink-0" />
                  <span className="font-editorial text-lg font-bold text-[#F5F0E6] tracking-wide whitespace-nowrap">
                    Head Office
                  </span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-white/60 transition-transform duration-200 shrink-0 ${
                    openSection === 'office' ? 'rotate-180 text-[#C8A15A]' : ''
                  }`} 
                />
              </button>
              {openSection === 'office' && (
                <ul className="pb-4 pt-1 pl-8 space-y-2.5 text-xs sm:text-sm text-[#D6D2C9]/80 animate-fadeIn">
                  <li className="leading-relaxed">
                    Bunder Port Road, Mangalore, Karnataka &amp; Kasaragod, Kerala, India
                  </li>
                  <li>
                    <a href="tel:+917358807848" className="hover:text-[#C8A15A] transition-colors">
                      +91 7358 807 848
                    </a>
                  </li>
                  <li>
                    <a href="mailto:raktraders784@gmail.com" className="hover:text-[#C8A15A] transition-colors">
                      raktraders784@gmail.com
                    </a>
                  </li>
                </ul>
              )}
            </div>

            {/* 4. Support */}
            <div>
              <button
                onClick={() => toggleSection('support')}
                className="w-full py-4 flex items-center justify-between text-left group cursor-pointer"
                aria-expanded={openSection === 'support'}
              >
                <div className="flex items-center gap-3.5">
                  <Headphones className="w-5 h-5 text-[#C8A15A] shrink-0" />
                  <span className="font-editorial text-lg font-bold text-[#F5F0E6] tracking-wide whitespace-nowrap">
                    Support
                  </span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-white/60 transition-transform duration-200 shrink-0 ${
                    openSection === 'support' ? 'rotate-180 text-[#C8A15A]' : ''
                  }`} 
                />
              </button>
              {openSection === 'support' && (
                <div className="pb-4 pt-1 pl-8 space-y-2 text-xs sm:text-sm text-[#D6D2C9]/80 animate-fadeIn">
                  <p>Customer &amp; Wholesale Export Helpdesk</p>
                  <p className="text-[#DFC287]">Mon – Sat: 9:00 AM – 6:00 PM IST</p>
                  <p>Direct WhatsApp &amp; Bulk Shipment Inquiries</p>
                </div>
              )}
            </div>

          </div>

          {/* Copyright Text */}
          <div className="pt-6 text-left">
            <p className="text-xs text-[#D6D2C9]/65 leading-relaxed">
              © {new Date().getFullYear()} RAK TRADERS. All rights reserved.
            </p>
            <p className="text-xs text-[#D6D2C9]/50 mt-0.5">
              Crafted for global excellence.
            </p>
          </div>

          {/* Bottom Divider */}
          <div className="border-t border-white/[0.08] my-4" />

          {/* Bottom Action Bar: Admin Portal | Back to Top */}
          <div className="flex items-center justify-between text-xs text-[#D6D2C9]/70 pb-2">
            <Link 
              to="/admin" 
              className="inline-flex items-center gap-1.5 text-[#C8A15A] hover:text-[#DFC287] transition-colors whitespace-nowrap"
            >
              <Lock className="w-3.5 h-3.5 text-[#C8A15A] shrink-0" />
              <span>Admin Portal</span>
            </Link>

            <span className="w-[1px] h-3.5 bg-white/20 mx-2" />

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#D6D2C9]/70 hover:text-[#C8A15A] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>

        </div>
      </div>

      {/* =========================================================================
          DESKTOP VIEW FOOTER (hidden md:block) — UNTOUCHED ORIGINAL 5-COL GRID
      ========================================================================= */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-12 text-left">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="large" />
            <p className="text-sm text-[#D6D2C9]/75 max-w-sm font-light leading-relaxed">
              Leading the export and wholesale of authentic arecanut products from Mangalore &amp; Kerala since 1980. Preserving ancestral agrarian integrity with global quality standards.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10251B] border border-[#C8A15A]/30 text-[#C8A15A] text-xs font-mono">
                FSSAI &amp; APEDA Export Standards
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-editorial text-lg font-bold text-[#F5F0E6] mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#D6D2C9]/80">
              <li><Link to="/" className="hover:text-[#C8A15A] transition-colors">Home</Link></li>
              <li><Link to="/story" className="hover:text-[#C8A15A] transition-colors">Our Story</Link></li>
              <li><Link to="/shop" className="hover:text-[#C8A15A] transition-colors">All Products</Link></li>
              <li><Link to="/process" className="hover:text-[#C8A15A] transition-colors">Our Process</Link></li>
              <li><Link to="/contact" className="hover:text-[#C8A15A] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Three Unique Cuts */}
          <div>
            <h4 className="font-editorial text-lg font-bold text-[#F5F0E6] mb-4">
              Our Three Cuts
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D6D2C9]/80">
              <li>
                <Link to="/products/diamond-cut" className="hover:text-[#C8A15A] transition-colors flex items-center justify-between">
                  <span>Diamond Cut</span>
                  <span className="text-[10px] text-[#C8A15A]">Premium</span>
                </Link>
              </li>
              <li>
                <Link to="/products/salli-cut" className="hover:text-[#C8A15A] transition-colors flex items-center justify-between">
                  <span>Salli Cut</span>
                  <span className="text-[10px] text-[#C8A15A]">Traditional</span>
                </Link>
              </li>
              <li>
                <Link to="/products/chips-cut" className="hover:text-[#C8A15A] transition-colors flex items-center justify-between">
                  <span>Chips Cut</span>
                  <span className="text-[10px] text-[#C8A15A]">Value Added</span>
                </Link>
              </li>
              <li className="pt-2">
                <Link to="/track-order" className="text-xs text-[#DFC287] hover:underline flex items-center gap-1">
                  Track Your Order →
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Contact */}
          <div>
            <h4 className="font-editorial text-lg font-bold text-[#F5F0E6] mb-4">
              Head Office
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#D6D2C9]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8A15A] shrink-0 mt-0.5" />
                <span>Bunder Port Road, Mangalore, Karnataka &amp; Kasaragod, Kerala, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8A15A] shrink-0" />
                <a href="tel:+917358807848" className="hover:text-[#C8A15A] transition-colors">
                  +91 7358 807 848
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C8A15A] shrink-0" />
                <a href="mailto:raktraders784@gmail.com" className="hover:text-[#C8A15A] transition-colors truncate">
                  raktraders784@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Desktop Bottom Bar */}
        <div className="pt-8 border-t border-[#292A27] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D6D2C9]/60">
          <p>© {new Date().getFullYear()} RAK TRADERS. All rights reserved. Crafted for global excellence.</p>
          
          <div className="flex items-center gap-6">
            <Link to="/admin" className="inline-flex items-center gap-1.5 text-[#C8A15A]/80 hover:text-[#C8A15A] transition-colors">
              <Lock className="w-3 h-3" />
              <span>Admin Portal</span>
            </Link>
            
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#D6D2C9]/70 hover:text-[#C8A15A] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
