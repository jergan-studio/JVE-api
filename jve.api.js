JVE.register("var", ([name, value]) => {
  JVE.vars[name] = Number(value) || value;
});

JVE.register("set", ([key, value]) => {
  if (key in JVE.settings) {
    JVE.settings[key] = value === "true";
  } else {
    JVE.vars[key] = value;
  }
});

JVE.register("add", ([name, value]) => {
  JVE.vars[name] = (JVE.vars[name] || 0) + Number(value);
});
