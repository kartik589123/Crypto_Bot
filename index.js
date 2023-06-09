const { Telegraf } = require("telegraf");
const express = require("express");
const axios = require("axios");
const { BOTID, APIKEY } = require("./config");
const app = express();
const bot = new Telegraf(BOTID); //Enter your bot key
const PORT = process.env.PORT || 3000;
const coinAPIKey = APIKEY; //enter your api key

//Bot functioning starts here
bot.start((ctx) => {
  const welcomeMessage =
    "Welcome to CryptoBot! Type /price <symbol> of any cryptocurrency.";
  ctx.reply(welcomeMessage);
});

//Bot commands  begins here
bot.command("price", async (ctx) => {
  const symbol = ctx.message.text.split(" ")[1].toUpperCase();

  try {
    const response = await axios.get(
      `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD`,
      {
        headers: { "X-CoinAPI-Key": coinAPIKey },
      }
    );

    //console.log(response);
    const price = response.data.rate.toFixed(9);
    const message = `The current price of ${symbol} is $${price}`;
    ctx.reply(message);
  } catch (error) {
    const errorMessage =
      "Failed to fetch the price.Please enter a valid symbol.";
    ctx.reply(errorMessage);
  }
});
//Launching of Bot
bot.launch();

app.listen(PORT, () => {
  console.log("Running on", PORT);
});
