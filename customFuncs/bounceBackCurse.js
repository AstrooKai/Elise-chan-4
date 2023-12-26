module.exports = {
  name: "$bounceBackCurseArrest",
  params: ['target'],
  type: "djs",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    var [target] = data.inside.splits;
    var guild = d.guild?.id;
    guild = await d.util.getGuild(d, guild);

    const author = await d.util.fetchMember(guild, d.author?.id);
    const targetUser = await d.util.fetchMember(guild, target);

    if (author.roles.highest.id === '929382504790622248' && targetUser.roles.highest.id === '929382504790622248') {
      console.log("I didn't hear that, can you try again? :3 Just joking. You don't have the permission to use this command.");
    } else if (author.roles.highest.id === '929382504790622248' && ['920265063087104000', '1017182492756815902', '920281541656068107'].includes(targetUser.roles.highest.id)) {
      console.log("I guess you really want to go to jail, huh... Let me tell Mintarou, Adriel and Marco...");
    } else if (author.roles.highest.id === '920265063087104000' && targetUser.roles.highest.id === '920265063087104000') {
      console.log("Are you serious?! You arresting another Exec? Mintarou will hear about this...");
    } else if (author.roles.highest.id === '920265063087104000' && ['1017182492756815902', '920281541656068107'].includes(targetUser.roles.highest.id)) {
      console.log("Woah! Insurrection!");
      // Execute code block here for condition 4
    } else if (author.roles.highest.id === '1017182492756815902' && targetUser.roles.highest.id === '1017182492756815902') {
      console.log("Are you serious?! You arresting another Board member? Mintarou will hear about this...");
    } else if (author.roles.highest.id === '1017182492756815902' && targetUser.roles.highest.id === '920281541656068107') {
      console.log("Insolent child! Your pitiful rebellion has been foiled!");
      // Execute code block here for condition 6
    } else if (['920264976663457792', '920281541656068107'].includes(author.roles.highest.id)) {
      // No restrictions
    }

    return {
      code: d.util.setCode(data)
    };
  }
}