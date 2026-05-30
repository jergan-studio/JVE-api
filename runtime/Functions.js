class Functions {
  constructor() {
    this.functions = new Map();
  }

  define(name, body) {
    this.functions.set(name, body);
  }

  exists(name) {
    return this.functions.has(name);
  }

  get(name) {
    return this.functions.get(name);
  }
}

module.exports = Functions;
