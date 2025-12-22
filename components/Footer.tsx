import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <Link href="/" className="footer-logo">
            <Image
              src="/images/METHODIC LOGO WHITE.png"
              alt="Methodic"
              width={170}
              height={42}
            />
          </Link>
          <nav className="footer-nav">
            <ul className="footer-links">
              <li><Link href="/#team">Team</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/approach">Our Approach</Link></li>
              <li><Link href="/sell">Sell</Link></li>
            </ul>
          </nav>
        </div>
        <p className="footer-copyright">© {new Date().getFullYear()} Methodic Ventures. All rights reserved.</p>
      </div>
    </footer>
  )
}
