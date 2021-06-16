export default class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage
    this.setState = setStateFunc
  }

  answerToHi = () => {
    const message = this.createChatBotMessage("Tudo bem com você?")
    this.addMessageToState(message)
  }

  answerToYes = () => {
    const message = this.createChatBotMessage("Que ótimo, o que você esta fazendo agora?")
    this.addMessageToState(message)
  }
  
  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }))
  }
}