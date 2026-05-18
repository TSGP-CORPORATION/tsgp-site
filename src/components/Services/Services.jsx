import React from 'react'
import { motion as Motion } from 'framer-motion'
import { ShieldCheck, Cpu, BarChart3, Wrench } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import './Services.css'

const Services = () => {
  const { t } = useLanguage()

  const services = [
    { icon: ShieldCheck, ...t.services.cards[0] },
    { icon: Cpu, ...t.services.cards[1] },
    { icon: BarChart3, ...t.services.cards[2] },
    { icon: Wrench, ...t.services.cards[3] },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section className="services" id="services">
      <div className="services-header">
        <span className="services-label">{t.services.label}</span>
        <h2 className="services-title">{t.services.title}</h2>
        <p className="services-subtitle">{t.services.subtitle}</p>
      </div>

      <Motion.div
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service) => {
          const Icon = service.icon
          return (
            <Motion.div
              key={service.title}
              className="service-card"
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 30px rgba(0, 0, 0, 0.15)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="service-icon">
                <Icon size={40} strokeWidth={2} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </Motion.div>
          )
        })}
      </Motion.div>
    </section>
  )
}

export default Services
