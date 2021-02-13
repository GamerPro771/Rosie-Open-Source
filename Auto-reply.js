const Discord = require('discord.js')

exports.run = async (client, message) => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;
  if(!message.content.startsWith(`<@!${client.user.id}>`)) return;
    message.channel.send(`**😘 Olá ${message.author}, em que posso servilo(a)?**`)
}

//AS LINHAS ABAIXO DEVEM SER ADICIONADAS AO INDEX.JS E REMOVIDAS DAQUI!


client.on('message', async (message) => {
  const args = message.content
	.trim()
	.slice(config.prefix.length)
	.split(/ +/g);
  
  const autoreply = require('./Auto-Reply.js'); //REQUER O ARQUIVO Auto-Reply.js
  autoreply(client, message);
});
