import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Header.css'
import Menu from './Menu';

class HamburgerMenu extends React.Component{
    constructor () {
        super()
        this.state = {
            isHidden: true
        }
    }
    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div id="nav">
                        <Link to='/menu'>
                            <img id="menu" onClick={this.toggleHidden.bind(this)} alt="hamburger" src={require('../Assets/Hamburger.png')}/>
                        </Link>
                        {!this.state.isHidden && <Route path='/menu' component={Menu}/>}
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default HamburgerMenu;