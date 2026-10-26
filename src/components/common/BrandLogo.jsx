import React from 'react'
import { Link } from 'react-router-dom'

export const BrandLogo = ({ className = '', size = 'normal', light = false }) => {
  return (
    <Link to="/" className={`inline-flex items-center gap-3 group text-left ${className}`}>
      {/* Luxury Gold Crest Shield Emblem */}
      <div className="relative flex items-center justify-center">
        <svg 
          viewBox="0 0 100 110" 
          className={size === 'small' ? 'w-8 h-9' : size === 'large' ? 'w-14 h-16' : 'w-10 h-11'} 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Glow Shield */}
          <path 
            d="M50 4L88 22V54C88 78 50 104 50 104C50 104 12 78 12 54V22L50 4Z" 
            fill="#10120F" 
            stroke="#C8A15A" 
            strokeWidth="2.5" 
            strokeMiterlimit="10"
          />
          {/* Inner Filigree Border */}
          <path 
            d="M50 12L80 27V53C80 72 50 94 50 94C50 94 20 72 20 53V27L50 12Z" 
            stroke="#DFC287" 
            strokeWidth="1" 
            strokeDasharray="2 1"
            opacity="0.8"
          />
          {/* Crown */}
          <path 
            d="M38 32L44 38L50 28L56 38L62 32V42H38V32Z" 
            fill="#C8A15A"
          />
          {/* Stylized R Monogram */}
          <text 
            x="50" 
            y="68" 
            textAnchor="middle" 
            fill="#F5F0E6" 
            fontFamily="'Cormorant Garamond', Georgia, serif" 
            fontSize="26" 
            fontWeight="700"
            letterSpacing="1"
          >
            R
          </text>
          {/* Gold Bottom Ribbon Star */}
          <circle cx="50" cy="82" r="2.5" fill="#C8A15A" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-tight">
        <span className={`font-editorial font-bold tracking-[0.2em] transition-colors ${
          light ? 'text-[#10120F] group-hover:text-[#9C7733]' : 'text-[#F5F0E6] group-hover:text-[#DFC287]'
        } ${size === 'small' ? 'text-lg' : size === 'large' ? 'text-2xl' : 'text-xl'}`}>
          RAK
        </span>
        <span className={`font-sans tracking-[0.28em] text-[#C8A15A] uppercase font-semibold ${size === 'small' ? 'text-[9px]' : size === 'large' ? 'text-[12px]' : 'text-[10px]'}`}>
          TRADERS
        </span>
      </div>
    </Link>
  )
}

export default BrandLogo
