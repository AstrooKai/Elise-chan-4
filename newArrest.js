const config = require('./settings.json');
const { EmbedBuilder, Colors } = require('discord.js');

const hasAuthorizedRole = authorMember.roles.cache.some((role) =>
  authorizedRoles.includes(role.id)
);

if (!hasAuthorizedRole) {
  let embed = new EmbedBuilder()
    .setDescription('You are not authorized to use this command.')
    .setColor(Colors.Red);

  d.data.interaction.reply({ embeds: embed, ephemeral: true })
}

if ($authorID === $slashOption[user]) {
  let embed = new EmbedBuilder()
    .setDescription('You cannot arrest yourself!')
    .setColor(Colors.Red);
  
  d.data.interaction.reply({ embeds: embed, ephemeral: true })
}

if ($isBot[$slashOption[user]]) {
  const embed = new EmbedBuilder()
    .setDescription('Bots cannot be arrested!')
    .setColor(Colors.Red);

  d.data.interaction.reply({ embeds: embed, ephemeral: true });
}

// Check if the author has any role within the specified array
if (authorRolesArray.some(roleId => authorMember.roles.cache.has(roleId))) {
  // Iterate through each role in the array
  for (const roleId of authorRolesArray) {
    // Check if the author has the current role
    if (authorMember.roles.cache.has(roleId)) {
      // Check if the target has the same role
      if (targetMember.roles.cache.has(roleId)) {
        // Check if the target's role is higher than the author's role
        if (targetMember.roles.highest.position > authorMember.roles.highest.position) {
          // Execute the specified code
          console.log(codeToExecute);
        }
        break; // Exit the loop once a matching role is found
      }
    }
  }
}