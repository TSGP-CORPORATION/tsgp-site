import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import TestimonialCard from './TestimonialCard'
import './testimonials.css'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()

  const testimonials = t.testimonials.items.map((testimonial) => ({
    ...testimonial,
    authorImage: 'https://lh3.googleusercontent.com/p/AF1QipOrwFtY46OyIMbwHvXqSDW4pFXhVlNYnYtp5J2A=s680-w680-h510-rw',
  }))

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-content">
          <div className="testimonials-left">
            <span className="testimonials-label">• {t.testimonials.label} •</span>
            <h2 className="testimonials-title">
              {t.testimonials.titleLine1}<br />
              {t.testimonials.titleLine2}
            </h2>
            <p className="testimonials-description">{t.testimonials.description}</p>
            <button className="testimonials-cta-button">
              <span>{t.testimonials.cta}</span>
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="testimonials-right">
            <div className="testimonials-image-wrapper">
              <div className="testimonials-visual">
                <span className="testimonials-visual-quote">"</span>
              </div>
              <TestimonialCard
                testimonial={testimonials[currentIndex]}
                onPrev={handlePrev}
                onNext={handleNext}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
