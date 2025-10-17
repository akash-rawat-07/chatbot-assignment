import React from 'react'
import Navbar from '../../components/Navbar'

function ChatbotPage() {
  return (
    <div className='w-screen h-screen'>
        <div className='h-[70px] bg-[#001944]'>
            <Navbar />
        </div>

        <div className="h-[calc(100%-80px)] bg-[#DEE2E6]">
            ChatbotPage
        </div>
    </div>
  )
}

export default ChatbotPage
