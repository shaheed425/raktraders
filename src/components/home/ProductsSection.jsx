import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Box, ShieldCheck, Globe } from 'lucide-react'

export const ProductsSection = () => {
  // Exact existing product image assets preserved intact without modification
  const products = [
    {
      id: 'diamond-cut',
      title: 'Diamond Cut',
      subtitle: 'Premium Cut',
      desc: 'Uniform geometric cuts for connoisseurs',
      href: '/products/diamond-cut',
      image: '/images/packshot-diamond.webp'
    },
    {
      id: 'salli-cut',
      title: 'Salli Cut',
      subtitle: 'Traditional Form',
      desc: 'Fine matchstick needle cuts of coastal heritage',
      href: '/products/salli-cut',
      image: '/images/packshot-salli.webp'
    },
    {
      id: 'chips-cut',
      title: 'Chips Cut',
      subtitle: 'Value Added',
      desc: 'Thinly sliced delicate wafers with rich aroma',
      href: '/products/chips-cut',
      image: '/images/packshot-chips.webp'
    }
  ]

  return (
    <section 
      id="our-products-section"
      className="relative w-full overflow-hidden bg-[#0A160F] text-[#F5F0E6] select-none py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(10, 22, 15, 0.88) 0%, rgba(10, 22, 15, 0.65) 45%, rgba(10, 22, 15, 0.9) 100%), url('/images/products-showcase-bg-hd.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* =========================================================================
            DESKTOP HEADER ROW (hidden on mobile, visible on lg)
            Heading & copy on left, View All Products pill button on right
            ========================================================================= */}
        <div className="hidden lg:flex items-end justify-between mb-10 xl:mb-12 text-left">
          <div className="max-w-2xl">
            {/* Eyebrow Label with Dash */}
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="w-6 h-[1.5px] bg-[#D6AA55]" />
              <span className="text-[#D6AA55] text-xs font-semibold tracking-[0.28em] uppercase font-sans">
                OUR PRODUCTS
              </span>
            </div>

            {/* Large Editorial Serif Headline */}
            <h2 className="font-editorial text-4xl xl:text-5xl font-normal leading-[1.1] tracking-tight mb-3 text-[#F5F0E6]">
              Nature’s Purity. <span className="text-[#D6AA55]">Three Unique Cuts.</span>
            </h2>

            {/* Description Copy */}
            <p className="text-sm xl:text-base text-[#D6D2C9]/85 font-sans font-light leading-relaxed max-w-xl">
              Carefully processed to preserve natural freshness, uniformity and premium quality.
            </p>
          </div>

          {/* View All Products Pill Button */}
          <div className="shrink-0 mb-1">
            <Link
              to="/shop"
              id="btn-view-all-products"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#E5B869] to-[#D6AA55] hover:from-[#DFC287] hover:to-[#D6AA55] text-[#10120F] font-sans font-semibold text-xs xl:text-sm shadow-md shadow-[#D6AA55]/20 hover:shadow-lg hover:shadow-[#D6AA55]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* =========================================================================
            DESKTOP THREE PRODUCT CARDS (hidden on mobile, visible on lg)
            Consistent dimensions, subtle borders, comfortable padding & alignment
            ========================================================================= */}
        <div className="hidden lg:grid grid-cols-3 gap-6 xl:gap-8 mb-12">
          {products.map((prod) => (
            <Link
              key={prod.id}
              to={prod.href}
              id={`product-card-${prod.id}`}
              className="group relative flex flex-col justify-between rounded-2xl bg-[#0D1812]/75 hover:bg-[#112017]/90 border border-[#292A27] hover:border-[#D6AA55]/60 p-6 xl:p-7 transition-all duration-300 shadow-xl hover:shadow-[0_18px_40px_rgba(0,0,0,0.7)] hover:-translate-y-1.5 cursor-pointer backdrop-blur-md"
            >
              {/* Product Pouch Image - Center aligned, original aspect ratio, object-contain */}
              <div className="w-full h-[280px] xl:h-[320px] flex items-center justify-center mb-6 relative">
                <img
                  src={prod.image}
                  alt={`${prod.title} Arecanut Pouch`}
                  className="h-full w-auto max-w-full object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-500 ease-out pointer-events-none"
                />
              </div>

              {/* Bottom Info Bar inside Card */}
              <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                <div className="flex items-start gap-3 text-left min-w-0 pr-2">
                  <span className="w-[2.5px] h-8 bg-[#D6AA55] rounded-full shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <h3 className="font-editorial text-lg xl:text-xl font-bold text-[#F5F0E6] group-hover:text-[#DFC287] transition-colors leading-tight truncate">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-[#D6D2C9]/70 font-sans mt-0.5 truncate">
                      {prod.subtitle}
                    </p>
                  </div>
                </div>

                {/* Simple Circular Arrow Button */}
                <div className="w-9 h-9 rounded-full border border-[#D6AA55]/60 group-hover:border-[#FFE599] group-hover:bg-[#D6AA55] group-hover:text-[#10120F] text-[#D6AA55] transition-all flex items-center justify-center shrink-0 shadow-sm ml-2">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* =========================================================================
            DESKTOP TRUST FEATURES ROW (from reference design)
            ========================================================================= */}
        <div className="hidden lg:grid grid-cols-4 gap-6 pt-8 border-t border-white/[0.08] max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full border border-[#D6AA55]/50 flex items-center justify-center text-[#D6AA55] bg-black/30 shrink-0">
              <Leaf className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#F5F0E6] font-sans leading-tight">Natural & Pure</p>
              <p className="text-[11px] text-[#D6D2C9]/65 font-sans">100% Sun Cured</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full border border-[#D6AA55]/50 flex items-center justify-center text-[#D6AA55] bg-black/30 shrink-0">
              <Box className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#F5F0E6] font-sans leading-tight">Uniform Shape & Size</p>
              <p className="text-[11px] text-[#D6D2C9]/65 font-sans">Precision Graded</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full border border-[#D6AA55]/50 flex items-center justify-center text-[#D6AA55] bg-black/30 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#F5F0E6] font-sans leading-tight">Long Shelf Life</p>
              <p className="text-[11px] text-[#D6D2C9]/65 font-sans">Aroma-Lock Pouch</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full border border-[#D6AA55]/50 flex items-center justify-center text-[#D6AA55] bg-black/30 shrink-0">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#F5F0E6] font-sans leading-tight">Export Quality</p>
              <p className="text-[11px] text-[#D6D2C9]/65 font-sans">Global Standards</p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MOBILE VIEW (lg:hidden) - 3 CARDS STACKED VERTICALLY WITHOUT BUTTONS/SWIPE
            Clean, elegant vertical presentation of all 3 product cards
            ========================================================================= */}
        <div className="lg:hidden flex flex-col text-left">
          {/* Eyebrow Label with Dash */}
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-[1.5px] bg-[#D6AA55]" />
            <span className="text-[#D6AA55] text-xs font-semibold tracking-[0.25em] uppercase font-sans">
              OUR PRODUCTS
            </span>
          </div>

          {/* Large Editorial Serif Headline */}
          <h2 className="font-editorial text-3xl sm:text-4xl font-normal leading-[1.12] tracking-tight mb-2.5 text-[#F5F0E6]">
            Nature’s Purity.<br />
            <span className="text-[#D6AA55]">Three Unique Cuts.</span>
          </h2>

          {/* Description Copy */}
          <p className="text-xs sm:text-sm text-[#D6D2C9]/85 font-sans font-light leading-relaxed mb-5 max-w-sm">
            Carefully processed to preserve natural freshness, uniformity, and premium quality.
          </p>

          {/* View All Products Pill Button */}
          <div className="mb-6">
            <Link
              to="/shop"
              id="btn-view-all-products-mobile"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#E5B869] to-[#D6AA55] hover:from-[#DFC287] hover:to-[#D6AA55] text-[#10120F] font-sans font-semibold text-xs shadow-md shadow-[#D6AA55]/20 cursor-pointer active:scale-98 transition-all"
            >
              <span>View All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* All 3 Product Cards Stacked Vertically */}
          <div className="flex flex-col gap-4 sm:gap-5 max-w-sm mx-auto w-full mb-8">
            {products.map((prod) => (
              <Link
                key={prod.id}
                to={prod.href}
                id={`mobile-product-card-${prod.id}`}
                className="block rounded-2xl bg-[#0D1812]/85 backdrop-blur-md border border-[#292A27] hover:border-[#D6AA55]/60 p-4 sm:p-5 shadow-xl transition-all group cursor-pointer"
              >
                {/* Scaled Pouch Image - Centered and completely visible, object-contain */}
                <div className="w-full h-[210px] sm:h-[230px] flex items-center justify-center mb-3 relative">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="h-full w-auto max-w-full object-contain drop-shadow-[0_14px_24px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                  />
                </div>

                {/* Bottom Info Bar inside Card */}
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.08]">
                  <div className="flex items-start gap-2.5 text-left min-w-0 pr-2">
                    <span className="w-[2px] h-7 bg-[#D6AA55] rounded-full shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <h3 className="font-editorial text-base sm:text-lg font-bold text-[#F5F0E6] group-hover:text-[#DFC287] transition-colors leading-tight truncate">
                        {prod.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#D6D2C9]/70 font-sans mt-0.5 truncate">
                        {prod.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Simple Circular Arrow Button */}
                  <div className="w-8 h-8 rounded-full border border-[#D6AA55]/60 group-hover:border-[#FFE599] group-hover:bg-[#D6AA55] group-hover:text-[#10120F] text-[#D6AA55] transition-all flex items-center justify-center shrink-0 shadow-sm ml-2">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Trust Features Row */}
          <div className="grid grid-cols-4 gap-2 pt-5 border-t border-white/[0.08] text-center">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border border-[#D6AA55]/50 flex items-center justify-center text-[#D6AA55] mb-1 bg-black/30">
                <Leaf className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] text-[#F5F0E6] font-medium leading-tight">Natural & Pure</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border border-[#D6AA55]/50 flex items-center justify-center text-[#D6AA55] mb-1 bg-black/30">
                <Box className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] text-[#F5F0E6] font-medium leading-tight">Uniform Cuts</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border border-[#D6AA55]/50 flex items-center justify-center text-[#D6AA55] mb-1 bg-black/30">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] text-[#F5F0E6] font-medium leading-tight">Long Shelf Life</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border border-[#D6AA55]/50 flex items-center justify-center text-[#D6AA55] mb-1 bg-black/30">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] text-[#F5F0E6] font-medium leading-tight">Export Quality</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProductsSection
