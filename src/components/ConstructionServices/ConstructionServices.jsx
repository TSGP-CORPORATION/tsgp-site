import React, { useState } from 'react'
import ServicesMenu from './ServicesMenu'
import ServiceDetails from './ServiceDetails'
import './ConstructionServices.css'

const ConstructionServices = () => {
  const [activeService, setActiveService] = useState('stockyamo')

  return (
    <section className="construction-services" id="construction-services">
      <div className="construction-services-container">
        <div className="services-header">
          <h2 className="services-section-title">StockYamo Go-To-Market Focus</h2>
          <p className="services-section-subtitle">
            StockYamo is our current flagship product: a practical inventory and sales control system for local businesses that need the information and access larger companies already use.
          </p>
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
