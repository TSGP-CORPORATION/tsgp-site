import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import TestimonialCard from './TestimonialCard'
import './testimonials.css'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      text: "One real business owner saying they found more margin after 30 days is stronger than any advertising campaign. That is why TSGP is building StockYamo around pilots, proof, and measurable operational results.",
      authorName: "TSGP Strategy Note",
      authorRole: "StockYamo validation principle",
      authorImage: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&auto=format&fit=crop&q=80"
    }
  ]

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
            <span className="testimonials-label">• PROOF STRATEGY •</span>
            <h2 className="testimonials-title">
              Case Studies Before<br />
              Public Noise
            </h2>
            <p className="testimonials-description">
              TSGP will document pilot clients carefully: business size, initial pain, usage behaviour, and measurable change after 30 days. Proof comes before scale.
            </p>
            <a href="#contact" className="testimonials-cta-button">
              <span>Become a pilot</span>
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="testimonials-right">
            <div className="testimonials-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&auto=format&fit=crop&q=80"
                alt="Business owner reviewing operational results"
                className="testimonials-image"
              />
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
