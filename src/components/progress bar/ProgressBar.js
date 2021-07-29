import React from 'react'
import './progressBar.css'

function ProgressBar() {
    return (
        <>
            <div className="progress-bar">
                <div className="progress-bar__filled"></div>
            </div>
            <div className="progress-bar__parameters">
                <div className="progress-bar__kind">Weekly payment limit</div>
                <div className="progress-bar__sum">$350.60 / $4000</div>
            </div>
        </>
    )
}

export default ProgressBar
