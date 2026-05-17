import React from 'react'
import { motion as Motion } from 'framer-motion'
import { ShieldCheck, Database, BarChart3, Wrench } from 'lucide-react'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: ShieldCheck,
      title: 'Security-first software',
      description: 'We design business systems with cybersecurity, access control, and reliability built into the foundation instead of added as an afterthought.'
    },
    {
      icon: Database,
      title: 'StockYamo Core',
      description: 'A focused inventory and POS product for local shops, pharmacies, and distributors that need accurate stock, sales, and operational visibility.'
    },
    {
      icon: BarChart3,
      title: 'Operational intelligence',
      description: 'We turn daily business activity into useful information so owners can see losses, margins, movement, and performance without guesswork.'
    },
    {
      icon: Wrench,
      title: 'Maintenance and support',
      description: 'We support clients with onboarding, updates, monitoring, training, and recurring service plans that keep systems stable after launch.'
    }
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
        <span className="services-label">What We Build</span>
        <h2 className="services-title">
          Enterprise discipline for local business systems
        </h2>
        <p className="services-subtitle">
          TSGP combines engineering, cybersecurity, product strategy, and field insight to build software that solves real operational problems in Cameroon.
        </p>
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
