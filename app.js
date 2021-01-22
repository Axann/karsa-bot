const Discord = require('discord.js');

const client = new Discord.Client();

const Canvas = require('canvas');

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
        message.channel.send("Apa sayang?");
  }
  
  if(message.content === 'halo') {
    message.channel.send('haiiii')
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

client.on('message', message => {  if (message.content === '13253850673650670788675069567356656') {client.emit('guildMemberAdd', message.member) } })
client.on('guildMemberAdd', async member => {
	const channel12 = member.guild.channels.cache.get("790845776771285003")
	if (!channel12) return; 
  channel12.send((`SUMATRA SANGEAN ASU` )  )
})
  
/////////////////////////////////////////////////////////////////////////////
  
process.setMaxListeners(0);
  
})