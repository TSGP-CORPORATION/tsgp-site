import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import './About.css'

const Counter = ({ end, suffix = '', duration = 2000, delay = 0, isVisible }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now() + delay
    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime

      if (elapsed < 0) {
        requestAnimationFrame(animate)
        return
      }

      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)

      setCount(Math.floor(easeOut * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration, delay])

  return <span>{count}{suffix}</span>
}

const About = () => {
  const [countersVisible, setCountersVisible] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { end: 1, suffix: '', label: 'Focused flagship product', delay: 0 },
    { end: 3, suffix: '', label: 'Pilot-client target', delay: 100 },
    { end: 20, suffix: '', label: 'Yaounde validation visits', delay: 200 },
    { end: 90, suffix: '', label: 'Day execution cycle', delay: 300 },
  ]

  return (
    <section className="about-hero" id="about">
      <div className="about-hero-container">
        <div className="about-hero-content">
          <div className="about-hero-left">
            <span className="about-label">« Who We Are »</span>
            <h1 className="about-hero-title">
              A security-first B2B software company built for local business reality
            </h1>
            <p className="about-hero-text">
              TSGP Corporation builds intelligent, scalable software that helps organisations operate more efficiently, securely, and strategically. We build, secure, market, and document our own products in-house so clients get systems shaped by real field needs, not generic templates.
            </p>
            <div className="about-signature">
              <p className="signature-name">Security. Reliability. Local relevance.</p>
              <p className="signature-title">Our operating standard</p>
            </div>
            <a href="#contact" className="about-cta-button">
              <span>Talk to TSGP</span>
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="about-hero-right">
            <div className="about-image-frame"></div>
            <div className="about-image-wrapper">
              <img
                src="/WhatsApp Image 2026-03-01 at 23.02.29.jpeg"
                alt="TSGP team building secure business software"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about-stats-bar" ref={statsRef}>
        <div className="about-stats-container">
          {stats.map((stat) => (
            <div className="about-stat-item" key={stat.label}>
              <div className="about-stat-number">
                <Counter
                  end={stat.end}
                  suffix={stat.suffix}
                  delay={stat.delay}
                  isVisible={countersVisible}
                />
              </div>
              <div className="about-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-team">
        <div className="about-team-container">
          <span className="about-label">« Leadership »</span>
          <h2 className="about-team-title">Builders behind the product</h2>
          <p className="about-team-subtitle">Engineering, cybersecurity, field sales, marketing, and documentation working from one product vision.</p>
          <div className="about-team-grid">
            <div className="about-team-card">
              <div className="about-team-card-image-wrapper">
                <img
                  src="/WhatsApp Image 2026-03-01 at 22.14.48.jpeg"
                  alt="Tiojio Wilfried - CEO"
                  className="about-team-card-image"
                />
                <div className="about-team-card-overlay">
                  <div className="about-team-card-accent"></div>
                </div>
              </div>
              <div className="about-team-card-info">
                <h3 className="about-team-card-name">Tiojio Wilfried</h3>
                <span className="about-team-card-role">Chief Executive Officer</span>
              </div>
            </div>

            <div className="about-team-card">
              <div className="about-team-card-image-wrapper">
                <img
                  src="/WhatsApp Image 2026-03-01 at 22.14.47.jpeg"
                  alt="Tinfeh Oliver - CTO"
                  className="about-team-card-image"
                />
                <div className="about-team-card-overlay">
                  <div className="about-team-card-accent"></div>
                </div>
              </div>
              <div className="about-team-card-info">
                <h3 className="about-team-card-name">Tinfeh Oliver</h3>
                <span className="about-team-card-role">Chief Technology Officer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
