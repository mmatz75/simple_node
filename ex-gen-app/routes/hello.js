const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  let data = {
    title: 'Helo!',
    content: 'これは、サンプルのコンテンツです。<br>This is a sample content.',
  }
  res.render('hello', data)
})

module.exports = router
