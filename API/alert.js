module.exports = (data, ctx) => {
  const message = data.message || "No message";

  console.log("\n🚨 ALERT");
  console.log("--------");
  console.log(message);
  console.log("--------\n");

  ctx.servers.broadcast({
    type: "alert",
    message
  });
};
