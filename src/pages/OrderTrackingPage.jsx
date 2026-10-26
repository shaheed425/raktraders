import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Search, Truck, CheckCircle2, Clock, AlertCircle, ArrowRight, Package } from 'lucide-react'
import { api } from '../services/api'

export const OrderTrackingPage = () => {
  const [searchParams] = useSearchParams()
  const initialId = searchParams.get('id') || ''
  const [orderId, setOrderId] = useState(initialId)
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (initialId) {
      handleTrack(initialId)
    }
  }, [initialId])

  const handleTrack = async (idToTrack) => {
    const target = idToTrack || orderId
    if (!target.trim()) return

    setLoading(true)
    setError('')
    setSearched(true)

    try {
      const res = await api.trackOrder(target.trim())
      if (res.success && res.data) {
        setOrder(res.data)
      } else {
        setOrder(null)
        setError(res.message || 'No matching order found with this reference number.')
      }
    } catch (err) {
      setOrder(null)
      setError('Unable to fetch tracking updates at this moment.')
    } finally {
      setLoading(false)
    }
  }

  const stepsList = [
    'Order Placed',
    'Processing',
    'Quality Inspected',
    'Dispatched',
    'Delivered'
  ]

  const getStepStatus = (stepName) => {
    if (!order) return 'upcoming'
    const statusOrder = {
      'Pending': 0,
      'Order Placed': 0,
      'Processing': 1,
      'Quality Inspected': 2,
      'Grading': 2,
      'Dispatched': 3,
      'Delivered': 4
    }
    const currentIdx = statusOrder[order.orderStatus] || 1
    const targetIdx = stepsList.indexOf(stepName)
    if (targetIdx < currentIdx) return 'completed'
    if (targetIdx === currentIdx) return 'current'
    return 'upcoming'
  }

  return (
    <div className="pt-28 pb-24 bg-[#10120F] text-[#F5F0E6] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Title */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-[1.5px] bg-[#C8A15A]" />
            <span className="text-[#C8A15A] text-xs font-semibold tracking-[0.25em] uppercase">
              CONSIGNMENT TRACKING
            </span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold">
            Track Your Arecanut Consignment
          </h1>
          <p className="text-xs sm:text-sm text-[#D6D2C9]/80 mt-1 max-w-xl">
            Enter your RAK Order ID (e.g. <strong>RAK-2026-9041</strong> or <strong>RAK-2026-8812</strong>) to view real-time inspection, curing, and shipping milestones.
          </p>
        </div>

        {/* Search Bar */}
        <div className="p-6 rounded-3xl bg-[#292A27]/25 border border-[#292A27] shadow-xl mb-10">
          <form 
            onSubmit={(e) => {
              e.preventDefault()
              handleTrack()
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <Package className="w-5 h-5 text-[#C8A15A] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={orderId}
                onChange={e => setOrderId(e.target.value)}
                placeholder="Enter Order ID (e.g. RAK-2026-9041)"
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#10120F] border border-[#292A27] text-sm text-[#F5F0E6] uppercase font-mono tracking-wider focus:border-[#C8A15A] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-gold px-8 py-3.5 text-sm font-semibold justify-center shadow-lg shadow-[#C8A15A]/20 cursor-pointer"
            >
              <Search className="w-4 h-4 mr-1" />
              <span>{loading ? 'Tracking...' : 'Track Order'}</span>
            </button>
          </form>

          {/* Quick Demo ID helper */}
          <div className="pt-3 text-xs text-[#D6D2C9]/70 flex items-center gap-2">
            <span>Try sample order IDs:</span>
            <button 
              type="button" 
              onClick={() => { setOrderId('RAK-2026-9041'); handleTrack('RAK-2026-9041') }}
              className="text-[#C8A15A] hover:underline font-mono"
            >
              RAK-2026-9041 (Export FCL)
            </button>
            <span>•</span>
            <button 
              type="button" 
              onClick={() => { setOrderId('RAK-2026-8812'); handleTrack('RAK-2026-8812') }}
              className="text-[#C8A15A] hover:underline font-mono"
            >
              RAK-2026-8812 (Domestic)
            </button>
          </div>
        </div>

        {/* Error Notification */}
        {error && (
          <div className="p-4 rounded-2xl bg-red-900/30 border border-red-700/50 text-red-200 text-xs flex items-center gap-3 mb-8">
            <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
            <span>{error}</span>
          </div>
        )}

        {/* Tracking Result View */}
        {order && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Top Status Banner */}
            <div className="p-6 rounded-3xl bg-[#10251B] border border-[#C8A15A]/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-2xl">
              <div>
                <span className="text-[10px] text-[#C8A15A] uppercase tracking-widest font-mono">
                  CURRENT CONSIGNMENT STATUS
                </span>
                <h3 className="font-editorial text-3xl font-bold text-[#F5F0E6] mt-0.5">
                  {order.orderStatus}
                </h3>
                <p className="text-xs text-[#D6D2C9]/80 mt-1">
                  Recipient: <strong className="text-[#F5F0E6]">{order.customer?.name}</strong> {order.customer?.company && `(${order.customer.company})`}
                </p>
              </div>

              <div className="sm:text-right">
                <span className="text-[10px] text-[#D6D2C9]/70 uppercase tracking-widest font-mono">
                  CARRIER &amp; TRACKING
                </span>
                <p className="text-sm font-bold text-[#DFC287] mt-0.5">
                  {order.carrier || 'Mangalore Express Logistics'}
                </p>
                {order.trackingNumber && (
                  <p className="text-xs font-mono text-[#D6D2C9]">{order.trackingNumber}</p>
                )}
              </div>
            </div>

            {/* Step Progress Visualizer */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#292A27]/25 border border-[#292A27]">
              <h4 className="font-editorial text-xl font-bold mb-6 text-[#DFC287]">
                Milestones &amp; Audit Trail
              </h4>

              <div className="relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1.5px] before:bg-[#C8A15A]/40">
                {order.statusTimeline && order.statusTimeline.map((item, idx) => (
                  <div key={idx} className="relative group">
                    <span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-[#C8A15A] ring-4 ring-[#10120F] shadow-sm" />
                    <div>
                      <h5 className="font-editorial text-lg font-bold text-[#F5F0E6] leading-tight">
                        {item.status}
                      </h5>
                      <p className="text-xs text-[#D6D2C9]/80 mt-0.5">{item.note}</p>
                      <p className="text-[10px] text-[#C8A15A]/70 font-mono mt-1">
                        {new Date(item.timestamp).toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Consignment Items */}
            <div className="p-6 rounded-3xl bg-[#292A27]/25 border border-[#292A27] space-y-3">
              <h4 className="font-editorial text-lg font-bold text-[#DFC287] mb-2">
                Consignment Contents
              </h4>
              {order.items?.map((it, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs py-2 border-b border-[#292A27]/60">
                  <div>
                    <span className="font-bold text-[#F5F0E6]">{it.name}</span>
                    <span className="text-[#C8A15A] ml-2">({it.size}) × {it.quantity}</span>
                  </div>
                  <span className="font-bold text-[#F5F0E6]">₹{it.total?.toLocaleString('en-IN')}</span>
                </div>
              ))}
              <div className="pt-2 flex justify-between text-sm font-bold">
                <span>Total Invoice Value</span>
                <span className="text-[#C8A15A] font-editorial text-xl">₹{order.totalAmount?.toLocaleString('en-IN')}</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}

export default OrderTrackingPage
