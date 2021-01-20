const Discord = require('discord.js');

const client = new Discord.Client();

client.login(process.env.TOKEN)

var prefix = ','

/////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
  
  if(message.content === 'halo') {
    message.channel.send('haii')
  }
  
  if(message.content === 'hai') {
    message.channel.send('Haloooo')
  }
  
/////////////////////////////////////////////////////////////////////////////
  
  client.user.setActivity(`,help | Karsa official BOT `, {type : 'WATCHING'});
  
/////////////////////////////////////////////////////////////////////////////
  
  if(message.content.startsWith(`${prefix}help`)) {
  const ngentot = new Discord.MessageEmbed()
    .setColor('#945A1B')
    .setAuthor('Help Command', client.user.displayAvatarURL())
    .setDescription('ini commands nya sayang')
    .setFooter('Official bot from Karsa Bestari');
  message.channel.send(ngentot)
}
  
/////////////////////////////////////////////////////////////////////////////
  
  if(message.content.startsWith(`${prefix}say`)) {
    var text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply('What did u say Honey?')
    message.channel.send(text)
    message.delete();
}
  
/////////////////////////////////////////////////////////////////////////////
  
  if(message.content.startsWith(`${prefix}ping`)) {
    const start = Date.now()
    message.channel.send("Looking for ping...").then(message => {
    const end = Date.now()
    message.edit(`Hi darling:heart:.. This is your ping **${(end - start)}**ms!`) 
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
  else{ message.channel.send("I can't find that user") }
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
})