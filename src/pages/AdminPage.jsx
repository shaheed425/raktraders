import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Package, ShoppingCart, MessageSquare, Settings, 
  TrendingUp, Users, DollarSign, Edit3, Trash2, CheckCircle2, 
  Clock, AlertCircle, Save, Plus, Upload, Eye, LogOut 
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { api } from '../services/api'

export const AdminPage = () => {
  const { isAuthenticated, adminToken, adminUser, login, logout } = useAuth()
  
  const [activeTab, setActiveTab] = useState('overview')
  const [products, setProducts] = useState([])
  const [orders, setOrders] = useState([])
  const [enquiries, setEnquiries] = useState([])
  const [settings, setSettings] = useState(null)
  const [loading, setLoading] = useState(true)
  
  // Product Edit Modal State
  const [editingProduct, setEditingProduct] = useState(null)
  const [saveSuccess, setSaveSuccess] = useState('')

  // Quick Demo Login form state if not authenticated
  const [loginEmail, setLoginEmail] = useState('admin@raktraders.com')
  const [loginPassword, setLoginPassword] = useState('Admin@RAK2026!')
  const [loginLoading, setLoginLoading] = useState(false)
  const [loginError, setLoginError] = useState('')

  const loadData = async () => {
    setLoading(true)
    try {
      const [prodRes, ordRes, enqRes, setRes] = await Promise.all([
        api.getProducts(),
        api.getOrders(adminToken),
        api.getEnquiries(adminToken),
        api.getSettings()
      ])

      if (prodRes.success) setProducts(prodRes.data)
      if (ordRes.success) setOrders(ordRes.data)
      if (enqRes.success) setEnquiries(enqRes.data)
      if (setRes.success) setSettings(setRes.data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      loadData()
    }
  }, [isAuthenticated, adminToken])

  const handleQuickLogin = async (e) => {
    e.preventDefault()
    setLoginLoading(true)
    setLoginError('')
    const res = await login(loginEmail, loginPassword)
    if (!res.success) {
      setLoginError(res.message || 'Login failed')
    }
    setLoginLoading(false)
  }

  const handleUpdateOrderStatus = async (orderId, newStatus) => {
    try {
      const res = await api.updateOrderStatus(orderId, newStatus, `Status updated by Admin to ${newStatus}`, adminToken)
      if (res.success) {
        setOrders(prev => prev.map(o => o.orderId === orderId ? res.data : o))
        showSuccess(`Order ${orderId} status set to ${newStatus}`)
      }
    } catch (e) {
      alert('Failed to update status')
    }
  }

  const handleUpdateEnquiryStatus = async (id, newStatus) => {
    try {
      const res = await api.updateEnquiryStatus(id, newStatus, adminToken)
      if (res.success) {
        setEnquiries(prev => prev.map(e => e.id === id ? res.data : e))
        showSuccess(`Enquiry ${id} status updated to ${newStatus}`)
      }
    } catch (e) {
      alert('Failed to update enquiry')
    }
  }

  const handleSaveProduct = async (e) => {
    e.preventDefault()
    if (!editingProduct) return

    try {
      const res = await api.updateProduct(editingProduct.id, editingProduct, adminToken)
      if (res.success) {
        setProducts(prev => prev.map(p => p.id === editingProduct.id ? res.data : p))
        setEditingProduct(null)
        showSuccess('Product details updated successfully!')
      }
    } catch (err) {
      alert('Failed to save product')
    }
  }

  const handleSaveSettings = async (e) => {
    e.preventDefault()
    if (!settings) return

    try {
      const res = await api.updateSettings(settings, adminToken)
      if (res.success) {
        showSuccess('Store settings updated successfully!')
      }
    } catch {
      alert('Failed to update settings')
    }
  }

  const showSuccess = (msg) => {
    setSaveSuccess(msg)
    setTimeout(() => setSaveSuccess(''), 3000)
  }

  // Not Authenticated View
  if (!isAuthenticated) {
    return (
      <div className="pt-32 pb-24 bg-[#10120F] text-[#F5F0E6] min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full mx-4 p-8 rounded-3xl bg-[#292A27]/25 border border-[#292A27] text-left shadow-2xl">
          <div className="text-center mb-6">
            <span className="text-[#C8A15A] text-xs font-semibold tracking-widest uppercase">
              ADMINISTRATIVE ACCESS
            </span>
            <h2 className="font-editorial text-3xl font-bold text-[#F5F0E6] mt-1">
              RAK Traders Console
            </h2>
            <p className="text-xs text-[#D6D2C9]/70 mt-1">
              Please enter your credentials or use the 1-click demo login below.
            </p>
          </div>

          {loginError && (
            <div className="mb-4 p-3 rounded-xl bg-red-900/40 border border-red-700 text-red-200 text-xs">
              {loginError}
            </div>
          )}

          <form onSubmit={handleQuickLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#D6D2C9] mb-1">Email</label>
              <input
                type="email"
                required
                value={loginEmail}
                onChange={e => setLoginEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] text-sm text-[#F5F0E6] focus:border-[#C8A15A] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#D6D2C9] mb-1">Password</label>
              <input
                type="password"
                required
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] text-sm text-[#F5F0E6] focus:border-[#C8A15A] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={loginLoading}
              className="w-full btn-gold justify-center py-3 text-sm font-semibold cursor-pointer"
            >
              <span>{loginLoading ? 'Authenticating...' : 'Sign In to Admin Dashboard'}</span>
            </button>
          </form>

          <div className="mt-5 pt-4 border-t border-[#292A27] text-center">
            <p className="text-[11px] text-[#C8A15A]">
              Pre-filled with master credentials for instant demo access.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Calculate Key Stats
  const totalRevenue = orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0)
  const pendingOrders = orders.filter(o => o.orderStatus === 'Processing' || o.orderStatus === 'Pending').length
  const newEnquiries = enquiries.filter(e => e.status === 'New').length

  return (
    <div className="pt-28 pb-24 bg-[#10120F] text-[#F5F0E6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#292A27]">
          <div>
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[#C8A15A] text-xs font-semibold tracking-widest uppercase">
                COMMERCIAL HEADQUARTERS CONSOLE
              </span>
            </div>
            <h1 className="font-editorial text-3xl sm:text-4xl font-bold">
              RAK TRADERS Management Hub
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadData}
              className="px-4 py-2 rounded-xl bg-[#292A27]/40 border border-[#292A27] hover:border-[#C8A15A]/40 text-xs text-[#D6D2C9] transition-colors"
            >
              Refresh Data
            </button>

            <button
              onClick={logout}
              className="px-4 py-2 rounded-xl bg-red-900/30 border border-red-700/50 hover:bg-red-900/50 text-xs text-red-200 transition-colors flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Success Notification */}
        {saveSuccess && (
          <div className="mb-6 p-3.5 rounded-xl bg-emerald-900/40 border border-emerald-600/60 text-emerald-200 text-xs flex items-center gap-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{saveSuccess}</span>
          </div>
        )}

        {/* 4 Top KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-[#292A27]/25 border border-[#292A27]">
            <span className="text-xs text-[#D6D2C9]/70 uppercase tracking-wider">Total Sales Revenue</span>
            <p className="font-editorial text-3xl font-bold text-[#C8A15A] mt-2">
              ₹{totalRevenue.toLocaleString('en-IN')}
            </p>
            <p className="text-[11px] text-[#D6D2C9]/60 mt-1">Across domestic &amp; export consignments</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#292A27]/25 border border-[#292A27]">
            <span className="text-xs text-[#D6D2C9]/70 uppercase tracking-wider">Total Orders Booked</span>
            <p className="font-editorial text-3xl font-bold text-[#F5F0E6] mt-2">
              {orders.length} Orders
            </p>
            <p className="text-[11px] text-amber-400 mt-1">{pendingOrders} awaiting dispatch</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#292A27]/25 border border-[#292A27]">
            <span className="text-xs text-[#D6D2C9]/70 uppercase tracking-wider">Wholesale Enquiries</span>
            <p className="font-editorial text-3xl font-bold text-[#F5F0E6] mt-2">
              {enquiries.length} RFQs
            </p>
            <p className="text-[11px] text-emerald-400 mt-1">{newEnquiries} new lead requests</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#292A27]/25 border border-[#292A27]">
            <span className="text-xs text-[#D6D2C9]/70 uppercase tracking-wider">Catalogue Master Cuts</span>
            <p className="font-editorial text-3xl font-bold text-[#F5F0E6] mt-2">
              {products.length} Cuts
            </p>
            <p className="text-[11px] text-[#C8A15A] mt-1">Diamond, Salli &amp; Chips</p>
          </div>
        </div>

        {/* Main Tabs Navigation */}
        <div className="flex border-b border-[#292A27] gap-4 sm:gap-8 mb-8 overflow-x-auto">
          {[
            { id: 'overview', label: 'Recent Orders', icon: <ShoppingCart className="w-4 h-4" /> },
            { id: 'products', label: 'Manage Products & Prices', icon: <Package className="w-4 h-4" /> },
            { id: 'enquiries', label: `Wholesale Enquiries (${newEnquiries})`, icon: <MessageSquare className="w-4 h-4" /> },
            { id: 'settings', label: 'Store & Payment Settings', icon: <Settings className="w-4 h-4" /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3.5 text-xs sm:text-sm font-semibold tracking-wide border-b-2 flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-[#C8A15A] text-[#DFC287]'
                  : 'border-transparent text-[#D6D2C9]/60 hover:text-[#F5F0E6]'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* TAB 1: ORDERS MANAGEMENT */}
        {activeTab === 'overview' && (
          <div className="space-y-4">
            <h3 className="font-editorial text-2xl font-bold mb-4">
              Consignment &amp; Order Pipeline
            </h3>

            {orders.length === 0 ? (
              <p className="text-sm text-[#D6D2C9]/60 py-6">No orders placed yet.</p>
            ) : (
              <div className="space-y-4">
                {orders.map(order => (
                  <div key={order.orderId} className="p-5 rounded-2xl bg-[#292A27]/25 border border-[#292A27] space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-[#292A27] pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm font-bold text-[#DFC287]">{order.orderId}</span>
                          <span className="text-[10px] text-[#D6D2C9]/60 font-mono">
                            {new Date(order.createdAt).toLocaleDateString('en-IN')}
                          </span>
                        </div>
                        <p className="text-xs text-[#F5F0E6] mt-0.5 font-medium">
                          {order.customer?.name} {order.customer?.company && `— ${order.customer.company}`}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-editorial text-xl font-bold text-[#F5F0E6]">
                          ₹{order.totalAmount?.toLocaleString('en-IN')}
                        </span>
                        
                        {/* Status Select */}
                        <select
                          value={order.orderStatus}
                          onChange={(e) => handleUpdateOrderStatus(order.orderId, e.target.value)}
                          className="bg-[#10120F] text-[#C8A15A] border border-[#292A27] text-xs px-2.5 py-1.5 rounded-lg focus:border-[#C8A15A] focus:outline-none"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Processing">Processing</option>
                          <option value="Quality Inspected">Quality Inspected</option>
                          <option value="Dispatched">Dispatched</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </div>
                    </div>

                    {/* Order Items & Destination */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-[#D6D2C9]/60 uppercase tracking-wider block mb-1">Items in Consignment:</span>
                        <ul className="space-y-1 text-[#F5F0E6]">
                          {order.items?.map((it, idx) => (
                            <li key={idx} className="flex justify-between">
                              <span>• {it.name} ({it.size}) × {it.quantity}</span>
                              <span className="font-mono text-[#D6D2C9]">₹{it.total?.toLocaleString('en-IN')}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="text-[#D6D2C9]/60 uppercase tracking-wider block mb-1">Destination &amp; Payment:</span>
                        <p className="text-[#D6D2C9]/85">
                          {order.shippingAddress?.line1}, {order.shippingAddress?.city}, {order.shippingAddress?.state}
                        </p>
                        <p className="text-[11px] text-[#C8A15A] mt-1 font-mono">
                          Method: {order.paymentMethod} • Status: {order.paymentStatus}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: PRODUCTS MANAGEMENT */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-editorial text-2xl font-bold">
                  Catalogue &amp; Pricing Management
                </h3>
                <p className="text-xs text-[#D6D2C9]/70 mt-0.5">
                  Live updates apply instantly to homepage, shop and checkout.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map(prod => (
                <div key={prod.id} className="p-5 rounded-2xl bg-[#292A27]/25 border border-[#292A27] flex flex-col justify-between space-y-4">
                  <div>
                    <div className="w-full h-40 rounded-xl bg-[#10120F] border border-[#292A27] p-2 flex items-center justify-center mb-3">
                      <img src={prod.image} alt={prod.name} className="w-full h-full object-contain" />
                    </div>

                    <div className="flex items-start justify-between">
                      <h4 className="font-editorial text-xl font-bold">{prod.name}</h4>
                      <span className="text-xs font-bold text-[#C8A15A]">₹{prod.price}</span>
                    </div>

                    <p className="text-xs text-[#C8A15A] mt-0.5">{prod.grade} • {prod.category}</p>
                    <p className="text-xs text-[#D6D2C9]/75 line-clamp-2 mt-2">{prod.description}</p>
                    
                    <div className="mt-3 text-[11px] text-[#D6D2C9]/80 space-y-1">
                      <p>Moisture: <strong>{prod.moisture}</strong></p>
                      <p>Pack Formats: <strong>{prod.packSizes?.length || 5} pack sizes</strong></p>
                      <p>Stock Status: <strong className="text-emerald-400">{prod.stockCount || 850} units available</strong></p>
                    </div>
                  </div>

                  <button
                    onClick={() => setEditingProduct({ ...prod })}
                    className="w-full py-2.5 rounded-xl bg-[#10251B] border border-[#C8A15A]/40 text-[#DFC287] hover:bg-[#C8A15A] hover:text-[#10120F] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit Price &amp; Details</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Product Edit Modal */}
            {editingProduct && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setEditingProduct(null)} />
                <div className="relative w-full max-w-lg bg-[#10120F] border border-[#C8A15A]/40 rounded-3xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto text-left shadow-2xl">
                  <h3 className="font-editorial text-2xl font-bold mb-4">
                    Edit Cut: {editingProduct.name}
                  </h3>

                  <form onSubmit={handleSaveProduct} className="space-y-4 text-xs">
                    <div>
                      <label className="block text-[#D6D2C9] mb-1">Product Title</label>
                      <input
                        type="text"
                        value={editingProduct.name}
                        onChange={e => setEditingProduct({ ...editingProduct, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#292A27] border border-[#292A27] text-sm text-[#F5F0E6] focus:border-[#C8A15A] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[#D6D2C9] mb-1">Base Price (INR per 500g)</label>
                        <input
                          type="number"
                          value={editingProduct.price}
                          onChange={e => setEditingProduct({ ...editingProduct, price: Number(e.target.value) })}
                          className="w-full px-3 py-2 rounded-xl bg-[#292A27] border border-[#292A27] text-sm text-[#F5F0E6] focus:border-[#C8A15A] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[#D6D2C9] mb-1">Moisture Level</label>
                        <input
                          type="text"
                          value={editingProduct.moisture}
                          onChange={e => setEditingProduct({ ...editingProduct, moisture: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-[#292A27] border border-[#292A27] text-sm text-[#F5F0E6] focus:border-[#C8A15A] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#D6D2C9] mb-1">Description</label>
                      <textarea
                        rows="3"
                        value={editingProduct.description}
                        onChange={e => setEditingProduct({ ...editingProduct, description: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#292A27] border border-[#292A27] text-xs text-[#F5F0E6] focus:border-[#C8A15A] focus:outline-none"
                      />
                    </div>

                    <div className="pt-2 flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setEditingProduct(null)}
                        className="px-4 py-2 rounded-xl bg-[#292A27] text-[#D6D2C9]"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn-gold px-6 py-2 font-semibold"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: ENQUIRIES & WHOLESALE RFQS */}
        {activeTab === 'enquiries' && (
          <div className="space-y-4">
            <h3 className="font-editorial text-2xl font-bold mb-4">
              Wholesale Enquiries &amp; Export Quotes
            </h3>

            {enquiries.length === 0 ? (
              <p className="text-sm text-[#D6D2C9]/60 py-6">No enquiries logged yet.</p>
            ) : (
              <div className="space-y-4">
                {enquiries.map(enq => (
                  <div key={enq.id} className="p-5 rounded-2xl bg-[#292A27]/25 border border-[#292A27] space-y-3">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-[#292A27] pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm font-bold text-[#DFC287]">{enq.id}</span>
                          <span className="text-[10px] text-[#D6D2C9]/60 font-mono">
                            {new Date(enq.createdAt).toLocaleDateString('en-IN')}
                          </span>
                        </div>
                        <h4 className="font-editorial text-lg font-bold text-[#F5F0E6] mt-0.5">
                          {enq.name} {enq.company && `(${enq.company})`}
                        </h4>
                      </div>

                      <div className="flex items-center gap-3">
                        <select
                          value={enq.status}
                          onChange={e => handleUpdateEnquiryStatus(enq.id, e.target.value)}
                          className="bg-[#10120F] text-[#C8A15A] border border-[#292A27] text-xs px-2.5 py-1.5 rounded-lg focus:border-[#C8A15A] focus:outline-none"
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Quotation Sent">Quotation Sent</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#D6D2C9]/85">
                      <div>
                        <span className="text-[#D6D2C9]/60 block">Contact Info:</span>
                        <p className="text-[#F5F0E6] font-medium">{enq.email}</p>
                        <p className="text-[#C8A15A] font-mono">{enq.phone}</p>
                      </div>
                      <div>
                        <span className="text-[#D6D2C9]/60 block">Target Requirements:</span>
                        <p>Cut: <strong>{enq.productOfInterest}</strong></p>
                        <p>Volume: <strong>{enq.volumeRequired}</strong></p>
                      </div>
                      <div>
                        <span className="text-[#D6D2C9]/60 block">Destination Port / City:</span>
                        <p className="text-[#F5F0E6] font-medium">{enq.destination || 'Unspecified'}</p>
                      </div>
                    </div>

                    {enq.message && (
                      <div className="p-3 rounded-xl bg-[#10120F]/60 text-xs text-[#D6D2C9]/80 italic">
                        "{enq.message}"
                      </div>
                    )}

                    <div className="pt-2 flex gap-3 text-xs">
                      <a
                        href={`mailto:${enq.email}?subject=RAK%20Traders%20Quotation%20for%20${encodeURIComponent(enq.productOfInterest || 'Arecanuts')}`}
                        className="px-3.5 py-1.5 rounded-lg bg-[#10251B] border border-[#C8A15A]/40 text-[#DFC287] hover:bg-[#C8A15A] hover:text-[#10120F] transition-colors"
                      >
                        Reply via Email
                      </a>
                      <a
                        href={`https://wa.me/${enq.phone?.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(enq.name)},%20this%20is%20RAK%20Traders%20following%20up%20on%20your%20arecanut%20enquiry.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-[#25D366]/20 border border-[#25D366]/50 text-emerald-300 hover:bg-[#25D366] hover:text-white transition-colors"
                      >
                        Follow up on WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 4: STORE SETTINGS */}
        {activeTab === 'settings' && settings && (
          <div className="max-w-2xl space-y-6">
            <h3 className="font-editorial text-2xl font-bold mb-4">
              Store &amp; Payment Configuration
            </h3>

            <form onSubmit={handleSaveSettings} className="p-6 rounded-3xl bg-[#292A27]/25 border border-[#292A27] space-y-4 text-xs">
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#10120F] border border-[#292A27]">
                <div>
                  <p className="font-bold text-sm text-[#F5F0E6]">Enable Cash on Delivery (COD)</p>
                  <p className="text-[11px] text-[#D6D2C9]/70">Permit customers to pay cash on courier delivery</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.enableCOD}
                  onChange={e => setSettings({ ...settings, enableCOD: e.target.checked })}
                  className="w-5 h-5 accent-[#C8A15A]"
                />
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#10120F] border border-[#292A27]">
                <div>
                  <p className="font-bold text-sm text-[#F5F0E6]">Enable Payment Gateway (Test Mode)</p>
                  <p className="text-[11px] text-[#D6D2C9]/70">Razorpay / Stripe sandbox payment simulation</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.enableTestPayment}
                  onChange={e => setSettings({ ...settings, enableTestPayment: e.target.checked })}
                  className="w-5 h-5 accent-[#C8A15A]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-[#D6D2C9] mb-1">Free Shipping Above (INR)</label>
                  <input
                    type="number"
                    value={settings.freeShippingAbove}
                    onChange={e => setSettings({ ...settings, freeShippingAbove: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl bg-[#10120F] border border-[#292A27] text-sm text-[#F5F0E6]"
                  />
                </div>
                <div>
                  <label className="block text-[#D6D2C9] mb-1">Standard Flat Shipping Rate</label>
                  <input
                    type="number"
                    value={settings.flatShippingRate}
                    onChange={e => setSettings({ ...settings, flatShippingRate: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl bg-[#10120F] border border-[#292A27] text-sm text-[#F5F0E6]"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="btn-gold px-6 py-2.5 text-sm font-semibold cursor-pointer"
                >
                  <Save className="w-4 h-4 mr-1" />
                  <span>Save Store Configuration</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  )
}

export default AdminPage
