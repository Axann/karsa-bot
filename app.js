const Discord = require('discord.js');

const client = new Discord.Client();

client.login(process.env.TOKEN)

var prefix = ','

client.on('ready', () => {
  console.log(`Bot ${client.user.tag} dah aktif NGENTODDD!`);
});

/////////////////////////////////////////////////////////////////////////////

  const status = [
    `Ahsan Ganteng`,
    `,help | To get started`,
    `KarsaBestari official Bot`, 
    `aku sayang kamu` ]
  
  setInterval(() => {
  client.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "WATCHING"})
  }, 5000)

/////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
  
  if (message.author.bot) return false;
  if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
  if (message.mentions.has(client.user.id)) {
        message.channel.send("Hello there! iam using Discord");
  }
  
  if(message.content === 'halo') {
    message.channel.send('haii')
  }
  
  if(message.content === 'hai') {
    message.channel.send('Haloooo')
  }
  
/////////////////////////////////////////////////////////////////////////////
  
  if(message.content.startsWith(`${prefix}help`)) {
  const ngentot = new Discord.MessageEmbed()
    .setColor('#945A1B')
    .setAuthor('Help Command', client.user.displayAvatarURL())
    .setDescription('ini commands nya sayang')
    .addField('ADMINISTRATOR', '`kick` , `ban`')
    .addField('GENERAL COMMANDS', '`ping` , `av` , `say`')
    .setFooter('Official bot from Karsa Bestari');
  message.channel.send(ngentot)
}
  
/////////////////////////////////////////////////////////////////////////////
  
  if(message.content.startsWith(`${prefix}say`)) {
    var text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply('Mau ngomong apaan su?')
    message.channel.send(text)
    message.delete();
}
  
/////////////////////////////////////////////////////////////////////////////
  
  if(message.content.startsWith(`${prefix}ping`)) {
    const start = Date.now()
    message.channel.send("Looking for ping...").then(message => {
    const end = Date.now()
    message.edit(`pong **${(end - start)}**ms!`) 
  } 
 )
}
  
/////////////////////////////////////////////////////////////////////////////
  
  if(message.content.startsWith(`${prefix}av`)){        
  if(message.mentions.users.size){
  let member = message.mentions.users.first()
  if(member){
    const embed =new Discord.MessageEmbed()
      .setColor('#945A1B')
      .setImage(member.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
      .setTitle(`AVATAR`)
      .setDescription(`${member.username}#${member.discriminator}`)
      .setFooter(`Requested by ${message.author.username}#${message.member.user.discriminator}`)
    message.channel.send(embed)  
}
  else{ message.channel.send("Orang nya gaada diserver ini su") }
} else{
    const embed = new Discord.MessageEmbed()
      .setColor('#945A1B')
      .setImage(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
      .setTitle(`AVATAR`)
      .setDescription(`${message.author.username}#${message.member.user.discriminator}`)
      .setFooter(`Requested by ${message.author.username}#${message.member.user.discriminator}`)
    message.channel.send(embed)
 }
}
  
/////////////////////////////////////////////////////////////////////////////
  
  if(message.content.startsWith(`${prefix}kick`)) {

    let member = message.mentions.members.first();
    if(!member) return message.reply('Mau Kick saha asu?')
    member.kick().then((member) => {
    message.channel.send(`:wave: Berhasil mengeluarkan ${member.displayName}`); 
    }).catch(() => {
    if(!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
      message.reply("Lu ga punya wewenang untuk Kick asu");
    } else if(member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
      message.reply("Lu ga punya wewenang untuk Kick asu");
   }
  }
 )
}
  
/////////////////////////////////////////////////////////////////////////////
  
  if(message.content.startsWith(`${prefix}ban`)) {
  
  let member = message.mentions.members.first();
  if(!member) return message.reply('Mau ban saha?')
  member.ban().then((member) => {
    message.channel.send(`:wave: Berhasil Ter-Ban ${member.displayName}!`);
  }).catch(() => {
    if(!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
      message.reply("Lu ga punya wewenang untuk Ban asu");
    } else if(member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
      message.reply("Lu ga punya wewenang untuk Ban asu");
   } 
  }
 )  
}  
  
/////////////////////////////////////////////////////////////////////////////

  // Pass the entire Canvas object because you'll need to access its width, as well its context
const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Assign the decided font to the canvas
	ctx.font = applyText(canvas, member.displayName);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(member.displayName, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Welcome to the server, ${member}!`, attachment);
});
  
/////////////////////////////////////////////////////////////////////////////
  
  
  
})