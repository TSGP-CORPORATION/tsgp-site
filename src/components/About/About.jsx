import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import './About.css'

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
            <span className="about-label">« ABOUT US »</span>
            <h1 className="about-hero-title">
              Focused On Excellence In Every Project
            </h1>
            <p className="about-hero-text">
              We are a passionate tech company dedicated to building modern digital solutions. 
              From concept to deployment, we craft products that are fast, beautiful, and built to scale — 
              driven by a relentless pursuit of quality and innovation.
            </p>
            <div className="about-signature">
              <p className="signature-name">Tinfeh & Wilfried</p>
              <p className="signature-title">Founders</p>
            </div>
            <button className="about-cta-button">
              <span>CONTACT US</span>
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="about-hero-right">
            <div className="about-image-frame"></div>
            <div className="about-image-wrapper">
              <img 
                src="/WhatsApp Image 2026-03-01 at 23.02.29.jpeg" 
                alt="Tech team collaborating" 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about-stats-bar" ref={statsRef}>
        <div className="about-stats-container">
          <div className="about-stat-item">
            <div className="about-stat-number">
              <Counter end={100} suffix="%" delay={0} />
            </div>
            <div className="about-stat-label">Client Satisfaction</div>
          </div>
          <div className="about-stat-item">
            <div className="about-stat-number">
              <Counter end={1} suffix="+" delay={100} />
            </div>
            <div className="about-stat-label">Successful Projects</div>
          </div>
          <div className="about-stat-item">
            <div className="about-stat-number">
              <Counter end={2} suffix="" delay={200} />
            </div>
            <div className="about-stat-label">Expert Developers</div>
          </div>
          <div className="about-stat-item">
            <div className="about-stat-number">
              <Counter end={1} suffix="+" delay={300} />
            </div>
            <div className="about-stat-label">Years of Experience</div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="about-team">
        <div className="about-team-container">
          <span className="about-label">« THE TEAM »</span>
          <h2 className="about-team-title">The Minds Behind The Work</h2>
          <p className="about-team-subtitle">Two builders, one vision — crafting digital experiences that matter.</p>
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
