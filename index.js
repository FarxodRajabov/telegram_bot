const { Telegraf } = require('telegraf')
require('dotenv').config()
const commConst = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(`Hello ${ctx.message.from.first_name}`))
bot.help((ctx) => ctx.reply(commConst.commands))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))


console.log('Has been started sucsessful...');