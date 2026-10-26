import React, { useState } from 'react'
import { X, CheckCircle, Send, Building, Mail, Phone, MapPin } from 'lucide-react'
import { api } from '../../services/api'

export const EnquiryModal = ({ isOpen, onClose, defaultProduct = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productOfInterest: defaultProduct || 'Diamond Cut',
    volumeRequired: '500 kg',
    destination: 'India (Domestic Wholesale)',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  if (!isOpen) return null

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
    } catch (err) {
      setError('Connection error. Please try again or WhatsApp us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#10120F]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#10120F] text-[#F5F0E6] rounded-3xl p-6 sm:p-8 border border-[#C8A15A]/40 shadow-2xl z-10 max-h-[90vh] overflow-y-auto text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#D6D2C9] hover:text-[#C8A15A] rounded-full hover:bg-[#292A27]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#10251B] border border-[#C8A15A] flex items-center justify-center text-[#C8A15A]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-editorial text-3xl font-bold text-[#F5F0E6]">
              Enquiry Submitted Successfully
            </h3>
            <p className="text-sm text-[#D6D2C9]/85 max-w-md mx-auto leading-relaxed">
              Thank you for contacting <strong>RAK TRADERS</strong>. Our export trade desk has received your request and will provide FOB/CIF quotation within 4 business hours.
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={() => {
                  setSubmitted(false)
                  onClose()
                }}
                className="btn-gold text-xs px-6 py-2.5"
              >
                Done
              </button>
              <a
                href="https://wa.me/917358807848?text=Hello%20RAK%20Traders,%20I%20just%20submitted%20a%20wholesale%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold text-xs px-5 py-2.5"
              >
                Instant WhatsApp Follow-up
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[#C8A15A] text-xs font-semibold tracking-[0.25em] uppercase">
                EXPORT &amp; WHOLESALE DESK
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#F5F0E6] mt-1">
                Request Commercial Quotation
              </h3>
              <p className="text-xs text-[#D6D2C9]/75 mt-1">
                Direct plantation sourcing for commercial distributors, pan-masala blenders and international importers.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-900/40 border border-red-700/50 text-red-200 text-xs">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#D6D2C9] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tariq Mansoor"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#292A27]/60 border border-[#292A27] focus:border-[#C8A15A] focus:outline-none text-sm text-[#F5F0E6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#D6D2C9] mb-1">
                    Company / Trade Firm
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Al-Noor Global Trading"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#292A27]/60 border border-[#292A27] focus:border-[#C8A15A] focus:outline-none text-sm text-[#F5F0E6]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#D6D2C9] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="trade@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#292A27]/60 border border-[#292A27] focus:border-[#C8A15A] focus:outline-none text-sm text-[#F5F0E6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#D6D2C9] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#292A27]/60 border border-[#292A27] focus:border-[#C8A15A] focus:outline-none text-sm text-[#F5F0E6]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#D6D2C9] mb-1">
                    Cut of Interest
                  </label>
                  <select
                    value={formData.productOfInterest}
                    onChange={e => setFormData({ ...formData, productOfInterest: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#292A27]/80 border border-[#292A27] focus:border-[#C8A15A] focus:outline-none text-xs text-[#F5F0E6]"
                  >
                    <option value="Diamond Cut">Diamond Cut</option>
                    <option value="Salli Cut">Salli Cut</option>
                    <option value="Chips Cut">Chips Cut</option>
                    <option value="Mixed Cuts / Container">All Three Cuts (Assorted)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#D6D2C9] mb-1">
                    Estimated Volume
                  </label>
                  <select
                    value={formData.volumeRequired}
                    onChange={e => setFormData({ ...formData, volumeRequired: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#292A27]/80 border border-[#292A27] focus:border-[#C8A15A] focus:outline-none text-xs text-[#F5F0E6]"
                  >
                    <option value="100 kg - 500 kg">100 kg - 500 kg</option>
                    <option value="1 Metric Ton">1 Metric Ton</option>
                    <option value="5 Metric Tons">5 Metric Tons</option>
                    <option value="1 x 20ft FCL (15 Tons)">1 x 20ft FCL (15 Tons)</option>
                    <option value="Regular Monthly Contract">Monthly Contract</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#D6D2C9] mb-1">
                    Destination
                  </label>
                  <input
                    type="text"
                    value={formData.destination}
                    onChange={e => setFormData({ ...formData, destination: e.target.value })}
                    placeholder="e.g. Dubai / Delhi"
                    className="w-full px-3 py-2.5 rounded-xl bg-[#292A27]/60 border border-[#292A27] focus:border-[#C8A15A] focus:outline-none text-xs text-[#F5F0E6]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#D6D2C9] mb-1">
                  Specific Specifications or Packaging Requirements
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention target moisture levels, custom branding, or desired port of discharge (CIF terms)..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#292A27]/60 border border-[#292A27] focus:border-[#C8A15A] focus:outline-none text-xs text-[#F5F0E6] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-gold justify-center py-3 text-sm font-semibold shadow-lg shadow-[#C8A15A]/25 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4 mr-1" />
                  <span>{loading ? 'Submitting Request...' : 'Send Wholesale Enquiry'}</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  )
}

export default EnquiryModal
