import './RouteMapPage.css'

export default function RouteMapPage() {
  const tripData = {
    pickup: 'Chicago, IL',
    dropoff: 'Denver, CO',
    distance: '1,004 miles',
    estimatedTime: '14h 30m',
    hosStatus: 'Valid',
    breakRequired: '11 hours',
  }

  const stops = [
    { id: 1, city: 'Des Moines, IA', time: '2:30 PM', type: 'rest' },
    { id: 2, city: 'Omaha, NE', time: '5:45 PM', type: 'fuel' },
    { id: 3, city: 'North Platte, NE', time: '8:15 PM', type: 'sleep' },
    { id: 4, city: 'Denver, CO', time: '2:00 PM', type: 'delivery' },
  ]

  return (
    <main className="route-map-page">
      <div className="container">
        <div className="header">
          <h1>Route Map & Planning</h1>
          <p>View your trip route and HOS compliance status</p>
        </div>

        <div className="route-layout">
          {/* Left Panel */}
          <div className="left-panel">
            {/* Trip Summary */}
            <div className="card">
              <h3>Trip Summary</h3>
              <div className="trip-info">
                <div className="info-row">
                  <span className="label">From:</span>
                  <span className="value">{tripData.pickup}</span>
                </div>
                <div className="info-row">
                  <span className="label">To:</span>
                  <span className="value">{tripData.dropoff}</span>
                </div>
                <div className="divider"></div>
                <div className="info-row">
                  <span className="label">Distance:</span>
                  <span className="value highlight">{tripData.distance}</span>
                </div>
                <div className="info-row">
                  <span className="label">Est. Time:</span>
                  <span className="value highlight">{tripData.estimatedTime}</span>
                </div>
              </div>
            </div>

            {/* HOS Information */}
            <div className="card hos-info">
              <h3>Hours of Service</h3>
              <div className="hos-status">
                <div className="status-badge valid">{tripData.hosStatus}</div>
                <div className="status-details">
                  <p className="status-label">Break Required:</p>
                  <p className="status-value">{tripData.breakRequired}</p>
                </div>
              </div>
              <p className="hos-help">
                You must take an 11-hour break before driving more than 11 hours
              </p>
            </div>

            {/* Planned Stops */}
            <div className="card">
              <h3>Planned Stops</h3>
              <div className="stops-list">
                {stops.map((stop, index) => (
                  <div key={stop.id} className="stop-item">
                    <div className="stop-marker">{index + 1}</div>
                    <div className="stop-details">
                      <p className="stop-city">{stop.city}</p>
                      <p className="stop-time">{stop.time}</p>
                      <span className={`stop-type ${stop.type}`}>{stop.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Map */}
          <div className="right-panel">
            <div className="map-container">
              <div className="map-placeholder">
                <svg viewBox="0 0 400 300" className="map-svg">
                  {/* Background */}
                  <rect width="400" height="300" fill="#e0f2fe" />

                  {/* Simple route line */}
                  <path
                    d="M 50 250 Q 100 200 150 150 T 250 80 T 350 50"
                    stroke="#0284c7"
                    strokeWidth="3"
                    fill="none"
                  />

                  {/* Start marker */}
                  <circle cx="50" cy="250" r="8" fill="#16a34a" stroke="white" strokeWidth="2" />
                  <text x="50" y="270" textAnchor="middle" fontSize="12" fill="#0f172a">
                    Start
                  </text>

                  {/* Stops */}
                  <circle cx="150" cy="150" r="6" fill="#f59e0b" stroke="white" strokeWidth="2" />
                  <circle cx="250" cy="80" r="6" fill="#f59e0b" stroke="white" strokeWidth="2" />

                  {/* End marker */}
                  <circle cx="350" cy="50" r="8" fill="#dc2626" stroke="white" strokeWidth="2" />
                  <text x="350" y="30" textAnchor="middle" fontSize="12" fill="#0f172a">
                    End
                  </text>

                  {/* Distance labels */}
                  <text x="100" y="230" fontSize="11" fill="#475569">
                    1,004 mi
                  </text>
                  <text x="200" y="120" fontSize="11" fill="#475569">
                    14h 30m
                  </text>
                </svg>
              </div>

              <div className="map-legend">
                <div className="legend-item">
                  <div className="legend-dot start"></div>
                  <span>Start Point</span>
                </div>
                <div className="legend-item">
                  <div className="legend-dot stop"></div>
                  <span>Scheduled Stop</span>
                </div>
                <div className="legend-item">
                  <div className="legend-dot end"></div>
                  <span>Destination</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
