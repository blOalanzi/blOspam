const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get('549285511399735305')
setInterval(function() {
channel.send(`@here blO`);
}, 30)
})

client.login('NTQ4ODI4MjY5MDY4MTU2OTM5.D1PY6g.RxrXvWUvZOfIm-A9dtFnmjlIukA');
