class ServerManager {
  constructor() {
    this.servers = new Map();
  }

  add(id) {
    this.servers.set(id, {
      id,
      clients: []
    });
  }

  broadcast(payload) {
    for (const server of this.servers.values()) {
      console.log(`[SERVER ${server.id}]`, payload);
    }
  }
}

module.exports = ServerManager;
