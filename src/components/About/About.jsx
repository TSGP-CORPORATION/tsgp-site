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
              Our unwavering commitment to excellence drives every project we undertake. 
              From concept to completion, we meticulously craft solutions that embody 
              quality, precision and innovation.
            </p>
            <div className="about-signature">
              <p className="signature-name">Tinfeh Oliver and Tiojio Wilfried</p>
              <p className="signature-title">Company CEO</p>
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
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg" 
                alt="Construction team reviewing blueprints" 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about-stats-bar" ref={statsRef}>
        <div className="about-stats-container">
          <div className="about-stat-item">
            <div className="about-stat-number">
              <Counter end={99} suffix="%" delay={0} />
            </div>
            <div className="about-stat-label">Client Satisfaction</div>
          </div>
          <div className="about-stat-item">
            <div className="about-stat-number">
              <Counter end={800} suffix="+" delay={100} />
            </div>
            <div className="about-stat-label">Successful Projects</div>
          </div>
          <div className="about-stat-item">
            <div className="about-stat-number">
              <Counter end={32} suffix="k" delay={200} />
            </div>
            <div className="about-stat-label">Happy Clients</div>
          </div>
          <div className="about-stat-item">
            <div className="about-stat-number">
              <Counter end={26} suffix="+" delay={300} />
            </div>
            <div className="about-stat-label">Years of Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
