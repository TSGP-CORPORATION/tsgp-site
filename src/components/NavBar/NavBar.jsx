import React, { useState, useEffect } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import './NavBar.css'

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, languages, t } = useLanguage()

  const navLinks = [
    { href: '#home', label: t.nav.links.home },
    { href: '#about', label: t.nav.links.about },
    { href: '#services', label: t.nav.links.services },
    { href: '#projects', label: t.nav.links.projects },
    { href: '#contact', label: t.nav.links.contact },
  ]

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
            <img src="/53c0d178-b698-4c51-bc93-229132f6fc51 - Modifié.png" alt="" />

          </div>
        </div>
        
        {/* Mobile Menu Toggle Button */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={t.nav.menuLabel}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className={`nav-bar-right ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="menus">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.href}>
                <a href={link.href} onClick={handleLinkClick}>{link.label}</a>
                {index < navLinks.length - 1 && <span className="separator">/</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="language-switcher" aria-label={t.nav.languageLabel}>
            {Object.keys(languages).map((lang) => (
              <button
                key={lang}
                className={`language-button ${language === lang ? 'active' : ''}`}
                type="button"
                onClick={() => setLanguage(lang)}
                aria-pressed={language === lang}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          
          <button className="get-quote-btn" onClick={handleLinkClick}>
            <span>{t.nav.quote}</span>
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
