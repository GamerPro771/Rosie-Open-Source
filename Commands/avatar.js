module.exports = {
        name: 'avatar',
        type: 'images',
        aliases: ['fotinha'],
        run: async (client, message, args) => {
                const Discord = require('discord.js')
                let user = message.mentions.users.first() || client.users.cache.get(args[0]);
                if (!user) {
                        return message.channel.send(`**❌ ${message.author} Lembre-se de mencionar um usuário para ver o seu avatar!**`);
                }
                let mensãoavatar = user.displayAvatarURL({ format: 'png', size: 256 });

                const embed = new Discord.MessageEmbed()
                        .setTitle(`Avatar de ${user.tag}`)
                        .setColor('#FFC0CB')
                        .addField(`⠀`, `**Clique [aqui](${user.displayAvatarURL()}) para baixar o avatar de ${user.username}.**`)
                        .setImage(mensãoavatar)
                await message.channel.send(embed);
        }
}
