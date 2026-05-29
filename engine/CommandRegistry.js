class CommandRegistry {
  constructor() {
    this.commands = new Map();
  }

  register(name, handler) {
    this.commands.set(name, handler);
  }

  execute(name, data, ctx) {
    const cmd = this.commands.get(name);

    if (!cmd) {
      console.log(`[JVE] Unknown command: ${name}`);
      return;
    }

    return cmd(data, ctx);
  }

  list() {
    return [...this.commands.keys()];
  }
}

module.exports = CommandRegistry;
