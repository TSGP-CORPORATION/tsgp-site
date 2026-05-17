import React from 'react'
import { motion as Motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    tap: {
      scale: 0.98
    }
  }

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <Motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Motion.h1
          className="hero-title"
          variants={itemVariants}
        >
          TSGP Corporation
          <span className="hero-subtitle-inline">Secure software for local organisations</span>
        </Motion.h1>

        <Motion.p
          className="hero-description"
          variants={itemVariants}
        >
          We build the digital backbone local organisations need to operate at enterprise standards. Our first focused product, StockYamo, helps shops, pharmacies, and distributors turn stock chaos into structured, real-time control.
        </Motion.p>

        <Motion.div
          className="hero-cta-group"
          variants={itemVariants}
        >
          <Motion.a
            href="#contact"
            className="hero-btn hero-btn-primary"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span>Book a StockYamo demo</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 4.16669L13.3333 10L7.5 15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Motion.a>

          <Motion.a
            href="#construction-services"
            className="hero-btn hero-btn-secondary"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Explore StockYamo
          </Motion.a>
        </Motion.div>
      </Motion.div>
    </section>
  )
}

export default Hero
