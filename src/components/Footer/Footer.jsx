import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-about">
          <div className="footer-logo">
            <img src="/53c0d178-b698-4c51-bc93-229132f6fc51 - ModifiÃ©.png" alt="TSGP Corporation Logo" className="footer-logo-img" />
          </div>
          <p className="footer-description">
            TSGP Corporation builds secure, scalable B2B software for local organisations that need reliable digital systems and practical operational intelligence.
          </p>
        </div>

        <div className="footer-section footer-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Who We Are</a></li>
            <li><a href="#services">Capabilities</a></li>
            <li><a href="#construction-services">StockYamo</a></li>
            <li><a href="#contact">Demo Request</a></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h3 className="footer-heading">Contact Info</h3>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92V19.92C22 20.4728 21.5523 20.9205 21 20.9205H18C7.50659 20.9205 2 15.4139 2 4.92053V2.92053C2 2.36824 2.44772 1.92053 3 1.92053H6C6.55228 1.92053 7 2.36824 7 2.92053V6.92053C7 7.47281 6.55228 7.92053 6 7.92053H4C4 13.4434 8.47715 17.9205 14 17.9205V15.9205C14 15.3682 14.4477 14.9205 15 14.9205H19C19.5523 14.9205 20 15.3682 20 15.9205V16.92C20 16.92 21 16.92 22 16.92Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>+237 699 585 467</span>
            </div>

            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>info@tsgpcorporation.com</span>
            </div>
          </div>
        </div>

        <div className="footer-section footer-social">
          <h3 className="footer-heading">Focus</h3>
          <p className="footer-description">
            StockYamo Core. Field sales in Yaounde. WhatsApp demos. Pilot proof before public launch.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} TSGP Corporation. Secure software for local organisations.
        </p>
      </div>
    </footer>
  )
}

export default Footer
