import React, { useState, useEffect, useRef } from 'react'
import './StatsBar.css'

const Counter = ({ end, suffix, duration = 2000, isVisible }) => {
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

const StatsBar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef(null)

  const stats = [
    { value: 1, suffix: '', label: 'Flagship Product' },
    { value: 3, suffix: '', label: 'Pilot Goal' },
    { value: 20, suffix: '', label: 'Field Visits' },
    { value: 90, suffix: '', label: 'Day Plan' }
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

  return (
    <section className="stats-bar" ref={statsRef}>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-value">
              <Counter end={stat.value} suffix={stat.suffix} isVisible={isVisible} />
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsBar
