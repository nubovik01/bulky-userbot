const { TelegramClient } = require("@mtcute/node");
const { Dispatcher } = require("@mtcute/dispatcher");
const env = require("./env.js");

const userbot = new TelegramClient({
  apiId: env.API_ID,
  apiHash: env.API_HASH,
  enableErrorReporting: true,
  initConnectionOptions: { deviceModel: "r.kittyy.ru/#bulky (made w/ mtcute)" }
});

const dispatcher = Dispatcher.for(userbot);

const _chunk = (array, size) => array.reduce((chunk, message, index) => (
  index % size ? chunk[chunk.length - 1].push(message) : chunk.push([message]), chunk
), []);

dispatcher.onNewMessage(async (context) => {
  if (context.sender.id != self.id || !context.text) return;

  const bulkCommand = context.text.match(`^${env.USERBOT_PREFIX}bulk (.*)`);
  if (!bulkCommand) return;

  const query = bulkCommand[1].trim();
  const options = { global: query.includes("-g"), self: !query.includes("-l") };

  const searchResults = userbot.iterSearchGlobal({ query: query.replace(/-g|-l /g, "") });

  const _results = [];
  for await (const result of searchResults) {
    if (
      (options.global || result.chat.id === context.chat.id)
      && (options.self || result.sender.id !== self.id)
    ) {
      _results.push(result);
    };
  };

  for (const chunk of _chunk(_results, 100)) {
    await userbot.deleteMessages(chunk);
  };
});

async function _main() {
  self = await userbot.start();
  console.log("@%s (%s) — ✅", self.username || self.firstName, self.id);
};

_main();