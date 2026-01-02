import React from 'react'
import Image from 'next/image'

export default function Advisors() {
  const advisors = [
    {
      name: 'Brad Johnson',
      title: 'Professor Emeritus Babson College and Former Vice President Wayfair',
      image: '/images/brad-johnson.jpg',
      linkedin: 'https://www.linkedin.com/in/bradjohnson12/',
      imageScale: 1.5,
      imageOffsetY: 10,
    },
    {
      name: 'Vincent Sica',
      title: 'Founder of Vintra Franchise Holdings',
      image: '/images/vincent-sica.jpg',
      linkedin: '',
    },
    {
      name: 'Scott Waxler',
      title: 'Founder, Lockebridge Capital Partners',
      image: '/images/scott-waxler.jpg',
      linkedin: 'https://www.linkedin.com/in/scottwaxler/',
    },
    {
      name: 'Erik Noyes',
      title: 'Professor of Entrepreneurship at Babson College',
      image: '/images/erik-noyes.jpg',
      linkedin: 'https://www.linkedin.com/in/erik-noyes-40b1b73/',
    },
    {
      name: 'Chad Mestler',
      title: 'Founder of Helvetica Group and Raiseli.com',
      image: '/images/chad-mestler.jpg',
      linkedin: 'https://www.linkedin.com/in/chadmestler/',
    },
    {
      name: 'Edward Gorelick',
      title: 'Founder of Gorelick & Uslaner, CPAs',
      image: '/images/edward-gorelick.jpg',
      linkedin: '',
    },
    {
      name: 'Evan Farber',
      title: 'General Counsel at The Cranemere Group, Board Member of Flotek Industries',
      image: '/images/V-Evan Farber.png',
      linkedin: 'https://www.linkedin.com/in/evan-farber/',
      imageScale: 1.45,
      imageOffsetY: 6,
      containImage: true,
    },
  ]

  return (
    <section className="advisors">
      <div className="container">
        <div className="advisors-content">
          <h2>Strategic Advisors</h2>
          <div className="advisors-grid">
            {advisors.map((advisor, index) => (
              <div key={index} className="advisor-card">
                {advisor.image ? (
                  <div className="advisor-image-wrapper">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      width={80}
                      height={80}
                      className={advisor.imageScale ? "advisor-image-inner" : "advisor-image"}
                      style={{
                        ...(advisor.imageScale ? { transform: `scale(${advisor.imageScale}) translateY(${advisor.imageOffsetY || 0}px)` } : {}),
                        ...(advisor.containImage ? { objectFit: 'contain' } : {}),
                      }}
                    />
                  </div>
                ) : (
                  <div
                    className="advisor-image advisor-placeholder"
                    style={{
                      background: `linear-gradient(135deg, #666 0%, #999 100%)`,
                    }}
                  />
                )}
                <div className="advisor-info">
                  <div className="advisor-name-row">
                    <div className="advisor-name">{advisor.name}</div>
                    {advisor.linkedin && (
                      <a
                        href={advisor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin-link"
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
                  <div className="advisor-title">{advisor.title}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="etower-section">
            <Image
              src="/images/etower-hero-logo.png"
              alt="Babson eTower"
              width={200}
              height={80}
              className="etower-logo"
            />
            <p className="etower-text">Methodic is also backed by eTower, an elite entrepreneurship community founded at Babson College, with alumni that have built companies valued at over $3 billion.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
