import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Cpu, BarChart3, Wrench } from 'lucide-react'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: ShieldCheck,
      title: 'Secure Software Solutions',
      description: 'We develop and deploy robust, secure software tailored to protect your business data and streamline your operations for maximum efficiency.'
    },
    {
      icon: Cpu,
      title: 'Digital Transformation',
      description: 'End-to-end support for SMEs stepping into the digital era — from process automation to full modernisation of existing systems.'
    },
    {
      icon: BarChart3,
      title: 'Performance & Analytics',
      description: 'Smart dashboards and analytical tools to measure, track and continuously improve the performance of your services and production in real time.'
    },
    {
      icon: Wrench,
      title: 'Support & Maintenance',
      description: 'Ongoing technical assistance, regular updates and responsive support to guarantee the availability and reliability of your solutions.'
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
        <span className="services-label">Our Services</span>
        <h2 className="services-title">
          Comprehensive Tech Solutions
        </h2>
        <p className="services-subtitle">
          We find and deploy secure software solutions to streamline work and improve the performance of businesses — for a better Cameroon.
        </p>
      </div>

      <motion.div 
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div 
              key={index}
              className="service-card"
              /*Variants allow you to define animation states and organise them by name. 
              They allow you to control animations 
              throughout a component tree by switching a single animate prop */
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
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

export default Services
