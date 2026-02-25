import React from 'react'
import { ShieldCheck, Cpu, BarChart3, Wrench, Layers, Briefcase } from 'lucide-react'
import './ServicesMenu.css'

const ServicesMenu = ({ activeService, setActiveService }) => {
  const menuItems = [
    { id: 'software', label: 'Software Solutions', icon: ShieldCheck },
    { id: 'digital', label: 'Digital Transformation', icon: Cpu },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'integration', label: 'Integration', icon: Layers },
    { id: 'support', label: 'Support', icon: Wrench },
    { id: 'consulting', label: 'IT Consulting', icon: Briefcase }
  ]

  return (
    <div className="services-menu">
      {menuItems.map((item, index) => {
        const Icon = item.icon
        return (
          <div
            key={item.id}
            className={`menu-item ${activeService === item.id ? 'active' : ''}`}
            onClick={() => setActiveService(item.id)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="menu-icon">
              <Icon size={24} />
            </div>
            <span className="menu-label">{item.label}</span>
          </div>
        )
      })}
    </div>
  )
}

export default ServicesMenu