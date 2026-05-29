class Parser {
  parse(script) {
    const lines = script.split("\n").map(l => l.trim()).filter(Boolean);

    return lines.map(line => {
      const [command, ...args] = this.tokenize(line);

      return {
        command,
        args
      };
    });
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
