class Executor {
  constructor(jve, environment) {
    this.jve = jve;
    this.environment = environment;
  }

  resolve(value) {
    if (this.environment.has(value)) {
      return this.environment.get(value);
    }

    return value;
  }

  executeInstruction(instruction) {
    const { line, tokens } = instruction;

    const command = tokens[0];

    try {
      switch (command) {

        // -----------------
        // VARIABLES
        // -----------------

        case "set": {
          const name = tokens[1];

          if (!name) {
            throw new Error("Missing variable name");
          }

          const value =
            tokens.slice(2).join(" ");

          this.environment.set(name, value);

          break;
        }

        case "echo": {
          const value =
            this.resolve(tokens.slice(1).join(" "));

          console.log(value);

          break;
        }

        // -----------------
        // ENGINE COMMANDS
        // -----------------

        default: {
          const argument =
            this.resolve(tokens.slice(1).join(" "));

          this.jve.command(command, {
            message: argument,
            text: argument
          });
        }
      }

    } catch (err) {
      console.error(
        `[JVE ERROR] Line ${line}: ${err.message}`
      );
    }
  }

  run(instructions) {
    for (const instruction of instructions) {
      this.executeInstruction(instruction);
    }
  }
}

module.exports = Executor;
