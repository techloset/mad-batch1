
const express = require("express")
const routes = express.Router()

const {doLogin, doSignUp} = require("../controller/userController")

routes.post('/login', doLogin)

routes.post('/signup',doSignUp)


module.exports = routes