//Este é o index, ou seja o arquivo principal do seu bot!

const express = require('express'); //cria uma constant para o express
const app = express();
const PORT = process.env.PORT //a porta em que o projeto ficará hospedado REQUER O ARQUIVO .env

//incio do bot
app.get('/', (request, response) => {
	response.sendStatus(200)
});

app.listen(PORT, () => {
  console.log(`Estou logada`)
})

const Discord = require('discord.js'); //cria a constant da libraria do discord
const client = new Discord.Client() //cria um client (BOT)
const config = require('./config.json'); //arquivo do prefixo do bot REQUER O ARQUIVO config.josn

//Detecta quando uma mensagem é enviada
client.on('message', async (message) => {
  const args = message.content
	.trim()
	.slice(config.prefix.length)
	.split(/ +/g);
  
  const commands = require('./commandsrun'); //cria um caminho até o arquivo executor de comandos
  commands.run(client, message, args); //exporta os itens do index para o arquivo
});

client.login(process.env.TOKEN) //loga o bot REQUER O ARQUIVO .env
