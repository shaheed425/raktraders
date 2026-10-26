import React from 'react'
import { Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react'

export const ContactSection = ({ onOpenQuote, onOpenContact }) => {
  return (
    <section 
      id="contact-section"
      className="relative py-20 lg:py-28 bg-[#10120F] text-[#F5F0E6] overflow-hidden"
    >
      {/* Background Subtle Leaf Shadows */}
      <div className="absolute inset-0 bg-botanical-dark pointer-events-none opacity-80" />

      {/* Decorative Bowl Image Centered/Right Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-30 lg:opacity-60 pointer-events-none overflow-hidden">
        <img
          src="/images/contact-bowl.webp"
          alt="Artisanal wooden bowl with sliced arecanuts and fresh betel leaves"
          className="w-full h-full object-cover object-left mask-[radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-7 text-left z-10">
            {/* Small Gold Section Label */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#C8A15A]" />
              <span className="text-[#C8A15A] text-xs font-semibold tracking-[0.25em] uppercase">
                LET’S CONNECT
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-5xl font-semibold leading-[1.1] text-[#F5F0E6] mb-5">
              Let’s Build a<br />Lasting Partnership.
            </h2>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-[#D6D2C9]/85 font-light leading-relaxed mb-8 max-w-lg">
              Looking for a reliable source of premium arecanut products? Get in touch with our team for bulk enquiries, pricing and export opportunities.
            </p>

            {/* Buttons: Request a Quote & Contact Our Team */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                id="btn-request-quote"
                className="btn-gold text-xs sm:text-sm px-6 py-3.5 shadow-lg shadow-[#C8A15A]/25 cursor-pointer font-medium"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={onOpenContact}
                id="btn-contact-team"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent hover:bg-[#F5F0E6]/10 border border-[#F5F0E6]/40 hover:border-[#F5F0E6] text-[#F5F0E6] text-xs sm:text-sm transition-all cursor-pointer font-medium"
              >
                <span>Contact Our Team</span>
              </button>
            </div>
          </div>

          {/* Right Column: Floating Ivory Contact Panel */}
          <div className="lg:col-span-5 z-10">
            <div className="rounded-3xl bg-[#F5F0E6] text-[#10120F] p-6 sm:p-8 shadow-2xl border border-[#C8A15A]/40 space-y-5 text-left">
              
              {/* Email Us */}
              <a 
                href="mailto:raktraders784@gmail.com"
                id="contact-link-email"
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-[#FAF7F2]/80 border border-[#D6D2C9]/70 hover:border-[#C8A15A] transition-all group shadow-sm"
              >
                <div className="w-11 h-11 rounded-full bg-[#C8A15A]/20 flex items-center justify-center text-[#9C7733] group-hover:bg-[#C8A15A] group-hover:text-[#10120F] transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#10120F]/60 uppercase tracking-wider">
                    Email Us
                  </p>
                  <p className="text-sm sm:text-base font-bold text-[#10120F] group-hover:text-[#9C7733] transition-colors">
                    raktraders784@gmail.com
                  </p>
                </div>
              </a>

              {/* Call Us */}
              <a 
                href="tel:+917358807848"
                id="contact-link-phone"
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-[#FAF7F2]/80 border border-[#D6D2C9]/70 hover:border-[#C8A15A] transition-all group shadow-sm"
              >
                <div className="w-11 h-11 rounded-full bg-[#C8A15A]/20 flex items-center justify-center text-[#9C7733] group-hover:bg-[#C8A15A] group-hover:text-[#10120F] transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#10120F]/60 uppercase tracking-wider">
                    Call Us
                  </p>
                  <p className="text-sm sm:text-base font-bold text-[#10120F] group-hover:text-[#9C7733] transition-colors">
                    +91 7358 807 848
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/917358807848?text=Hello%20RAK%20Traders,%20I%20am%20interested%20in%20arecanut%20products."
                target="_blank"
                rel="noopener noreferrer"
                id="contact-link-whatsapp"
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 hover:border-[#25D366] transition-all group shadow-sm"
              >
                <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center text-white transition-colors shrink-0 shadow-md">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#10120F]/60 uppercase tracking-wider">
                    WhatsApp
                  </p>
                  <p className="text-sm sm:text-base font-bold text-[#10120F] group-hover:text-[#128C7E] transition-colors">
                    Chat with Our Team
                  </p>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection
