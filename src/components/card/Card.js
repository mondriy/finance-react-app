import React from 'react'
import './card.css'
import cloud from '../../assets/cloud.svg'
import { ReactSVG } from 'react-svg'

function Card() {
    return (
        <div className="card">
            <ReactSVG src={cloud} className="cloud-img" />
            <div className="card-company">
                <div className="card-name">cloudcash</div>
                <div className="card-type">PREMIUM ACCOUNT</div>
            </div>
            <div className="card-number">
                <div className="card-number__part">5789</div>
                <div className="card-number__part">* * * *</div>
                <div className="card-number__part">* * * *</div>
                <div className="card-number__part">2847</div>
            </div>
            <div className="card-parameters">
                <div className="card-holder">
                    <div className="card-holder__text">Card holder</div>
                    <div className="card-holder__name">Mike Smith</div>
                </div>
                <div className="card-expire">
                    <div className="card-expire__text">Expire date</div>
                    <div className="card-expire__time">06/21</div>
                </div>
            </div>
        </div>
    )
}

export default Card
