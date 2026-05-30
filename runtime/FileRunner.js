const fs = require("fs");

class FileRunner {
  constructor(scriptEngine) {
    this.scriptEngine = scriptEngine;
  }

  runFile(path) {
    const script = fs.readFileSync(path, "utf-8");
    this.scriptEngine.run(script);
  }
}

module.exports = FileRunner;
