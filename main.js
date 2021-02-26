const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(commandFiles.name, command);
}


client.once('ready', () => {
    console.log('TheNotSoGoodGamer is online!');
});

client.on('message', message =>{
     
    message.member.roles.cache.has
    if(!message.content.startsWith(prefix) || message.author.bot) return;

     const args = message.content.slice(prefix.length).split(/ +/);
     const command = args.shift().toLowerCase();

     if (command == 'ping'){
         message.channel.send('pong!');
    } else if (command == 'youtube'){
        message.channel.send('https://www.youtube.com/thenotsogoodgamer');
    } else if (command == 'hello'){
        message.channel.send('hello!');
    } else if (command == 'give role cool bois'){
        message.channel.send('you will recieve the role')

        }
    
});

client.login('ODEzODMzODE3MDQ3NTY0MzM5.YDVDzg.F8TUcEvoqnYt1HZSgDvV7U8Taos');

