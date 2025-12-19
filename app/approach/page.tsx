import React from 'react'
import Image from 'next/image'

export default function ApproachPage() {
  return (
    <div className="approach-page">
      <main>
        {/* Hero Section */}
        <section className="approach-hero">
          <div className="container">
            <div className="approach-hero-content">
              <h1>Our Approach</h1>
              <p>
                We partner with owners of essential service businesses across New England,
                providing a seamless transition that honors your legacy while positioning
                your business for continued growth.
              </p>
            </div>
          </div>
        </section>

        {/* Acquisition Criteria Section */}
        <section className="acquisition-criteria">
          <div className="container">
            <div className="criteria-header">
              <h2>Acquisition Criteria</h2>
              <p className="criteria-intro">
                We focus on acquiring essential service businesses in New England
                that meet the following criteria:
              </p>
            </div>

            <div className="criteria-card-wrapper">
              <div className="criteria-card-glow"></div>
              <div className="criteria-card">
                <div className="criteria-grid">
                  <div className="criteria-item">
                    <div className="criteria-icon">
                      <Image
                        src="/images/icons/profits.png"
                        alt="Profits icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="criteria-text">
                      <h3>$300K - $2M</h3>
                      <p>in EBITDA</p>
                    </div>
                  </div>

                  <div className="criteria-item">
                    <div className="criteria-icon">
                      <Image
                        src="/images/icons/time-management.png"
                        alt="Time management icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="criteria-text">
                      <h3>5+ years</h3>
                      <p>in operation</p>
                    </div>
                  </div>

                  <div className="criteria-item">
                    <div className="criteria-icon">
                      <Image
                        src="/images/icons/business.png"
                        alt="Business growth icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="criteria-text">
                      <h3>0-10%</h3>
                      <p>annual growth</p>
                    </div>
                  </div>

                  <div className="criteria-item">
                    <div className="criteria-icon">
                      <Image
                        src="/images/icons/padlock.png"
                        alt="Padlock icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="criteria-text">
                      <h3>Strong barriers</h3>
                      <p>to entry</p>
                    </div>
                  </div>

                  <div className="criteria-item">
                    <div className="criteria-icon">
                      <Image
                        src="/images/icons/stability.png"
                        alt="Stability icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="criteria-text">
                      <h3>Stable</h3>
                      <p>demand</p>
                    </div>
                  </div>

                  <div className="criteria-item">
                    <div className="criteria-icon">
                      <Image
                        src="/images/icons/leaf.png"
                        alt="Leaf icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="criteria-text">
                      <h3>Mature</h3>
                      <p>industry</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New England Map Section */}
        <section className="region-section">
          <div className="container">
            <div className="region-content">
              <div className="region-text">
                <h2>We Buy Businesses in New England</h2>
                <p>
                  Our focus on New England allows us to build deep relationships
                  within the community and provide hands-on support to the businesses
                  we acquire. We understand the unique characteristics of this region
                  and are committed to preserving the local identity of each business.
                </p>
                <ul className="region-states">
                  <li>Massachusetts</li>
                  <li>Connecticut</li>
                  <li>Rhode Island</li>
                  <li>New Hampshire</li>
                  <li>Vermont</li>
                  <li>Maine</li>
                </ul>
              </div>
              <div className="region-map">
                <Image
                  src="/images/new-england-map.png"
                  alt="New England Region Map"
                  width={600}
                  height={600}
                  className="map-image"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
