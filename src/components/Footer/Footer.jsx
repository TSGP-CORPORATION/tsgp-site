import React from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import './Footer.css'

const Footer = () => {
  const { t } = useLanguage()

  const links = [
    { href: '#home', label: t.nav.links.home },
    { href: '#about', label: t.nav.links.about },
    { href: '#services', label: t.nav.links.services },
    { href: '#projects', label: t.nav.links.projects },
    { href: '#contact', label: t.nav.links.contact },
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-about">
          <div className="footer-logo">
            <img src="/logo.png" alt="TSGP Corporation Logo" className="footer-logo-img" />
          </div>
          <p className="footer-description">{t.footer.description}</p>
        </div>

        <div className="footer-section footer-links">
          <h3 className="footer-heading">{t.footer.quickLinks}</h3>
          <ul className="footer-menu">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h3 className="footer-heading">{t.footer.contactInfo}</h3>
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
          <h3 className="footer-heading">{t.footer.followUs}</h3>
          <div className="footer-social-icons">
            <a href="https://web.facebook.com/people/TSGP-Corporation/61590603809331/?locale=fr_FR" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>

            <a href="https://www.linkedin.com/company/tsgp-corporation" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 10V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="7" cy="6.5" r="1.5" fill="currentColor"/>
                <path d="M11 17V13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M11 10V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>

            <a href="https://www.tiktok.com/@tsgp.corporation?lang=fr" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M16 2V14.5C16 16.433 14.433 18 12.5 18C10.567 18 9 16.433 9 14.5C9 12.567 10.567 11 12.5 11C12.8395 11 13.1676 11.0487 13.4778 11.1394" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 2C16 4.20914 17.7909 6 20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>

            <a href="https://www.instagram.com/tsgp_corporation?igsh=d3JycmJwZWdpdzd0" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
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
          &copy; {new Date().getFullYear()} TSGP Corporation. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}

export default Footer