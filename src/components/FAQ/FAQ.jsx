import React, { useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import FAQItem from './FAQItem'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const { t } = useLanguage()

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-hero">
          <h1 className="faq-hero-title">{t.faq.title}</h1>
          <p className="faq-hero-subtitle">{t.faq.subtitle}</p>
        </div>

        <div className="faq-list">
          {t.faq.items.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
