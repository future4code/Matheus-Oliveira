import { createChatBotMessage } from "react-chatbot-kit"

const config = {
  botName: "Your Match",
  initialMessages: [ createChatBotMessage(`Olá, sou seu Match`) ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#762D93"
    },
    chatButton: {
      backgroundColor: "#762D93"
    }
  }
}

export default config