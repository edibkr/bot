const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("i think i am ready, yeah!")
});

client.on("message", message => {
  if (message.content === "ping") {
    message.reply("ping");
  }
});

client.login(process.env.BOT_TOKEN);
