'use strict'

const router = require('express').Router()
const taskController = require('../controllers/taskController')

router.get('/', taskController.read)
router.post('/', taskController.create)
router.put('/:id', taskController.update)
router.delete('/:id', taskController.delete)

module.exports = router
