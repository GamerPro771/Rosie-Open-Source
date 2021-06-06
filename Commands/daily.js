const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms')

exports.run = async (client, message, args) => {
  let timeout = 86400000; //Equivalente a 1 Dia!

  let min = 200;
  let max = 500;

  let daily = Math.floor(Math.random() * (max - min)) + min;

  let verify = await db.get(`daily_${message.author.id}`)

  if(verify != null && timeout - (Date.now() - verify) > 0) {

    let tempo = ms(timeout - (Date.now() - verify));

    return message.channel.send(`**Você ja coletou a sua reconpensa hoje, tente novamente em ${tempo.hours} horas e ${tempo.minutes} minutos!**`)

  } else {
    await db.add(`money_${message.author.id}`, daily)
    await db.set(`daily_${message.author.id}`, Date.now())
    
    message.channel.send(`✅ **${daily} foram depositados na sua conta!**`)
  }
}}
