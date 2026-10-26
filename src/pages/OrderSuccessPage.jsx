import React, { useEffect } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import { CheckCircle2, PackageCheck, Printer, ArrowRight, Truck, MapPin, Calendar, Clock } from 'lucide-react'

export const OrderSuccessPage = () => {
  const { orderId } = useParams()
  const location = useLocation()
  const order = location.state?.order

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="pt-28 pb-24 bg-[#10120F] text-[#F5F0E6] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Celebration Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="w-20 h-20 rounded-full bg-[#10251B] border-2 border-[#C8A15A] flex items-center justify-center mx-auto text-[#C8A15A] shadow-xl shadow-[#C8A15A]/20 animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <span className="text-[#C8A15A] text-xs font-semibold tracking-[0.25em] uppercase">
            ESTATE DISPATCH CONFIRMED
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold">
            Thank You for Your Order
          </h1>
          <p className="text-sm text-[#D6D2C9]/85 max-w-lg mx-auto leading-relaxed">
            Your order reference has been logged. An official tax invoice and dispatch manifest have been sent to your email.
          </p>
          <div className="inline-block bg-[#10251B] border border-[#C8A15A]/40 px-5 py-2.5 rounded-full font-mono text-sm sm:text-base text-[#DFC287] font-bold">
            Order Reference: {orderId}
          </div>
        </div>

        {/* Order Card */}
        <div className="rounded-3xl bg-[#292A27]/25 border border-[#292A27] p-6 sm:p-8 shadow-2xl space-y-8">
          
          {/* Status Timeline */}
          <div>
            <h3 className="font-editorial text-xl font-bold mb-4 text-[#DFC287]">
              Current Order Journey
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-[#10251B] border border-[#C8A15A] text-left">
                <span className="text-[#C8A15A] font-bold">Step 1: Confirmed</span>
                <p className="text-[11px] text-[#F5F0E6] mt-0.5">Order Placed &amp; Logged</p>
              </div>
              <div className="p-3 rounded-xl bg-[#10120F] border border-[#292A27] text-left">
                <span className="text-[#D6D2C9]/60 font-bold">Step 2: Processing</span>
                <p className="text-[11px] text-[#D6D2C9]/70 mt-0.5">Batch Allocation &amp; Inspection</p>
              </div>
              <div className="p-3 rounded-xl bg-[#10120F] border border-[#292A27] text-left">
                <span className="text-[#D6D2C9]/60 font-bold">Step 3: Packaging</span>
                <p className="text-[11px] text-[#D6D2C9]/70 mt-0.5">Vacuum Aroma-Lock Seal</p>
              </div>
              <div className="p-3 rounded-xl bg-[#10120F] border border-[#292A27] text-left">
                <span className="text-[#D6D2C9]/60 font-bold">Step 4: Dispatch</span>
                <p className="text-[11px] text-[#D6D2C9]/70 mt-0.5">Courier / Cargo Handover</p>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#292A27] text-xs">
            <div>
              <h4 className="font-semibold text-[#DFC287] uppercase tracking-wider mb-2">
                Shipping Destination
              </h4>
              {order?.shippingAddress ? (
                <div className="text-[#D6D2C9]/85 space-y-1">
                  <p className="font-bold text-[#F5F0E6]">{order.customer?.name}</p>
                  <p>{order.shippingAddress.line1}</p>
                  {order.shippingAddress.line2 && <p>{order.shippingAddress.line2}</p>}
                  <p>{order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.postalCode}</p>
                  <p>{order.shippingAddress.country}</p>
                  <p className="pt-1">Phone: {order.customer?.phone}</p>
                </div>
              ) : (
                <p className="text-[#D6D2C9]/70">Delivery address logged with order confirmation.</p>
              )}
            </div>

            <div>
              <h4 className="font-semibold text-[#DFC287] uppercase tracking-wider mb-2">
                Payment &amp; Logistics
              </h4>
              <div className="text-[#D6D2C9]/85 space-y-1">
                <p>Payment Method: <strong className="text-[#F5F0E6]">{order?.paymentMethod || 'Online Gateway'}</strong></p>
                <p>Payment Status: <span className="text-emerald-400 font-semibold">{order?.paymentStatus || 'Verified'}</span></p>
                <p>Estimated Delivery: <strong className="text-[#F5F0E6]">{order?.estimatedDelivery || 'Within 3 - 5 Business Days'}</strong></p>
                <p>Dispatch Hub: <span className="text-[#C8A15A]">Mangalore Central Export Warehouse</span></p>
              </div>
            </div>
          </div>

          {/* Items Table */}
          {order?.items && order.items.length > 0 && (
            <div className="pt-4 border-t border-[#292A27]">
              <h4 className="font-semibold text-[#DFC287] uppercase tracking-wider mb-3 text-xs">
                Items Summary
              </h4>
              <div className="space-y-2">
                {order.items.map((it, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs py-1.5 border-b border-[#292A27]/60">
                    <div>
                      <span className="font-bold text-[#F5F0E6]">{it.name}</span>
                      <span className="text-[#C8A15A] ml-2">({it.size}) × {it.quantity}</span>
                    </div>
                    <span className="font-bold text-[#F5F0E6]">₹{it.total?.toLocaleString('en-IN') || (it.price * it.quantity).toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex justify-between text-sm font-bold">
                <span>Total Amount Paid</span>
                <span className="text-[#C8A15A] font-editorial text-xl">₹{order.totalAmount?.toLocaleString('en-IN')}</span>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-6 border-t border-[#292A27] flex flex-wrap items-center justify-between gap-4">
            <Link
              to={`/track-order?id=${orderId}`}
              className="btn-gold text-xs px-6 py-3"
            >
              <Truck className="w-4 h-4 mr-1" />
              <span>Track Live Consignment</span>
            </Link>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#10251B] border border-[#C8A15A]/40 text-[#DFC287] text-xs font-semibold hover:bg-[#C8A15A] hover:text-[#10120F] transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print Tax Invoice / Receipt</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default OrderSuccessPage
