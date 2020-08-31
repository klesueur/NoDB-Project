import React, {Component} from 'react' 
import PlantContent from './PlantContent'
import Tank from './Tank'


class Display extends Component {
    constructor() {
        super() 

        this.state = {
            plants: [],
            tank: {
                total: 0,
                wetPlants: []
            },
        }
    }

    componentDidMount() {}

    addToTank(id, quantity) {}

    changeQuantity(id, action) {}

    reset() {}

    render() {
        return (
            <div className='display'>
                <PlantContent />
                <Tank />

            </div>
        )
    }
}
export default Display 