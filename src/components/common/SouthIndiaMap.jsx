import React from 'react'

export const SouthIndiaMap = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center p-4 ${className}`}>
      <div className="relative w-full max-w-[280px] aspect-[4/5] flex items-center justify-center">
        {/* Subtle Map SVG of Peninsular South India */}
        <svg 
          viewBox="0 0 320 400" 
          className="w-full h-full drop-shadow-[0_4px_20px_rgba(200,161,90,0.15)]"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle grid lines background */}
          <line x1="40" y1="100" x2="280" y2="100" stroke="#C8A15A" strokeOpacity="0.1" strokeDasharray="4 4" />
          <line x1="40" y1="200" x2="280" y2="200" stroke="#C8A15A" strokeOpacity="0.1" strokeDasharray="4 4" />
          <line x1="40" y1="300" x2="280" y2="300" stroke="#C8A15A" strokeOpacity="0.1" strokeDasharray="4 4" />
          <line x1="160" y1="40" x2="160" y2="360" stroke="#C8A15A" strokeOpacity="0.1" strokeDasharray="4 4" />

          {/* Peninsular India Outline (Karnataka, Kerala, Tamil Nadu, Andhra) */}
          {/* Non-highlighted base peninsula */}
          <path 
            d="M80 60 L240 60 L250 140 L220 220 L160 350 L140 370 L120 330 L90 240 L70 160 Z" 
            stroke="#292A27" 
            strokeWidth="1.5" 
            fill="#10120F"
            opacity="0.6"
          />

          {/* Karnataka Region (Highlighted) */}
          <path 
            d="M85 80 L180 80 L195 150 L150 190 L110 190 L95 140 Z" 
            fill="rgba(200, 161, 90, 0.12)" 
            stroke="#C8A15A" 
            strokeWidth="1.5"
            strokeDasharray="3 2"
          />

          {/* Kerala Coastal Belt (Highlighted) */}
          <path 
            d="M105 195 L145 195 L135 270 L120 340 L105 320 L100 240 Z" 
            fill="rgba(200, 161, 90, 0.22)" 
            stroke="#DFC287" 
            strokeWidth="2"
          />

          {/* Mangalore Coastal Pin Marker */}
          <g className="cursor-pointer group">
            <circle cx="102" cy="180" r="7" fill="#C8A15A" fillOpacity="0.3" className="animate-ping" />
            <circle cx="102" cy="180" r="4.5" fill="#C8A15A" stroke="#10120F" strokeWidth="1.5" />
            <line x1="102" y1="180" x2="160" y2="140" stroke="#C8A15A" strokeWidth="1" strokeDasharray="2 2" />
          </g>

          {/* Kerala Belt Pin Marker */}
          <g className="cursor-pointer group">
            <circle cx="118" cy="270" r="7" fill="#C8A15A" fillOpacity="0.3" className="animate-ping" style={{ animationDelay: '1s' }} />
            <circle cx="118" cy="270" r="4.5" fill="#DFC287" stroke="#10120F" strokeWidth="1.5" />
            <line x1="118" y1="270" x2="175" y2="250" stroke="#DFC287" strokeWidth="1" strokeDasharray="2 2" />
          </g>
        </svg>

        {/* Labels Overlay */}
        <div className="absolute right-0 top-1/4 translate-x-4 max-w-[150px] text-left">
          <div className="font-editorial text-lg text-[#DFC287] font-semibold leading-tight">
            From the<br />Lush Estates of<br />South India
          </div>
          
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8A15A] ring-2 ring-[#C8A15A]/30" />
              <div>
                <p className="text-xs font-semibold text-[#F5F0E6]">Karnataka</p>
                <p className="text-[10px] text-[#C8A15A] tracking-wider">(Mangalore)</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DFC287] ring-2 ring-[#DFC287]/30" />
              <div>
                <p className="text-xs font-semibold text-[#F5F0E6]">Kerala</p>
                <p className="text-[10px] text-[#D6D2C9] tracking-wider">Highlands & Coast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SouthIndiaMap
