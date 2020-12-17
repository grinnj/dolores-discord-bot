var help = require('./help.json');
exports.run = (client, message, args) => {
    message.channel.send(help.commands).catch(console.error);
}