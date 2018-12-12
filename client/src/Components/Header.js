import React from 'react';
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
        if(document.getElementById("menu").classList.contains("isActive")){
            document.getElementById("menu").classList.remove("isActive");
        } else {
            document.getElementById("menu").classList.add("isActive");
        }
        
    }
    render() {
        return (
            <div id="header">
                <img id="menuImg" alt="hamburger" onClick={this.menuClick} src={require('../Assets/Hamburger.png')}/>
                <Menu/>
                <div id="userImage"><span>user image</span></div>
            </div>
        );
    }
}

export default Header;