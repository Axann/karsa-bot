const Discord = require('discord.js');

const client = new Discord.Client();

client.login(process.env.TOKEN)

client.on('message', message => {
  
  if(message.content === 'halo') {
    message.channel.send('haii')
    
  }
  
  client.user.setActivity(`ndak bisa basa enggress `, {type : 'LISTENING'});
  
  
  
})