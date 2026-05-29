const EventBus = require("./engine/EventBus");
const JVECore = require("./engine/JVECore");

const ServerManager = require("./runtime/ServerManager");
const startConsole = require("./runtime/console");

// API COMMANDS
const alert = require("./api/alert");
const broadcast = require("./api/broadcast");

// PLUGINS
const loadPlugins = require("./plugins");

// SCRIPT ENGINE (PHASE 2)
const ScriptEngine = require("./runtime/ScriptEngine");


// =======================
// CORE SYSTEMS INIT
// =======================

const events = new EventBus();
const servers = new ServerManager();

const jve = new JVECore({ events, servers });

const script = new ScriptEngine(jve);


// =======================
// SERVERS
// =======================

servers.add("US-1");
servers.add("EU-1");
servers.add("DEV-TEST");


// =======================
// COMMAND REGISTRATION
// =======================

jve.register("alert", alert);
jve.register("broadcast", broadcast);


// =======================
// EVENT SYSTEM LOGGING
// =======================

events.on("command", ({ name, data }) => {
  console.log(`[EVENT] Command executed → ${name}`);
  console.log(`[DATA]`, data);
});

events.on("error", (err) => {
  console.log(`[JVE ERROR]`, err);
});


// =======================
// LOAD PLUGINS (PHASE 2 EXTENSION SYSTEM)
// =======================

loadPlugins(jve);


// =======================
// TEST SCRIPT (PHASE 2)
// =======================

const testScript = `
alert "Server restarting in 5 minutes"
broadcast "Welcome to JVE Script Engine v1"
ping
echo "script runtime active"
`;

console.log("\n======================");
console.log("🧠 RUNNING TEST SCRIPT");
console.log("======================\n");

script.run(testScript);


// =======================
// START INTERACTIVE CONSOLE
// =======================

startConsole(jve);
