'use client';

import { useState, useRef, useEffect } from 'react'
import { Download, Printer } from 'lucide-react'
import './ELDLogsPage.css'

const ROW_HEIGHT = 100
const HOURS_IN_DAY = 24

const dutyStates = [
  'Off Duty',
  'Sleeper Berth',
  'Driving',
  'On Duty (Not Driving)',
]

const dutyColors = {
  'Off Duty': 'bg-yellow-300',
  'Sleeper Berth': 'bg-blue-400',
  'Driving': 'bg-amber-400',
  'On Duty (Not Driving)': 'bg-orange-200',
}

function generateLinePoints(logs, hourWidth) {
  if (!logs.length || hourWidth === 0) return ''

  const points = []
  const sorted = [...logs].sort((a, b) => a.position - b.position)

  sorted.forEach((log, index) => {
    const rowIndex = dutyStates.indexOf(log.state)
    const y = rowIndex * ROW_HEIGHT + ROW_HEIGHT / 2

    const startX = log.position * hourWidth
    const endX = (log.position + log.duration) * hourWidth

    if (index === 0) {
      points.push(`${startX},${y}`)
    }

    points.push(`${endX},${y}`)

    const next = sorted[index + 1]
    if (next) {
      const nextRow = dutyStates.indexOf(next.state)
      const nextY = nextRow * ROW_HEIGHT + ROW_HEIGHT / 2
      points.push(`${endX},${nextY}`)
    }
  })

  return points.join(' ')
}

export default function ELDLogsPage() {
  const [dutyHours, setDutyHours] = useState({
    'Off Duty': 8,
    'Sleeper Berth': 4,
    'Driving': 8,
    'On Duty (Not Driving)': 4,
  })

  const [width, setWidth] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width)
    })

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const generateLogsFromHours = () => {
    const newLogs = []
    let currentPosition = 0

    dutyStates.forEach((state) => {
      const hours = dutyHours[state] || 0
      if (hours > 0) {
        newLogs.push({
          state,
          position: currentPosition,
          duration: hours,
        })
        currentPosition += hours
      }
    })

    return newLogs
  }

  const log = {
    date: '2024-01-27',
    driverName: 'John Smith',
    driverId: 'DRV-001',
    vehicleId: 'VEH-45',
    vin: '1HGBH41JXMN109186',
    odometer: '145,320 mi',
    logs: generateLogsFromHours(),
  }

  const totalHours = Object.values(dutyHours).reduce((sum, h) => sum + h, 0)
  const hourWidth = width / HOURS_IN_DAY

  const handleDutyHourChange = (state, value) => {
    const totalWithoutThis = Object.entries(dutyHours)
      .filter(([key]) => key !== state)
      .reduce((sum, [, val]) => sum + val, 0)

    if (totalWithoutThis + value <= 24) {
      setDutyHours((prev) => ({
        ...prev,
        [state]: Math.max(0, value),
      }))
    }
  }

  return (
    <main className="eld-logs-page">
      <div className="container">
        {/* Header */}
        <div className="eld-header">
          <h1>Electronic Logging Device</h1>
          <p>Driver's Daily Log Record</p>
        </div>

        {/* Actions */}
        <div className="eld-actions">
          <button className="btn btn-outline">
            <Download size={16} /> Export PDF
          </button>
          <button className="btn btn-primary">
            <Printer size={16} /> Print Log
          </button>
        </div>

        {/* Driver Info Cards */}
        <div className="info-cards">
          <div className="info-card info-card-blue">
            <p className="info-label">DRIVER</p>
            <p className="info-value">{log.driverName}</p>
            <p className="info-subtext">{log.driverId}</p>
          </div>
          <div className="info-card info-card-amber">
            <p className="info-label">VEHICLE</p>
            <p className="info-value">{log.vehicleId}</p>
            <p className="info-subtext">VIN: {log.vin.slice(-6)}</p>
          </div>
          <div className="info-card info-card-slate">
            <p className="info-label">ODOMETER</p>
            <p className="info-value">{log.odometer}</p>
          </div>
          <div className="info-card info-card-green">
            <p className="info-label">DATE</p>
            <p className="info-value">
              {new Date(log.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>

        {/* Duty Hours Input */}
        <div className="duty-input-section">
          <h3>Update Duty Status Hours</h3>
          <p>Enter the hours for each duty status. Total must not exceed 24 hours.</p>

          <div className="duty-inputs">
            {dutyStates.map((state, idx) => (
              <div key={state} className="duty-input-group">
                <label>
                  <span>{idx + 1}.</span> {state}
                </label>
                <div className="input-wrapper">
                  <input
                    type="number"
                    min="0"
                    max="24"
                    value={dutyHours[state]}
                    onChange={(e) =>
                      handleDutyHourChange(state, parseFloat(e.target.value) || 0)
                    }
                  />
                  <span>hours</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total-hours">
            <span>Total Hours:</span>
            <span className={`total-value ${totalHours === 24 ? 'full' : totalHours > 24 ? 'over' : 'under'}`}>
              {totalHours}h / 24h
            </span>
          </div>

          {totalHours !== 24 && (
            <p className="hours-help">
              {totalHours < 24
                ? `${24 - totalHours}h remaining`
                : `${totalHours - 24}h over limit`}
            </p>
          )}
        </div>

        {/* Log Grid */}
        <div className="log-grid-container">
          {/* Ruler Header */}
          <div className="ruler-header">
            <div className="ruler-label">DUTY STATUS</div>
            <div ref={containerRef} className="ruler-scale">
              {Array.from({ length: 24 }).map((_, h) => (
                <div key={h} className="ruler-hour">
                  <span className="hour-text">
                    {h === 0 ? 'Mid' : h === 12 ? 'Noon' : h > 12 ? h - 12 : h}
                  </span>
                  <div className="hour-markers">
                    <div className="marker"></div>
                    <div className="marker"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grid with SVG */}
          <div className="grid-content">
            <svg
              width={width}
              height={ROW_HEIGHT * dutyStates.length}
              viewBox={`0 0 ${width} ${ROW_HEIGHT * dutyStates.length}`}
              className="grid-svg"
            >
              {/* Horizontal divider lines */}
              {dutyStates.map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="0"
                  y1={(i + 1) * ROW_HEIGHT}
                  x2={width}
                  y2={(i + 1) * ROW_HEIGHT}
                  stroke="#e2e8f0"
                  strokeWidth="2"
                />
              ))}

              {/* Vertical grid lines */}
              {Array.from({ length: 48 }).map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={(i / 2) * (width / 24)}
                  y1="0"
                  x2={(i / 2) * (width / 24)}
                  y2={ROW_HEIGHT * dutyStates.length}
                  stroke={i % 2 === 0 ? '#cbd5e1' : '#f1f5f9'}
                  strokeWidth={i % 2 === 0 ? 1.5 : 1}
                  opacity={i % 2 === 0 ? 1 : 0.5}
                />
              ))}

              {/* Duty line */}
              <polyline
                points={generateLinePoints(log.logs, hourWidth)}
                stroke="#1e293b"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Duty Status Rows */}
            {dutyStates.map((state, idx) => {
              const totalState = log.logs
                .filter((l) => l.state === state)
                .reduce((sum, l) => sum + l.duration, 0)

              return (
                <div key={state} className="duty-row">
                  <div className="duty-label">
                    <span className="duty-number">{idx + 1}.</span>
                    <span className="duty-name">{state}</span>
                    <span className="duty-total">{totalState}h</span>
                  </div>
                  <div className="duty-grid"></div>
                </div>
              )
            })}
          </div>

          {/* Bottom Ruler */}
          <div className="ruler-footer">
            <div className="ruler-label"></div>
            <div className="ruler-scale">
              {Array.from({ length: 24 }).map((_, h) => (
                <div key={`b-${h}`} className="ruler-hour">
                  <span className="hour-text">
                    {h === 0 ? 'Mid' : h === 12 ? 'Noon' : h > 12 ? h - 12 : h}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Remarks */}
        <div className="remarks-section">
          <h3>REMARKS & NOTES</h3>
          <div className="remarks-content">
            <p className="remarks-help">
              Record any location changes, inspections, accidents, or violations
            </p>
            <div className="remarks-box">
              No violations or incidents recorded
            </div>
          </div>
        </div>

        {/* Compliance Status */}
        <div className="compliance-status">
          <div className="compliance-text">
            <p className="compliance-title">Compliance Status</p>
            <p className="compliance-subtitle">FMCSA Hours of Service regulations</p>
          </div>
          <div className="compliance-badge">✓ Compliant</div>
        </div>
      </div>
    </main>
  )
}
