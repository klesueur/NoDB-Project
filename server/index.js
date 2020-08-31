const express = require('express')
const app = express()
const plantsCtrl = require('./controllers/plantsController')
const tankCtrl = require('./controllers/tankController')

const SERVER_PORT = 4000

app.use(express.json())

//* Plant endpoints
app.get('/api/plants', plantsCtrl.getAllPlants)

//* Tank endpoints: get tank itself, 
//  adding to tank, 
//  changing quantity of each plant in tank (must find specific plant -> plant_id), 
//  removing a plant from tank (must find specific plant again -> plant_id, 
//  and reseting tank/removing all plants from tank -> no specific plant_id required)
app.get('/api/tank', tankCtrl.getTank)
app.post('/api/tank', tankCtrl.addToTank)
app.put('/api/tank/:tank_id', tankCtrl.changeQuantity)
// app.delete('api/tank/:tank_id', tankCtrl.removeFromTank)
app.delete('/api/tank', tankCtrl.reset)

app.listen(SERVER_PORT, () => 
console.log(`Running fish tank builder on port ${SERVER_PORT}`)
)