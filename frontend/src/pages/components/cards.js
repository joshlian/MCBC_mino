import React from "react";
import './cards.css';
import { useNavigate } from 'react-router-dom';
import minoimag from './pictures/minopic.jpg'; 
import leaderimag from './pictures/leaders.jpg'; 
import pastorimg from './pictures/pastors.jpg';
const Cards = () => {
    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate('/MinoInfo');
    };

    return (
        <div className="cards-wrapper"> {/* Add a wrapper for multiple cards */}
            <div className="card-container">
                <img src={minoimag} alt="mino card" className="image" />
                <h1 className="header">Youth Page</h1>
                <p className="desc">This page will take you to learn, 
                    and find out about the Midland Chin Baptist Church youth.
                </p>
                <button className="custom-button" onClick={handleClick}>Click Here For Youth Info</button>
            </div>

            <div className="pastor-card-container"> {/* Duplicate the card for another one */}
                <img src={pastorimg} alt="mino card" className="image" />
                <h1 className="header">MCBC Pastors</h1>
                <p className="desc">This page will take you to learn, 
                    and find out about the Midland Chin Baptist Church Pastors.
                </p>
                <button className="pastor-custom-button" onClick={handleClick}>Click Here For Pastor Info</button>
            </div>

            <div className="leader-card-container"> {/* Duplicate the card for another one */}
                <img src={leaderimag} alt="mino card" className="image" />
                <h1 className="header">MCBC Leaders</h1>
                <p className="desc">This page will take you to learn, 
                    and find out about the Midland Chin Baptist Church Leaders.
                </p>
                <button className="leader-custom-button" onClick={handleClick}>Click Here For Leaders Info</button>
            </div>
        </div>
    );
};

export default Cards;
