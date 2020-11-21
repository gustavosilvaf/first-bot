const Discord = require('discord.js');

const client = new Discord.Client();

const config = require('./configs/config.json');

const messageController = require('./controllers/messageController');

client.on('ready', () => {
  console.log(`Bot foi iniciado em ${client.user.tag}`);
});

client.on('message', msg => {
  messageController(msg);
});

console.log(client.channels);


client.login(config.token);