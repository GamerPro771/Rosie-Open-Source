const Discord = require('discord.js');

exports.run = async (client, message) => {
  let prefix = "Prefixo do seu bot aqui"

  var blacklist = ['palavra1', 'palavra2', 'palavra3'] //Sua blacklist aqui em formato de array

  const args = message.content.toLowerCase().trim().split(/ +/g) //Novo objeto para os args

  if ( //Filttro
      message.channel.type == "dm" || message.member.permissions.has('ADMINISTRATOR') || message.author.id === message.guild.ownerID || message.channel.nsfw == true || message.content.startsWith(prefix)
  ) {
    return
  } else {
    for (let arg of args) {
      if (blacklist.includes(arg)) { //Caso os a black list inclua algum arg
        return message.delete() //Deleta a mensagem
        }
      }
    }
  }
}

//As linhas abaixo devem ser adicionadas ao index.js e removidas daqui

  const automod = require('./automod.js'); //requer o arquivo  automod.js
  automod.run(client, message)
