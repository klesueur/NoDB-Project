import React from 'react'
import TankItems from './TankItems' 

const Tank = (prop) => {
    return (
        <div className="tankContent">
            <div className="tankObject">
                <h2> Scott's Fish Tank</h2>
                {/* .map */}
            </div>

            <div className="total">
                Plants In Tank:
                <button> Reset </button>
            </div>
        </div>
    )
}

export default Tank 