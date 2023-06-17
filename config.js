// const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  APIKEY: process.env.APIKEY,
  BOTID: process.env.BOTID,
  PORT: process.env.PORT,
};
