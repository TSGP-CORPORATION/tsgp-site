import React from 'react'
import { ArrowRight } from 'lucide-react'
import './ServiceDetails.css'

const ServiceDetails = ({ activeService }) => {
  const serviceContent = {
    stockyamo: {
      title: 'StockYamo Core',
      description: 'StockYamo does not just organise stock. It gives shop owners, pharmacies, and distributors the information and access that big businesses already have: real-time stock control, sales visibility, and smarter decisions.',
      services: [
        'Inventory and sales control',
        'Stock movement visibility',
        'Receipt and product workflow foundation',
        'Simple onboarding for local teams',
        'Core SKU first, expansion later',
        'Monthly or annual license options'
      ],
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=900&auto=format&fit=crop&q=80'
    },
    field: {
      title: 'Field Sales in Yaounde',
      description: 'Our channel is proximity. We sell by showing the product inside the real business environment: markets, pharmacies, wholesalers, and high-volume retail zones where stock problems are visible every day.',
      services: [
        'Pharmacies in Bastos, Essos, and Melen',
        'Traders around Marche Mokolo',
        'Mini-markets and wholesalers',
        'Live demos using client products',
        'Objection tracking from real conversations',
        '20 validation visits in the first 30 days'
      ],
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&auto=format&fit=crop&q=80'
    },
    funnel: {
      title: 'Education to WhatsApp Demo Funnel',
      description: 'TSGP content must educate, filter, and pre-sell. By the time a prospect reaches out, they should already understand the problem, the category, and why StockYamo is relevant.',
      services: [
        'Layer 1: educate on stock loss and revenue leakage',
        'Layer 2: filter serious operators by business complexity',
        'Layer 3: pre-sell with screen demos and proof',
        'WhatsApp Business as the main conversion channel',
        'Conversational posts from real pain points',
        'No paid ads until proof exists'
      ],
      image: 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?w=900&auto=format&fit=crop&q=80'
    },
    security: {
      title: 'Security-First Experience',
      description: 'In B2B, trust is part of the product. TSGP makes clients feel safe and in control through structured onboarding, clear communication, reliable UI, and security-minded delivery.',
      services: [
        'Structured onboarding documentation',
        'Security-first architecture',
        'Defined support expectations',
        'Regular implementation progress reports',
        'Reliable interfaces that feel enterprise-grade',
        'Cybersecurity monitoring as a support path'
      ],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&auto=format&fit=crop&q=80'
    },
    retention: {
      title: 'Recurring Support Model',
      description: 'TSGP is built for predictable, long-term value, not one-time software handovers. StockYamo opens the path to monthly retainers, support tiers, software licenses, and bundled onboarding.',
      services: [
        'Monthly maintenance retainers',
        'Annual software licenses',
        'Basic, Standard, and Enterprise support tiers',
        'Bundled onboarding plus 12-month support',
        'Updates and performance monitoring',
        'Client retention through measurable value'
      ],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&auto=format&fit=crop&q=80'
    },
    validation: {
      title: 'Pilot Results Before Public Launch',
      description: 'The first StockYamo clients are more than revenue. They are case studies. TSGP will validate with 2-3 pilot businesses, document measurable results, then use proof to close paying clients.',
      services: [
        '2-3 pilot businesses in Yaounde',
        '30-day free or discounted access',
        'Observe real usage weekly',
        'Document one result per pilot',
        'Create one-page case studies',
        'Close first 3 paying clients after proof'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80'
    }
  }

  const content = serviceContent[activeService] || serviceContent.stockyamo

  return (
    <div className="service-details">
      <div className="service-main-image">
        <img src={content.image} alt={content.title} />
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

      <a href="#contact" className="service-cta-button">
        <span>Request a demo</span>
        <ArrowRight size={20} />
      </a>
    </div>
  )
}

export default ServiceDetails
