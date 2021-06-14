class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    if (lowercase.includes("olá")) {
      this.actionProvider.greet();
    }
  }
}

export default MessageParser;

