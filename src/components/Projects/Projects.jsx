import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState([])
  const cardsRef = useRef([])

  const projects = [
    {
      title: 'New World Technology',
      category: 'WEB DEVELOPMENT',
      description: 'A full-featured school website for a vocational training institution specializing in tech, electrical & solar training. Built for performance, clarity, and a seamless student experience.',
      image: '/Pasted image.png',
      size: 'large',
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

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-hero">
          <div className="projects-breadcrumb">
            <ChevronLeft size={20} />
            <span>OUR WORK</span>
            <ChevronRight size={20} />
          </div>
          <h1 className="projects-hero-title">Discover Our Projects</h1>
          <p className="projects-hero-subtitle">
            From concept to deployment, we build digital products that make an impact. Here's a look at what we've shipped so far.
          </p>
        </div>

        <div className="projects-masonry">
          {projects.map((project, index) => (
            <div
              key={index}
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
