const { AoiClient, Util } = require("aoi.js");
const { parse, createAst } = require('@akarui/aoi.parser');
const config = require('./settings.json');

const client = new AoiClient({
  token: config.bot.system.token,
  prefix: config.bot.system.prefix,
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "AG3jBlsWtgXxxNnNi3n6B6bjqJZRYDJq",
  }
});

// parsers
const {
    parseExtraOptions
} = require('@akarui/aoi.parser/components');
 
Util.parsers.ErrorHandler = parse;
 
Util.parsers.OptionsParser = (data) => {
    return createAst(data).children.map(parseExtraOptions);
}

const { LoadCustomFunctions } = require('./customFuncsLoader.js');
LoadCustomFunctions(client);

client.loadCommands("./commands/", true);