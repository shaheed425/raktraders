import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Tag, ArrowLeft } from 'lucide-react'
import { useCart } from '../context/CartContext'

export const CartPage = () => {
  const { items, updateQuantity, removeFromCart, clearCart, subtotal, shipping, tax, total, totalItems } = useCart()
  const navigate = useNavigate()
  const [couponCode, setCouponCode] = useState('')
  const [couponApplied, setCouponApplied] = useState(false)
  const [orderNotes, setOrderNotes] = useState('')

  const handleApplyCoupon = (e) => {
    e.preventDefault()
    if (couponCode.toUpperCase() === 'RAK10' || couponCode.toUpperCase() === 'EXCEL10') {
      setCouponApplied(true)
    } else {
      alert('Invalid coupon code. Try "RAK10" for 10% discount!')
    }
  }

  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0
  const finalTotal = Math.max(0, total - discount)

  if (items.length === 0) {
    return (
      <div className="pt-36 pb-28 bg-[#10120F] text-[#F5F0E6] min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4 max-w-md mx-auto px-4">
          <div className="w-20 h-20 rounded-full bg-[#10251B] border border-[#C8A15A]/40 flex items-center justify-center mx-auto text-[#C8A15A]">
            <ShoppingBag className="w-10 h-10 opacity-70" />
          </div>
          <h2 className="font-editorial text-3xl font-bold">Your Basket is Currently Empty</h2>
          <p className="text-sm text-[#D6D2C9]/75">
            Discover our authentic Diamond, Salli, and Chips cuts prepared for global connoisseurs.
          </p>
          <Link to="/shop" className="btn-gold text-xs px-6 py-3 inline-flex items-center gap-2">
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-28 pb-24 bg-[#10120F] text-[#F5F0E6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Title */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-[1.5px] bg-[#C8A15A]" />
            <span className="text-[#C8A15A] text-xs font-semibold tracking-[0.25em] uppercase">
              ORDER BASKET
            </span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold">
            Review Your Selection ({totalItems} items)
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Items Table / List */}
          <div className="lg:col-span-8 space-y-4">
            <div className="hidden sm:grid grid-cols-12 text-xs font-semibold text-[#D6D2C9]/60 uppercase tracking-wider pb-3 border-b border-[#292A27]">
              <div className="col-span-6">Cut &amp; Pack Details</div>
              <div className="col-span-2 text-center">Unit Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Line Total</div>
            </div>

            {items.map(item => (
              <div
                key={`${item.id}-${item.size}`}
                className="p-4 sm:p-5 rounded-2xl bg-[#292A27]/25 border border-[#292A27] flex flex-col sm:grid sm:grid-cols-12 gap-4 items-center"
              >
                {/* Item Details */}
                <div className="col-span-6 flex items-center gap-4 w-full">
                  <div className="w-16 h-20 rounded-xl bg-[#10120F] border border-[#292A27] p-1 flex items-center justify-center shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-xl font-bold text-[#F5F0E6] leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#C8A15A] font-medium mt-0.5">{item.size}</p>
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="text-[11px] text-[#D6D2C9]/60 hover:text-red-400 flex items-center gap-1 mt-2"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>

                {/* Unit Price */}
                <div className="col-span-2 text-center text-sm font-medium text-[#D6D2C9]">
                  ₹{item.price.toLocaleString('en-IN')}
                </div>

                {/* Quantity */}
                <div className="col-span-2 flex justify-center">
                  <div className="flex items-center border border-[#292A27] rounded-full bg-[#10120F] px-2 py-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.size, -1)}
                      className="w-5 h-5 flex items-center justify-center text-[#D6D2C9] hover:text-[#C8A15A]"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-7 text-center text-xs font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.size, 1)}
                      className="w-5 h-5 flex items-center justify-center text-[#D6D2C9] hover:text-[#C8A15A]"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Line Total */}
                <div className="col-span-2 text-right font-sans font-bold text-base text-[#F5F0E6]">
                  ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                </div>
              </div>
            ))}

            {/* Clear Cart / Continue Shopping */}
            <div className="pt-4 flex items-center justify-between text-xs text-[#D6D2C9]">
              <Link to="/shop" className="inline-flex items-center gap-1 text-[#C8A15A] hover:underline">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Continue Shopping</span>
              </Link>

              <button
                onClick={clearCart}
                className="text-[#D6D2C9]/60 hover:text-red-400 transition-colors"
              >
                Clear Entire Basket
              </button>
            </div>

            {/* Special Instructions Note */}
            <div className="pt-6">
              <label className="block text-xs font-medium text-[#D6D2C9] mb-1.5 uppercase tracking-wider">
                Special Delivery Instructions or Customs Notes:
              </label>
              <textarea
                rows="2"
                value={orderNotes}
                onChange={e => setOrderNotes(e.target.value)}
                placeholder="Optional notes for delivery partner or packaging requirements..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#292A27]/40 border border-[#292A27] focus:border-[#C8A15A] focus:outline-none text-xs text-[#F5F0E6] resize-none"
              />
            </div>
          </div>

          {/* Right Column: Order Summary Card */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl bg-[#292A27]/30 border border-[#292A27] p-6 sm:p-7 shadow-xl space-y-5">
              <h3 className="font-editorial text-2xl font-bold border-b border-[#292A27] pb-3">
                Order Summary
              </h3>

              {/* Promo Code Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={e => setCouponCode(e.target.value)}
                  placeholder="Promo Code (use RAK10)"
                  className="flex-1 px-3 py-2 rounded-xl bg-[#10120F] border border-[#292A27] text-xs uppercase text-[#F5F0E6] focus:border-[#C8A15A] focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#10251B] border border-[#C8A15A]/40 text-[#C8A15A] text-xs font-semibold hover:bg-[#C8A15A] hover:text-[#10120F] transition-colors"
                >
                  Apply
                </button>
              </form>

              {couponApplied && (
                <div className="text-[11px] text-emerald-400 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  <span>10% RAK10 trade discount applied!</span>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-2.5 text-xs text-[#D6D2C9]/85 pt-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#F5F0E6]">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>

                {couponApplied && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount (10%)</span>
                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Shipping Fee</span>
                  <span>{shipping === 0 ? <strong className="text-emerald-400">FREE</strong> : `₹${shipping}`}</span>
                </div>

                <div className="flex justify-between">
                  <span>GST (5% Agricultural Spices)</span>
                  <span className="font-semibold text-[#F5F0E6]">₹{tax.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between pt-3 border-t border-[#292A27] text-base">
                  <span className="font-bold text-[#F5F0E6]">Total Payable</span>
                  <span className="font-editorial text-2xl font-bold text-[#C8A15A]">
                    ₹{finalTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => navigate('/checkout')}
                className="w-full btn-gold justify-center py-3.5 text-sm font-semibold shadow-lg shadow-[#C8A15A]/25"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#D6D2C9]/60 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C8A15A]" />
                <span>Encrypted 256-Bit SSL Checkout Security</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default CartPage
