import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import TestimonialCard from './TestimonialCard'
import './testimonials.css'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      text: "Working with this team was a great experience from start to finish. They delivered our school website on time, exactly as promised, and the quality of the work truly exceeded what we had in mind. They understood our vision and translated it into a clean, professional platform that represents our institution perfectly.",
      authorName: "Founder",
      authorRole: "Founder, New World Technology Vocational Training",
      authorImage: "https://lh3.googleusercontent.com/p/AF1QipOrwFtY46OyIMbwHvXqSDW4pFXhVlNYnYtp5J2A=s680-w680-h510-rw"
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
            <span className="testimonials-label">• TESTIMONIALS •</span>
            <h2 className="testimonials-title">
              Built On Trust, Proven<br />
              By Results
            </h2>
            <p className="testimonials-description">
              Don't just take our word for it. Hear from our satisfied clients who have 
              experienced the quality and professionalism that defines our work.
            </p>
            <button className="testimonials-cta-button">
              <span>WORK WITH US</span>
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="testimonials-right">
            <div className="testimonials-image-wrapper">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgUKvTXYnPfUo3RIYujNfQcEiIgP_EiJ0z9A&s" 
                alt="Construction professionals"
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
