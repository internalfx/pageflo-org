
module.exports = {
  'get /files/:filename': 'appController.files',
  'get /assets/:path*': 'appController.assets',

  'get /blog': 'collectionController.blog',

  'get /': 'pagesController.index',
  'get /guide': 'pagesController.guide',
  'get /content/:slug': 'pagesController.content'
}
