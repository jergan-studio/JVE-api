const EventBus = require("./engine/EventBus");
const JVECore = require("./engine/JVECore");

const ServerManager = require("./runtime/ServerManager");
const startConsole = require("./runtime/console");

const alert = require("./api/alert");
const broadcast = require("./api/broadcast");

const loadPlugins = require("./plugins");


// CORE SYSTEMS
const events = new EventBus();
const servers = new ServerManager();

// ENGINE
const jve = new JVECore({ events, servers });


// SERVERS
servers.add("US-1");
servers.add("EU-1");
servers.add("DEV");


// COMMANDS
jve.register("alert", alert);
jve.register("broadcast", broadcast);


// EVENTS
events.on("command", (e) => {
  console.log(`[EVENT] ${e.name} executed`);
});


// PLUGINS
loadPlugins(jve);


// START CLI
startConsole(jve);
