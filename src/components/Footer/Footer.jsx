import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-about">
          <div className="footer-logo">
            <img src="/53c0d178-b698-4c51-bc93-229132f6fc51 - Modifié.png" alt="TSGP Corporation Logo" className="footer-logo-img" />
          </div>
          <p className="footer-description">
            Building excellence. We transform visions into reality through 
            innovative construction solutions and unwavering commitment to quality.
          </p>
        </div>

        <div className="footer-section footer-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
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
              <span>tsgp-corporation@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="footer-section footer-social">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-social-icons">
            <a href="#" className="footer-social-icon" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
            
            <a href="#" className="footer-social-icon" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82071 5.55057 1.57882 5.98541 1.46 6.46C1.14521 8.20556 0.991228 9.97631 1 11.75C0.988771 13.537 1.14277 15.3213 1.46 17.08C1.59096 17.5398 1.83831 17.9581 2.17823 18.2945C2.51815 18.6308 2.93884 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8572 8.1787 22.54 6.42Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M9.75 15.02L15.5 11.75L9.75 8.48V15.02Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
            
            <a href="#" className="footer-social-icon" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.28451C14.0247 3.61179 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
            
            <a href="#" className="footer-social-icon" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} TSGP Corporation. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer