'use client';

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PlaneTakeoff, MapPin, FileText } from 'lucide-react'
import './Navigation.css'

export default function Navigation() {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState(
    location.pathname === '/map' ? 'map' : location.pathname === '/eld' ? 'eld' : 'trip'
  )

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-icon"><img src="@/assets/logo.png" alt="Logo" /></div>
          <h1>LogTracker</h1>
        </div>

        <div className="nav-buttons">
          <Link
            to="/"
            className={`nav-button ${activeTab === 'trip' ? 'active' : ''}`}
            onClick={() => setActiveTab('trip')}
          >
            <PlaneTakeoff size={16} />
            <span className="nav-label-full">Plan Trip</span>
            <span className="nav-label-short">Trip</span>
          </Link>

          <Link
            to="/map"
            className={`nav-button ${activeTab === 'map' ? 'active' : ''}`}
            onClick={() => setActiveTab('map')}
          >
            <MapPin size={16} />
            <span className="nav-label-full">Route Map</span>
            <span className="nav-label-short">Map</span>
          </Link>

          <Link
            to="/eld"
            className={`nav-button ${activeTab === 'eld' ? 'active' : ''}`}
            onClick={() => setActiveTab('eld')}
          >
            <FileText size={16} />
            <span className="nav-label-full">ELD Logs</span>
            <span className="nav-label-short">Logs</span>
          </Link>
        </div>

        <div className="nav-status">
          <div className="status-indicator"></div>
          <span className="status-text">Driver Connected</span>
        </div>
      </div>
    </nav>
  )
}
