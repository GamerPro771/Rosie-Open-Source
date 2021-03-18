const Discord = require('discord.js');
const lastcommand = new Set();

exports.run = async (client, message, args) => {
if (lastcommand.has(message.author.id) && message.author.id != "ID DO DONO DO BOT") {
    msg = await message.channel.send(`**❌ ${message.author} espere 3 segundos para executar outro comando!**`),
     setTimeout(() => {
      msg.delete()
    }, 3000)
}  else {
    lastcommand.add(message.author.id)
    
    //As linhas aqui abaixo ja existem nos index.js, remova as do index
    const commandsrun = require('./Command-Run.js');
    commandsrun.run(client, message, args)

    setTimeout(() => {
      lastcommand.delete(message.author.id)
    }, 3000); //Intervalo de espera de execução de comandos em milisegundos, ex: 5000 = 5 segundos.
  }
}

//As linhas de codigo abaixo devem ser adicionadas ao index.js e removidas daqui!

const commandtimer = require('./command-timer.js') //Requer o arquivo command-timer.js
commandtimer.run(client, message, args)
