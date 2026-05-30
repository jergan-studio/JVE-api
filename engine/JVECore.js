class JVECore {
  constructor({ events, servers }) {
    this.events = events;
    this.servers = servers;

    this.commands = new Map();
    this.plugins = [];
  }

  // =========================
  // REGISTER COMMANDS
  // =========================
  register(name, fn) {
    this.commands.set(name, fn);
  }

  // =========================
  // RUN COMMAND
  // =========================
  command(name, data = {}) {
    if (!this.commands.has(name)) {
      const err = new Error(`Unknown command: ${name}`);

      if (this.events) {
        this.events.emit("error", err);
      }

      console.log(`[JVE] ❌ ${err.message}`);
      return;
    }

    const fn = this.commands.get(name);

    try {
      this.events?.emit("command", { name, data });

      return fn(data, this);

    } catch (err) {
      this.events?.emit("error", err);
      console.log(`[JVE ERROR]`, err.message);
    }
  }

  // =========================
  // RUN SCRIPT LINE (USED BY SCRIPT ENGINE)
  // =========================
  runCommandLine(cmd, data) {
    return this.command(cmd, data);
  }

  // =========================
  // PLUGINS
  // =========================
  loadPlugin(plugin) {
    plugin(this);
    this.plugins.push(plugin);
  }

  // =========================
  // DEBUG
  // =========================
  listCommands() {
    return [...this.commands.keys()];
  }
}

module.exports = JVECore;