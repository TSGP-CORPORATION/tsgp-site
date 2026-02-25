import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ContactBar from './components/ContactBar/ContactBar'
import StatsBar from './components/StatsBar/StatsBar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import ConstructionServices from './components/ConstructionServices/ConstructionServices'
import Features from './components/Features/Features'
import Projects from './components/Projects/Projects'
import Testimonials from './components/testimonials/testimonials'
import FAQ from './components/FAQ/FAQ'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'
import Contact  from './components/contact/contact'
import './App.css'

const App = () => {
  return (
    <>
      <ContactBar/>
      <NavBar/>
      
      <div className="App">
        <Hero />
        <About />
        <Services />
        <ConstructionServices />
        <Features />
        <Projects />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTA />
      </div>
      <Footer />
    </>
  )
}

export default App