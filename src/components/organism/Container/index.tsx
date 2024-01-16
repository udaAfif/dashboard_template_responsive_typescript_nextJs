'use client'
import { Header, Navigation } from '@/components/molecules'
import { useEffect, useState } from 'react'

export default function Container({
  children,
  headerShow = true,
  navShow = true,
  padding = true,
}: {
  children: React.ReactNode
  headerShow?: boolean
  navShow?: boolean
  padding?: boolean
}) {
  const [open, isOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      isOpen(window.innerWidth >= 768)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section>
      {headerShow && <Header openNav={() => isOpen(!open)} />}
      <div className="flex flex-row ">
        {navShow && open && <Navigation isMobile={isMobile} closeOpen={() => isOpen(false)} />}
        <div className={`${padding === true ? 'px-5 py-5 flex-1' : 'flex-1 min-w-[300px] p-5'}`}>{children}</div>
      </div>
    </section>
  )
}
