//var cleverbot = require("cleverbot.io"),
const cleverbot = require('cleverbot-free')
//bot = new cleverbot("gSZDjZJ18Bg9aUSF", "lPy80mraUnCM7CAcJ4P0W5NDKDZcDdcS");
//bot.setNick("Dolores");
exports.run = (client, message, args) => {
	const sayMessage = args.join(' ')
	console.error(sayMessage)
	cleverbot(sayMessage).then((response) =>
		message.channel.send(response).catch(console.error)
	)
}
