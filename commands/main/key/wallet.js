const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wallet')
		.setDescription('Gives the Reward Bot wallet address.'),
	async execute(interaction) {
		await interaction.reply(`This Command is not setup yet. ${interaction.guild.name}`);
	},
};