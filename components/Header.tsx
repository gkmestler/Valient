'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isTeamSectionVisible, setIsTeamSectionVisible] = useState(false)
  const [animatingOut, setAnimatingOut] = useState<string | null>(null)
  const pathname = usePathname()
  const prevPathnameRef = useRef<string | null>(null)

  // Determine if header should be dark (for sell and approach pages)
  const isDarkHeader = pathname === '/sell' || pathname === '/approach'

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      const shouldBeScrolled = scrollPosition > 20
      setIsScrolled(shouldBeScrolled)
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    // Check scroll position on mount
    handleScroll()

    // Add listeners to both window and document
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Track team section visibility
  useEffect(() => {
    if (pathname !== '/') {
      setIsTeamSectionVisible(false)
      return
    }

    const teamSection = document.getElementById('team')
    if (!teamSection) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsTeamSectionVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(teamSection)

    return () => {
      observer.disconnect()
    }
  }, [pathname])

  // Handle animate-out when pathname changes
  useEffect(() => {
    const prevPathname = prevPathnameRef.current

    if (prevPathname && prevPathname !== pathname) {
      // Determine which link was previously active
      let prevActive: string | null = null
      if (prevPathname === '/') prevActive = 'team'
      else if (prevPathname === '/portfolio') prevActive = 'portfolio'
      else if (prevPathname === '/approach') prevActive = 'approach'
      else if (prevPathname === '/sell') prevActive = 'sell'

      if (prevActive) {
        setAnimatingOut(prevActive)
        setTimeout(() => setAnimatingOut(null), 300)
      }
    }

    prevPathnameRef.current = pathname
  }, [pathname])

  const handleNavClick = (clickedPath: string) => {
    // Store clicked path for animate-out on navigation
    // The actual animate-out will happen in the pathname change effect
  }

  const getNavLinkClass = (linkId: string) => {
    const isAnimatingOut = animatingOut === linkId

    let isActive = false
    if (linkId === 'team') {
      isActive = pathname === '/' && isTeamSectionVisible
    } else if (linkId === 'portfolio') {
      isActive = pathname === '/portfolio'
    } else if (linkId === 'approach') {
      isActive = pathname === '/approach'
    } else if (linkId === 'sell') {
      isActive = pathname === '/sell'
    }

    if (isAnimatingOut) return 'animate-out'
    if (isActive) return 'active'
    return ''
  }

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''} ${isDarkHeader ? 'header-dark' : ''} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="container">
          <div className="header-content">
            <Link href="/" className="logo">
              {(isDarkHeader || isScrolled || isMobileMenuOpen) ? (
                <Image
                  src="/images/METHODIC LOGO WHITE.png"
                  alt="Methodic"
                  width={150}
                  height={37}
                  priority
                />
              ) : (
                <Image
                  src="/images/METHODIC LOGO BLACK.png"
                  alt="Methodic"
                  width={150}
                  height={37}
                  priority
                />
              )}
            </Link>

            <nav>
              <ul className="nav-links">
                <li><Link href="/#team" className={getNavLinkClass('team')} onClick={() => handleNavClick('team')}>Our People</Link></li>
                <li><Link href="/portfolio" className={getNavLinkClass('portfolio')} onClick={() => handleNavClick('portfolio')}>Portfolio</Link></li>
                <li><Link href="/approach" className={getNavLinkClass('approach')} onClick={() => handleNavClick('approach')}>Our Approach</Link></li>
                <li><Link href="/sell" className={getNavLinkClass('sell')} onClick={() => handleNavClick('sell')}>Sell</Link></li>
              </ul>
            </nav>

            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span className="menu-icon"></span>
            </button>
          </div>
        </div>
      </header>

      <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''} ${isDarkHeader ? 'mobile-nav-dark' : ''}`}>
        <ul className="mobile-nav-links">
          <li><Link href="/#team" className={getNavLinkClass('team')} onClick={() => { handleNavClick('team'); setIsMobileMenuOpen(false) }}>Our People</Link></li>
          <li><Link href="/portfolio" className={getNavLinkClass('portfolio')} onClick={() => { handleNavClick('portfolio'); setIsMobileMenuOpen(false) }}>Portfolio</Link></li>
          <li><Link href="/approach" className={getNavLinkClass('approach')} onClick={() => { handleNavClick('approach'); setIsMobileMenuOpen(false) }}>Our Approach</Link></li>
          <li><Link href="/sell" className={getNavLinkClass('sell')} onClick={() => { handleNavClick('sell'); setIsMobileMenuOpen(false) }}>Sell</Link></li>
        </ul>
      </nav>
    </>
  )
}