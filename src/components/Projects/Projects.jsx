import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState([])
  const cardsRef = useRef([])

  const projects = [
    {
      title: 'Modern Construction',
      category: 'CONSTRUCTION',
      description: 'Expert craftsmanship in modern building techniques',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
      size: 'large'
    },
    {
      title: 'Precision Work',
      category: 'CONSTRUCTION',
      description: 'Detailed measurement and quality control',
      image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg',
      size: 'medium'
    },
    {
      title: 'Interior Finishing',
      category: 'CONSTRUCTION',
      description: 'Professional painting and finishing services',
      image: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg',
      size: 'medium'
    },
    {
      title: 'Quality Painting',
      category: 'CONSTRUCTION',
      description: 'Expert painting with attention to detail',
      image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg',
      size: 'large'
    },
    {
      title: 'Project Planning',
      category: 'CONSTRUCTION',
      description: 'Comprehensive blueprint review and planning',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg',
      size: 'medium'
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
            Inspiring expert on-site designed to deliver quality and innovation in every project we undertake
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
                  <button className="project-card-button">
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
