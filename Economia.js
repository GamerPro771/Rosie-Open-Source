const db = require("quick.db")

exports.run = async (client, message, args) => {
  const Valor = Math.floor(Math.random() * 30)
  
  await db.set(`money_${message.author.id}`, Valor)
  
  console.log("Valor Alterado!")
}
