const express = require('express')
const router = express.Router()
const sqlite3 = require('sqlite3')

//
const db = new sqlite3.Database('mydb.sqlite3')

//
router.get('/', (req, res, next) => {
  //
  db.serialize(() => {
    //
    let rows = ''
    db.each(
      'select * from mydata',
      (err, row) => {
        //
        if (!err) {
          rows += '<tr><th>' + row.id + '</th><td>' + row.name + '</td><tr>'
        }
      },
      (err, count) => {
        let data = {
          title: 'Hello!',
          content: rows,
        }
        res.render('hello', data)
      }
    )
  })
})

module.exports = router
