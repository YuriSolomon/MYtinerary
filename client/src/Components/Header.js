import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Header.css'
import Menu from './Menu';

class Header extends React.Component{
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

    menuClick =() => {
        if(document.getElementById("links").classList.contains("isActive")){
            document.getElementById("links").classList.remove("isActive");
        } else {
            document.getElementById("links").classList.add("isActive");
        }
        
    }
    render() {
        return (
            <div id="nav">
                <img id="menu" alt="hamburger" onClick={this.menuClick} src={require('../Assets/Hamburger.png')}/>
                <Menu/>
            </div>
        );
    }
}

export default Header;