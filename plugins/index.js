const example = require("./example.plugin");

function loadPlugins(jve) {
  const plugins = [example];

  plugins.forEach(p => jve.loadPlugin(p));
}

module.exports = loadPlugins;
