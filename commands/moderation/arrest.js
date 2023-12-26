const config = require('../../settings.json');

module.exports = {
  name: "rsm",
  type: "interaction",
  prototype: "slash",
  code: `
  $interactionReply[;{newEmbed:{title:*$username[$slashOption[user]] broke a leg. Oops.*}{image:${config.embeds.images.arrest}}{color:${config.embeds.colors.default}}};;;everyone;]
  $giveRole[$guildID;$slashOption;${config.bot.system.rashomonRole};false]
  
  
  $onlyIf[$isBot[$slashOption[user]]!=true;{newEmbed:{description:Bots cannot be arrested!}{color:Red}}{options:{ephemeral}}{extraOptions:{interaction}}]
  $onlyIf[$slashOption[user]!=$authorID;{newEmbed:{description:You cannot arrest yourself!}{color:Red}}{options:{ephemeral}}{extraOptions:{interaction}}]
  $onlyForRoles[${config.bot.system.authorizedRoles.join(';')};{newEmbed:{description:You are not authorized to use this command.}{color:Red}}{options:{ephemeral}}{extraOptions:{interaction}}]`
}