import React from 'react'
import Card from '../card/Card'
import './cards.css'
import { ReactSVG } from 'react-svg'
import arrow from '../../assets/arrow.svg'
import ProgressBar from '../progress bar/ProgressBar'
import Cash from '../cash/Cash'
import Switcher from '../switcher/Switcher'

function Cards() {
    return (
        <div className="cards">
            <div className="cards-title">Cards</div>
            <div className="cards-inner">
                <div className="cards-inner__main">
                    <div className="cards-inner__main-kind">
                        <ReactSVG src={arrow} className="card-arrow__left" />
                        <Card />
                        <ReactSVG src={arrow} className="card-arrow__right" />
                    </div>
                    <ProgressBar />
                </div>
                <div className="cards-inner__info">
                    <div className="cards-inner__info-cash">
                        <Cash 
                            size={{fontSize: "2em"}} 
                            color={{color: "#197BBD"}}
                            value="$ 2850.75"
                            description="Current balance" />

                        <Cash 
                            size={{fontSize: "1.2em"}} 
                            color={{color: "#439A86"}}
                            value="$ 1500.50"
                            description="Income"/>
                        <Cash 
                            size={{fontSize: "1.2em"}} 
                            color={{color: "#BB4430"}} 
                            value="$ 350.60"
                            description="Outcome"/>
                    </div>
                    <Switcher description="Deacivate card"/>
                </div>
            </div>
        </div>
    )
}

export default Cards
