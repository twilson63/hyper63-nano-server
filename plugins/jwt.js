const jwt = require('express-jwt')
module.exports = (app) => {
  app.get('/health', (req, res) => res.send({ok: true}))
  app.use(jwt({
    secret: process.env.SECRET, 
    algorithms: ['HS256']
  }))
  return app
}