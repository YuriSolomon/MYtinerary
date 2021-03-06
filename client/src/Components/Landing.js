import React from 'react';
import CityCycle from './CityCycle';
import { Link } from 'react-router-dom';

class Landing extends React.Component{
    render() {
        return (
            <div id="landing">
                <a href="mailto:s.patel@ubiqum-mytinerary.com"><img id="logo" alt="logo" src={require('../Assets/MYtineraryLogo.png')} /></a>
                <div className="text"><h5>Find your perfect trip, desinged by insiders who know and love their cities.</h5></div>
                {/* <h2>Start browsing</h2> */}
                <Link to='/cities'><img id="browse" alt="browse" src={require('../Assets/circled-right-2.png')}/></Link>
                {/* <p>Want to build you own MYtinerary?</p> */}
                {/* <p className="links"><span><a href="">Log in</a></span> */}
                {/* <span><a href="">Create Account</a></span></p> */}
                {/* <div id="home">
                    <img alt="home" src={require('../Assets/homeIcon.png')}/>
                </div> */}
                <div className="locs">
                    <h5>Popular MYtineraries</h5>
                </div>
                <div className="citiesCycle">
                    <CityCycle id="cityCicle1"/>
                    <CityCycle id="cityCicle2"/>
                    <CityCycle id="cityCicle3"/>
                    <CityCycle id="cityCicle4"/>
                </div>
            </div>
        );
    }
}

export default Landing;