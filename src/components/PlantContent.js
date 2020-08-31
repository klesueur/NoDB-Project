import React from 'react'
import Plant from './Plant' 

const PlantContent = (props) => {
    return ( 
        <div className = "plantContent">
            {props.plantContent.map((element) => {
        return ( 
            <Plant 
            addToTank={props.addToTank}
            key={element.id} data={element} />
        )
        })}
        </div>
    )
}

export default PlantContent 
