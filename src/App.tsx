import React from 'react'
import { Navbar } from './Components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { AboutPage } from './pages/About'
import { ContactPage } from './pages/Contact'
import { HomePage } from './pages/Home'
import { ReminderPage } from './pages/Reminders'
import { MapPage } from './pages/Map'

function App() {

  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutPage />} />
        <Route path="/reminders" element={<ReminderPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
