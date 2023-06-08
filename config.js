const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  APIKEY: process.env.APIKEY,
  BOTID: process.env.BOTID,
};
