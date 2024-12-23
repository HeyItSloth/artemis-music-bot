const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers] })

client.once(Events.ClientReady, readyClient => {
    console.log(`>> Bot loaded, logged in as ${readyClient.user.tag}`);
});

client.login(token);