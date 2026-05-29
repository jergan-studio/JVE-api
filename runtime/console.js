const readline = require("readline");

function startConsole(jve) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("🔥 JVE v1 Console Ready");
  console.log("Format: command key=value key=value");

  rl.on("line", (input) => {
    const [cmd, ...args] = input.split(" ");
    const data = {};

    args.forEach(a => {
      const [k, v] = a.split("=");
      data[k] = v;
    });

    jve.command(cmd, data);
  });
}

module.exports = startConsole;
