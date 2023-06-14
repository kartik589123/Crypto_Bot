const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  APIKEY: process.env.APIKEY,
  BOTID: process.env.BOTID,
  PORT: process.env.PORT,
  BOT_DOMAIN: process.env.BOT_DOMAIN,
};
