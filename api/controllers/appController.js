const substruct = require('substruct')
const config = substruct.config
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))
const axios = require('axios')
const mime = require('mime-types')
const path = require('path')
const pageFlo = substruct.services.pageFlo

module.exports = {
  files: async function (ctx) {
    let params = ctx.state.params

    let res = await pageFlo.getFile({
      headers: ctx.headers,
      filename: params.filename,
      width: params.w,
      height: params.h
    })

    ctx.set(res.headers)
    ctx.status = res.status
    ctx.body = res.stream
  },

  assets: async function (ctx) {
    let params = ctx.state.params
    let filePath = params.path
    let err

    ctx.set('Content-Type', mime.lookup(filePath))

    // Attempt to load from webpack dev server if in development mode
    if (config.development) {
      try {
        let data = await axios.get(`http://localhost:${config.port + 1}/assets/` + filePath)
        ctx.body = data.data
        return
      } catch (e) {
        err = e
      }
    }

    try {
      let fullPath = path.join(config.appDir, '.tmp', filePath)
      await fs.statAsync(fullPath)
      ctx.body = fs.createReadStream(fullPath)
      return
    } catch (e) {
      err = e
    }

    if (err.code === 'ENOENT') {
      ctx.throw(404)
    } else {
      ctx.throw(500, err)
    }
  }
}
