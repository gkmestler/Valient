import React from 'react'

export default function Statistics() {
  const stats = [
    { value: '2022', label: 'Founded' },
    { value: '$3M+', label: 'In Revenue' },
    { value: '7', label: 'Young Founders' },
    { value: '20', label: 'Industry Expert Advisors' },
  ]

  return (
    <section className="statistics">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}