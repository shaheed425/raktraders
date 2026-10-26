import React from 'react'

export const HeritageEmblem = ({ className = '', size = 130 }) => {
  return (
    <div 
      className={`relative rounded-full flex items-center justify-center p-2 bg-[#10120F]/90 backdrop-blur-sm border border-[#C8A15A]/60 shadow-2xl ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {/* Outer concentric subtle rings */}
      <div className="absolute inset-1 rounded-full border border-dashed border-[#C8A15A]/30" />
      
      {/* Rotating SVG with curved circular text */}
      <svg 
        viewBox="0 0 200 200" 
        className="w-full h-full animate-[spin_30s_linear_infinite]"
      >
        <defs>
          <path
            id="textcircle"
            d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
          />
        </defs>
        <text className="text-[12.5px] uppercase tracking-[3.8px] fill-[#DFC287] font-medium">
          <textPath href="#textcircle" startOffset="0%">
            ROOTED IN SOUTH INDIA • READY FOR THE WORLD •
          </textPath>
        </text>
      </svg>

      {/* Center Gold Leaf Graphic */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#C8A15A]" fill="none" stroke="currentColor" strokeWidth="1.8">
          {/* Elegant double leaf motif */}
          <path d="M20 32C20 32 20 22 14 16C8 10 10 6 12 6C14 6 19 9 20 15C21 9 26 6 28 6C30 6 32 10 26 16C20 22 20 32 20 32Z" fill="rgba(200, 161, 90, 0.2)" />
          <path d="M20 32V14" strokeLinecap="round" />
          <path d="M20 22C17 20 15 18 14 15" strokeLinecap="round" />
          <path d="M20 22C23 20 25 18 26 15" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}

export default HeritageEmblem
