const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("701301989186732076")
setInterval(function() {
channel.send(`لا تمسح الروم`);
}, 30)
})

client.login(process.env.BOT_TOKEN);