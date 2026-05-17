import React from 'react'
import { motion as Motion } from 'framer-motion'
import { ShieldCheck, Clock, Users } from 'lucide-react'
import './Features.css'

const Features = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Clients feel safe and in control',
      description: 'We make security visible through clear onboarding, progress reporting, stable interfaces, and support expectations clients understand before work begins.',
      side: 'left'
    },
    {
      icon: Clock,
      title: 'A disciplined 90-day launch rhythm',
      description: 'Validate in the field, launch with pilots, then convert with case studies. No noise, no guessing, just a repeatable path from conversation to paying client.',
      side: 'right'
    },
    {
      icon: Users,
      title: 'Built close to the market',
      description: 'StockYamo is shaped by real shops, pharmacies, and distributors in Yaounde, using the language, objections, and workflows business owners already live with.',
      side: 'left'
    }
  ]

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section className="features">
      <div className="features-header">
        <span className="features-label">Why This Works</span>
        <h2 className="features-title">
          Systems sustained over time beat miracles.
        </h2>
      </div>

      <div className="features-list">
        {features.map((feature) => {
          const Icon = feature.icon
          const variants = feature.side === 'left' ? leftVariants : rightVariants

          return (
            <Motion.div
              key={feature.title}
              className={`feature-row feature-row-${feature.side}`}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  <Icon size={48} strokeWidth={2} />
                </div>
              </div>

              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </Motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Features
