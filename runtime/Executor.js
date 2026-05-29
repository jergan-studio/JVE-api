class Executor {
  constructor(jve) {
    this.jve = jve;
  }

  run(parsedScript) {
    for (const line of parsedScript) {
      const { command, args } = line;

      const data = this.mapArgs(args);

      this.jve.command(command, data);
    }
  }

  mapArgs(args) {
    // simple rule:
    // first arg becomes "message" or "text"
    if (!args || args.length === 0) return {};

    return {
      message: args[0],
      text: args[0]
    };
  }
}

module.exports = Executor;
