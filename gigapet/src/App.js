import React from 'react'
import './App.css'
import Navigation from'./components/Layout/Navigation'
import Footer from './components/Layout/Footer'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <div className="App">
        <Navigation />
        <h2>Gigapet</h2>
        <Dashboard />
        <Footer />
    </div>
  )
}


