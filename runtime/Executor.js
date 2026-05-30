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

  run(lines) {
    for (const line of lines) {
      const tokens = line.tokens || line.split(" ");

      const cmd = tokens[0];

      // -------------------------
      // VARIABLE SYSTEM
      // -------------------------
      if (cmd === "set") {
        const name = tokens[1];
        const value = tokens.slice(2).join(" ").replace(/"/g, "");

        this.env.set(name, value);
        continue;
      }

      if (cmd === "echo") {
        const value = tokens.slice(1).join(" ").replace(/"/g, "");

        console.log(this.resolve(value));
        continue;
      }

      // -------------------------
      // ENGINE COMMANDS
      // -------------------------
      const data = {
        message: tokens.slice(1).join(" ").replace(/"/g, ""),
        text: tokens.slice(1).join(" ").replace(/"/g, "")
      };

      this.jve.runCommandLine(cmd, data);
    }
  }
}

module.exports = Executor;