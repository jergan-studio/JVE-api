class Parser {
  parse(script) {
    const lines = script.split("\n");

    const instructions = [];

    for (let lineNumber = 0; lineNumber < lines.length; lineNumber++) {
      const raw = lines[lineNumber].trim();

      // Ignore blanks
      if (!raw) continue;

      // Ignore comments
      if (raw.startsWith("#")) continue;

      instructions.push({
        line: lineNumber + 1,
        raw,
        tokens: this.tokenize(raw)
      });
    }

    return instructions;
  }

  tokenize(line) {
    const regex = /"([^"]*)"|(\S+)/g;

    const tokens = [];
    let match;

    while ((match = regex.exec(line)) !== null) {
      tokens.push(match[1] || match[2]);
    }

    return tokens;
  }
}

module.exports = Parser;
