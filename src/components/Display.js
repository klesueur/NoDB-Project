import React, {Component} from 'react' 
import PlantContent from './PlantContent'
import Tank from './Tank'
import axios from 'axios' 


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

    componentDidMount() {
        axios.get('/api/plants').then(res => {
            axios.get('/api/tank').then(tankRes => {
                this.setState({
                    plants: res.data,
                    tank: tankRes.data, 
                })
            })
        })
    }

    addToTank(id, quantity) {}

    changeQuantity(id, action) {}

    reset() {}

    render() {
        return (
            <div className='display'>
                <PlantContent plantContent={this.state.plants} />
                <Tank />

            </div>
        )
    }
}
export default Display 