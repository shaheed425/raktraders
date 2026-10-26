import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, User, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react'
import BrandLogo from './BrandLogo'
import { useCart } from '../../context/CartContext'

export const Header = ({ onOpenEnquiry, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkText, setIsDarkText] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { totalItems, setIsCartOpen } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 25)

      // Only adapt on home page where light & dark sections alternate
      if (location.pathname === '/') {
        const checkY = 60
        const el = document.elementFromPoint(window.innerWidth / 2, checkY)
        const section = el?.closest('section')
        
        if (section) {
          const id = section.id
          // Light sections: our-story-section, our-process-section, global-reach-section
          const lightSections = ['our-story-section', 'our-process-section', 'global-reach-section']
          setIsDarkText(lightSections.includes(id))
        } else {
          setIsDarkText(false)
        }
      } else if (location.pathname === '/story' || location.pathname === '/process') {
        // Story and Process pages have light ivory backgrounds
        setIsDarkText(true)
      } else {
        // Dark pages (Shop, Products, Contact, Account, etc.)
        setIsDarkText(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  // Removed 'Quality' and 'Global Reach' as requested by user
  const navLinks = [
    { label: 'Home', href: '/', id: 'nav-home' },
    { label: 'Our Story', href: '/story', id: 'nav-story' },
    { label: 'Products', href: '/shop', id: 'nav-products' },
    { label: 'Process', href: '/process', id: 'nav-process' },
    { label: 'Contact', href: '/contact', id: 'nav-contact' }
  ]

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  return (
    <>
      {/* Desktop Header (lg and above) - Pristine & Untouched */}
      <header 
        id="main-header"
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? isDarkText
              ? 'bg-[#F5F0E6]/95 backdrop-blur-md py-3 border-b border-black/10 shadow-sm'
              : 'bg-[#10120F]/90 backdrop-blur-md py-3 border-b border-[#292A27]/80 shadow-xl' 
            : isDarkText
              ? 'bg-[#F5F0E6]/90 backdrop-blur-sm py-4 border-b border-black/5 shadow-xs'
              : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with adaptive color */}
          <BrandLogo light={isDarkText} />

          {/* Desktop Navigation Links */}
          <nav className="flex items-center gap-8">
            {navLinks.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  id={item.id}
                  className="relative py-1 text-sm tracking-wide transition-colors group"
                >
                  <span className={
                    active 
                      ? isDarkText ? 'text-[#10120F] font-semibold' : 'text-[#F5F0E6] font-medium'
                      : isDarkText 
                        ? 'text-[#292A27]/80 hover:text-[#10120F] font-medium' 
                        : 'text-[#D6D2C9]/85 hover:text-[#F5F0E6]'
                  }>
                    {item.label}
                  </span>
                  {/* Active Gold Indicator Dot */}
                  {active && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#C8A15A] rounded-full shadow-[0_0_8px_#C8A15A]" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right Action Icons & Enquire Button */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              id="header-search-btn"
              className={`p-1.5 transition-colors cursor-pointer ${
                isDarkText ? 'text-[#10120F] hover:text-[#9C7733]' : 'text-white hover:text-[#C8A15A]'
              }`}
              title="Search products"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account / Login */}
            <Link
              to="/account"
              id="header-account-btn"
              className={`inline-flex p-1.5 transition-colors ${
                isDarkText ? 'text-[#10120F] hover:text-[#9C7733]' : 'text-[#D6D2C9] hover:text-[#C8A15A]'
              }`}
              title="Customer & Admin Portal"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Shopping Cart Icon with Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              id="header-cart-btn"
              className={`relative p-1.5 transition-colors cursor-pointer ${
                isDarkText ? 'text-[#10120F] hover:text-[#9C7733]' : 'text-white hover:text-[#C8A15A]'
              }`}
              title="Shopping Cart"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className={`absolute -top-1 -right-1 text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm ${
                isDarkText ? 'bg-[#10120F] text-[#F5F0E6]' : 'bg-[#E5B869] text-[#10120F]'
              }`}>
                {totalItems > 0 ? totalItems : 1}
              </span>
            </button>

            {/* Antique-Gold Enquire Now Button */}
            <button
              onClick={onOpenEnquiry}
              id="header-enquire-btn"
              className={`inline-flex items-center gap-1.5 font-medium text-xs sm:text-sm px-4 py-2 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 shadow-md cursor-pointer ${
                isDarkText 
                  ? 'bg-[#10120F] hover:bg-[#292A27] text-[#FAF7F2] shadow-black/10'
                  : 'bg-[#C8A15A] hover:bg-[#DFC287] text-[#10120F] shadow-[#C8A15A]/20'
              }`}
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Floating Capsule Header (Below lg) - EXACT Reference Match */}
      <header
        id="mobile-header"
        className="lg:hidden fixed top-3.5 left-3.5 right-3.5 z-50 max-w-lg mx-auto"
      >
        <div className="flex items-center justify-between px-3.5 sm:px-4 py-1.5 h-[52px] rounded-full bg-[#0A120D]/90 backdrop-blur-xl border border-[#C8A15A]/45 shadow-[0_10px_35px_rgba(0,0,0,0.85)]">
          {/* Left: Brand Logo + Subtle Gold Vertical Divider */}
          <div className="flex items-center shrink-0">
            <BrandLogo light={false} size="small" />
            <span className="w-[1px] h-6 bg-[#C8A15A]/40 ml-2.5 mr-1 self-center" aria-hidden="true" />
          </div>

          {/* Right: Search + Cart (with badge) + Subtle Gold Vertical Divider + Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              id="mobile-header-search-btn"
              className="p-1 text-[#F5F0E6] hover:text-[#C8A15A] transition-colors cursor-pointer"
              title="Search products"
              aria-label="Search"
            >
              <Search className="w-5 h-5 stroke-[1.8]" />
            </button>

            {/* Shopping Cart Icon with Circular Gold Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              id="mobile-header-cart-btn"
              className="relative p-1 text-[#F5F0E6] hover:text-[#C8A15A] transition-colors cursor-pointer"
              title="Shopping Cart"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
              <span className="absolute -top-1 -right-1 text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center bg-[#E5B869] text-[#10120F] shadow-sm">
                {totalItems > 0 ? totalItems : 1}
              </span>
            </button>

            {/* Subtle Gold Vertical Divider */}
            <span className="w-[1px] h-6 bg-[#C8A15A]/40 mx-0.5 sm:mx-1 self-center" aria-hidden="true" />

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-header-toggle-btn"
              className="p-1 text-[#F5F0E6] hover:text-[#C8A15A] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 stroke-[2]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[2]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Compact, Mobile-Optimized Drawer Menu Matching Pic 1 */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-start items-center p-3 sm:p-4 animate-fadeIn">
          {/* Backdrop */}
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity" 
          />

          {/* Compact Card Floating Menu */}
          <div className="relative w-full max-w-sm rounded-3xl bg-[#0E0F0D] border border-[#C8A15A]/40 text-[#F5F0E6] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-10 flex flex-col my-auto max-h-[92vh] overflow-y-auto">
            
            {/* Top Bar inside Drawer: Brand Logo + Close 'X' */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <BrandLogo light={false} size="small" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-[#C8A15A] transition-colors cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Compact Navigation Links with Active Gold Dot & Subtle Dividers */}
            <div className="py-2 flex flex-col divide-y divide-white/[0.07]">
              {navLinks.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center py-2.5 text-sm tracking-wide transition-colors group"
                  >
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5B869] mr-2.5 shadow-[0_0_8px_#E5B869]" />
                    )}
                    <span
                      className={`${
                        active 
                          ? 'text-[#F5F0E6] font-semibold text-base' 
                          : 'text-[#D6D2C9]/85 group-hover:text-white font-normal'
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                )
              })}
            </div>

            {/* Bottom Controls: 3 Icons Row + Enquire Now Button */}
            <div className="pt-3 border-t border-white/[0.08] space-y-3">
              {/* 3 Action Icons: Search, User Profile, Cart with Badge */}
              <div className="flex items-center justify-around py-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    if (onOpenSearch) onOpenSearch()
                  }}
                  className="p-2 text-white/90 hover:text-[#C8A15A] transition-colors cursor-pointer"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </button>

                <Link
                  to="/account"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white/90 hover:text-[#C8A15A] transition-colors"
                  aria-label="Account"
                >
                  <User className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setIsCartOpen(true)
                  }}
                  className="p-2 text-white/90 hover:text-[#C8A15A] transition-colors relative cursor-pointer"
                  aria-label="Shopping Cart"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span className="absolute top-0.5 right-0.5 text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center bg-[#E5B869] text-[#10120F] shadow-sm">
                    {totalItems > 0 ? totalItems : 1}
                  </span>
                </button>
              </div>

              {/* Enquire Now Pill Button */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  if (onOpenEnquiry) onOpenEnquiry()
                }}
                className="w-full py-2.5 px-5 rounded-full bg-[#E5B869] hover:bg-[#DFC287] text-[#10120F] font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md shadow-[#E5B869]/20 transition-all cursor-pointer active:scale-98"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default Header
