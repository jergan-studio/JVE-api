module.exports = {
  name: "example",

  init(jve) {
    jve.register("ping", () => {
      console.log("🏓 pong (plugin)");
    });

    jve.register("echo", (data) => {
      console.log("echo:", data.text);
    });
  }
};
