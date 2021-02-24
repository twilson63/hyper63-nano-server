const jwt = require('express-jwt')
module.exports = (app) => {
  app.get('/health', (req, res) => res.send({ ok: true }))
  app.use(jwt({
    secret: process.env.SECRET,
    algorithms: ['HS256']
  }).unless({ path: ['/', '/health'] }))
  app.use((err, req, res, next) => {
    if (err.name === 'Unauthorized') {
      return res.status(401).send({ ok: false, msg: 'not authorized' })
    }
    next()
  })
  return app
}
