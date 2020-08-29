const plants = require('../data.json')

module.exports = {
    getAllPlants: (req, res) => {
       res.status(200).send(plants) 
    },
}