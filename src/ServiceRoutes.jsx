import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'
import ChatbotPage from './pages/ChatbotPage/ChatbotPage'

function ServiceRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/chatbot" element={<ChatbotPage />} />
    </Routes>
  )
}

export default ServiceRoutes
