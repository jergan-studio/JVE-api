const fs = require("fs");
const path = require("path");

class FileRunner {
  constructor(scriptEngine) {
    this.scriptEngine = scriptEngine;
  }

  run(filePath) {
    const absolute =
      path.resolve(filePath);

    if (!fs.existsSync(absolute)) {
      throw new Error(
        `Script not found: ${absolute}`
      );
    }

    const script =
      fs.readFileSync(
        absolute,
        "utf8"
      );

    this.scriptEngine.run(script);
  }
}

module.exports = FileRunner;
