import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ShieldCheck, CreditCard, Banknote, Building2, CheckCircle2, Lock, ArrowRight, ArrowLeft } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { api } from '../services/api'

export const CheckoutPage = () => {
  const { items, subtotal, shipping, tax, total, clearCart } = useCart()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    address1: '',
    address2: '',
    city: '',
    state: 'Karnataka',
    postalCode: '',
    country: 'India',
    paymentMethod: 'online', // 'online' | 'bank_wire' | 'cod'
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (items.length === 0) {
    return (
      <div className="pt-36 pb-28 bg-[#10120F] text-[#F5F0E6] min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="font-editorial text-3xl font-bold">No Items to Checkout</h2>
          <p className="text-sm text-[#D6D2C9]/70">Your shopping basket is empty.</p>
          <Link to="/shop" className="btn-gold text-xs px-6 py-2.5">Browse Catalogue</Link>
        </div>
      </div>
    )
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlePlaceOrder = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const orderPayload = {
        customer: {
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          country: formData.country
        },
        shippingAddress: {
          line1: formData.address1,
          line2: formData.address2,
          city: formData.city,
          state: formData.state,
          postalCode: formData.postalCode,
          country: formData.country
        },
        items: items.map(item => ({
          id: item.id,
          name: item.name,
          size: item.size,
          price: item.price,
          quantity: item.quantity,
          total: item.price * item.quantity
        })),
        subtotal,
        shippingFee: shipping,
        tax,
        totalAmount: total,
        currency: 'INR',
        paymentMethod: 
          formData.paymentMethod === 'online' ? 'Online Gateway (Test Mode / Verified)' :
          formData.paymentMethod === 'bank_wire' ? 'Bank Wire / RTGS Wholesale' :
          'Cash on Delivery',
        paymentStatus: formData.paymentMethod === 'cod' ? 'Pending (COD)' : 'Paid (Verified)',
        orderStatus: 'Processing'
      }

      const res = await api.createOrder(orderPayload)
      if (res.success && res.data) {
        clearCart()
        navigate(`/order-success/${res.data.orderId}`, { state: { order: res.data } })
      } else {
        setError(res.message || 'Could not process order. Please check required fields.')
      }
    } catch (err) {
      console.error(err)
      setError('An error occurred connecting to the order processing service.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-28 pb-24 bg-[#10120F] text-[#F5F0E6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#D6D2C9]/60 mb-6">
          <Link to="/cart" className="hover:text-[#C8A15A] flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Basket</span>
          </Link>
          <span>/</span>
          <span className="text-[#DFC287]">Secure Checkout</span>
        </div>

        <div className="mb-8">
          <h1 className="font-editorial text-4xl font-bold">
            Customer Checkout &amp; Shipping
          </h1>
          <p className="text-xs text-[#D6D2C9]/70 mt-1">
            Certified export &amp; domestic dispatch from Mangalore, India.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-red-900/40 border border-red-700/60 text-red-200 text-xs">
            {error}
          </div>
        )}

        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Form Fields: Contact & Shipping */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Customer Contact */}
              <div className="p-6 rounded-3xl bg-[#292A27]/20 border border-[#292A27] space-y-4">
                <h3 className="font-editorial text-xl font-bold border-b border-[#292A27] pb-2 text-[#DFC287]">
                  1. Contact Information
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#D6D2C9] mb-1">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="e.g. Anand"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] focus:border-[#C8A15A] focus:outline-none text-sm text-[#F5F0E6]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#D6D2C9] mb-1">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="e.g. Hegde"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] focus:border-[#C8A15A] focus:outline-none text-sm text-[#F5F0E6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#D6D2C9] mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="anand@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] focus:border-[#C8A15A] focus:outline-none text-sm text-[#F5F0E6]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#D6D2C9] mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98450 12345"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] focus:border-[#C8A15A] focus:outline-none text-sm text-[#F5F0E6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#D6D2C9] mb-1">
                    Company / Trade Firm (Optional for Tax Invoice)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Hegde Supari Merchants"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] focus:border-[#C8A15A] focus:outline-none text-sm text-[#F5F0E6]"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="p-6 rounded-3xl bg-[#292A27]/20 border border-[#292A27] space-y-4">
                <h3 className="font-editorial text-xl font-bold border-b border-[#292A27] pb-2 text-[#DFC287]">
                  2. Delivery &amp; Shipping Destination
                </h3>

                <div>
                  <label className="block text-xs font-medium text-[#D6D2C9] mb-1">Street Address *</label>
                  <input
                    type="text"
                    name="address1"
                    required
                    value={formData.address1}
                    onChange={handleChange}
                    placeholder="House / Unit / Building / Street"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] focus:border-[#C8A15A] focus:outline-none text-sm text-[#F5F0E6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#D6D2C9] mb-1">Apartment, Suite, Unit (Optional)</label>
                  <input
                    type="text"
                    name="address2"
                    value={formData.address2}
                    onChange={handleChange}
                    placeholder="e.g. Warehouse 3B"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] focus:border-[#C8A15A] focus:outline-none text-sm text-[#F5F0E6]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#D6D2C9] mb-1">City *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Bangalore"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] focus:border-[#C8A15A] focus:outline-none text-sm text-[#F5F0E6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#D6D2C9] mb-1">State / Province *</label>
                    <input
                      type="text"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Karnataka"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] focus:border-[#C8A15A] focus:outline-none text-sm text-[#F5F0E6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#D6D2C9] mb-1">Postal / ZIP Code *</label>
                    <input
                      type="text"
                      name="postalCode"
                      required
                      value={formData.postalCode}
                      onChange={handleChange}
                      placeholder="560001"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] focus:border-[#C8A15A] focus:outline-none text-sm text-[#F5F0E6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#D6D2C9] mb-1">Country *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] focus:border-[#C8A15A] focus:outline-none text-sm text-[#F5F0E6]"
                  >
                    <option value="India">India (Domestic Surface / Air Express)</option>
                    <option value="United Arab Emirates">United Arab Emirates (Air Cargo / Sea)</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                  </select>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="p-6 rounded-3xl bg-[#292A27]/20 border border-[#292A27] space-y-4">
                <h3 className="font-editorial text-xl font-bold border-b border-[#292A27] pb-2 text-[#DFC287]">
                  3. Payment Method
                </h3>

                <div className="space-y-3">
                  {/* Online Gateway Option */}
                  <label className={`p-4 rounded-2xl border flex items-start gap-4 cursor-pointer transition-all ${
                    formData.paymentMethod === 'online'
                      ? 'bg-[#10251B] border-[#C8A15A]'
                      : 'bg-[#10120F] border-[#292A27] hover:border-[#C8A15A]/40'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="online"
                      checked={formData.paymentMethod === 'online'}
                      onChange={handleChange}
                      className="mt-1 accent-[#C8A15A]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-[#C8A15A]" />
                        <span className="text-sm font-bold text-[#F5F0E6]">
                          Online Card / UPI / NetBanking (Test Gateway Active)
                        </span>
                      </div>
                      <p className="text-xs text-[#D6D2C9]/70 mt-1">
                        Instant digital verification. Real test credentials enabled.
                      </p>
                    </div>
                  </label>

                  {/* Bank Wire / RTGS Wholesale */}
                  <label className={`p-4 rounded-2xl border flex items-start gap-4 cursor-pointer transition-all ${
                    formData.paymentMethod === 'bank_wire'
                      ? 'bg-[#10251B] border-[#C8A15A]'
                      : 'bg-[#10120F] border-[#292A27] hover:border-[#C8A15A]/40'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank_wire"
                      checked={formData.paymentMethod === 'bank_wire'}
                      onChange={handleChange}
                      className="mt-1 accent-[#C8A15A]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[#C8A15A]" />
                        <span className="text-sm font-bold text-[#F5F0E6]">
                          Commercial Bank Wire / RTGS (Recommended for Wholesale)
                        </span>
                      </div>
                      <p className="text-xs text-[#D6D2C9]/70 mt-1">
                        Official proforma invoice and bank transfer details generated immediately.
                      </p>
                    </div>
                  </label>

                  {/* Cash on Delivery */}
                  <label className={`p-4 rounded-2xl border flex items-start gap-4 cursor-pointer transition-all ${
                    formData.paymentMethod === 'cod'
                      ? 'bg-[#10251B] border-[#C8A15A]'
                      : 'bg-[#10120F] border-[#292A27] hover:border-[#C8A15A]/40'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                      className="mt-1 accent-[#C8A15A]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Banknote className="w-4 h-4 text-[#C8A15A]" />
                        <span className="text-sm font-bold text-[#F5F0E6]">
                          Cash on Delivery (Domestic Retail Only)
                        </span>
                      </div>
                      <p className="text-xs text-[#D6D2C9]/70 mt-1">
                        Pay upon receiving sealed package via our courier partner.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

            </div>

            {/* Right: Order Summary Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 rounded-3xl bg-[#292A27]/25 border border-[#292A27] p-6 sm:p-7 shadow-2xl space-y-6">
                <h3 className="font-editorial text-2xl font-bold border-b border-[#292A27] pb-3 text-[#F5F0E6]">
                  Order Items ({items.length})
                </h3>

                {/* Items preview */}
                <div className="max-h-64 overflow-y-auto space-y-3 pr-1">
                  {items.map(item => (
                    <div key={`${item.id}-${item.size}`} className="flex items-center gap-3 text-xs">
                      <div className="w-12 h-14 rounded-lg bg-[#10120F] border border-[#292A27] p-1 flex items-center justify-center shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-[#F5F0E6] truncate">{item.name}</p>
                        <p className="text-[10px] text-[#C8A15A]">{item.size} × {item.quantity}</p>
                      </div>
                      <span className="font-bold text-[#F5F0E6]">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-2 text-xs text-[#D6D2C9]/85 pt-3 border-t border-[#292A27]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-[#F5F0E6]">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? <strong className="text-emerald-400">FREE</strong> : `₹${shipping}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (5% GST)</span>
                    <span className="font-semibold text-[#F5F0E6]">₹{tax.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-[#292A27] text-base">
                    <span className="font-bold text-[#F5F0E6]">Total Amount</span>
                    <span className="font-editorial text-2xl font-bold text-[#C8A15A]">
                      ₹{total.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Place Order CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  id="btn-place-order"
                  className="w-full btn-gold justify-center py-4 text-sm font-semibold shadow-xl shadow-[#C8A15A]/25 disabled:opacity-50 cursor-pointer"
                >
                  <Lock className="w-4 h-4 mr-1" />
                  <span>{loading ? 'Confirming & Creating Order...' : `Complete Order • ₹${total.toLocaleString('en-IN')}`}</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] text-[#D6D2C9]/60">
                  <ShieldCheck className="w-4 h-4 text-[#C8A15A]" />
                  <span>Official RAK TRADERS Tax Invoice &amp; Live Tracking Assigned</span>
                </div>
              </div>
            </div>

          </div>
        </form>

      </div>
    </div>
  )
}

export default CheckoutPage
