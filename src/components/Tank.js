import React from 'react'
import TankItems from './TankItems' 

const Tank = (props) => {
    return (
        <div className="tankContent">
            <h2> Scott's Fish Tank</h2>
            <div className="tankObject">
                
                {props.tank.wetPlants.map(element => {
                    return <TankItems key={element.tankId} data={element} />
                })}
            </div>

            <div className="total">
                Plants In Tank: {props.tank.total}
                <button> Reset </button>
            </div>
        </div>
    )
}

export default Tank 