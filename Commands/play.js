exports.run: async (client, message, args) => {
  const content = args.join(' ')
  if(!args[0]) {
    return message.channel.send(`Coloque o nome ou o link do vídeo desejado após o comando!`)
  }
  if(message.member.voice.channel) {
    const connection = await message.member.voice.channel.join();

    var opts = {
            maxResults: 1,
            key: "Sua Key do youtube" //Existem varios tutoriais de como pegar uma key, este é um deles: https://www.youtube.com/watch?v=VqML5F8hcRQ
    }

    search(args, opts, function (err, results) {
            if (err) return console.log(err);

            results.forEach(result => {
                const link = result.link
            });

            ServerList.forEach(url => {
                    connection.play(yout(`${url}`, { filter: 'audioonly', highWaterMark: 50 }))
            })
    });
  } else {
    message.channel.send(`Entre em um canal de vóz antes de executar o comando!`)
  }
}
