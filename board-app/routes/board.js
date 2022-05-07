const express = require('express')
const router = express.Router()
const db = require('../models/index')
const { Op } = require('sequelize')

const pnum = 10

// login
function check(req, res) {
  if (req.session.login == null) {
    req.session.back = '/board'
    res.redirect('/users/login')
    return true
  } else {
    return false
  }
}

// top page
router.get('/', (req, res, next) => {
  res.redirect('/board/0')
})

// top page with number
router.get('/:page', (req, res, next) => {
  if (check(req, res)) {
    return
  }
  const page = req.params.page * 1
  db.Board.findAll({
    offset: page * pnum,
    limit: pnum,
    order: [['createdAt', 'DESC']],
    include: [
      {
        model: db.User,
        required: true,
      },
    ],
  }).then((brd) => {
    let data = {
      title: 'Board',
      login: req.session.login,
      content: brd,
      page: page,
    }
    res.render('board/index', data)
  })
})

// post message
router.post('/add', (req, res, next) => {
  if (check(req, res)) {
    return
  }
  db.sequelize.sync().then(() =>
    db.Board.create({
      userId: req.session.login.id,
      message: req.body.msg,
    })
      .then((brd) => {
        res.redirect('/board')
      })
      .catch((err) => {
        res.redirect('/board')
      })
  )
})

// user home
router.get('/home/:user/:id/:page', (req, res, next) => {
  if (check(req, res)) {
    return
  }
  const id = req.params.id * 1
  const page = req.params.page * 1
  db.Board.findAll({
    where: { userId: id },
    offset: page * pnum,
    limit: pnum,
    order: [['createdAt', 'DESC']],
    include: [
      {
        model: db.User,
        required: true,
      },
    ],
  }).then((brd) => {
    let data = {
      title: 'Board',
      login: req.session.login,
      userId: id,
      userName: req.params.user,
      content: brd,
      page: page,
    }
    res.render('board/home', data)
  })
})

module.exports = router
