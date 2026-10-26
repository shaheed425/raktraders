import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, Lock, ArrowRight, ShieldCheck, Truck, Package, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export const AccountPage = () => {
  const { adminUser, isAuthenticated, login, logout } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('admin@raktraders.com')
  const [password, setPassword] = useState('Admin@RAK2026!')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await login(email, password)
    if (res.success) {
      navigate('/admin')
    } else {
      setError(res.message || 'Invalid email or password.')
    }
    setLoading(false)
  }

  if (isAuthenticated && adminUser) {
    return (
      <div className="pt-32 pb-24 bg-[#10120F] text-[#F5F0E6] min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="p-8 rounded-3xl bg-[#292A27]/25 border border-[#292A27] shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#292A27] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#10251B] border border-[#C8A15A] flex items-center justify-center text-[#C8A15A]">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-editorial text-2xl font-bold">{adminUser.name || 'Trade Partner / Admin'}</h2>
                  <p className="text-xs text-[#C8A15A] font-mono">{adminUser.email}</p>
                </div>
              </div>

              <button
                onClick={logout}
                className="inline-flex items-center gap-1.5 text-xs text-[#D6D2C9]/70 hover:text-red-400 py-1.5 px-3 rounded-lg border border-[#292A27]"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <Link
                to="/admin"
                className="p-5 rounded-2xl bg-[#10251B] border border-[#C8A15A]/50 hover:border-[#C8A15A] transition-all flex items-center justify-between group"
              >
                <div>
                  <h4 className="font-editorial text-lg font-bold text-[#F5F0E6] group-hover:text-[#DFC287]">
                    Admin Dashboard
                  </h4>
                  <p className="text-xs text-[#D6D2C9]/80 mt-1">Manage products, prices, orders &amp; RFQs</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#C8A15A] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/track-order"
                className="p-5 rounded-2xl bg-[#292A27]/40 border border-[#292A27] hover:border-[#C8A15A]/40 transition-all flex items-center justify-between group"
              >
                <div>
                  <h4 className="font-editorial text-lg font-bold text-[#F5F0E6] group-hover:text-[#DFC287]">
                    Track Consignments
                  </h4>
                  <p className="text-xs text-[#D6D2C9]/80 mt-1">Look up live cargo &amp; orders</p>
                </div>
                <Truck className="w-5 h-5 text-[#C8A15A]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-24 bg-[#10120F] text-[#F5F0E6] min-h-screen">
      <div className="max-w-md mx-auto px-4 sm:px-6 text-left">
        
        <div className="mb-8 text-center">
          <div className="w-16 h-16 rounded-full bg-[#10251B] border border-[#C8A15A] flex items-center justify-center mx-auto text-[#C8A15A] mb-3">
            <Lock className="w-7 h-7" />
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl font-bold">
            Portal Authentication
          </h1>
          <p className="text-xs text-[#D6D2C9]/75 mt-1">
            Sign in to access your RAK TRADERS commercial account or management console.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-[#292A27]/25 border border-[#292A27] shadow-2xl">
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-900/40 border border-red-700/50 text-red-200 text-xs">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#D6D2C9] mb-1">
                Account Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="admin@raktraders.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] text-sm text-[#F5F0E6] focus:border-[#C8A15A] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#D6D2C9] mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#10120F] border border-[#292A27] text-sm text-[#F5F0E6] focus:border-[#C8A15A] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-gold justify-center py-3 text-sm font-semibold shadow-lg shadow-[#C8A15A]/25 cursor-pointer disabled:opacity-50"
            >
              <span>{loading ? 'Authenticating...' : 'Sign In to Portal'}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </form>

          {/* Quick Demo Credentials Box */}
          <div className="mt-6 pt-5 border-t border-[#292A27] text-xs text-[#D6D2C9]/70 space-y-1.5">
            <p className="font-semibold text-[#DFC287]">Quick Demo Admin Access:</p>
            <p className="font-mono text-[11px]">Email: <span className="text-[#F5F0E6]">admin@raktraders.com</span></p>
            <p className="font-mono text-[11px]">Password: <span className="text-[#F5F0E6]">Admin@RAK2026!</span></p>
            <p className="text-[10px] text-[#C8A15A] pt-1">
              (Form is pre-filled with demo credentials — click Sign In directly!)
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AccountPage
