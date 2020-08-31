import React, {Component} from 'react'

class Plant extends Component {
    constructor() {
        super()

        /* this.State below is currently not being used in this component - it is just there for now. It is to set quantity of dry plant back to 0 after it is addded. */
        this.state = {
            quantity: 0,
        }

    }
    
    /* LINE BELOW IS TO HANDLE QUANTITY BEFORE ADD TO TANK */
    // handleQuantityChange(action) {}

    handleAddToTank() {
        this.props.addToTank(this.props.data.id, this.state.quantity)
        /* Line below is to reset quantity back to zero, if I'm using quantity button handle BEFORE adding to Tank */
        // this.setState({
        //     quantity: 1,
        // })
    }

    render() {
        return (

            <div className="plantDescription">
                <img  src={this.props.data.image} width="150" height="110"/>
                <p>{this.props.data.name}</p>
                <p>{this.props.data.light}</p>
                <div className="addButton">
                    <button onClick={() => this.handleAddToTank()} > ADD TO TANK </button>
                </div>
            </div>

        )
    }
}
export default Plant