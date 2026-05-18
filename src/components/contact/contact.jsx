import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import './contact.css'

const Contact = () => {
  const { t } = useLanguage()

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">{t.contact.title}</h2>
          <p className="contact-subtitle">{t.contact.subtitle}</p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-wrapper">
            <h3 className="contact-form-title">{t.contact.formTitle}</h3>

            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    {t.contact.fields.firstName}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-input"
                    placeholder={t.contact.placeholders.firstName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">
                    {t.contact.fields.lastName}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-input"
                    placeholder={t.contact.placeholders.lastName}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  {t.contact.fields.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder={t.contact.placeholders.email}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  {t.contact.fields.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  placeholder={t.contact.placeholders.phone}
                />
              </div>

              <div className="form-group">
                <label htmlFor="interest" className="form-label">
                  {t.contact.fields.interest}
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="form-select"
                >
                  <option value="">{t.contact.placeholders.interest}</option>
                  <option value="software">{t.contact.options.software}</option>
                  <option value="stock">{t.contact.options.stock}</option>
                  <option value="education">{t.contact.options.education}</option>
                  <option value="construction">{t.contact.options.construction}</option>
                  <option value="all">{t.contact.options.all}</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  {t.contact.fields.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="form-textarea"
                  placeholder={t.contact.placeholders.message}
                ></textarea>
              </div>

              <button
                type="submit"
                className="form-submit"
              >
                {t.contact.submit}
              </button>
            </form>
          </div>

          <div className="contact-info-wrapper">
            <div className="contact-info-card">
              <h3 className="contact-info-title">{t.contact.infoTitle}</h3>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-icon primary">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-info-content">
                    <h4>{t.contact.address}</h4>
                    <p>
                      {t.contact.addressLines[0]}<br />
                      {t.contact.addressLines[1]}
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon accent">
                    <Phone size={24} />
                  </div>
                  <div className="contact-info-content">
                    <h4>{t.contact.phoneLabel}</h4>
                    <p>
                      +237 699 585 467<br />
                      +237 671 557 155
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon primary">
                    <Mail size={24} />
                  </div>
                  <div className="contact-info-content">
                    <h4>{t.contact.emailLabel}</h4>
                    <p>
                      tsgp-corporation@gmail.com<br />
                      contact@tsgp-corporation.com
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon accent">
                    <Clock size={24} />
                  </div>
                  <div className="contact-info-content">
                    <h4>{t.contact.hours}</h4>
                    <p>
                      {t.contact.hoursLines[0]}<br />
                      {t.contact.hoursLines[1]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-cta-card">
              <h3 className="contact-cta-title">{t.contact.ctaTitle}</h3>
              <p className="contact-cta-text">{t.contact.ctaText}</p>
              <button className="contact-cta-button">
                {t.contact.ctaButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
