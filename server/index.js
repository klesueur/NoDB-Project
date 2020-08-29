console.log("Yoooo")
const express = require('express')
const app = express()
const plantsCtrl = require('./controllers/plantsController')
const tankCtrl = require('./controllers/tankController')

const SERVER_PORT = 3000

app.use(express.json)

//* Plant endpoints
app.get('/api/plants', plantsCtrl.getAllPlants)


app.listen(SERVER_PORT, () => 
console.log(`Running fish tank builder on post ${SERVER_PORT}`)
)