// ===============================
// JVE COMMAND API
// ===============================

// -------------------------------
// CORE COMMANDS
// -------------------------------

JVE.register("var", ([name, value]) => {
  JVE.vars[name] = Number(value) || value;
});

JVE.register("add", ([name, value]) => {
  JVE.vars[name] = (JVE.vars[name] || 0) + Number(value);
});

JVE.register("set", ([key, value]) => {
  // engine settings
  if (key in JVE.settings) {
    JVE.settings[key] = value === "true";
    return;
  }

  // normal variable
  JVE.vars[key] = value;
});

// -------------------------------
// HTML / DOM COMMANDS
// -------------------------------

JVE.register("alert", (args) => {
  alert(args.join(" "));
});

JVE.register("draw", ([type, x, y, w, h]) => {
  const el = document.createElement("div");

  el.style.position = "absolute";
  el.style.left = x + "px";
  el.style.top = y + "px";
  el.style.width = w + "px";
  el.style.height = h + "px";
  el.style.background = "red";

  if (type === "circle") {
    el.style.borderRadius = "50%";
  }

  document.body.appendChild(el);
});

// -------------------------------
// OPTIONAL CONTROL FLOW (basic v1)
// -------------------------------

JVE.register("loop", ([times, command]) => {
  for (let i = 0; i < Number(times); i++) {
    if (JVE.commands[command]) {
      JVE.run(command, []);
    }
  }
});
