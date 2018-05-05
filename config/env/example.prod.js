
// Production Config
module.exports = {
  port: 8000,
  pageflo: {
    server: {
      host: 'pageflo.yourserver.com',
      apiKey: 'YOUR_API_KEY',
      protocol: 'https'
    },
    client: {
      filesPath: '/files'
    }
  }
}
