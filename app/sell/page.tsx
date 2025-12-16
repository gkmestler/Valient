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
    reasonForSelling: '',
    timeline: '',
    additionalInfo: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your submission. We will be in touch shortly.')
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
                    >
                      <option value="">Select...</option>
                      <option value="under-500k">Under $500K</option>
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
                    >
                      <option value="">Select...</option>
                      <option value="1-5">1-5</option>
                      <option value="5-10">5-10</option>
                      <option value="10-25">10-25</option>
                      <option value="25-50">25-50</option>
                      <option value="50+">50+</option>
                    </select>
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="timeline">Selling Timeline</label>
                  <div className="select-wrapper">
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="">Select...</option>
                      <option value="asap">As soon as possible</option>
                      <option value="6-months">Within 6 months</option>
                      <option value="1-year">Within 1 year</option>
                      <option value="1-2-years">1-2 years</option>
                      <option value="exploring">Just exploring options</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-field form-field-full">
                <label htmlFor="reasonForSelling">Why are you considering selling?</label>
                <textarea
                  id="reasonForSelling"
                  name="reasonForSelling"
                  value={formData.reasonForSelling}
                  onChange={handleChange}
                  placeholder="Optional - Share as much or as little as you'd like"
                  rows={3}
                />
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
                <button type="submit" className="submit-btn">
                  Connect with Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
