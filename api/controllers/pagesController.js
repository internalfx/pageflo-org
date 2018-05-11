const substruct = require('substruct')
const Promise = require('bluebird')
const pageFlo = substruct.services.pageFlo

module.exports = {
  // HOME PAGE
  index: async function (ctx) {
    let content = await Promise.props({
      hero: pageFlo.getBlock({id: 1, headers: ctx.headers}),
      body: pageFlo.getBlock({id: 2, headers: ctx.headers})
    })

    ctx.body = await ctx.render('index.njk', {content})
  },

  content: async function (ctx) {
    let params = ctx.state.params

    let page = await pageFlo.getBlock({slug: params.slug, headers: ctx.headers})

    ctx.body = await ctx.render('page.njk', {page})
  }
}
