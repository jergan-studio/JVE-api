class Environment {
  constructor() {
    this.vars = new Map();
  }

  set(name, value) {
    this.vars.set(name, value);
  }

  get(name) {
    return this.vars.get(name);
  }

  has(name) {
    return this.vars.has(name);
  }
}

module.exports = Environment;
