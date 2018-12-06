import React from 'react';
import './Landing.css'

class Landing extends React.Component{
    render() {
        return (
            <div>
                <a href="mailto:s.patel@ubiqum-mytinerary.com"><img id="logo" alt="logo" src={require('../Assets/MYtineraryLogo.png')} /></a>
                <div className="text"><h5>Find your perfect trip, desinged by insiders who know and love their cities.</h5></div>
                {/* <h2>Start browsing</h2> */}
                <img id="browse" alt="browse" src={require('../Assets/circled-right-2.png')}/>
                {/* <p>Want to build you own MYtinerary?</p> */}
                {/* <p className="links"><span><a href="">Log in</a></span> */}
                {/* <span><a href="">Create Account</a></span></p> */}
                {/* <div id="home">
                    <img alt="home" src={require('../Assets/homeIcon.png')}/>
                </div> */}
                <div className="locs">
                    <h5>Popular MYtineraries</h5>
                </div>
                <div>{this.props.ranCity}</div>
            </div>
        );
    }
}

export default Landing;
