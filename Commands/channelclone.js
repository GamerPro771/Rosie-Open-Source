const Discord = require('discord.js');

module.exports = {
  name: 'clonechannel',
  aliases: ['cclone'],
  run: async (client, message, args) => {
          let canal = message.mentions.channels.first()

          if (
                  !message.member.permissions.has('ADMINISTRATOR') ||
                  !message.member.permissions.has('MANAGE_CHANNELS')
                  ) {
                          return message.channel.send(`**${message.author} você não tem permissão para clonar canais!**`)
                  }

                if (!canal) {
                        return message.channel.send(`**${message.author} mencione o canal que deseja clonar após o comando!**`)
                }

                let vezes = 0;

                if (args[1] && !isNaN(args[1])) {
                        vezes = parseInt(args[1], 10)
                }

                if (vezes > 5) { //Este é o número maximo de vezes que ele irá clonar, você pode almenta-lo, mas eu não recomendo isso.
                        return message.channel.send(`**${message.author} você só pode escolher no maximo 5 vezes!**`)
                }
                
                i = 0;

                while (i <= vezes) {
                        canal.clone()
                        i++
                }
  }}
