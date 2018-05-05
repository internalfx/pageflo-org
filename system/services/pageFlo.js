let pageFloClient = require('pageflo-client')

module.exports = async function (config) {
  let pageFlo = pageFloClient(config.pageflo)

  return pageFlo
}
