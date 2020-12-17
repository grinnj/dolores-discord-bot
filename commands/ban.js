exports.run = (client, message, args) => {
	if("272033208860672001"==message.author.id) {
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    //if(!member.bannable) 
    //  return message.reply("I cannot ban this user!");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
}