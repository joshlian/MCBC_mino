import React from 'react';
import './LandingPage.css';

const MinoinfoPage = () => {
    window.location.href = "/MinoInfo";
};
const LandingPage = () => {
    return (
        <div className="LandingPage"> 
            <header className="LandingPage-header"> 
                <div className="info-box">Midland Chin Baptist Church</div>
                <button className="custom-button" onClick={MinoinfoPage}>Mino Info</button>
            </header>
            {/* Other content of your landing page */}
        </div>
    );
}

export default LandingPage;


