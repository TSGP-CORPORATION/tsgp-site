import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            Request a StockYamo demo
          </h2>
          <p className="contact-subtitle">
            Tell us about your business, your stock workflow, and the problem you want to solve. TSGP will help you assess whether StockYamo Core is the right fit.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-wrapper">
            <h3 className="contact-form-title">
              Business inquiry
            </h3>

            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-input"
                    placeholder="Your first name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-input"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="you@company.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  WhatsApp or phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  placeholder="+237 XXX XXX XXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="interest" className="form-label">
                  Business type
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="form-select"
                >
                  <option value="">Select your business type</option>
                  <option value="pharmacy">Pharmacy</option>
                  <option value="shop">Retail shop or mini-market</option>
                  <option value="wholesale">Wholesaler or distributor</option>
                  <option value="multi-location">Multi-location business</option>
                  <option value="other">Other organisation</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Current stock challenge
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="form-textarea"
                  placeholder="Tell us what you currently use for stock and what hurts most..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="form-submit"
              >
                Send demo request
              </button>
            </form>
          </div>

          <div className="contact-info-wrapper">
            <div className="contact-info-card">
              <h3 className="contact-info-title">
                Contact information
              </h3>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-icon primary">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-info-content">
                    <h4>Market focus</h4>
                    <p>
                      Yaounde, Centre Region<br />
                      Cameroon
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon accent">
                    <Phone size={24} />
                  </div>
                  <div className="contact-info-content">
                    <h4>Phone</h4>
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
                    <h4>Email</h4>
                    <p>
                      info@tsgpcorporation.com<br />
                      tsgp-corporation@gmail.com
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon accent">
                    <Clock size={24} />
                  </div>
                  <div className="contact-info-content">
                    <h4>Demo rhythm</h4>
                    <p>
                      Field demos by appointment<br />
                      WhatsApp follow-up available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-cta-card">
              <h3 className="contact-cta-title">
                Pilot businesses wanted
              </h3>
              <p className="contact-cta-text">
                We are prioritising a small number of Yaounde businesses willing to test StockYamo Core, give feedback, and document measurable improvement after 30 days.
              </p>
              <button className="contact-cta-button">
                Join the pilot list
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
