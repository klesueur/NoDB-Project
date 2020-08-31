import React from 'react'
import TankItems from './TankItems' 

const Tank = (props) => {
    return (
        <div className="tankContent">
            <div className="tankObject">
                <h2> Scott's Fish Tank</h2>
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