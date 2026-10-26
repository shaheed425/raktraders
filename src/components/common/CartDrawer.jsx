import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, subtotal, shipping, tax, total, totalItems } = useCart()
  const navigate = useNavigate()

  if (!isCartOpen) return null

  const freeShippingThreshold = 1500
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100))
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal)

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#10120F]/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#10120F] text-[#F5F0E6] h-full shadow-2xl border-l border-[#292A27] flex flex-col z-10 animate-slideLeft">
        
        {/* Header */}
        <div className="p-5 border-b border-[#292A27] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#C8A15A]" />
            <h3 className="font-editorial text-xl font-bold tracking-wide">
              Your Order Basket
            </h3>
            <span className="text-xs bg-[#10251B] text-[#C8A15A] px-2 py-0.5 rounded-full border border-[#C8A15A]/30">
              {totalItems} items
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-[#D6D2C9] hover:text-[#C8A15A] rounded-full hover:bg-[#292A27]/50 transition-colors"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="px-5 py-3 bg-[#10251B]/60 border-b border-[#292A27] text-left">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-[#D6D2C9]/85">
              {remainingForFreeShipping > 0 
                ? `Add ₹${remainingForFreeShipping.toLocaleString('en-IN')} more for Free Delivery`
                : '🎉 You have unlocked Free Express Shipping!'}
            </span>
            <span className="font-mono text-[#C8A15A] font-semibold">{progressPercent}%</span>
          </div>
          <div className="w-full bg-[#10120F] h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-[#C8A15A] h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#10251B] border border-[#C8A15A]/30 flex items-center justify-center text-[#C8A15A]">
                <ShoppingBag className="w-8 h-8 opacity-60" />
              </div>
              <h4 className="font-editorial text-2xl font-bold text-[#F5F0E6]">Your basket is empty</h4>
              <p className="text-xs text-[#D6D2C9]/70 max-w-xs">
                Explore our three master cuts sourced from Mangalore and Kerala estates.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false)
                  navigate('/shop')
                }}
                className="btn-gold text-xs px-5 py-2.5 mt-2"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-[#292A27]/30 border border-[#292A27] hover:border-[#C8A15A]/40 transition-colors text-left"
              >
                <div className="w-16 h-20 rounded-lg overflow-hidden bg-[#10120F] shrink-0 border border-[#292A27] p-1 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1">
                    <h5 className="font-editorial text-base font-bold text-[#F5F0E6] truncate">
                      {item.name}
                    </h5>
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="text-[#D6D2C9]/50 hover:text-red-400 p-1"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-[11px] text-[#C8A15A] font-medium">
                    {item.size}
                  </p>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-[#292A27] rounded-full bg-[#10120F] px-1.5 py-0.5">
                      <button
                        onClick={() => updateQuantity(item.id, item.size, -1)}
                        className="w-5 h-5 flex items-center justify-center text-[#D6D2C9] hover:text-[#C8A15A]"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.size, 1)}
                        className="w-5 h-5 flex items-center justify-center text-[#D6D2C9] hover:text-[#C8A15A]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-sm font-bold text-[#F5F0E6]">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#292A27] bg-[#10120F]/95 space-y-3">
            <div className="space-y-1.5 text-xs text-[#D6D2C9]/85">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-[#F5F0E6]">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="font-semibold text-[#F5F0E6]">
                  {shipping === 0 ? <span className="text-emerald-400">FREE</span> : `₹${shipping}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tax (5% GST)</span>
                <span className="font-semibold text-[#F5F0E6]">₹{tax.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#292A27] text-sm">
                <span className="font-bold text-[#F5F0E6]">Estimated Total</span>
                <span className="font-editorial text-xl font-bold text-[#C8A15A]">
                  ₹{total.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  setIsCartOpen(false)
                  navigate('/checkout')
                }}
                id="cart-drawer-checkout-btn"
                className="w-full btn-gold justify-center py-3 text-sm font-semibold shadow-lg shadow-[#C8A15A]/25"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={() => {
                  setIsCartOpen(false)
                  navigate('/cart')
                }}
                className="w-full py-2 text-xs text-[#D6D2C9]/80 hover:text-[#C8A15A] text-center transition-colors"
              >
                View Full Basket &amp; Order Notes
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#D6D2C9]/60 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C8A15A]" />
              <span>100% Genuine Estate-Grade Sourcing • Secure Checkout</span>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default CartDrawer
