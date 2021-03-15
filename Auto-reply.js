const Discord = require('discord.js')

exports.run = async (client, message) => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;
  if(!message.content.startsWith(`<@!${client.user.id}>`)) return;
    message.channel.send(`**😘 Olá ${message.author}, em que posso servilo(a)?**`)
};

/* As linhas abaixo devem ser adicionadas no index.js logo abaixo dessas linhas de codigo aqui

const commands = require('./commandsrun');
commands.run(client, message, args); 

*/

const autoreply = require('./Auto-Reply.js'); //REQUER O ARQUIVO Auto-Reply.js
autoreply(client, message);
