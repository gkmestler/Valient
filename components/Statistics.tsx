import React from 'react'

export default function Statistics() {
  const stats = [
    { value: '2024', label: 'Founded' },
    { value: '$4M+', label: 'In Revenue' },
    { value: '9', label: 'Entrepreneurs' },
    { value: '7', label: 'Strategic Advisors' },
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