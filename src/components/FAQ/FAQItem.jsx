import React, { useRef, useEffect } from 'react'
import { Plus } from 'lucide-react'
import './FAQItem.css'

const FAQItem = ({ question, answer, isOpen, onToggle, index }) => {
  const contentRef = useRef(null)

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen 
        ? `${contentRef.current.scrollHeight}px` 
        : '0px'
    }
  }, [isOpen])

  return (
    <div 
      className={`faq-item ${isOpen ? 'open' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <button 
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="faq-question-text">{question}</span>
        <div className="faq-toggle-icon">
          <Plus size={24} />
        </div>
      </button>
      
      <div 
        ref={contentRef}
        id={`faq-answer-${index}`}
        className="faq-answer-wrapper"
      >
        <div className="faq-answer">
          {answer}
        </div>
      </div>
    </div>
  )
}

export default FAQItem
