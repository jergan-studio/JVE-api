class Executor {
  constructor(jve, env) {
    this.jve = jve;
    this.env = env;
  }

  resolve(value) {
    if (this.env.has(value)) {
      return this.env.get(value);
    }
    return value;
  }

  run(parsed) {
    for (const line of parsed) {
      const cmd = line.command;
      const args = line.args.map(a => this.resolve(a));

      this.execute(cmd, args);
    }
  }

  execute(cmd, args) {
    // VARIABLE SYSTEM
    if (cmd === "set") {
      this.env.set(args[0], args[1]);
      return;
    }

    // NORMAL COMMANDS
    const data = {
      message: args[0],
      text: args[0]
    };

    this.jve.command(cmd, data);
  }
}

module.exports = Executor;
