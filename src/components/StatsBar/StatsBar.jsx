import React, { useState, useEffect, useRef } from 'react'
import './StatsBar.css'

const StatsBar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef(null)

  const stats = [
    { value: 99, suffix: '%', label: 'Client Satisfaction' },
    { value: 2, suffix: '', label: 'Successful Projects' },
    { value: 1, suffix: 'k', label: 'Happy Clients' },
    { value: 1, suffix: '+', label: 'Years of Experience' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const Counter = ({ end, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      let startTime
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        setCount(Math.floor(progress * end))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, [isVisible, end, duration])

    return <span>{count}{suffix}</span>
  }

  return (
    <section className="stats-bar" ref={statsRef}>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-value">
              <Counter end={stat.value} suffix={stat.suffix} />
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsBar
