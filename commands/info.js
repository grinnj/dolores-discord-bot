
exports.run = (client, message, args) => {
    message.channel.send("I'm Dolores. High intelligence android.\nBuild:"+client.botVersion).catch(console.error);
}