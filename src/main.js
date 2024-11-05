const { TelegramClient, html } = require("@mtcute/node");
const { Dispatcher } = require("@mtcute/dispatcher");
const env = require("./env.js");

const userbot = new TelegramClient({
  apiId: env.API_ID,
  apiHash: env.API_HASH,
  enableErrorReporting: true,
  initConnectionOptions: {
    deviceModel: "r.kittyy.ru/#bulky (made w/ mtcute)"
  }
});

const dispatcher = Dispatcher.for(userbot);

const _chunk = (array, size) => array.reduce((chunk, message, index) => (
  index % size ? chunk[chunk.length - 1].push(message) : chunk.push([message]), chunk
), []);

dispatcher.onNewMessage(async context => {
  if (context.sender.id != self.id || !context.text) return;

  const bulkCommand = context.text.match(`^${env.USERBOT_PREFIX}bulk (.*)`);
  if (!bulkCommand) return;

  const searchResults = userbot.iterSearchGlobal({
    query: bulkCommand[1].replace("-g ", "").replace("-l ", "")
  });
  const _results = [];

  const isIncludes = (flag) => context.text.includes(flag);

  for await (const result of searchResults) {
    if (isIncludes("-g") || result.chat.id === context.chat.id) {
      if (isIncludes("-l") && result.sender.id === self.id || !isIncludes("-l")) {
        _results.push(result);
      };
    };
  };

  for (const chunk of _chunk(_results, 100)) {
    await userbot.deleteMessages(chunk);
  };

  return await userbot.sendText(context.chat.id, html`<emoji id="5210956306952758910">👀</emoji>`);
});

async function _main() {
  self = await userbot.start();
  console.log("@%s (%s) — ✅", self.username, self.id);
};

_main();
