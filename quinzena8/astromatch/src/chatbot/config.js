import { createChatBotMessage } from "react-chatbot-kit"

const config = {
  botName: "Your Match",
  initialMessages: [ createChatBotMessage(`Olá, sou seu Match`) ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "purple"
    },
    chatButton: {
      backgroundColor: "purple"
    }
  }
}

export default config