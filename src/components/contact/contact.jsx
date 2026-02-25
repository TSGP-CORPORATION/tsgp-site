import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            Contactez-Nous
          </h2>
          <p className="contact-subtitle">
            Rejoignez notre communauté  ou obtenez plus d'informations sur nos services. 
            Nous sommes là pour vous accompagner dans le development de vos project.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h3 className="contact-form-title">
              Demande d'Adhésion
            </h3>
            
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-input"
                    placeholder="Votre prénom"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-input"
                    placeholder="Votre nom"
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
                  placeholder="votre@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Téléphone
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
                  Domaine d'Intérêt
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="form-select"
                >
                  <option value="">Sélectionnez un domaine</option>
                  <option value="poultry">Élevage Avicole/Aquaculture</option>
                  <option value="aquaculture">Stock</option>
                  <option value="pig">Education</option>
                  <option value="agriculture"> Construction</option>
                  <option value="all">Tous les domaines</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="form-textarea"
                  placeholder="Parlez-nous de votre projet ..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="form-submit"
              >
                Envoyer la Demande
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-wrapper">
            <div className="contact-info-card">
              <h3 className="contact-info-title">
                Informations de Contact
              </h3>
              
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-icon primary">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-info-content">
                    <h4>Adresse</h4>
                    <p>
                      Yaounde, Région du Centre<br />
                      Cameroun
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon accent">
                    <Phone size={24} />
                  </div>
                  <div className="contact-info-content">
                    <h4>Téléphone</h4>
                    <p>
                      +237 XXX XXX XXX<br />
                      +237 XXX XXX XXX
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
                      info@tsgp-corporation@gmail.cm<br />
                      contact@tsgp-corporation@gmail.cm
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon accent">
                    <Clock size={24} />
                  </div>
                  <div className="contact-info-content">
                    <h4>Heures d'Ouverture</h4>
                    <p>
                      Lun - Ven: 8h00 - 17h00<br />
                      Sam: 8h00 - 13h00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-cta-card">
              <h3 className="contact-cta-title">
                Prêt à nous rejoindre ?
              </h3>
              <p className="contact-cta-text">
                Devenez membre de notre communauté  et bénéficiez de notre expertise, 
                de nos ressources partagées et de notre réseau de soutien.
              </p>
              <button className="contact-cta-button">
                En Savoir Plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;