const Discord = require('discord.js') // Cria uma constant para a libraria do Discord

exports.run = async (client) => { //Importa os itens do index.js

  let atividades = [ //Conjunto de atividades que serão exibidas
  `👀 ${client.guilds.cache.size} servidores diferentes!`, //Número de servidores em que o Bot está
  `👀 ${client.users.cache.size} usuários!` //Número de usuarios que estão disponiveis para o bot
];

i = 0;
setInterval(() => client.user.setActivity(`${atividades[i++ % atividades.length]}`,{
  type: 'WATCHING' // Tipo do status
}, 30000); //Intervalo da troca em milisegungos (30000 = 30 segundos)

console.log('Estou online!') //Loga que está online
}


//AS LINHAS ABAIXO DEVEM SER ADICIONADAS AO SEU INDEX.JS E REMOVIDAS DAQUI!

client.on('ready', () => {
    const status = require('./status.js'); //Requer o arquivo status.js
    status.run(client); //exporta as informações para o status
});
