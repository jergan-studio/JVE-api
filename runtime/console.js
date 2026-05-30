const readline = require("readline");

function startConsole(jve) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "JVE> "
  });

  console.log("\n======================");
  console.log("🔥 JVE CONSOLE ACTIVE");
  console.log("======================");
  console.log("Type commands like:");
  console.log("alert message=hello");
  console.log("broadcast text=server online");
  console.log("======================\n");

  rl.prompt();

  rl.on("line", (input) => {
    input = input.trim();

    if (!input) {
      rl.prompt();
      return;
    }

    // =========================
    // SPLIT COMMAND + ARGS
    // =========================
    const [cmd, ...args] = input.split(" ");

    const data = {};

    // parse key=value pairs
    args.forEach(arg => {
      const eqIndex = arg.indexOf("=");

      if (eqIndex !== -1) {
        const key = arg.slice(0, eqIndex);
        const value = arg.slice(eqIndex + 1);

        data[key] = value;
      } else {
        // fallback: if no key=value, treat as message
        if (!data.message) {
          data.message = arg;
        }
      }
    });

    try {
      jve.command(cmd, data);
    } catch (err) {
      console.log("[JVE CONSOLE ERROR]", err.message);
    }

    rl.prompt();
  });

  rl.on("close", () => {
    console.log("\n👋 JVE Console closed");
    process.exit(0);
  });
}

module.exports = startConsole;