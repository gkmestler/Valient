import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            We Buy and Grow<br />
            <span className="italic">Essential Service Businesses</span><br />
            across New England
          </h1>
          <p>
            Sell your business to the next generation of
            entrepreneurs dedicated to preserving your legacy and scaling
            what you have built.
          </p>
          <a href="/sell" className="hero-cta-button">
            See if we're a fit
          </a>
        </div>
      </div>
    </section>
  )
}