const plants = require('../data.json')

const tank = {total: 0, plants: []}
let tankId = 0

module.exports = {
    getTank: (req, res) => {
        res.status(200).send(tank)
    },
    addToTank: (req, res) => {
        
    },
    changeQuantity: (req, res) => {},
    removeFromTank: (req, res) => {},
    reset: (req, res) => {}
}