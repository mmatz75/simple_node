var express = require('express')
var router = express.Router()

const taskRoutes = require('./taskRoutes')
router.use('/task', taskRoutes)

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

module.exports = router
