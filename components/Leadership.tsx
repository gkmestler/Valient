'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function Leadership() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const teamMembers = [
    { name: 'Gavin Mestler', role: 'Managing Partner and Co-Founder', image: '/images/V-Gavin Mestler.png', bio: 'Gavin co-founded Methodic Ventures alongside his brother Logan with a mission to preserve and modernize the businesses that America runs on.', imageStyle: { transform: 'scale(1.65) translateY(12%)' }, linkedin: 'https://www.linkedin.com/in/gavinmestler/' },
    { name: 'Logan Mestler', role: 'Managing Partner and Co-Founder', image: '/images/V-Logan Mestler.png', bio: 'Logan co-founded Methodic Ventures alongside his brother Gavin with a mission to preserve and modernize the businesses that America runs on.', imageStyle: { transform: 'scale(1.2) translateY(-2%)' }, linkedin: 'https://www.linkedin.com/in/logan-mestler-753917253/' },
    { name: 'Dean Farber', role: 'Managing Partner and Co-Founder', image: '/images/V-Dean Farber.png', bio: 'Dean is the founder of Duff Goods, an independently operated e-commerce business with $1M+ in revenue, and has experience across product sourcing, online sales, and managing the full lifecycle of a small business from end to end.', imageStyle: { transform: 'scale(1.0) translateY(3%)' }, linkedin: '', brightness: 1.2 },
    { name: 'Daniel Berlin', role: 'Head of Strategic Development & Partnerships', image: '/images/V-Daniel Berlin.png', bio: 'Dan is the founder and operator of Dirty Gut, a probiotic chocolate brand carried in 70+ grocery stores across the U.S., and has experience managing product, partnerships, and day-to-day operations.', imageStyle: { transform: 'scale(1.1) translateY(2%)' }, linkedin: 'https://www.linkedin.com/in/dirtydan/' },
    { name: 'Jacob McKinney', role: 'Head of Operations and Talent Strategy', image: '/images/V-Jacob McKinney.png', bio: 'Jacob is the co-founder of Junk Teens, a junk removal business in Massachusetts with $2.5M in revenue and 20+ employees, as well as Rage Zone and Junk University.', imageStyle: { transform: 'scale(1.1) translateY(5%)' }, linkedin: 'https://www.linkedin.com/in/jacobmkny/' },
    { name: 'Brock Alpher', role: 'Head of Marketing and Growth Strategy', image: '/images/V-Brock Alpher.png', bio: 'Brock is the founder of Sneaker Soul, a sole protection solution for sneaker enthusiasts, and has led growth for two $500K+/yr consumer brands. He focuses on scaling businesses through creative marketing and modernized operating systems.', imageStyle: { transform: 'scale(1.35) translateY(15%)' }, linkedin: 'https://www.linkedin.com/in/brock-alpher-0432b81b7/' },
    { name: 'Alexander Sica', role: 'Head of Sales', image: '/images/V-Alexander Sica.png', bio: 'A sales-driven operator with experience launching and scaling consumer and wellness businesses.', imageStyle: { transform: 'scale(1.18) translateY(8%)' }, linkedin: 'https://www.linkedin.com/in/alexander-sica-97b9a3200/' },
    { name: 'Vega Guo', role: 'Head of Technology-Enabled Operations', image: '/images/V-Vega Guo.png', bio: 'Vega is the founder of Truvit, a high-ticket education technology company, with experience selling solutions to schools and a focus on partnerships and enterprise sales.', imageStyle: { transform: 'scale(1.25) translateY(5%)' }, linkedin: 'https://www.linkedin.com/in/vega-guo-877630287/' },
    { name: 'Shah Durran', role: 'Head of AI Systems', image: '/images/V-Shah Durran.png', bio: 'Shah is a full stack developer and the founder of Fluidify Systems, a business automation firm that has deployed hundreds of AI-driven systems for businesses across the United States.', imageStyle: { transform: 'scale(1.15) translateY(8%) translateX(4%)', objectPosition: '70% 0%' }, linkedin: 'https://www.linkedin.com/in/shah-durran-ahmed-a38b471a5/' },
  ]

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="leadership" id="team">
      <div className="container">
        <div className="leadership-content">
          <h2>Meet Our Team</h2>
          <p className="leadership-subtext">We've assembled a diverse team of entrepreneurs, blending talents from various backgrounds and industries, to effectively support our portfolio companies from all angles.</p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className={`team-card ${expandedIndex === index ? 'expanded' : ''}`} onClick={() => handleToggle(index)}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={340}
                  className="team-image"
                  style={{
                    ...member.imageStyle,
                    ...(member.brightness && {
                      filter: expandedIndex === index
                        ? `grayscale(0%) contrast(1.05) brightness(${member.brightness})`
                        : `grayscale(85%) contrast(1.05) brightness(${member.brightness})`
                    })
                  }}
                />
                <div className="team-info-wrapper">
                  <div className={`team-info ${expandedIndex === index ? 'expanded' : ''}`}>
                    <div className="team-info-text">
                      <div className="team-name-row">
                        <span className="team-name">{member.name}</span>
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin-link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Image
                              src="/images/linkedin-icon-44.png"
                              alt="LinkedIn"
                              width={18}
                              height={18}
                              className="linkedin-icon"
                            />
                          </a>
                        )}
                      </div>
                      <div className="team-role">{member.role}</div>
                      <div className="team-expanded-content">
                        {member.bio || 'Bio coming soon...'}
                      </div>
                    </div>
                    <span className="dropdown-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
