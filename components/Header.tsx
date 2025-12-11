'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      const shouldBeScrolled = scrollPosition > 20
      console.log('Scroll position:', scrollPosition, 'Should be scrolled:', shouldBeScrolled)
      setIsScrolled(shouldBeScrolled)
    }

    // Check scroll position on mount
    handleScroll()

    // Add listeners to both window and document
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <Link href="/" className="logo">
              <Image
                src="/images/Valientblack1.png"
                alt="Valient"
                width={140}
                height={35}
                priority
                className="logo-black"
              />
              <Image
                src="/images/Valientwhite1.png"
                alt="Valient"
                width={140}
                height={35}
                priority
                className="logo-white"
              />
            </Link>

            <nav>
              <ul className="nav-links">
                <li><Link href="/#team">Team</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/#approach">Our Approach</Link></li>
                <li><Link href="/sell">Sell</Link></li>
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

      <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><Link href="/#team" onClick={() => setIsMobileMenuOpen(false)}>Team</Link></li>
          <li><Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link></li>
          <li><Link href="/#approach" onClick={() => setIsMobileMenuOpen(false)}>Our Approach</Link></li>
          <li><Link href="/sell" onClick={() => setIsMobileMenuOpen(false)}>Sell</Link></li>
        </ul>
      </nav>
    </>
  )
}