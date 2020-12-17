exports.run = (client, message, args) => {
	if(args[0]!=null){
	var buff=Math.floor(Math.random() * 100);
	var answer;
	if(buff<45){answer="No";}
	if((buff>45)&&(buff<55)){answer="Maybe";}
	if(buff>55){answer="Yes";}
    message.channel.send(answer).catch(console.error);
	}else{
		message.channel.send("!tellme <Your question>").catch(console.error);
	}
}