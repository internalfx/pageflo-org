
module.exports = {
  'get /files/:filename': 'appController.files',
  'get /assets/:path*': 'appController.assets',

  'get /blog': 'collectionController.blog',

  'get /': 'pagesController.index',
  'get /pages/:slug': 'pagesController.page'
}
