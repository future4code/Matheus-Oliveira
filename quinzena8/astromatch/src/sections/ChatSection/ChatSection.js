import React from 'react'
import Chatbot from 'react-chatbot-kit'
import config from './chatbot/config'
import MessageParser from "./chatbot/MessageParser"
import ActionProvider from "./chatbot/ActionProvider"
import styled from 'styled-components'

const ChatPosition = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
`

export default function ChatSection() {
  return (
    <ChatPosition>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </ChatPosition>
  )
}