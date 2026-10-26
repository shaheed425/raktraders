import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingBag, Eye, SlidersHorizontal, Check, Plus, Minus } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { api } from '../services/api'

export const ShopPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const { addToCart } = useCart()

  const [selectedSizes, setSelectedSizes] = useState({})
  const [quantities, setQuantities] = useState({})

  useEffect(() => {
    window.scrollTo(0, 0)
    api.getProducts().then(res => {
      if (res.success) {
        setProducts(res.data)
        const initSizes = {}
        const initQty = {}
        res.data.forEach(p => {
          initSizes[p.id] = (p.packSizes && p.packSizes[1]) || (p.packSizes && p.packSizes[0])
          initQty[p.id] = 1
        })
        setSelectedSizes(initSizes)
        setQuantities(initQty)
      }
      setLoading(false)
    })
  }, [])

  const categories = ['All', 'Premium Cut', 'Traditional Form', 'Value Added']

  const filtered = products
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  const getProductImage = (prod) => {
    if (prod.id === 'diamond-cut') return '/images/packshot-diamond.webp'
    if (prod.id === 'salli-cut') return '/images/packshot-salli.webp'
    if (prod.id === 'chips-cut') return '/images/packshot-chips.webp'
    return prod.image
  }

  const handleSizeChange = (id, sizeObj) => {
    setSelectedSizes(prev => ({ ...prev, [id]: sizeObj }))
  }

  const handleQtyChange = (id, delta) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }))
  }

  return (
    <div className="pt-28 pb-24 bg-[#10120F] text-[#F5F0E6] min-h-screen">
      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-left">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-5 h-[1.5px] bg-[#C8A15A]" />
          <span className="text-[#C8A15A] text-xs font-semibold tracking-[0.25em] uppercase">
            MASTER CATALOGUE
          </span>
        </div>
        <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#F5F0E6] mb-4">
          The Three Cuts of Pure Betel Nut
        </h1>
        <p className="text-sm sm:text-base text-[#D6D2C9]/80 max-w-2xl leading-relaxed">
          From the mist-crowned plantations of Mangalore and Kerala. Sourced from the finest ancestral groves, precision-machined, and sun-cured to perfection.
        </p>

        {/* Filters and Sort */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#292A27]">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-4 py-2 rounded-full transition-all cursor-pointer border ${
                  activeCategory === cat
                    ? 'bg-[#C8A15A] text-[#10120F] font-semibold border-[#C8A15A]'
                    : 'bg-[#10251B]/60 text-[#D6D2C9] border-[#292A27] hover:border-[#C8A15A]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 text-xs text-[#D6D2C9]">
            <SlidersHorizontal className="w-4 h-4 text-[#C8A15A]" />
            <span>Sort By:</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="bg-[#292A27] text-[#F5F0E6] text-xs px-3 py-1.5 rounded-lg border border-[#292A27] focus:border-[#C8A15A] focus:outline-none"
            >
              <option value="featured">Featured Master Cuts</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map(product => {
            const currentSize = selectedSizes[product.id] || (product.packSizes && product.packSizes[0])
            const qty = quantities[product.id] || 1
            const price = currentSize ? currentSize.price : product.price

            return (
              <div
                key={product.id}
                className="group relative rounded-2xl bg-[#10120F] border border-[#292A27] hover:border-[#C8A15A]/60 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(200,161,90,0.12)] text-left"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative rounded-xl overflow-hidden bg-[#10251B]/40 aspect-[3/4] mb-5 flex items-center justify-center p-4 border border-[#292A27]">
                    <img
                      src={getProductImage(product)}
                      alt={product.name}
                      className="w-full h-full object-contain filter drop-shadow-[0_16px_28px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <span className="absolute top-3 left-3 bg-[#10120F]/90 border border-[#C8A15A]/40 text-[#DFC287] text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {product.category}
                    </span>
                    <Link
                      to={`/products/${product.id}`}
                      className="absolute bottom-3 right-3 bg-[#10251B] hover:bg-[#C8A15A] text-[#F5F0E6] hover:text-[#10120F] border border-[#C8A15A]/50 p-2 rounded-full transition-all"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Info */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-editorial text-2xl font-bold text-[#F5F0E6] group-hover:text-[#DFC287] transition-colors leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#C8A15A] font-medium tracking-wide">
                        {product.grade} • {product.origin}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="font-sans text-xl font-bold text-[#F5F0E6]">
                        ₹{price ? price.toLocaleString('en-IN') : 'Enquire'}
                      </span>
                      {currentSize && currentSize.weight && (
                        <p className="text-[10px] text-[#D6D2C9]/60">per {currentSize.weight}</p>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-[#D6D2C9]/80 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Pack Sizes */}
                  {product.packSizes && (
                    <div className="mb-4">
                      <p className="text-[10px] text-[#D6D2C9]/70 uppercase tracking-wider mb-1.5 font-medium">
                        Available Pack Sizes:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {product.packSizes.map(s => (
                          <button
                            key={s.size}
                            type="button"
                            onClick={() => handleSizeChange(product.id, s)}
                            className={`text-[10px] px-2.5 py-1 rounded-md transition-all cursor-pointer border ${
                              currentSize && currentSize.size === s.size
                                ? 'bg-[#C8A15A] text-[#10120F] font-semibold border-[#C8A15A]'
                                : 'bg-[#10251B]/60 text-[#D6D2C9] border-[#292A27] hover:border-[#C8A15A]/40'
                            }`}
                          >
                            {s.size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Controls */}
                <div className="pt-4 border-t border-[#292A27] space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center border border-[#292A27] rounded-full bg-[#10251B]/40 px-2 py-1">
                      <button
                        onClick={() => handleQtyChange(product.id, -1)}
                        className="w-5 h-5 flex items-center justify-center text-[#D6D2C9] hover:text-[#C8A15A]"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-xs font-semibold">{qty}</span>
                      <button
                        onClick={() => handleQtyChange(product.id, 1)}
                        className="w-5 h-5 flex items-center justify-center text-[#D6D2C9] hover:text-[#C8A15A]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => addToCart(product, currentSize, qty)}
                      className="flex-1 btn-gold text-xs py-2 px-3 justify-center"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Basket</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <Link
                      to={`/products/${product.id}`}
                      className="text-[#D6D2C9]/80 hover:text-[#DFC287] inline-flex items-center gap-1 font-medium"
                    >
                      <span>Full Specifications</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <span className="text-[10px] text-[#C8A15A] font-mono">
                      Moisture {product.moisture}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ShopPage
