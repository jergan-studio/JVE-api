const Parser = require("./parser");
const Environment = require("./Environment");

class ScriptEngine {
  constructor(jve) {
    this.jve = jve;

    this.parser = new Parser();
    this.env = new Environment();
  }

  // =========================
  // RUN FULL SCRIPT
  // =========================
  run(script) {
    const parsed = this.parser.parse(script);

    for (const line of parsed) {
      this.execute(line);
    }
  }

  // =========================
  // EXECUTE SINGLE LINE
  // =========================
  execute(line) {
    const tokens = line.tokens;
    const cmd = tokens[0];

    // -------------------------
    // VARIABLES
    // -------------------------
    if (cmd === "set") {
      const name = tokens[1];
      const value = tokens.slice(2).join(" ").replace(/"/g, "");

      this.env.set(name, value);
      return;
    }

    if (cmd === "echo") {
      const value = tokens.slice(1).join(" ").replace(/"/g, "");

      console.log(this.env.resolve(value));
      return;
    }

    // -------------------------
    // ENGINE COMMANDS
    // -------------------------
    const data = {
      message: this.env.resolve(
        tokens.slice(1).join(" ").replace(/"/g, "")
      ),
      text: this.env.resolve(
        tokens.slice(1).join(" ").replace(/"/g, "")
      )
    };

    this.jve.command(cmd, data);
  }

  // =========================
  // GET ENV (FOR DEBUG)
  // =========================
  getEnv() {
    return this.env.dump();
  }
}

module.exports = ScriptEngine;