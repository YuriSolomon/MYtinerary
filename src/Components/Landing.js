import React from 'react';
import './Landing.css'

class Landing extends React.Component{
    render() {
        return (
            <div>
                <img id="logo" alt="logo" src={require('../Assets/MYtineraryLogo.png')} />
                <div className="text"><p>Find your perfect trip, desinged by insiders who know and love their cities.</p></div>
                <h2>Start browsing</h2>
                <img id="browse" alt="browse" src={require('../Assets/circled-right-2.png')}/>
                <p>Want to build you own MYtinerary?</p>
                <p className="links"><span><a href="">Log in</a></span>
                <span><a href="">Create Account</a></span></p>
                <div id="home">
                <img alt="home" src={require('../Assets/homeIcon.png')}/>
                </div>
            </div>
        );
    }
}

export default Landing;
