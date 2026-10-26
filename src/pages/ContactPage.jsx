import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2, Building, Clock } from 'lucide-react'
import { api } from '../services/api'

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productOfInterest: 'Diamond Cut',
    volumeRequired: '500 kg',
    destination: 'Domestic India',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await api.submitEnquiry(formData)
      if (res.success) {
        setSubmitted(true)
      } else {
        setError(res.message || 'Failed to submit enquiry')
      }
    } catch {
      setError('Connection error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-28 pb-24 bg-[#10120F] text-[#F5F0E6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#D6D2C9]/60 mb-8">
          <Link to="/" className="hover:text-[#C8A15A]">Home</Link>
          <span>/</span>
          <span className="text-[#DFC287] font-medium">Contact &amp; Trade Enquiries</span>
        </div>

        {/* Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#C8A15A]" />
            <span className="text-[#C8A15A] text-xs font-semibold tracking-[0.25em] uppercase">
              LET’S CONNECT
            </span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Let’s Build a Lasting Partnership
          </h1>
          <p className="text-sm sm:text-base text-[#D6D2C9]/80 max-w-2xl leading-relaxed">
            Reach out to our Mangalore central trading desk for commercial wholesale enquiries, custom packaging specifications, and international export contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info Panels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Verified Channels Card */}
            <div className="rounded-3xl bg-[#F5F0E6] text-[#10120F] p-6 sm:p-8 shadow-2xl border border-[#C8A15A]/40 space-y-4">
              <h3 className="font-editorial text-2xl font-bold border-b border-[#D6D2C9] pb-3">
                Verified Trade Channels
              </h3>

              <a 
                href="mailto:raktraders784@gmail.com"
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-stone-200/60 border border-[#D6D2C9] transition-all group"
              >
                <div className="w-11 h-11 rounded-full bg-[#C8A15A]/20 flex items-center justify-center text-[#9C7733] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#10120F]/60 uppercase">Email Us</p>
                  <p className="text-sm sm:text-base font-bold text-[#10120F]">raktraders784@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+917358807848"
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-stone-200/60 border border-[#D6D2C9] transition-all group"
              >
                <div className="w-11 h-11 rounded-full bg-[#C8A15A]/20 flex items-center justify-center text-[#9C7733] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#10120F]/60 uppercase">Call Us</p>
                  <p className="text-sm sm:text-base font-bold text-[#10120F]">+91 7358 807 848</p>
                </div>
              </a>

              <a 
                href="https://wa.me/917358807848?text=Hello%20RAK%20Traders,%20I%20am%20interested%20in%20arecanut%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 transition-all group"
              >
                <div className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#10120F]/60 uppercase">WhatsApp</p>
                  <p className="text-sm sm:text-base font-bold text-[#10120F]">Chat with Our Team</p>
                </div>
              </a>
            </div>

            {/* Trading Hubs Card */}
            <div className="rounded-3xl bg-[#292A27]/25 border border-[#292A27] p-6 sm:p-7 space-y-4">
              <h4 className="font-editorial text-xl font-bold text-[#DFC287]">
                Processing &amp; Trading Hubs
              </h4>
              <div className="space-y-3 text-xs text-[#D6D2C9]/85">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C8A15A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F5F0E6]">Central Trading Desk &amp; Export Facility:</strong>
                    <p>Bunder Port Road, Near Old Wharf, Mangalore, Karnataka 575001, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C8A15A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F5F0E6]">Kerala Procurement &amp; Curing Yards:</strong>
                    <p>Nileshwaram / Kasaragod Belt, Kerala 671314, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Clock className="w-4 h-4 text-[#C8A15A] shrink-0" />
                  <span>Trade Desk Hours: Mon - Sat: 08:30 AM - 07:00 PM IST</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: RFQ Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#292A27]/25 border border-[#292A27] p-6 sm:p-8 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#10251B] border border-[#C8A15A] flex items-center justify-center mx-auto text-[#C8A15A]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-editorial text-3xl font-bold text-[#F5F0E6]">
                    Enquiry Logged Successfully
                  </h3>
                  <p className="text-sm text-[#D6D2C9]/85 max-w-md mx-auto">
                    Our team will prepare a tailored proforma or sample dispatch quotation and get in touch within 4 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-gold text-xs px-6 py-2.5 mt-2"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <div>
                  <h3 className="font-editorial text-2xl font-bold mb-2 text-[#DFC287]">
                    Send Us an Official Trade Enquiry
                  </h3>
                  <p className="text-xs text-[#D6D2C9]/70 mb-6">
                    Fill out your requirements below to receive current market FOB/CIF quotations.
                  </p>

                  {error && (
                    <div className="mb-4 p-3 rounded-xl bg-red-900/40 border border-red-700 text-red-200 text-xs">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#D6D2C9] mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] text-sm text-[#F5F0E6] focus:border-[#C8A15A] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#D6D2C9] mb-1">Company / Business Name</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={e => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Apex Spice Traders"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] text-sm text-[#F5F0E6] focus:border-[#C8A15A] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#D6D2C9] mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          placeholder="contact@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] text-sm text-[#F5F0E6] focus:border-[#C8A15A] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#D6D2C9] mb-1">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] text-sm text-[#F5F0E6] focus:border-[#C8A15A] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#D6D2C9] mb-1">Cut Selection</label>
                        <select
                          value={formData.productOfInterest}
                          onChange={e => setFormData({ ...formData, productOfInterest: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] text-xs text-[#F5F0E6] focus:border-[#C8A15A] focus:outline-none"
                        >
                          <option value="Diamond Cut">Diamond Cut</option>
                          <option value="Salli Cut">Salli Cut</option>
                          <option value="Chips Cut">Chips Cut</option>
                          <option value="All Three Cuts">All Three Cuts</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#D6D2C9] mb-1">Estimated Quantity</label>
                        <select
                          value={formData.volumeRequired}
                          onChange={e => setFormData({ ...formData, volumeRequired: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] text-xs text-[#F5F0E6] focus:border-[#C8A15A] focus:outline-none"
                        >
                          <option value="50kg - 250kg">50kg - 250kg</option>
                          <option value="500kg">500 kg</option>
                          <option value="1 Ton">1 Ton</option>
                          <option value="5 Tons">5 Tons</option>
                          <option value="20ft Container (15 MT)">20ft FCL (15 MT)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#D6D2C9] mb-1">Destination</label>
                        <input
                          type="text"
                          value={formData.destination}
                          onChange={e => setFormData({ ...formData, destination: e.target.value })}
                          placeholder="e.g. Dubai / Mumbai"
                          className="w-full px-3 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] text-xs text-[#F5F0E6] focus:border-[#C8A15A] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#D6D2C9] mb-1">Enquiry Details</label>
                      <textarea
                        rows="4"
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention any target moisture specifications, packaging preference (vacuum vs jute), or incoterms required..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] text-xs text-[#F5F0E6] focus:border-[#C8A15A] focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full btn-gold justify-center py-3.5 text-sm font-semibold shadow-lg shadow-[#C8A15A]/25 cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4 mr-1" />
                      <span>{loading ? 'Submitting Enquiry...' : 'Submit Commercial Enquiry'}</span>
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ContactPage
