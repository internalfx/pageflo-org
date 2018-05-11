
module.exports = {
  'get /files/:filename': 'appController.files',
  'get /assets/:path*': 'appController.assets',

  'get /blog': 'collectionController.blog',
  'get /guide': 'collectionController.guide',
  'get /docs': 'collectionController.docs',

  'get /': 'pagesController.index',
  'get /content/:slug': 'pagesController.content'
}
