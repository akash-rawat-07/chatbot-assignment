import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ServiceRoutes from './ServiceRoutes'

function App() {

  return (
    <Routes>
      <Route path="/*" element={<ServiceRoutes />} />
    </Routes>
  )
}

export default App
