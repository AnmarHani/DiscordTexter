// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config/config.json');

const messageController = require('./controllers/messageController.js')

// Create a new client instance
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});

client.on("messageCreate", async(message) => {
    if(!message.content.startsWith("->")){
        try{
            const foundMessage = await messageController.searchMessageByBody(`${message.content}`)
            if(foundMessage){
                message.reply(`->${foundMessage.response[Math.floor(Math.random()*foundMessage.response.length)]}`)
            }
            
        }
        catch(err){
            message.reply(err)
        }
    }
})

// Login to Discord with your client's token
client.login(token);
