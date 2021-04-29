const Discord = require('discord.js');

module.run = async (client, message, args) => {
                const channel = message.channel

                const webhooks = await channel.fetchWebhooks();
                const webhook = webhooks.find(hook => hook.name === "Nome do webhook" && hook.owner.id === "ID do seu bot");

                const messages = [ //Suas frases  vão aqui!
                    "",
                    "",
                    ""//....
                ];

                const random = messages[Math.floor(Math.random() * messages.length)]; //Escolhe uma frase aleatória!

                if (!webhook) {

                        channel.createWebhook("Nome do webhook", {
                                avatar: "", //Avatar do webhook
                                reason: `` //Rasão do webhook ter sido criado
                        })
                
                        .then(async hook => {
                                hook.send(`${random}`)
                        })

                        .catch(err => message.channel.send(`Mensagem de erro`));

                } else {
                        webhook.send(`${random}`)
                };
        }
