import React, { useState } from 'react'
import FAQItem from './FAQItem'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What is StockYamo?',
      answer: 'StockYamo is an inventory and sales control product for local shops, pharmacies, mini-markets, and distributors that need clearer information about stock, sales, losses, and margins.'
    },
    {
      question: 'Who is StockYamo built for first?',
      answer: 'The first target users are businesses in Yaounde that manage physical products: pharmacies, retail shops, wholesalers, and businesses with more than one location or too much stock activity for paper records.'
    },
    {
      question: 'Why is TSGP focusing on one product?',
      answer: 'TSGP can build across many software categories, but market traction needs focus. StockYamo Core is the first product to validate deeply, generate recurring revenue, and produce real case studies before the company expands.'
    },
    {
      question: 'Do you offer pilot access?',
      answer: 'Yes. The current go-to-market plan is to work with a small number of pilot businesses, observe real usage, document results, and improve the product before wider public launch.'
    },
    {
      question: 'How does TSGP support clients after setup?',
      answer: 'TSGP is moving toward recurring support through onboarding, maintenance, updates, cybersecurity monitoring, and clear support tiers instead of one-time software delivery.'
    }
  ]

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-hero">
          <h1 className="faq-hero-title">Questions buyers ask before a demo</h1>
          <p className="faq-hero-subtitle">
            StockYamo is built to make inventory control practical for local businesses, not complicated for the people who use it daily.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
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
