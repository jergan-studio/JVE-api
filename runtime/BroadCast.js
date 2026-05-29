module.exports = (data, ctx) => {
  const text = data.text || "Empty broadcast";

  console.log("\n🌍 BROADCAST");
  console.log("------------");
  console.log(text);
  console.log("------------\n");

  ctx.servers.broadcast({
    type: "broadcast",
    text
  });
};
