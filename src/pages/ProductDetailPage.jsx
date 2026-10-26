import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  ShoppingBag, 
  Minus, 
  Plus, 
  Leaf, 
  ShieldCheck, 
  Award, 
  Globe, 
  Check, 
  Settings, 
  ArrowRight,
  X
} from 'lucide-react'
import { useCart } from '../context/CartContext'
import { api } from '../services/api'
import EnquiryModal from '../components/common/EnquiryModal'

export const ProductDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const [product, setProduct] = useState(null)
  const [allProducts, setAllProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedSize, setSelectedSize] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('details')
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false)
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setLoading(true)

    Promise.all([api.getProduct(id), api.getProducts()])
      .then(([prodRes, allRes]) => {
        if (prodRes.success && prodRes.data) {
          const prodData = prodRes.data
          setProduct(prodData)
          // Default to 500g pouch or second item if available
          const defaultPack = prodData.packSizes?.find(p => p.weight === '500g' || p.size.includes('500g')) 
            || prodData.packSizes?.[1] 
            || prodData.packSizes?.[0] 
            || null
          setSelectedSize(defaultPack)
          setActiveImageIndex(0)
        }
        if (allRes.success && allRes.data) {
          setAllProducts(allRes.data)
        }
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-[#10110F] text-[#F5F0E6] flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-2 border-[#C8A15A] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs text-[#D6D2C9] font-mono tracking-widest uppercase">
            Loading Cut Specifications...
          </p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-[#10110F] text-[#F5F0E6] flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="font-editorial text-3xl font-bold">Product Cut Not Found</h2>
          <p className="text-sm text-[#D6D2C9]/70">The requested arecanut cut does not exist.</p>
          <Link to="/shop" className="btn-gold text-xs px-6 py-2.5">Back to Catalogue</Link>
        </div>
      </div>
    )
  }

  // Construct image gallery thumbnails matching reference structure
  const getProductGallery = () => {
    if (product.id === 'diamond-cut') {
      return [
        { src: '/images/product-diamond-card.webp', alt: 'Diamond Cut Pouch in Plantation Setting' },
        { src: '/images/hero-arecanut-bowl.webp', alt: 'Faceted Diamond Cut Arecanuts in Stone Bowl' },
        { src: '/images/product-diamond-cut.webp', alt: 'Diamond Cut Packshot Studio' },
        { src: '/images/packshot-diamond.webp', alt: 'Diamond Cut Standing Pouch Detail' }
      ]
    }
    if (product.id === 'salli-cut') {
      return [
        { src: '/images/product-salli-card.webp', alt: 'Salli Cut Pouch in Plantation Setting' },
        { src: '/images/product-salli-cut.webp', alt: 'Salli Cut Needle Slivers Studio' },
        { src: '/images/packshot-salli.webp', alt: 'Salli Cut Standing Pouch Detail' },
        { src: '/images/hero-arecanut-bowl.webp', alt: 'Salli Cut Arecanut Slices' }
      ]
    }
    return [
      { src: '/images/product-chips-card.webp', alt: 'Chips Cut Pouch in Plantation Setting' },
      { src: '/images/product-chips-cut.webp', alt: 'Chips Cut Slices Studio' },
      { src: '/images/packshot-chips.webp', alt: 'Chips Cut Standing Pouch Detail' },
      { src: '/images/hero-arecanut-bowl.webp', alt: 'Chips Cut Sliced Nut Coins' }
    ]
  }

  const galleryImages = getProductGallery()
  const currentPrice = selectedSize ? selectedSize.price : product.price
  const relatedCuts = allProducts.filter(p => p.id !== product.id).slice(0, 2)

  // Standard 4 pack sizes matching reference image exactly (250g, 500g, 1kg, 5kg)
  const displayPackSizes = (product.packSizes || [])
    .filter(p => !p.size.includes('25kg') && !p.weight?.includes('25kg'))
    .slice(0, 4)

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity)
  }

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="pt-20 sm:pt-24 pb-28 sm:pb-24 bg-[#0E0F0D] text-[#F5F0E6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb - Compact & Clean */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#D6D2C9]/70 mb-3 text-left">
          <Link to="/" className="hover:text-[#C8A15A] transition-colors">Home</Link>
          <span className="text-white/30">/</span>
          <Link to="/shop" className="hover:text-[#C8A15A] transition-colors">All Products</Link>
          <span className="text-white/30">/</span>
          <span className="text-[#C8A15A] font-medium">{product.name}</span>
        </nav>

        {/* =========================================================================
            ABOVE-THE-FOLD PRODUCT SHOWCASE
            Engineered so the entire product card, pack selector, and Add to Basket
            fit comfortably inside the viewport without requiring scrolling on load.
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 mb-8 lg:mb-12 items-start">
          
          {/* LEFT COLUMN: Main Showcase Image + 4 Thumbnail Selector Cards */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col max-w-[440px] mx-auto lg:mx-0 w-full">
            
            {/* Main Stage Image Card */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#10120F] border border-[#292A27] aspect-[1/1.05] max-h-[350px] sm:max-h-[375px] group shadow-2xl flex items-center justify-center p-2 sm:p-3">
              <img
                src={galleryImages[activeImageIndex].src}
                alt={galleryImages[activeImageIndex].alt}
                className="w-full h-full object-contain object-center transition-all duration-500 ease-out"
              />

              {/* Left / Right Carousel Navigation Arrows */}
              <button
                onClick={prevImage}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-all cursor-pointer opacity-80 hover:opacity-100"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-all cursor-pointer opacity-80 hover:opacity-100"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* 4 Thumbnails Below Main Image */}
            <div className="grid grid-cols-4 gap-2 sm:gap-2.5 mt-2 sm:mt-2.5">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative rounded-xl overflow-hidden aspect-square h-14 sm:h-16 border transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-2 border-[#C8A15A] shadow-md shadow-[#C8A15A]/20 scale-[1.02]'
                      : 'border-[#292A27] opacity-65 hover:opacity-100'
                  }`}
                  aria-label={`Select product image ${idx + 1}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Product Metadata, Pack Size, Quantity, CTA & Trust Badges */}
          <div className="lg:col-span-7 xl:col-span-7 text-left flex flex-col justify-start">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 mb-0.5">
              <span className="w-4 h-[1.5px] bg-[#C8A15A]" />
              <span className="text-[#C8A15A] text-[11px] font-semibold tracking-[0.24em] uppercase font-sans">
                {product.category || 'PREMIUM CUT'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-editorial text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-bold text-[#F5F0E6] leading-tight mb-0.5">
              {product.name}
            </h1>

            {/* Tagline / Subtitle */}
            <p className="font-editorial italic text-xs sm:text-sm text-[#DFC287] mb-1.5">
              {product.tagline || "Nature's Purity. Refined Faceted Cut."}
            </p>

            {/* Ratings Row */}
            <div className="flex items-center gap-2 text-xs text-[#D6D2C9]/85 mb-1.5">
              <div className="flex items-center text-[#C8A15A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-[#F5F0E6] ml-1">4.9 / 5</span>
              <span className="text-[#D6D2C9]/70">(128 verified reviews)</span>
            </div>

            {/* Price Row */}
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-sans text-2xl sm:text-3xl font-bold text-[#F5F0E6]">
                ₹{currentPrice ? currentPrice.toLocaleString('en-IN') : '480'}
              </span>
              <span className="text-xs text-[#D6D2C9]/70 font-sans">
                per {selectedSize ? selectedSize.weight || selectedSize.size : '500g'} Pouch (Includes GST)
              </span>
            </div>

            {/* Short Editorial Description */}
            <p className="text-xs text-[#D6D2C9]/85 leading-relaxed font-light mb-3 max-w-xl">
              {product.description || 'Hand-selected whole betel nuts precision-sliced into classic faceted diamond gems. Retains natural moisture balance, crisp bite, and rich aromatic flavor. Sourced exclusively from premier plantations in Mangalore and Kerala.'}
            </p>

            {/* Pack Size Selector Header */}
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#D6D2C9] font-sans">
                SELECT PACK SIZE
              </span>
              <button
                type="button"
                onClick={() => setIsSizeGuideOpen(true)}
                className="inline-flex items-center gap-1 text-[11px] text-[#C8A15A] hover:text-[#DFC287] font-sans font-medium transition-colors cursor-pointer"
              >
                <span>Size Guide</span>
                <span>→</span>
              </button>
            </div>

            {/* Pack Size 4 Cards Row - Single Row in grid-cols-4 */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-3">
              {displayPackSizes.map((sizeObj) => {
                const isSelected = selectedSize && (selectedSize.size === sizeObj.size || selectedSize.weight === sizeObj.weight)
                return (
                  <button
                    key={sizeObj.size}
                    type="button"
                    onClick={() => setSelectedSize(sizeObj)}
                    className={`py-1.5 px-1 sm:px-2 rounded-xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#E5B869] text-[#10120F] border-[#E5B869] shadow-md font-semibold'
                        : 'bg-[#141613] text-[#D6D2C9] border-[#292A27] hover:border-[#C8A15A]/50'
                    }`}
                  >
                    <p className={`text-[11px] sm:text-xs font-bold leading-tight truncate ${isSelected ? 'text-[#10120F]' : 'text-[#F5F0E6]'}`}>
                      {sizeObj.weight || sizeObj.size.split(' ')[0]}
                    </p>
                    <p className={`text-[10px] sm:text-[11px] mt-0.5 truncate ${isSelected ? 'text-[#10120F]/90 font-bold' : 'text-[#C8A15A]'}`}>
                      ₹{sizeObj.price.toLocaleString('en-IN')}
                    </p>
                  </button>
                )
              })}
            </div>

            {/* Quantity Controls & Add to Basket Button Row */}
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              {/* Quantity Pill */}
              <div className="flex items-center border border-[#292A27] rounded-full bg-[#141613] px-2 sm:px-2.5 py-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-5 h-5 flex items-center justify-center text-[#D6D2C9] hover:text-[#C8A15A] transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-5 sm:w-6 text-center text-xs sm:text-sm font-semibold text-[#F5F0E6]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-5 h-5 flex items-center justify-center text-[#D6D2C9] hover:text-[#C8A15A] transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>

              {/* Add to Basket Action Button */}
              <button
                type="button"
                onClick={handleAddToCart}
                id="btn-pdp-add-to-cart"
                className="flex-1 py-2.5 sm:py-3 px-3 sm:px-5 rounded-full bg-[#E5B869] hover:bg-[#DFC287] text-[#10120F] font-sans font-semibold text-xs sm:text-sm transition-all shadow-md shadow-[#E5B869]/20 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer active:scale-98 whitespace-nowrap"
              >
                <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Add to Basket • ₹{((currentPrice || 0) * quantity).toLocaleString('en-IN')}</span>
              </button>
            </div>

            {/* 4 Circular Trust Badges Matching Reference */}
            <div className="grid grid-cols-4 gap-2 pt-2 border-t border-[#292A27]/60 text-center">
              {/* 1. 100% Natural */}
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#C8A15A]/50 flex items-center justify-center text-[#C8A15A] mb-1 bg-black/20">
                  <Leaf className="w-3.5 h-3.5" />
                </div>
                <p className="text-[10px] text-white/90 font-sans leading-tight">100%</p>
                <p className="text-[10px] text-white/90 font-sans leading-tight">Natural</p>
              </div>

              {/* 2. Zero Preservatives */}
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#C8A15A]/50 flex items-center justify-center text-[#C8A15A] mb-1 bg-black/20">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <p className="text-[10px] text-white/90 font-sans leading-tight">Zero</p>
                <p className="text-[10px] text-white/90 font-sans leading-tight">Preservatives</p>
              </div>

              {/* 3. Premium Quality */}
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#C8A15A]/50 flex items-center justify-center text-[#C8A15A] mb-1 bg-black/20">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <p className="text-[10px] text-white/90 font-sans leading-tight">Premium</p>
                <p className="text-[10px] text-white/90 font-sans leading-tight">Quality</p>
              </div>

              {/* 4. Mangalore & Kerala Sourced */}
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#C8A15A]/50 flex items-center justify-center text-[#C8A15A] mb-1 bg-black/20">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <p className="text-[10px] text-white/90 font-sans leading-tight">Mangalore &amp; Kerala</p>
                <p className="text-[10px] text-white/90 font-sans leading-tight">Sourced</p>
              </div>
            </div>

          </div>

        </div>

        {/* =========================================================================
            TABS & DETAILED SPECIFICATIONS SECTION
            Product Details (left description & 3 feature icons) & Specifications table (right)
            ========================================================================= */}
        <div className="mb-16 text-left pt-6 border-t border-[#292A27]">
          {/* Tab Headers */}
          <div className="flex border-b border-[#292A27] gap-8 mb-8">
            <button
              type="button"
              onClick={() => setActiveTab('details')}
              className={`pb-3 text-sm font-semibold tracking-wide border-b-2 transition-all cursor-pointer ${
                activeTab === 'details'
                  ? 'border-[#C8A15A] text-[#DFC287]'
                  : 'border-transparent text-[#D6D2C9]/60 hover:text-[#F5F0E6]'
              }`}
            >
              Product Details
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('specs')}
              className={`pb-3 text-sm font-semibold tracking-wide border-b-2 transition-all cursor-pointer ${
                activeTab === 'specs'
                  ? 'border-[#C8A15A] text-[#DFC287]'
                  : 'border-transparent text-[#D6D2C9]/60 hover:text-[#F5F0E6]'
              }`}
            >
              Specifications
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="font-editorial text-2xl font-bold text-[#F5F0E6] mb-3">
                  About {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#D6D2C9]/85 leading-relaxed font-light">
                  {product.description || 'Premium arecanut pieces cut into precise diamond shapes, offering a perfect balance of texture, moisture and natural flavor. Ideal for traditional use, with consistent size and superior quality.'}
                </p>
              </div>
            </div>

            {/* Right Specifications Table Card */}
            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden border border-[#292A27] bg-[#141613]">
                <table className="w-full text-xs sm:text-sm">
                  <tbody className="divide-y divide-[#292A27]">
                    <tr>
                      <td className="px-4 py-3 text-[#D6D2C9]/70 w-1/3">Cut Type</td>
                      <td className="px-4 py-3 text-[#F5F0E6] font-medium text-right">
                        {product.specifications?.['Cut Profile'] || 'Faceted Diamond Shape'}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-[#D6D2C9]/70">Moisture Content</td>
                      <td className="px-4 py-3 text-[#F5F0E6] font-medium text-right">
                        {product.specifications?.['Moisture Content'] || 'Under 11%'}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-[#D6D2C9]/70">Impurities</td>
                      <td className="px-4 py-3 text-[#F5F0E6] font-medium text-right">
                        {product.specifications?.['Impurities'] || '0% (Mechanically & Hand Cleaned)'}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-[#D6D2C9]/70">Preservatives</td>
                      <td className="px-4 py-3 text-[#F5F0E6] font-medium text-right">
                        {product.specifications?.['Preservatives'] || 'Zero Chemical Additives'}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-[#D6D2C9]/70">Aroma</td>
                      <td className="px-4 py-3 text-[#F5F0E6] font-medium text-right">
                        {product.specifications?.['Aroma'] || 'Deep Natural Areca Nut'}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-[#D6D2C9]/70">Packaging</td>
                      <td className="px-4 py-3 text-[#F5F0E6] font-medium text-right">
                        Food-Grade 3-Ply Foil Stand-Up Pouch
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            EXPLORE OUR OTHER SIGNATURE CUTS
            Side-by-side cards matching the reference image layout
            ========================================================================= */}
        {relatedCuts.length > 0 && (
          <div className="pt-8 border-t border-[#292A27] text-left">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-editorial text-2xl font-bold text-[#F5F0E6]">
                Explore Our Other Signature Cuts
              </h3>
              <Link
                to="/shop"
                className="inline-flex items-center gap-1.5 text-xs text-[#C8A15A] hover:text-[#DFC287] font-sans font-medium transition-colors"
              >
                <span>View All Products</span>
                <span>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedCuts.map((rc) => {
                const cardThumb = rc.id === 'salli-cut' 
                  ? '/images/product-salli-card.webp'
                  : rc.id === 'chips-cut'
                  ? '/images/product-chips-card.webp'
                  : '/images/product-diamond-card.webp'

                return (
                  <Link
                    key={rc.id}
                    to={`/products/${rc.id}`}
                    className="p-4 sm:p-5 rounded-2xl bg-[#141613] hover:bg-[#181C16] border border-[#292A27] hover:border-[#C8A15A]/40 transition-all flex items-center justify-between group shadow-lg"
                  >
                    <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                      {/* Product Pouch Thumbnail */}
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 border border-[#292A27] bg-[#10120F]">
                        <img
                          src={cardThumb}
                          alt={rc.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="text-left min-w-0 pr-2">
                        <span className="text-[10px] sm:text-[11px] text-[#C8A15A] uppercase tracking-wider font-semibold font-sans">
                          {rc.subtitle || rc.category || 'SIGNATURE CUT'}
                        </span>
                        <h4 className="font-editorial text-lg sm:text-xl font-bold text-[#F5F0E6] group-hover:text-[#DFC287] transition-colors leading-tight truncate mt-0.5">
                          {rc.name}
                        </h4>
                        <p className="text-xs text-[#D6D2C9]/75 line-clamp-1 mt-1 font-sans">
                          {rc.desc || rc.tagline || 'Fine natural arecanut cut of coastal heritage.'}
                        </p>
                        <span className="inline-flex items-center gap-1 text-xs text-[#C8A15A] font-semibold mt-2 group-hover:underline">
                          <span>View Details</span>
                          <span className="text-sm">→</span>
                        </span>
                      </div>
                    </div>

                    {/* Circular Action Arrow */}
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#C8A15A]/50 text-[#C8A15A] flex items-center justify-center shrink-0 group-hover:border-[#C8A15A] group-hover:bg-[#C8A15A] group-hover:text-[#10120F] transition-all ml-2">
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

      </div>

      {/* Size Guide Modal */}
      {isSizeGuideOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md rounded-2xl bg-[#141613] border border-[#292A27] p-6 text-left shadow-2xl">
            <div className="flex items-center justify-between mb-4 border-b border-[#292A27] pb-3">
              <h3 className="font-editorial text-xl font-bold text-[#F5F0E6]">Pack Size Guide</h3>
              <button 
                onClick={() => setIsSizeGuideOpen(false)}
                className="p-1 rounded-full text-[#D6D2C9] hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#D6D2C9]/85">
              <div className="p-3 rounded-xl bg-black/30 border border-[#292A27]">
                <p className="font-bold text-[#DFC287]">250g Pouch</p>
                <p className="text-xs text-[#D6D2C9]/70 mt-0.5">Ideal for personal tasting, daily use, or initial trial.</p>
              </div>
              <div className="p-3 rounded-xl bg-black/30 border border-[#292A27]">
                <p className="font-bold text-[#DFC287]">500g Pouch (Most Popular)</p>
                <p className="text-xs text-[#D6D2C9]/70 mt-0.5">Standard household format. Keeps fresh for months in aroma-lock pouch.</p>
              </div>
              <div className="p-3 rounded-xl bg-black/30 border border-[#292A27]">
                <p className="font-bold text-[#DFC287]">1kg Pouch</p>
                <p className="text-xs text-[#D6D2C9]/70 mt-0.5">Best value for connoisseurs, celebrations, and extended supply.</p>
              </div>
              <div className="p-3 rounded-xl bg-black/30 border border-[#292A27]">
                <p className="font-bold text-[#DFC287]">5kg Bulk Commercial Pack</p>
                <p className="text-xs text-[#D6D2C9]/70 mt-0.5">Heavy-duty food-grade sack for shops, cafes, and bulk distributors.</p>
              </div>
            </div>
            <button
              onClick={() => setIsSizeGuideOpen(false)}
              className="mt-5 w-full btn-gold justify-center py-2.5 text-xs font-semibold"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      {/* Quote Request Modal */}
      <EnquiryModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultProduct={product.name}
      />
    </div>
  )
}

export default ProductDetailPage
