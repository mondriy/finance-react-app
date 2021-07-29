import React, { useState } from 'react'
import './header.css'

function Header() {

    const [data, setData] = useState(true);
    const [message, setMessage] = useState(true);
    const [notice, setNotice] = useState(true);

    const showData = () => {
        if (window.innerWidth < 1400) {
            setData(false);
        } else {
            setData(true);
        }
    }

    const showNoticeMessage = () => {
        if (window.innerWidth < 1000) {
            setMessage(false);
            setNotice(false);
        } else {
            setMessage(true);
            setNotice(true);
        }
    }
    
    window.addEventListener('resize', showData);
    window.addEventListener('resize', showNoticeMessage);
    
    window.addEventListener('load', showData);
    window.addEventListener('load', showNoticeMessage);

    return (
        <div className="header">
            <div className="header-title">
                <div className="header-title__minor">Weekly sumup</div>
                <div className="header-title__major">Get summary of your weekly online transactions here.</div>
            </div>
            <div className="header-account">
                {message && <div className="header-account__message"></div> }
                {notice && <div className="header-account__notification"> 
                    <div className="header-account__notification-sign"></div>
                </div> }
                <div className="header-account__person">
                    <div className="header-account__photo"></div>
                    {data && <div className="header-account__data">
                        <div className="header-account__name">Andrew</div>
                        <div className="header-account__status">Admin account</div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Header
