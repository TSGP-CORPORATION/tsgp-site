import React from 'react'
import { motion as Motion } from 'framer-motion'
import { ShieldCheck, Clock, Users } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import './Features.css'

const Features = () => {
  const { t } = useLanguage()

  const features = [
    { icon: ShieldCheck, side: 'left', ...t.features.items[0] },
    { icon: Clock, side: 'right', ...t.features.items[1] },
    { icon: Users, side: 'left', ...t.features.items[2] },
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
        <span className="features-label">{t.features.label}</span>
        <h2 className="features-title">{t.features.title}</h2>
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
