import React from 'react';
import './LandingPage.css';
import Cards from './components/cards.js'; 

const LandingPage = () => {
    return (
        <div className="LandingPage">
            <div className="title">Midland Chin Baptist Church</div>
            <div className="cards"> 
                <Cards /> 
            </div>
        </div>
    );
}

export default LandingPage;
