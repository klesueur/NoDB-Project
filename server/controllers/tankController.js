const plants = require('../data.json')

const tank = {total: 0, wetPlants: []}
let tankId = 0


module.exports = {
    getTank: (req, res) => {
        res.status(200).send(tank)
    },

    addToTank: (req, res) => {
        const {plantId, quantity} = req.body

        const index = tank.wetPlants.findIndex((element) => element.id === +plantId)

        if(index === -1) {
            const plant = plants.find((element) => element.id === +plantId)

            plant.tankId = tankId
            plant.quantity = +quantity 

            tank.wetPlants.push(plant)

            tankId++
        } else {
            tank.wetPlants[index].quantity += +quantity
        }
//* Below is being reused in other methods for quantity total.
        const total = tank.wetPlants.reduce((acc, element) => {
            return acc + element.quantity
        }, 0)

        tank.total = total 

        res.status(200).send(tank)
    },

    changeQuantity: (req, res) => {
        const {tank_id} = req.params
        const {action} = req.query

        const index = tank.wetPlants.findIndex((element) => element.tankId === +tank_id)

        if (index === -1) {
            return res.status(404).send("Plant not in Scott's fish tank. 2.")
        } 

        if (action === 'up') {
            tank.wetPlants[index].quantity += 1
        } else {
            if(tank.wetPlants[index].quantity > 1) {
                tank.wetPlants[index].quantity -= 1
            } else {
                tank.wetPlants.splice(index, 1)
            }
        }

        const total = tank.wetPlants.reduce((acc, element) => {
            return acc + element.quantity
        },0)

        tank.total = total 

        res.status(200).send(tank)
    },

    removeFromTank: (req, res) => {},
    reset: (req, res) => {}
}