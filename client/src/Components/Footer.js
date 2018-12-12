import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component{
    render() {
        return (
            <div id="home">
                <Link className="link" to='/'>
                    <img alt="home" src={require("../Assets/homeIcon.png")}/>
                </Link>
            </div>
        );
    }
}

export default Footer;