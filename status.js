//ESTE CODIGO REQUER QUE ESTA LINHA DE CODIGO SEJA ADICIONADA AO SEU INDEX.JS

client.on('ready', () => {
    //STATUS
    const status = require('./status.js'); //Requer o arquivo status.js
    status.run(client); //exporta as informações para o status
});


const Discord = require('discord.js') // Cria uma constant para a libraria do Discord

exports.run = async (client) => { //Importa os itens do index.js

  const atividades = [ //Conjunto de atividades que serão exibidas
  `👀 ${client.guilds.cache.size} servidores diferentes!`, //Número de servidores em que o Bot está
  `👀 ${client.users.cache.size} usuários!` //Número de usuarios que estão disponiveis para o bot
];

i = 0;
setInterval(() => client.user.setActivity(`${atividades[i++ % atividades.length]}`,{
  type: '// Tipo do status (PLAYING, STREAMING ou WATCHING)'
',
}), //Intervalo da troca em milisegundos);

console.log('Estou online meu povo!') //Loga que está online
}
