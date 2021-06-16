export default class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider
  }

  parse(message) {
    const lowercase = message.toLowerCase()

    if (lowercase.includes("oi")) {
      this.actionProvider.answerToHi()
    }
    if (lowercase.includes("sim")) {
      this.actionProvider.answerToYes()
    }
  }
}
