import Menu from '@/components/atoms/Menu'
import React, { useEffect, useState } from 'react'

export default function Navigation({ isMobile, closeOpen }: Readonly<{ isMobile: boolean; closeOpen: () => void }>) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <nav
      className={`bg-[#FAFBFF] ${isMobile ? 'h-screen w-screen fixed top-0 left-0 z-30' : 'h-screen w-60 relative'} ${
        isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-5'
      }
       duration-500 transition-transform `}
    >
      <Menu isMobile={isMobile} closeOpen={closeOpen} />
    </nav>
  )
}
