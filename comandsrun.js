const Discord = require('discord.js');

exports.run = async (client, message, args, clientCommands) => {
        message.delete()

        const commandName = args.shift().toLowerCase()

        const command = clientCommands.get(commandName) ||
                clientCommands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))

        if (command != null) {
                command.run(client, message, args).catch(err => console.log(err));
        }

        else message.channel.send(`${message.author} o comando escrito não é valido!`)
}
