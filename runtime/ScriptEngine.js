const Parser = require("./Parser");
const Executor = require("./Executor");
const Environment = require("./Environment");

class ScriptEngine {
  constructor(jve) {
    this.jve = jve;

    this.env = new Environment();
    this.parser = new Parser();
    this.executor = new Executor(jve, this.env);
  }

  run(script) {
    const parsed = this.parser.parse(script);
    this.executor.run(parsed);
  }
}

module.exports = ScriptEngine;
