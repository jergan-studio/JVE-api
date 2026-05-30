module.exports = (data, ctx) => {
  const message =
    data.text ||
    data.message ||
    "Empty broadcast";

  console.log("\n🌍 BROADCAST");
  console.log("====================");
  console.log(message);
  console.log("====================\n");

  // Send to all servers (if your ServerManager supports it)
  if (ctx.servers && ctx.servers.broadcast) {
    ctx.servers.broadcast({
      type: "broadcast",
      message
    });
  } else {
    // fallback (safe mode)
    console.log("[JVE] No server broadcast system found");
  }

  // emit event (optional but recommended)
  if (ctx.events) {
    ctx.events.emit("broadcast", {
      message
    });
  }
};