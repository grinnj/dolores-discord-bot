const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
var pack = require('./package.json');
const config = require("./config.json");
client.botVersion=pack.version;
client.botAuthor=pack.author;
client.servers={};
// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", async message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  // This is the best way to define args. Trust me.
  var args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
	let commandFile = require(`./commands/improvisation_only.js`);
	args.unshift(command);
    commandFile.run(client, message, args); 
    //console.error(err);
  }
});

	client.on("error", (e) => console.error(e));
	client.on("warn", (e) => console.warn(e));
	client.on("debug", (e) => console.info(e));

client.login(config.token);