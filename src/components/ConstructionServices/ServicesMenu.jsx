import React from 'react'
import { Boxes, MapPin, MessageCircle, ShieldCheck, Repeat, LineChart } from 'lucide-react'
import './ServicesMenu.css'

const ServicesMenu = ({ activeService, setActiveService }) => {
  const menuItems = [
    { id: 'stockyamo', label: 'StockYamo Core', icon: Boxes },
    { id: 'field', label: 'Field Sales', icon: MapPin },
    { id: 'funnel', label: 'WhatsApp Funnel', icon: MessageCircle },
    { id: 'security', label: 'Security First', icon: ShieldCheck },
    { id: 'retention', label: 'Recurring Support', icon: Repeat },
    { id: 'validation', label: 'Pilot Results', icon: LineChart }
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
