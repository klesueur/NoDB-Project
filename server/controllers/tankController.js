const plants = require('../data.json')

const tank = {total: 0, plants: []}
let tankId = 0

module.exports = {
    getTank: (req, res) => {
        res.status(200).send(tank)
    },

    addToTank: (req, res) => {
        const {plantId, quantity} = req.body

        const index = tank.plants.findIndex((element) => element.id === +plantId)

        if(index === -1) {
            const plant = plants.find((element) => element.id === +plantId)

            plant.tankId = tankId
            plant.quantity = quantity 

            tank.plants.push(plant)

            tankId++
        } else {
            tank.plants[index].quantity++
        }

        const total = tank.plants.reduce((acc, element) => {
            return acc + element.quantity
        },0)

        tank.total = total 

        res.status(200).send(tank)
    },

    changeQuantity: (req, res) => {
        const {tank_id} = req.params
        const {action} = req.query

        const index = tank.plants.findIndex(element => element.tankId === +tank_id)

        if (index === -1) {
            return res.status(404).send("Plant not in Scott's fish tank.")
        } 

        if (action === 'up') {
            tank.plants[index].quantity += 1
        } else {
            if(tank.plants[index].quantity > 1) {
                tank.plants[index].quantity -= 1
            } else {
                tank.plants.splice(index, 1)
            }
        }

        const total = tank.plants.reduce((acc, element) => {
            return acc + element.quantity
        },0)

        tank.total = total 

        res.status(200).send(tank)
    },

    removeFromTank: (req, res) => {},
    reset: (req, res) => {}
}