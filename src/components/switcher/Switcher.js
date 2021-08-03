import React from 'react'
import './switcher.css'

function Switcher(props) {
    return (
        <div className="switch-box">
            <label class="switch">
                <input type="checkbox"/>
                <span class="slider round"></span>
            </label>
            <div className="description">{props.description}</div>
        </div>
    )
}

export default Switcher
