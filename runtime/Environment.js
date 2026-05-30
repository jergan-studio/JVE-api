class Environment {
  constructor() {
    this.vars = new Map();
  }

  // set variable
  set(name, value) {
    this.vars.set(name, value);
  }

  // get variable
  get(name) {
    return this.vars.get(name);
  }

  // check variable
  has(name) {
    return this.vars.has(name);
  }

  // delete variable
  delete(name) {
    this.vars.delete(name);
  }

  // clear all
  clear() {
    this.vars.clear();
  }

  // resolve (VERY IMPORTANT for scripts)
  resolve(value) {
    if (this.has(value)) {
      return this.get(value);
    }
    return value;
  }

  dump() {
    return Object.fromEntries(this.vars);
  }
}

module.exports = Environment;