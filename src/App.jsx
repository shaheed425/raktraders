import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'

import Header from './components/common/Header'
import Footer from './components/common/Footer'
import CartDrawer from './components/common/CartDrawer'
import EnquiryModal from './components/common/EnquiryModal'
import SearchModal from './components/common/SearchModal'
import MobileBottomBar from './components/common/MobileBottomBar'

import HomePage from './pages/HomePage'
import StoryPage from './pages/StoryPage'
import ShopPage from './pages/ShopPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import OrderSuccessPage from './pages/OrderSuccessPage'
import OrderTrackingPage from './pages/OrderTrackingPage'
import ProcessPage from './pages/ProcessPage'
import QualityPage from './pages/QualityPage'
import GlobalReachPage from './pages/GlobalReachPage'
import ContactPage from './pages/ContactPage'
import AccountPage from './pages/AccountPage'
import AdminPage from './pages/AdminPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function AppContent() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col bg-[#10120F] text-[#F5F0E6]">
      <ScrollToTop />
      {/* Header */}
      <Header 
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Routed Content */}
      <div className="flex-1 pb-16 lg:pb-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success/:orderId" element={<OrderSuccessPage />} />
          <Route path="/track-order" element={<OrderTrackingPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/global-reach" element={<GlobalReachPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/login" element={<AccountPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating iPhone-style Control Panel Bar */}
      <MobileBottomBar />

      {/* Global Slide-over Cart Drawer */}
      <CartDrawer />

      {/* Global Enquire Now RFQ Modal */}
      <EnquiryModal 
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />

      {/* Global Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <AppContent />
        </Router>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
