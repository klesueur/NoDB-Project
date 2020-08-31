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
        this.addToTank = this.addToTank.bind(this)
        this.changeQuantity = this.changeQuantity.bind(this)
        this.reset = this.reset.bind(this)
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

    addToTank(plantId, quantity) {
        axios.post('/api/tank', {plantId, quantity}).then(res => {
            this.setState({
                tank: res.data, 
            })
        })
    }

    changeQuantity(tankId, action) {
        axios.put(`/api/tank/${tankId}$action=${action}`).then((res) => {
            this.setState = {
                tank: res.data,
            }
        })
    }

    reset() {
        axios.delete('/api/tank').then((res) => {
            this.setState = ({
                tank: res.data,
            })
        })
    }

    render() {
        return (
            <div className='display'>
                <PlantContent 
                    addToTank={this.addToTank}            plantContent={this.state.plants} />
                <Tank 
                    tank={this.state.tank} 
                    changeQuantity={this.changeQuantity}
                    reset={this.reset} />

            </div>
        )
    }
}
export default Display 