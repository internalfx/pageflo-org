const substruct = require('substruct')
// const Promise = require('bluebird')
const pageFlo = substruct.services.pageFlo

module.exports = {
  // HOME PAGE
  index: async function (ctx) {
    let content = await pageFlo.getBlock({id: 1, headers: ctx.headers})

    ctx.body = await ctx.render('index.njk', {content})
  },

  guide: async function (ctx) {
    let page = await pageFlo.getBlock({id: 6, headers: ctx.headers})

    ctx.body = await ctx.render('page.njk', {page})
  },

  content: async function (ctx) {
    let params = ctx.state.params

    let page = await pageFlo.getBlock({slug: params.slug, headers: ctx.headers})

    ctx.body = await ctx.render('page.njk', {page})
  }
}
