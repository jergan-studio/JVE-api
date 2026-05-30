class JVEScriptError extends Error {
  constructor(message, line = null) {
    super(message);

    this.name = "JVEScriptError";
    this.line = line;
  }

  toString() {
    if (this.line !== null) {
      return `[JVE ERROR] Line ${this.line}: ${this.message}`;
    }

    return `[JVE ERROR] ${this.message}`;
  }
}

module.exports = JVEScriptError;
