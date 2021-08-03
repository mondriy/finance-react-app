import React from 'react'
import './cash.css'

function Cash(props) {
    return (
        <div className="cash-inner">
            <div className="cash" style={Object.assign(props.size, props.color)}>{props.value}</div>
            <div className="description">{props.description}</div>
        </div>
    )
}

export default Cash
