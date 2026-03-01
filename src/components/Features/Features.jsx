import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Clock, Users } from 'lucide-react'
import './Features.css'

const Features = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Quality Guaranteed',
      description: 'We engineer every product with precision, backed by automated testing, code reviews, and rigorous QA pipelines. Our commitment to reliability means software that performs flawlessly at scale.',
      side: 'left'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We run lean, agile sprints with transparent milestones so you always know where your product stands. Deadlines are a commitment, not a suggestion.',
      side: 'right'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our engineers, designers, and product strategists bring deep technical expertise across a wide range of modern stacks and platforms — all focused on building solutions that drive real impact.',
      side: 'left'
    }
  ]

   /*Variants allow you to define animation states and organise them by name. 
      They allow you to control animations 
       throughout a component tree by switching a single animate prop */
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
        <span className="features-label">Why Choose Us</span>
        <h2 className="features-title">
          L’innovation au service de chaque structure.
        </h2>
      </div>

      <div className="features-list">
        {features.map((feature, index) => {
          const Icon = feature.icon
          const variants = feature.side === 'left' ? leftVariants : rightVariants
          
          return (
            <motion.div 
              key={index}
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
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Features
