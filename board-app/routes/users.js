var express = require('express')
var router = express.Router()

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource')
// })

router.get('/login', (req, res, next) => {
  let data = {
    title: 'Users/Login',
    content: '名前とパスワードを入力してください。',
  }
  res.render('users/login', data)
})

router.post('/login', (req, res, next) => {
  dbn.User.findOne({
    where: {
      name: req.body.name,
      pass: req.body.pass,
    },
  }).then((usr) => {
    if (usr != null) {
      req.session.login = usr
      let back = req.session.back
      if (back == null) {
        back = '/'
      }
      res.redirect(back)
    } else {
      let data = {
        title: 'Users/Login',
        content: '名前かパスワードに間違いがあります。',
      }
      res.render('users/login', data)
    }
  })
})

module.exports = router
