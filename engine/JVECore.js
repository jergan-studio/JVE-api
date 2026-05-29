const CommandRegistry = require("./CommandRegistry");

class JVECore {
  constructor({ events, servers }) {
    this.events = events;
    this.servers = servers;

    this.commands = new CommandRegistry();
    this.plugins = [];
  }

  register(name, handler) {
    this.commands.register(name, handler);
  }

  command(name, data = {}) {
    this.events.emit("command", { name, data });

    return this.commands.execute(name, data, this);
  }

  loadPlugin(plugin) {
    plugin.init(this);
    this.plugins.push(plugin);
  }
}

module.exports = JVECore;
