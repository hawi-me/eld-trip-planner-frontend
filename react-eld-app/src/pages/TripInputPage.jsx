'use client';

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import './TripInputPage.css'

export default function TripInputPage() {
  const [step, setStep] = useState(1)
  const [currentLocation, setCurrentLocation] = useState('')
  const [cycleHours, setCycleHours] = useState('0')
  const [pickupLocation, setPickupLocation] = useState('')
  const [dropoffLocation, setDropoffLocation] = useState('')

  const handlePlanTrip = () => {
    if (pickupLocation && dropoffLocation) {
      console.log('Trip planned:', { pickupLocation, dropoffLocation, currentLocation, cycleHours })
      alert('Trip planned successfully! Navigate to Route Map to view.')
    }
  }

  return (
    <main className="trip-input-page">
      <div className="container">
        <div className="header-section">
          <h1>Plan Your Trip</h1>
          <p>Enter your trip details to generate HOS compliance logs</p>
        </div>

        {/* Step Indicator */}
        <div className="steps-container">
          <div className={`step ${step === 1 ? 'active' : ''}`}>
            <div className="step-number">1</div>
            <div className="step-label">Current Status</div>
          </div>
          <div className="step-line"></div>
          <div className={`step ${step === 2 ? 'active' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-label">Pickup & Dropoff</div>
          </div>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="form-card">
            <h2>Current Location & Cycle Hours</h2>
            <p className="form-description">
              Enter your current location and hours already used in this cycle
            </p>

            <div className="form-group">
              <label htmlFor="current-location">Current Location</label>
              <input
                id="current-location"
                type="text"
                placeholder="Enter city, state or coordinates"
                value={currentLocation}
                onChange={(e) => setCurrentLocation(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cycle-hours">Hours Used in Current Cycle</label>
              <div className="input-with-unit">
                <input
                  id="cycle-hours"
                  type="number"
                  min="0"
                  max="70"
                  placeholder="0"
                  value={cycleHours}
                  onChange={(e) => setCycleHours(e.target.value)}
                  className="form-input"
                />
                <span className="unit">hours</span>
              </div>
              <p className="form-help">Maximum 70-hour cycle limit applies</p>
            </div>

            <div className="button-group">
              <button className="btn btn-primary" onClick={() => setStep(2)}>
                Next <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="form-card">
            <h2>Pickup & Dropoff Locations</h2>
            <p className="form-description">
              Specify where you're picking up and dropping off the load
            </p>

            <div className="form-group">
              <label htmlFor="pickup">Pickup Location</label>
              <input
                id="pickup"
                type="text"
                placeholder="Enter pickup address or city"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dropoff">Dropoff Location</label>
              <input
                id="dropoff"
                type="text"
                placeholder="Enter dropoff address or city"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="button-group">
              <button className="btn btn-outline" onClick={() => setStep(1)}>
                Back
              </button>
              <button
                className="btn btn-primary"
                onClick={handlePlanTrip}
                disabled={!pickupLocation || !dropoffLocation}
              >
                Plan Trip <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
