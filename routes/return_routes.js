import express from 'express'
const routes = express.Router()
const ReturnDeshboard = require('../controller/return_controller')

const returnDeshboard = new ReturnDeshboard()

routes.get('/', returnDeshboard.getReturn)

module.exports = routes