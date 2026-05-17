import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState([])
  const cardsRef = useRef([])

  const projects = [
    {
      title: 'StockYamo Core',
      category: 'FLAGSHIP PRODUCT',
      description: 'Inventory and sales control for shops, pharmacies, and distributors that need access to real operational information.',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=900&auto=format&fit=crop&q=80',
      size: 'large',
      link: '#contact'
    },
    {
      title: 'New World Technology',
      category: 'WEB DEVELOPMENT',
      description: 'A professional school website for a vocational training institution, built for clarity, performance, and student trust.',
      image: '/Pasted image.png',
      size: 'medium',
      link: 'https://newworldtechnology.org/'
    }
  ]

  useEffect(() => {
    const observers = cardsRef.current.map((card, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => [...new Set([...prev, index])])
            }, index * 100)
          }
        },
        { threshold: 0.1 }
      )

      if (card) observer.observe(card)
      return observer
    })

    return () => observers.forEach(observer => observer.disconnect())
  }, [])

  const openProject = (link) => {
    if (link.startsWith('#')) {
      document.querySelector(link)?.scrollIntoView({ behavior: 'smooth' })
      return
    }

    window.open(link, '_blank')
  }

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-hero">
          <div className="projects-breadcrumb">
            <ChevronLeft size={20} />
            <span>PRODUCT AND PROOF</span>
            <ChevronRight size={20} />
          </div>
          <h1 className="projects-hero-title">Focused before expanding</h1>
          <p className="projects-hero-subtitle">
            TSGP is a multi-vertical B2B software company, but the current market focus is one product done deeply: StockYamo Core.
          </p>
        </div>

        <div className="projects-masonry">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={el => cardsRef.current[index] = el}
              className={`project-card ${project.size} ${visibleCards.includes(index) ? 'visible' : ''}`}
            >
              <div className="project-card-inner">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card-image"
                  loading="lazy"
                />
                <div className="project-card-overlay">
                  <span className="project-card-category">{project.category}</span>
                  <p className="project-card-description">{project.description}</p>
                  <button className="project-card-button" onClick={() => openProject(project.link)}>
                    <ArrowRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
