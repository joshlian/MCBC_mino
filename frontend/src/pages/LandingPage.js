import React from 'react';
import './LandingPage.css';

const MinoinfoPage = () => {
    window.location.href = "/MinoInfo";
};
const LandingPage = () => {
    return (
        <div className="LandingPage"> 
            <header className="LandingPage-header"> 
                <div className="info-box">About Midland Chin Baptist Church
                    <div className="sub-info-box">MCBC is a burmese church orginization
                        <div>It has around 500 members</div>
                    </div>
                </div>
                <button className="custom-button" onClick={MinoinfoPage}>Mino Info</button>
            </header>
            {/* Other content of your landing page */}
        </div>
    );
}

export default LandingPage;


