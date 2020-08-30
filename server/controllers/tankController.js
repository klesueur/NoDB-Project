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
            res.send(plant)
        }
    },
    changeQuantity: (req, res) => {},
    removeFromTank: (req, res) => {},
    reset: (req, res) => {}
}