import React, { useState } from 'react'
import FAQItem from './FAQItem'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How long does the development of a  project usually take?",
      answer: "The timeline for a the development of a  project varies depending on its size and complexity. A typical residential project can take anywhere from 1 to 3 months, while larger commercial projects may take 6 months or more. We provide detailed timelines during the planning phase and keep you updated throughout the entire process."
    },
    {
      question: "Do I need permits for my project?",
      answer: "Most  projects require permits from local authorities to ensure compliance with building codes and safety regulations. Our team handles all permit applications and documentation on your behalf, making the process seamless and stress-free. We'll guide you through every requirement specific to your project and location."
    },
    {
      question: "What Language do you use?",
      answer: "We use only high-quality language from trusted suppliers. Our selection process prioritizes durability, sustainability, and cost-effectiveness. We're happy to discuss laguage  options with you and can accommodate specific preferences or requirements you may have for your project."
    },
    {
      question: "Can I make changes after Development starts?",
      answer: "While we encourage finalizing all decisions before Development begins, we understand that changes may be necessary. Minor modifications can often be accommodated, though they may affect the timeline and budget. We'll work with you to assess the feasibility and impact of any requested changes and provide transparent communication throughout."
    },
    {
      question: "How much will my construction project cost?",
      answer: "Project costs vary widely based on size, materials, complexity, and location. We provide detailed, itemized quotes after an initial consultation and site assessment. Our transparent pricing includes all labor, materials, and permits. We also offer flexible payment plans and will work within your budget to deliver the best possible results."
    }
  ]

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-hero">
          <h1 className="faq-hero-title">Got Questions? We've Got You Covered</h1>
          <p className="faq-hero-subtitle">
            From project planning to final touches, we've answered the most common questions 
            to help you make informed decisions.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
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
