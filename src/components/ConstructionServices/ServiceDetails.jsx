import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import './ServiceDetails.css'

const serviceImages = {
  software: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80',
  digital: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80',
  analytics: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
  integration: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
  support: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&auto=format&fit=crop&q=80',
  consulting: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80',
}

const ServiceDetails = ({ activeService }) => {
  const { t } = useLanguage()
  const content = t.solutions.details[activeService] || t.solutions.details.software
  const image = serviceImages[activeService] || serviceImages.software

  return (
    <div className="service-details">
      <div className="service-main-image">
        <img src={image} alt={content.title} />
      </div>

      <h2 className="service-details-title">{content.title}</h2>
      <p className="service-details-description">{content.description}</p>

      <div className="service-list">
        {content.services.map((service) => (
          <div key={service} className="service-list-item">
            <span className="service-bullet">▸</span>
            <span>{service}</span>
          </div>
        ))}
      </div>

      <button className="service-cta-button">
        <span>{t.solutions.readMore}</span>
        <ArrowRight size={20} />
      </button>
    </div>
  )
}

export default ServiceDetails
