require("dotenv").config();
const API_ID = process.env.API_ID;
const API_HASH = process.env.API_HASH;
const USERBOT_PREFIX = process.env.USERBOT_PREFIX;

if ((!API_ID || isNaN(API_ID)) || !process.env.API_HASH) {
  throw new Error("Provide API_ID and API_HASH to .env");
};

if (!USERBOT_PREFIX) {
  throw new Error("Provide USERBOT_PREFIX to .env");
};

module.exports = { API_ID, API_HASH, USERBOT_PREFIX };