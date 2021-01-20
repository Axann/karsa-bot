const Discord = require('discord.js');

const client = new Discord.Client();

client.login(process.env.TOKEN)

var prefix = ','

/////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
  
  if(message.content === 'halo') {
    message.channel.send('haii')
  }
  
  if(message.content === 'kamu lagi ngapain?') {
    message.channel.send('kan aku lagi main sama ahsan <3')
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
})