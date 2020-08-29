const express = require('express')
const app = express()
const plantsCtrl = require('./controllers/plantsController')
const tankCtrl = require('./controllers/tankController')

const SERVER_PORT = 3000

app.use(express.json)



app.listen(SERVER_PORT, () => `Running fish tank builder on post ${SERVER_PORT}`)