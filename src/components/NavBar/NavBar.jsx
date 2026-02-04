import React, { useState, useEffect } from 'react'
import './NavBar.css'

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    closeMobileMenu()
  }

  // Close mobile menu on window resize if it becomes desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        closeMobileMenu()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <div className="nav-bar">
        <div className="nav-bar-left">
          <div className="logo-container">
            {/* Asterisk/Star logo matching company branding */}
            <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Center vertical bar */}
              <rect x="42" y="10" width="16" height="80" fill="white"/>
              {/* Center horizontal bar */}
              <rect x="10" y="42" width="80" height="16" fill="white"/>
              {/* Diagonal bar (top-left to bottom-right) */}
              <rect x="42" y="10" width="16" height="80" fill="white" transform="rotate(45 50 50)"/>
              {/* Diagonal bar (top-right to bottom-left) */}
              <rect x="42" y="10" width="16" height="80" fill="white" transform="rotate(-45 50 50)"/>
            </svg>
            <span className="company-name">Tsgp Corporation</span>
          </div>
        </div>
        
        {/* Mobile Menu Toggle Button */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className={`nav-bar-right ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="menus">
            <a href="#home" onClick={handleLinkClick}>HOME</a>
            <span className="separator">/</span>
            <a href="#about" onClick={handleLinkClick}>ABOUT</a>
            <span className="separator">/</span>
            <a href="#services" onClick={handleLinkClick}>SERVICES</a>
            <span className="separator">/</span>
            <a href="#projects" onClick={handleLinkClick}>PROJECTS</a>
            <span className="separator">/</span>
            <a href="#contact" onClick={handleLinkClick}>CONTACT</a>
          </div>
          
          <button className="get-quote-btn" onClick={handleLinkClick}>
            <span>GET A QUOTE</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      <div 
        className={`nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>
    </>
  )
}

export default NavBar