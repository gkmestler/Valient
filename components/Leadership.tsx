'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function Leadership() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const teamMembers = [
    { name: 'Gavin Mestler', role: 'Partner & Head of Acquisitions & Modernization', image: '/images/V-Gavin Mestler.png', bio: '', imageStyle: { transform: 'scale(1.65) translateY(12%)' } },
    { name: 'Brock Alpher', role: 'Partner & Head of Growth Strategy & Brand Positioning', image: '/images/V-Brock Alpher.png', bio: '', imageStyle: { transform: 'scale(1.35) translateY(15%)' } },
    { name: 'Jacob McKinney', role: 'Partner & Head of Leadership Transition & Talent Strategy', image: '/images/V-Jacob McKinney.png', bio: '', imageStyle: { transform: 'scale(1.1) translateY(5%)' } },
    { name: 'Daniel Berlin', role: 'Partner & Head of Strategic Development & Partnerships', image: '/images/V-Daniel Berlin.png', bio: '', imageStyle: { transform: 'scale(1.1)' } },
    { name: 'Alexander Sica', role: 'Partner & Head of Acquisition Sales & Owner Outreach', image: '/images/V-Alexander Sica.png', bio: '', imageStyle: { transform: 'scale(1.18) translateY(8%)' } },
    { name: 'Logan Mestler', role: 'Partner & Head of Business Expansion & Development', image: '/images/V-Logan Mestler.png', bio: '', imageStyle: { transform: 'scale(1.2) translateY(-2%)' } },
    { name: 'Vega Guo', role: 'Partner & Head of Technology-Enabled Operations', image: '/images/V-Vega Guo.png', bio: '', imageStyle: { transform: 'scale(1.25) translateY(5%)' } },
  ]

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="leadership" id="team">
      <div className="container">
        <div className="leadership-content">
          <h2>Meet Our Team</h2>
          <p className="leadership-subtext">We are the top entrepreneurs at the #1 school for entrepreneurship in the world and we've already built successful companies. Now, we are supported by industry experts to acquire established businesses ready for modernization.</p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card" onClick={() => handleToggle(index)}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={340}
                  className="team-image"
                  style={member.imageStyle}
                />
                <div className="team-info-wrapper">
                  <div className={`team-info ${expandedIndex === index ? 'expanded' : ''}`}>
                    <div className="team-info-text">
                      <div className="team-name-row">
                        <div className="team-name">{member.name}</div>
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