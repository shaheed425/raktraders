import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, X, ArrowRight, Tag } from 'lucide-react'
import { api } from '../../services/api'

export const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')
  const [products, setProducts] = useState([])
  const [results, setResults] = useState([])

  useEffect(() => {
    if (isOpen) {
      api.getProducts().then(res => {
        if (res.success) setProducts(res.data)
      })
    }
  }, [isOpen])

  useEffect(() => {
    if (!query.trim()) {
      setResults(products)
    } else {
      const q = query.toLowerCase()
      const filtered = products.filter(p => 
        p.name.toLowerCase().includes(q) ||
        (p.fullTitle && p.fullTitle.toLowerCase().includes(q)) ||
        (p.category && p.category.toLowerCase().includes(q)) ||
        (p.origin && p.origin.toLowerCase().includes(q)) ||
        (p.description && p.description.toLowerCase().includes(q))
      )
      setResults(filtered)
    }
  }, [query, products])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#10120F]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Search Container */}
      <div className="relative w-full max-w-2xl bg-[#10120F] text-[#F5F0E6] rounded-3xl p-6 border border-[#C8A15A]/40 shadow-2xl z-10 text-left">
        
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-[#292A27] pb-4">
          <Search className="w-5 h-5 text-[#C8A15A] mr-3" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search our three cuts (e.g. Diamond Cut, Salli, Chips, Export)..."
            className="w-full bg-transparent text-lg text-[#F5F0E6] placeholder-[#D6D2C9]/50 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-[#D6D2C9] hover:text-[#C8A15A] rounded-full hover:bg-[#292A27]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        <div className="pt-3 pb-2 flex flex-wrap gap-2 text-xs">
          <span className="text-[#D6D2C9]/60 self-center">Popular:</span>
          {['Diamond Cut', 'Salli Cut', 'Chips Cut', 'Mangalore', '25kg Bulk'].map(tag => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 rounded-full bg-[#10251B] border border-[#C8A15A]/30 text-[#C8A15A] hover:bg-[#C8A15A] hover:text-[#10120F] transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="mt-4 max-h-[60vh] overflow-y-auto space-y-3">
          {results.length === 0 ? (
            <div className="py-8 text-center text-sm text-[#D6D2C9]/60">
              No matching cuts found for "{query}". Try "Diamond", "Salli", or "Chips".
            </div>
          ) : (
            results.map(item => (
              <Link
                key={item.id}
                to={`/products/${item.id}`}
                onClick={onClose}
                className="flex items-center gap-4 p-3 rounded-2xl bg-[#292A27]/30 hover:bg-[#10251B] border border-[#292A27] hover:border-[#C8A15A]/50 transition-all group"
              >
                <div className="w-14 h-16 rounded-xl bg-[#10120F] border border-[#292A27] p-1 flex items-center justify-center shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-editorial text-lg font-bold text-[#F5F0E6] group-hover:text-[#DFC287]">
                      {item.name}
                    </h4>
                    <span className="text-[10px] bg-[#C8A15A]/20 text-[#DFC287] px-2 py-0.5 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#D6D2C9]/70 truncate mt-0.5">
                    {item.tagline || item.description}
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#F5F0E6] text-sm">
                    ₹{item.price}
                  </span>
                  <div className="text-[#C8A15A] flex items-center justify-end text-xs gap-1 mt-1">
                    <span>View</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

      </div>
    </div>
  )
}

export default SearchModal
