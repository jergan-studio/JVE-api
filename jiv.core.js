const JVE = {
  vars: {},
  settings: {
    multiplayer: false
  },

  commands: {},

  register(name, fn) {
    this.commands[name] = fn;
  },

  run(command, args = []) {
    if (!this.commands[command]) {
      return console.error("Unknown command:", command);
    }

    return this.commands[command](args);
  }
};
