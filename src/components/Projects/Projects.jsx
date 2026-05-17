import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import './Projects.css'

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState([])
  const cardsRef = useRef([])
  const { t } = useLanguage()

  const projects = [
    {
      ...t.projects.items[0],
      image: '/Pasted image.png',
      size: 'large',
      link: 'https://newworldtechnology.org/',
    },
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

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-hero">
          <div className="projects-breadcrumb">
            <ChevronLeft size={20} />
            <span>{t.projects.label}</span>
            <ChevronRight size={20} />
          </div>
          <h1 className="projects-hero-title">{t.projects.title}</h1>
          <p className="projects-hero-subtitle">{t.projects.subtitle}</p>
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
                  <button className="project-card-button" onClick={() => window.open(project.link, '_blank')}>
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
