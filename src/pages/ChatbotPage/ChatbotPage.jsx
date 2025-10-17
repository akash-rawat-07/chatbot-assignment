import React from 'react'
import Navbar from '../../components/Navbar'
import InitialChatbotView from '../../container/Chatbot/InitialChatbotView'

function ChatbotPage() {
  return (
    <div className='w-screen h-screen'>
        <div className='h-[70px] bg-[#001944]'>
            <Navbar />
        </div>

        <div className="h-[calc(100%-70px)] bg-[#DEE2E6]">
            <InitialChatbotView />
            ChatbotPage
        </div>
    </div>
  )
}

export default ChatbotPage
