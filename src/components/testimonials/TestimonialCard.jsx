import React from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import './TestimonialCard.css'

const TestimonialCard = ({ testimonial, onPrev, onNext }) => {
  const { t } = useLanguage()

  return (
    <div className="testimonial-card">
      <div className="testimonial-quote-icon">
        <Quote size={40} />
      </div>

      <p className="testimonial-text">
        {testimonial.text}
      </p>

      <div className="testimonial-author">
        <img
          src={testimonial.authorImage}
          alt={testimonial.authorName}
          className="testimonial-author-image"
        />
        <div className="testimonial-author-info">
          <h4 className="testimonial-author-name">{testimonial.authorName}</h4>
          <p className="testimonial-author-role">{testimonial.authorRole}</p>
        </div>
      </div>

      <div className="testimonial-navigation">
        <button
          className="testimonial-nav-button"
          onClick={onPrev}
          aria-label={t.testimonials.previous}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="testimonial-nav-button"
          onClick={onNext}
          aria-label={t.testimonials.next}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}

export default TestimonialCard
