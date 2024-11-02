require("dotenv").config();
const { TelegramClient } = require("@mtcute/node");
const { Dispatcher } = require("@mtcute/dispatcher");

const userbot = new TelegramClient({
  apiId: process.env.API_ID,
  apiHash: process.env.API_HASH,
  enableErrorReporting: true,
  initConnectionOptions: {
    deviceModel: "kavaynen'ko >.< (made w/ mtcute by nbvk.kittyy.ru)"
  }
});

const dispatcher = Dispatcher.for(userbot);

const _chunk = (array, size) => array.reduce((chunk, message, index) => (
  index % size ? chunk[chunk.length - 1].push(message) : chunk.push([message]), chunk
), []);

dispatcher.onNewMessage(async context => {
  if (context.sender.id != +process.env.OWNER_ID || !context.text) return;

  const bulkCommand = context.text.match(`^${process.env.USERBOT_PREFIX}bulk (.*)`);
  if (!bulkCommand) return;

  const searchResults = userbot.iterSearchGlobal({ query: bulkCommand[1].replace("-g ", "") });
  const _results = [];

  for await (const result of searchResults) {
    if (context.text.includes("-g") || result.chat.id === context.chat.id) {
      _results.push(result);
    };
  };

  for (const chunk of _chunk(_results, 100)) {
    await userbot.deleteMessages(chunk);
  };
});

userbot.start().then((bot) => console.log("@%s — ✅", bot.username));