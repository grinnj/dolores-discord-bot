
exports.run = (client, message, args) => {
	if(("254960726903357441"==message.author.id)||("272033208860672001"==message.author.id)) {
		const sayMessage = args.join(" ");
		message.delete().catch(O_o=>{});
		message.channel.send(sayMessage).catch(console.error);
	}
}