const Discord = require('discord.js');
const yout = require('ytdl-core')

exports.run = async (client, message, args) => {
  const content = args.join(' ')
  if(!args[0]) {
   return message.channel.send(`** ${message.author} escreva o URL da música desejada!**`)
  }
  if(message.member.voice.channel) {
    
    const connection = await message.member.voice.channel.join();
    connection.play(yout(content, { filter: 'audioonly' }));
    
  } else {
    message.channel.send(`**${message.author}, conecte-se em um canal de voz antes de executar o comando!**`)
 }  
}
