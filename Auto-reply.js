const Discord = require('discord.js')

exports.run = async (client, message) => {
  if(message.author.bot || message.channel.type == "dm") return;
  
  if(!message.content.startsWith(`<@!${client.user.id}>`) && !message.content.startsWith(`<@${client.user.id}>`)) return;
  
    message.channel.send(`**😘 Olá ${message.author}!**`)
};
