const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reward')
		.setDescription('Did you earn anything!?'),
	async execute(interaction) {
		await interaction.reply('Punch Trees...');
	},
};