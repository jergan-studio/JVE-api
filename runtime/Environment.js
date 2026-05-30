class Environment {
  constructor() {
    this.variables = new Map();
  }

  set(name, value) {
    this.variables.set(name, value);
  }

  get(name) {
    return this.variables.get(name);
  }

  has(name) {
    return this.variables.has(name);
  }

  delete(name) {
    this.variables.delete(name);
  }

  clear() {
    this.variables.clear();
  }

  dump() {
    return Object.fromEntries(this.variables);
  }
}

module.exports = Environment;
