const substruct = require('substruct')
// const Promise = require('bluebird')
const pageFlo = substruct.services.pageFlo

module.exports = {
  // HOME PAGE
  blog: async function (ctx) {
    let params = ctx.state.params
    let pageNumber = params.pageNumber || 1
    let content = await pageFlo.getCollection({id: 1, pageSize: 3, pageNumber, headers: ctx.headers})

    ctx.body = await ctx.render('blog.njk', {content})
  }
}
