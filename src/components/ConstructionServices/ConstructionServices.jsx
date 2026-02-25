import React, { useState } from 'react'
import ServicesMenu from './ServicesMenu'
import ServiceDetails from './ServiceDetails'
import './ConstructionServices.css'

const ConstructionServices = () => {
  const [activeService, setActiveService] = useState('software')

  return (
    <section className="construction-services" id="construction-services">
      <div className="construction-services-container">
        <div className="services-header">
          <h2 className="services-section-title">Solutions We Provide</h2>
          <p className="services-section-subtitle">
            Secure, innovative software solutions tailored to improve the performance of SMEs in production and services — for a better Cameroon.
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
