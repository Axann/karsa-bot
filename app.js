const Discord = require('discord.js');

const client = new Discord.Client();

client.login(process.env.TOKEN)

client.on('message', message => {
  
  if(message.content === 'halo') {
    message.channel.send('haii')
    
  }
  
  
  
  
  
})