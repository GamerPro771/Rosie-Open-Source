const Discord = require('discord.js')

module.exports = {
  name: 'vidente',
  aliases: ['futuro', 'respostas'],
  run: async (client, message, args) => {

          const responsesList = [
                  'Claro!',
                  'Sim!',
                  'Não!',
                  'Possivelmente.',
                  'Com certeza!',
                  'Nunca',
                  'Sem chance!'
          ];

          const response = responsesList[Math.floor(Math.random() * responsesList.length)];

          const pergunta = args.join(' ')

          if (!args[0]) {
                  return message.channel.send(`**${message.author} escreva a sua pergunta!**`)
          }

          message.channel.send(`${response}`)
}}
