import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

class HamburgerMenu extends React.Component{
    render() {
        return (
            <div id="links" className="isActive">
                <p><Link to='/login'>login</Link></p>
                <p><Link to='/signup'>signup</Link></p>
            </div>
        );
    }
}

export default HamburgerMenu;