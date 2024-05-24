import React, { Component } from "react";

class LandingPage extends Component {
    redirectToMinoInfoPage = () => {
        window.location.href = "/MinoInfo";
    };

    render() {
        const myStyle = {
            backgroundImage: "url(https://wallpapers.com/images/high/plain-light-blue-background-3440-x-1440-pyax2q0t5zzmmjsn.webp)",
            height: "100vh",
            marginTop: "-70px",
            fontSize: "50px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#ffffff",
        };

        const buttonStyle = {
            padding: "8px 15px",
            fontSize: "20px",
            backgroundColor: "#ffffff",
            color: "#000000",
            border: "none",
            cursor: "pointer",
        };

        return (
            <div style={myStyle}>
                <div>
                    <h1>Chruch Info</h1>
                    <button style={buttonStyle} onClick={this.redirectToMinoInfoPage}>Mino Info</button>
                </div>
            </div>
        );
    }
}

export default LandingPage;

