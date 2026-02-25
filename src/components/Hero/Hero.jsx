import React from 'react'
import { motion } from 'framer-motion'
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
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="hero-title"
          variants={itemVariants}
        >
          TECH FOR SOLUTIONS
          <span className="hero-subtitle-inline">General Solution Corporation</span>
        </motion.h1>
        
        <motion.p 
          className="hero-description"
          variants={itemVariants}
        >
          Trouver et déployer des solutions logicielles sécurisées afin de faciliter le travail et d’améliorer la performance des services des entreprises, pour un Cameroun meilleur.
        </motion.p>
        
        <motion.div 
          className="hero-cta-group"
          variants={itemVariants}
        >
          <motion.a 
            href="#contact" 
            className="hero-btn hero-btn-primary"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span>Get Started</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 4.16669L13.3333 10L7.5 15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
          
          <motion.a 
            href="#services" 
            className="hero-btn hero-btn-secondary"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Our Services
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
