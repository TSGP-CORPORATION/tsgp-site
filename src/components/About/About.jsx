import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
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
  const { t } = useLanguage()

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

  const Counter = ({ end, suffix = '', duration = 2000, delay = 0 }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!countersVisible) return

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
    }, [countersVisible, end, duration, delay])

    return <span>{count}{suffix}</span>
  }

  return (
    <section className="about-hero" id="about">
      <div className="about-hero-container">
        <div className="about-hero-content">
          <div className="about-hero-left">
            <span className="about-label">« {t.about.label} »</span>
            <h1 className="about-hero-title">{t.about.title}</h1>
            <p className="about-hero-text">{t.about.text}</p>
            <div className="about-signature">
              <p className="signature-name">Tinfeh & Wilfried</p>
              <p className="signature-title">{t.about.founders}</p>
            </div>
            <button className="about-cta-button">
              <span>{t.about.cta}</span>
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="about-hero-right">
            <div className="about-image-wrapper">
              <img
                src="/WhatsApp Image 2026-03-01 at 23.02.29.jpeg"
                alt={t.about.imageAlt}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about-stats-bar" ref={statsRef}>
        <div className="about-stats-container">
          {t.about.stats.map((label, index) => {
            const stats = [
              { end: 100, suffix: '%', delay: 0 },
              { end: 1, suffix: '+', delay: 100 },
              { end: 2, suffix: '', delay: 200 },
              { end: 1, suffix: '+', delay: 300 },
            ]
            const stat = stats[index]

            return (
              <div className="about-stat-item" key={label}>
                <div className="about-stat-number">
                  <Counter end={stat.end} suffix={stat.suffix} delay={stat.delay} />
                </div>
                <div className="about-stat-label">{label}</div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="about-team">
        <div className="about-team-container">
          <span className="about-label">« {t.about.teamLabel} »</span>
          <h2 className="about-team-title">{t.about.teamTitle}</h2>
          <p className="about-team-subtitle">{t.about.teamSubtitle}</p>
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
                <span className="about-team-card-role">{t.about.roles.ceo}</span>
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
                <span className="about-team-card-role">{t.about.roles.cto}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About