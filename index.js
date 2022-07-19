const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()
const commConst = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(`Hello ${ctx.message.from.first_name}`))
bot.help((ctx) => ctx.reply(commConst.commands))
bot.command('course', async (ctx) => {
  try {
    await ctx.replyWithHTML('<b>Courses</b>', Markup.inlineKeyboard(
        [
            [Markup.button.callback('Edits', 'btn_1'),Markup.button.callback('View', 'btn_2'),Markup.button.callback('HTML', 'btn_3')],
            [Markup.button.callback('JS', 'btn_4')]
        ]
    ))
  }catch(e){
      console.error(e)
  }
})
function addActoinBot(name,src,text) {
    bot.action(name, async (ctx) => {
        try{
            await ctx.answerCbQuery()
            if (src !== false) {
                await ctx.replyWithPhoto({
                    source: src
                })
            }
            await ctx.replyWithHTML('processing button 1', {
                disable_web_page_preview: true
            })
        }catch(e){
            console.error(e)
        }
    })
}

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))


console.log('Success !!! Has been started...');