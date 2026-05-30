const Parser = require("./Parser");
const Executor = require("./Executor");
const Environment = require("./Environment");

class ScriptEngine {
  constructor(jve) {
    this.jve = jve;

    this.environment =
      new Environment();

    this.parser =
      new Parser();

    this.executor =
      new Executor(
        jve,
        this.environment
      );
  }

  run(script) {
    const parsed =
      this.parser.parse(script);

    this.executor.run(parsed);
  }

  runLine(line) {
    const parsed =
      this.parser.parse(line);

    this.executor.run(parsed);
  }

  getEnvironment() {
    return this.environment;
  }
}

module.exports = ScriptEngine;
