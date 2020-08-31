import React, {Component} from 'react'

class Plant extends Component {
    constructor() {
        super()

        this.state = {
            quantity: 0,
        }
    }
    
    /* LINE BELOW IS TO HANDLE QUANTITY BEFORE ADD TO TANK */
    // handleQuantityChange(action) {}

    handleAddToTank() {}

    render() {
        return (

            <div className="plantDescription">
                <div className="addButton">
                    <button> ADD TO TANK </button>
                </div>
            </div>

        )
    }
}
export default Plant