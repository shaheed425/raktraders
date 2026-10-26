import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Layers, Info, Workflow, Phone } from 'lucide-react'

export const MobileBottomBar = () => {
  const location = useLocation()
  const pathname = location.pathname
  const [optimisticTab, setOptimisticTab] = useState(null)

  useEffect(() => {
    setOptimisticTab(null)
  }, [pathname])

  const navItems = [
    {
      id: 'home',
      label: 'HOME',
      icon: Home,
      to: '/',
      isActive: optimisticTab ? optimisticTab === 'home' : pathname === '/'
    },
    {
      id: 'cuts',
      label: 'CUTS',
      icon: Layers,
      to: '/shop',
      isActive: optimisticTab ? optimisticTab === 'cuts' : (pathname.startsWith('/shop') || pathname.startsWith('/products'))
    },
    {
      id: 'about',
      label: 'ABOUT',
      icon: Info,
      to: '/story',
      isActive: optimisticTab ? optimisticTab === 'about' : pathname.startsWith('/story')
    },
    {
      id: 'process',
      label: 'PROCESS',
      icon: Workflow,
      to: '/process',
      isActive: optimisticTab ? optimisticTab === 'process' : (pathname.startsWith('/process') || pathname.startsWith('/quality'))
    },
    {
      id: 'contact',
      label: 'CONTACT',
      icon: Phone,
      to: '/contact',
      isActive: optimisticTab ? optimisticTab === 'contact' : pathname.startsWith('/contact')
    }
  ]

  return (
    <aside
      aria-label="Mobile Navigation Bar"
      className="fixed bottom-3 left-3 right-3 z-40 max-w-md mx-auto lg:hidden pointer-events-auto touch-manipulation"
    >
      <nav 
        className="relative flex items-center justify-between px-2 py-1.5 rounded-full bg-[#0B0F0C]/90 backdrop-blur-2xl border border-[#C8A15A]/40 shadow-[0_14px_40px_rgba(0,0,0,0.85)]"
      >
        {navItems.map((item) => {
          const Icon = item.icon
          const active = item.isActive

          return (
            <Link
              key={item.id}
              to={item.to}
              id={`mobile-nav-${item.id}`}
              onClick={() => setOptimisticTab(item.id)}
              className="flex-1 min-w-0 flex flex-col items-center justify-center cursor-pointer active:scale-95 transition-transform duration-100 select-none py-0.5"
            >
              <div 
                className={`w-full py-1 px-1 sm:px-1.5 rounded-full flex flex-col items-center justify-center transition-colors duration-150 ${
                  active 
                    ? 'bg-white/[0.14] shadow-xs' 
                    : 'text-[#D6D2C9]/70 hover:text-white'
                }`}
              >
                <Icon 
                  className={`w-4 h-4 transition-colors duration-150 ${
                    active ? 'text-[#E5B869]' : 'text-[#D6D2C9]/80'
                  }`} 
                  strokeWidth={active ? 2.2 : 1.8} 
                />
                <span 
                  className={`text-[8.5px] sm:text-[9px] tracking-wider mt-0.5 font-sans transition-colors duration-150 truncate ${
                    active 
                      ? 'font-bold text-[#E5B869]' 
                      : 'font-medium text-[#D6D2C9]/75'
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

export default MobileBottomBar
