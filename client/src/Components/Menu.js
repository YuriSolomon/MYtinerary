import React from 'react';
import { Link } from 'react-router-dom';

class HamburgerMenu extends React.Component{
    render() {
        return (
            <div id="menu" className="isActive">
                <p><Link className="link" to='/login'>login</Link></p>
                <p><Link className="link" to='/signup'>signup</Link></p>
            </div>
        );
    }
}

export default HamburgerMenu;