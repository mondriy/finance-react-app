import React from 'react'
import Card from '../card/Card'
import './cards.css'
import { ReactSVG } from 'react-svg'
import arrow from '../../assets/arrow.svg'
import ProgressBar from '../progress bar/ProgressBar'

function Cards() {
    return (
        <div className="cards">
            <div className="cards-title">Cards</div>
            <div className="cards-inner">
                <div className="cards-inner__kind">
                    <ReactSVG src={arrow} className="card-arrow__left" />
                    <Card />
                    <ReactSVG src={arrow} className="card-arrow__right" />
                </div>
                <ProgressBar />
            </div>
        </div>
    )
}

export default Cards
