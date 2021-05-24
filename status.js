const Discord = require('discord.js') // Cria uma constant para a libraria do Discord

exports.run = async (client) => {

  let atividades = [ //Conjunto de atividades que serão exibidas
  `👀 ${client.guilds.cache.size} servidores diferentes!`,
  `👀 ${client.users.cache.size} usuários!`
];

i = 0;
setInterval(() => client.user.setActivity(`${atividades[i++ % atividades.length]}`,{
  type: 'WATCHING'
}, 10 * 60 * 1000);

 console.log('Estou online!')
}
