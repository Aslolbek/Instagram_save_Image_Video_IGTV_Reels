const { Telegraf } = require("telegraf");
const axios = require("axios");
const request = require("request");

const token = '6080478336:AAEO-6P5DWLricKGLJvbqZCBUAOKFPk6-6w';
const bot = new Telegraf(token);

bot.command('start', async (ctx) => {
    await ctx.replyWithHTML("Assalomu aleykum!");
});

bot.on('text', async (ctx) => {
    let lin = ctx.message.text


    
const options = {
    method: 'GET',
    url: 'https://instagram-media-downloader.p.rapidapi.com/rapid/post.php',
    params: {
      url: `${lin}`
    },
    headers: {
      'X-RapidAPI-Key': 'a0e3b481a2msh53a3f994c4266abp18c9aejsn087ffeb0144a',
      'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com'
    }
  };
    try {

        const response = await axios.request(options);
	console.log(response.data);
    await ctx.telegram.sendVideo(ctx.chat.id, response.data.video);
    // await ctx.reply(response.data.caption)  
    
    } catch (error) {
        console.error(error);
    }
});

bot.launch().then(() => {
    console.log("Bot ishlamoqda");
});
