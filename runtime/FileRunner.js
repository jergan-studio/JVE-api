const EventBus = require("./engine/EventBus");
const JVECore = require("./engine/JVECore");

const ServerManager = require("./runtime/ServerManager");
const ScriptEngine = require("./runtime/ScriptEngine");
const FileRunner = require("./runtime/FileRunner");
const startConsole = require("./runtime/console");

// Commands
const alert = require("./api/alert");
const broadcast = require("./api/broadcast");

// Plugins
const loadPlugins = require("./plugins");

// ======================
// CORE SYSTEMS
// ======================

const events = new EventBus();
const servers = new ServerManager();

const jve = new JVECore({
  events,
  servers
});

// ======================
// SCRIPT SYSTEM
// ======================

const scriptEngine =
  new ScriptEngine(jve);

const fileRunner =
  new FileRunner(scriptEngine);

// ======================
// SERVERS
// ======================

servers.add("US-1");
servers.add("EU-1");
servers.add("DEV");

// ======================
// COMMANDS
// ======================

jve.register("alert", alert);
jve.register("broadcast", broadcast);

// ======================
// EVENTS
// ======================

events.on("command", ({ name, data }) => {
  console.log(
    `[EVENT] ${name}`,
    data
  );
});

events.on("error", (error) => {
  console.error(
    "[JVE ERROR]",
    error
  );
});

// ======================
// PLUGINS
// ======================

loadPlugins(jve);

// ======================
// STARTUP SCRIPT
// ======================

try {
  fileRunner.run("./startup.jve");
}
catch (err) {
  console.log(
    "[SCRIPT]",
    err.message
  );
}

// ======================
// TEST SCRIPT
// ======================

scriptEngine.run(`
set game JVE

echo game

alert "JVE Script Loaded"

broadcast "Phase 3 Active"
`);

// ======================
// INTERACTIVE CONSOLE
// ======================

startConsole(jve);

// ======================
// READY MESSAGE
// ======================

console.log("");
console.log("=================================");
console.log("JVE Phase 3 Runtime Started");
console.log("=================================");
console.log("Servers:", servers.servers.size);
console.log("");
