const express = require('express');
const Discord = require('discord.js');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT //A porta em que o projeto ficará hospedado, é recomendado que a salve em uma variavel de ambiante, como mostrado!


app.get('/', (request, response) => {
   response.sendStatus(200) //Envia o status 200 (ok),
});

app.listen(PORT);

const client = new Discord.Client() //cria um client (BOT),
const config = require('./config.json'); //arquivo do prefixo do bot REQUER O ARQUIVO config.josn,

const clientCommands = new Discord.Collection();

const clientCommands = new Discord.Collection();

const Commands = await fs.readdirSync("Caminho para a sua pasta de comandos, ex ./Commands").filter(file => file.endsWith('.js'));

for (const file of Commands) {
	const command = require(`./Caminho para pasta de comandos/${file}`);
	clientCommands.set(command.name, command);
};

client.on('message', async (message) => {
  	const args = message.content
  		.trim()
  		.slice(config.prefix.length)
  		.split(/ +/g);
  
  	const commandtimer = require('./command-timer.js') //Requer o arquivo command-timer.js
  	commandtimer.run(client, message, args)
	
	const autoreply = require('./Auto-Reply.js'); //REQUER O ARQUIVO Auto-Reply.js
	autoreply(client, message);
});

client.on('ready', () => {
    const status = require('./status.js'); //Requer o arquivo status.js
    status.run(client);
});

//Daqui para baixo pode se adicionar mais linhas de codigo.

client.login("TOKEN DO BOT (é recomendado que o salve em uma variavel de ambiante)") //loga o bot!
