import React from 'react'
import { ArrowRight } from 'lucide-react'
import './ServiceDetails.css'

const ServiceDetails = ({ activeService }) => {
  const serviceContent = {
    software: {
      title: 'Secure Software Solutions',
      description: 'We develop and deploy robust, secure software systems tailored to your business needs. Our solutions are built with security-first architecture to protect your data, streamline workflows, and give your teams the tools they need to operate at peak performance.',
      services: [
        'Custom Software Development',
        'Security Auditing',
        'API Development & Integration',
        'Cloud-Based Applications',
        'Database Architecture',
        'Software Testing & QA'
      ],
      images: [
        'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80'
      ]
    },
    digital: {
      title: 'Digital Transformation',
      description: 'We guide SMEs through every step of their digital journey — from strategy and planning to full deployment. We automate manual processes, modernise legacy systems, and equip your teams with digital tools that unlock new levels of productivity and competitiveness.',
      services: [
        'Process Automation',
        'Legacy System Modernisation',
        'Workflow Digitisation',
        'ERP & CRM Deployment',
        'Change Management Support',
        'Employee Digital Training'
      ],
      images: [
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80'
      ]
    },
    analytics: {
      title: 'Performance & Analytics',
      description: 'Turn your raw data into actionable intelligence. We build smart dashboards and reporting systems that give you real-time visibility into your production, sales, and service metrics — so you can make better decisions faster and continuously improve performance.',
      services: [
        'KPI Dashboard Design',
        'Real-Time Reporting',
        'Data Pipeline Setup',
        'Business Intelligence Tools',
        'Predictive Analytics',
        'Excel & BI Integration'
      ],
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80'
      ]
    },
    integration: {
      title: 'System Integration',
      description: 'We connect your existing tools, platforms, and software into a unified, seamless ecosystem. Whether it\'s linking your CRM to your accounting software or syncing field operations with head office — we eliminate data silos and make your systems work in harmony.',
      services: [
        'API & Third-Party Integrations',
        'ERP & CRM Linking',
        'Cross-Platform Sync',
        'Data Migration',
        'Multi-System Orchestration',
        'Integration Testing'
      ],
      images: [
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80'
      ]
    },
    support: {
      title: 'Support & Maintenance',
      description: 'Our dedicated support team ensures your software stays up, secure, and up to date. We provide proactive monitoring, rapid incident response, and regular maintenance cycles so that your business never loses momentum due to technical issues.',
      services: [
        '24/7 Technical Support',
        'Bug Fixes & Patches',
        'System Health Monitoring',
        'Software Updates',
        'User Support & Helpdesk',
        'Incident Management'
      ],
      images: [
        'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&auto=format&fit=crop&q=80'
      ]
    },
    consulting: {
      title: 'IT Strategy & Consulting',
      description: 'Not sure where to start? Our experts work closely with you to understand your business challenges, assess your current IT landscape, and build a clear roadmap to technology that fits your goals and budget — helping you invest smartly and grow confidently.',
      services: [
        'IT Needs Assessment',
        'Technology Roadmapping',
        'Budget Optimisation',
        'Vendor Selection',
        'Risk & Compliance Review',
        'Digital Strategy Planning'
      ],
      images: [
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80'
      ]
    }
  }

  const content = serviceContent[activeService]

  return (
    <div className="service-details">
      <div className="service-main-image">
        <img src={content.images[0]} alt={content.title} />
      </div>
      
      <h2 className="service-details-title">{content.title}</h2>
      <p className="service-details-description">{content.description}</p>

      <div className="service-list">
        {content.services.map((service, index) => (
          <div key={index} className="service-list-item">
            <span className="service-bullet">▸</span>
            <span>{service}</span>
          </div>
        ))}
      </div>

      <button className="service-cta-button">
        <span>READ MORE</span>
        <ArrowRight size={20} />
      </button>
    </div>
  )
}

export default ServiceDetails
