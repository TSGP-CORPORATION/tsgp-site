import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import TestimonialCard from './TestimonialCard'
import './testimonials.css'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      text: "Exceeded expectations, on time, within budget!",
      authorName: "Jane Doe",
      authorRole: "Property Developer",
      authorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      text: "Outstanding craftsmanship and attention to detail. Highly recommended!",
      authorName: "John Smith",
      authorRole: "Homeowner",
      authorImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      text: "Professional team that delivered beyond our expectations. Will work with them again!",
      authorName: "Sarah Johnson",
      authorRole: "Business Owner",
      authorImage: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
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
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" 
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
