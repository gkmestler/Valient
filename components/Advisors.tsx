import React from 'react'
import Image from 'next/image'

export default function Advisors() {
  const advisors = [
    {
      name: 'Brad Johnson',
      title: 'Former VP of Operations at Wayfair',
      image: '/images/brad-johnson.jpg'
    },
    {
      name: 'Vincent Sica',
      title: 'Founder of Vintra Franchise Holdings',
      image: '/images/vincent-sica.jpg'
    },
    {
      name: 'Scott Waxler',
      title: 'Founder, Lockebridge Capital Partners',
      image: '/images/scott-waxler.jpg'
    },
    {
      name: 'Erik Noyes',
      title: 'Professor of Entrepreneurship at Babson College',
      image: '/images/erik-noyes.jpg'
    },
    {
      name: 'Chad Mestler',
      title: 'Founder of Helvetica Group and Raiseli.com',
      image: '/images/chad-mestler.jpg'
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
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    width={80}
                    height={80}
                    className="advisor-image"
                  />
                ) : (
                  <div
                    className="advisor-image advisor-placeholder"
                    style={{
                      background: `linear-gradient(135deg, #666 0%, #999 100%)`,
                    }}
                  />
                )}
                <div className="advisor-info">
                  <div className="advisor-name">{advisor.name}</div>
                  <div className="advisor-title">{advisor.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}