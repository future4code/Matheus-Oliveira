export default class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider
  }

  parse(message) {
    const lowercase = message.toLowerCase()

    if (lowercase.includes("oi") || lowercase.includes("ola") ||
      lowercase.includes("olá")) {
      this.actionProvider.answerToHi()
    }
    if (lowercase.includes("sim") || lowercase.includes("tudo bem") ||
      lowercase.includes("tudo ótimo") || lowercase.includes("tudo otimo")) {
      this.actionProvider.answerToYes()
    }
    if (lowercase.includes("nao") || lowercase.includes("não")) {
    this.actionProvider.answerToNo()
  }
  }
}
