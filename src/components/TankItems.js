import React from 'react'

const TankItems = (props) => {
    return (

        <div className="tank-item">
            <img src={props.data.image} width="75" height="55" />
            <div>
                <p>{props.data.name}</p>
                <p> Quantity {props.data.quantity}</p>

                <div className="tankPlantButton">
                    <button>-</button>
                    <button>+</button>
                </div>
            </div>
        </div>

    )
}

export default TankItems