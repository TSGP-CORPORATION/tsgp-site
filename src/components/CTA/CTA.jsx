import React from 'react'
import { motion } from 'framer-motion'
import './CTA.css'

const CTA = () => {
  const containerVariants = {
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
    <section className="cta" id="contact">
      <div className="cta-overlay"></div>
      <motion.div 
        className="cta-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="cta-title">
          Ready to Build Your Dream Project?
        </h2>
        <p className="cta-description">
          Let's transform your vision into reality. Our team of experts is ready to 
          discuss your project requirements and provide a comprehensive solution.
        </p>
        <motion.a 
          href="#contact" 
          className="cta-button"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <span>Get Your Free Quote</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 4.16669L13.3333 10L7.5 15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>
        
        <div className="cta-contact-info">
          <div className="cta-contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92V19.92C22 20.4728 21.5523 20.9205 21 20.9205H18C7.50659 20.9205 2 15.4139 2 4.92053V2.92053C2 2.36824 2.44772 1.92053 3 1.92053H6C6.55228 1.92053 7 2.36824 7 2.92053V6.92053C7 7.47281 6.55228 7.92053 6 7.92053H4C4 13.4434 8.47715 17.9205 14 17.9205V15.9205C14 15.3682 14.4477 14.9205 15 14.9205H19C19.5523 14.9205 20 15.3682 20 15.9205V16.92C20 16.92 21 16.92 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>+237 671557511</span>
          </div>
          
          <div className="cta-contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>tsgp-corporation@gmail.com</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default CTA
