export default class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage
    this.setState = setStateFunc
  }

  answerToHi = () => {
    const message = this.createChatBotMessage("Olá, tudo bem com você?")
    this.addMessageToState(message)
  }

  answerToYes = () => {
    const message = this.createChatBotMessage("Olá, tudo bem com você?")
    this.addMessageToState(message)
  }

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }))
  }
}