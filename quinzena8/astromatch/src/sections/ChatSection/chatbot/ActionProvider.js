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
    const message = this.createChatBotMessage("Que legal! comigo também")
    this.addMessageToState(message)
  }
  answerToNo = () => {
    const message = this.createChatBotMessage("Que pena, espero que você fique bem")
    this.addMessageToState(message)
  }

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }))
  }
}