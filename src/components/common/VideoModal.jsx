import React, { useState } from 'react'
import { X, Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle2 } from 'lucide-react'

export const VideoModal = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [activeChapter, setActiveChapter] = useState(0)

  if (!isOpen) return null

  const chapters = [
    { title: 'Harvesting at Dawn', duration: '00:00 - 00:54', desc: 'Hand-climbing mature palms in Mangalore valleys' },
    { title: 'De-Husking & Grading', duration: '00:55 - 01:42', desc: 'Removing fibrous husk & grading nut density' },
    { title: 'Precision Slicing', duration: '01:43 - 02:40', desc: 'Crafting the Diamond, Salli & Chips cuts' },
    { title: 'Solar Curing & Packaging', duration: '02:41 - 03:54', desc: 'Moisture reduction & vacuum barrier seal' }
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#10120F]/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#10120F] text-[#F5F0E6] rounded-3xl overflow-hidden border border-[#C8A15A]/40 shadow-2xl z-10">
        
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-[#292A27] flex items-center justify-between bg-[#10251B]/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C8A15A] animate-pulse" />
            <h3 className="font-editorial text-lg sm:text-xl font-bold tracking-wide">
              From Estate to Excellence — Official Process Documentary
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#D6D2C9] hover:text-[#C8A15A] rounded-full hover:bg-[#292A27]"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Cinema Viewport */}
        <div className="relative aspect-[16/9] bg-black group overflow-hidden">
          <img
            src="/images/process-facility.webp"
            alt="Process facility workers inspecting arecanuts"
            className="w-full h-full object-cover opacity-90"
          />

          {/* Cinematic Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />

          {/* Chapter Overlay Indicator */}
          <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md border border-[#C8A15A]/40 px-3 py-1.5 rounded-full text-xs text-[#DFC287]">
            <span>Chapter {activeChapter + 1}: {chapters[activeChapter].title}</span>
          </div>

          {/* Centered Play/Pause Toggle Indicator */}
          <div 
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-[#C8A15A]/90 hover:bg-[#DFC287] text-[#10120F] flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
              {isPlaying ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current ml-1" />}
            </div>
          </div>

          {/* Bottom Video Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent flex items-center justify-between text-xs text-[#D6D2C9]">
            <div className="flex items-center gap-3">
              <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-[#C8A15A]">
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>
              <button onClick={() => setIsMuted(!isMuted)} className="hover:text-[#C8A15A]">
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="font-mono text-[11px] text-[#C8A15A]">01:42 / 03:54</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="bg-[#10251B] border border-[#C8A15A]/40 text-[#DFC287] px-2 py-0.5 rounded text-[10px] font-mono">
                4K UHD 60FPS
              </span>
            </div>
          </div>

          {/* Fake Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-800">
            <div className="h-full bg-[#C8A15A] w-[45%]" />
          </div>
        </div>

        {/* Chapters Footer */}
        <div className="p-4 sm:p-5 bg-[#10120F] border-t border-[#292A27]">
          <p className="text-xs font-semibold text-[#D6D2C9]/70 uppercase tracking-widest mb-3 text-left">
            Documentary Chapters
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left">
            {chapters.map((ch, idx) => (
              <button
                key={ch.title}
                onClick={() => setActiveChapter(idx)}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                  activeChapter === idx
                    ? 'bg-[#10251B] border-[#C8A15A] text-[#F5F0E6]'
                    : 'bg-[#292A27]/30 border-[#292A27] text-[#D6D2C9]/70 hover:border-[#C8A15A]/40'
                }`}
              >
                <p className="text-[10px] font-mono text-[#C8A15A]">{ch.duration}</p>
                <h5 className="font-editorial text-sm font-bold truncate mt-0.5">{ch.title}</h5>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default VideoModal
