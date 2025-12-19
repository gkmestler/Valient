'use client'

import React, { useState } from 'react'

export default function QualifyPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    businessType: '',
    location: '',
    yearsInBusiness: '',
    annualRevenue: '',
    employees: '',
    additionalInfo: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        alert('Thank you for your submission. We will be in touch shortly.')
        setFormData({
          businessName: '',
          ownerName: '',
          email: '',
          phone: '',
          businessType: '',
          location: '',
          yearsInBusiness: '',
          annualRevenue: '',
          employees: '',
          additionalInfo: ''
        })
      } else {
        alert('Something went wrong. Please try again or email us directly.')
      }
    } catch (error) {
      alert('Something went wrong. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="qualify-page">
      <main className="qualify-main">
        <div className="container">
          <div className="qualify-header-text">
            <h1>Tell Us About Your Business</h1>
            <p className="qualify-subtext">
              Share only what you're comfortable sharing. Approximate numbers are great.
              This form simply helps us understand your business before we reach out privately.
              100% confidential.
            </p>
          </div>
          <div className="qualify-form-container">
            <form onSubmit={handleSubmit} className="qualify-form">
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="businessName">Business Name</label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Your business name"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="ownerName">Your Name</label>
                  <input
                    type="text"
                    id="ownerName"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 555-5555"
                    required
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="businessType">Type of Business</label>
                  <input
                    type="text"
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    placeholder="e.g., HVAC, Plumbing, Landscaping"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, State"
                    required
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="yearsInBusiness">Years in Business</label>
                  <div className="select-wrapper">
                    <select
                      id="yearsInBusiness"
                      name="yearsInBusiness"
                      value={formData.yearsInBusiness}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select...</option>
                      <option value="0-5">0-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10-20">10-20 years</option>
                      <option value="20+">20+ years</option>
                    </select>
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="annualRevenue">Approximate Annual Revenue</label>
                  <div className="select-wrapper">
                    <select
                      id="annualRevenue"
                      name="annualRevenue"
                      value={formData.annualRevenue}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select...</option>
                      <option value="under-100k">Under $100K</option>
                      <option value="100k-250k">$100K - $250K</option>
                      <option value="250k-500k">$250K - $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m-3m">$1M - $3M</option>
                      <option value="3m-5m">$3M - $5M</option>
                      <option value="5m-10m">$5M - $10M</option>
                      <option value="10m+">$10M+</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="employees">Number of Employees</label>
                  <div className="select-wrapper">
                    <select
                      id="employees"
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select...</option>
                      <option value="1">1 (Just me)</option>
                      <option value="2-3">2-3</option>
                      <option value="4-5">4-5</option>
                      <option value="5-10">5-10</option>
                      <option value="10-25">10-25</option>
                      <option value="25-50">25-50</option>
                      <option value="50+">50+</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-field form-field-full">
                <label htmlFor="additionalInfo">Anything else you'd like us to know?</label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Optional"
                  rows={3}
                />
              </div>

              <div className="form-submit">
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Connect with Us'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
