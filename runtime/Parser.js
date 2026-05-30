class Parser {
  parse(script) {
    const lines = script.split("\n");

    const output = [];

    for (let i = 0; i < lines.length; i++) {
      const raw = lines[i].trim();

      // skip empty lines
      if (!raw) continue;

      // skip comments
      if (raw.startsWith("#")) continue;

      output.push({
        line: i + 1,
        raw,
        tokens: this.tokenize(raw)
      });
    }

    return output;
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