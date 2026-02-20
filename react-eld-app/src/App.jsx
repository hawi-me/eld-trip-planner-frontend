import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import TripInputPage from './pages/TripInputPage'
import RouteMapPage from './pages/RouteMapPage'
import ELDLogsPage from './pages/ELDLogsPage'
import './App.css'

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<TripInputPage />} />
        <Route path="/map" element={<RouteMapPage />} />
        <Route path="/eld" element={<ELDLogsPage />} />
      </Routes>
    </Router>
  )
}
