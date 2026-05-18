import React, { useState } from 'react'
import ServicesMenu from './ServicesMenu'
import ServiceDetails from './ServiceDetails'
import { useLanguage } from '../../i18n/LanguageContext'
import './ConstructionServices.css'

const ConstructionServices = () => {
  const [activeService, setActiveService] = useState('software')
  const { t } = useLanguage()

  return (
    <section className="construction-services" id="construction-services">
      <div className="construction-services-container">
        <div className="services-header">
          <h2 className="services-section-title">{t.solutions.title}</h2>
          <p className="services-section-subtitle">{t.solutions.subtitle}</p>
        </div>

        <div className="services-layout">
          <div className="services-left">
            <ServicesMenu
              activeService={activeService}
              setActiveService={setActiveService}
            />
          </div>
          <div className="services-right">
            <ServiceDetails activeService={activeService} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConstructionServices
