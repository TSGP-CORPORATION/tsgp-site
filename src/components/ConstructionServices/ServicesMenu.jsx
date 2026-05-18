import React from 'react'
import { ShieldCheck, Cpu, BarChart3, Wrench, Layers, Briefcase } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import './ServicesMenu.css'

const ServicesMenu = ({ activeService, setActiveService }) => {
  const { t } = useLanguage()

  const menuItems = [
    { id: 'software', label: t.solutions.menu.software, icon: ShieldCheck },
    { id: 'digital', label: t.solutions.menu.digital, icon: Cpu },
    { id: 'analytics', label: t.solutions.menu.analytics, icon: BarChart3 },
    { id: 'integration', label: t.solutions.menu.integration, icon: Layers },
    { id: 'support', label: t.solutions.menu.support, icon: Wrench },
    { id: 'consulting', label: t.solutions.menu.consulting, icon: Briefcase },
  ]

  return (
    <div className="services-menu">
      {menuItems.map((item, index) => {
        const Icon = item.icon
        return (
          <button
            key={item.id}
            className={`menu-item ${activeService === item.id ? 'active' : ''}`}
            onClick={() => setActiveService(item.id)}
            style={{ animationDelay: `${index * 0.1}s` }}
            type="button"
          >
            <div className="menu-icon">
              <Icon size={24} />
            </div>
            <span className="menu-label">{item.label}</span>
          </button>
        )
      })}
    </div>
  )
}

export default ServicesMenu
