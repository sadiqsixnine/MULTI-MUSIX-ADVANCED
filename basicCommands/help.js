const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: 'Im here to Help!',
        iconURL: 'https://cdn.discordapp.com/attachments/1192515892538523702/1230625154665812069/standard.gif?ex=6622dc7c&is=66218afc&hm=92a86b85d0f6c1a71218e7b9b47ec159d667fb3e7ef183799e02f1612655e2a0&', 
        url: 'https://discord.gg/ce5tJ9kjy3'
    })
     
      .setDescription(`__**STATS :**__\n\n> **📊 Bot in servers:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Made By [LEGIONS](https://discord.gg/ce5tJ9kjy3)**\n\n__**COMMANDS :**__ `)
      .addFields(
        // Basic commands category
        {
          name: '▶️  Basic',
          value: '`avatar`, `owner`, `support`, `invite`, `userinfo`',
          inline: true,
        },
        // Music commands category
        {
          name: '▶️  Music',
          value: '`play`, `stop`, `history`,`volume`,`pause`,`resume`,`247`',
          inline: true,
        },
        //fun category
        {
          name: '▶️  Fun',
          value: ' `ascii`, `joke`, `meme`, `roll`',
          inline: true,
        },
        //image category
        {
          name: '▶️  Image',
          value: '`cat`, `dog`',
          inline: true,
        },
        //anime category
        {
          name: '▶️  Anime',
          value: '`<prefix>animecommands for more info`',
          inline: true,
        },
        // Utility commands category
        {
          name: '▶️  Utility',
          value: '`kick`, `ban`, `serverinfo`,`userinfo`, `clear`',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://cdn.discordapp.com/attachments/1192515892538523702/1230625154665812069/standard.gif?ex=6622dc7c&is=66218afc&hm=92a86b85d0f6c1a71218e7b9b47ec159d667fb3e7ef183799e02f1612655e2a0&`);

    const button1 = new ButtonBuilder()
      .setLabel('YouTube')
      .setURL('https://www.youtube.com/@sadiqsixnine')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://discord.gg/ce5tJ9kjy3')
      .setStyle(ButtonStyle.Link);

    const button3 = new ButtonBuilder()
      .setLabel('Instagram')
      .setURL('https://www.instagram.com/sadiq.sixnine69')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2, button3);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
