import React, {Component} from 'react';
import './CityCycle.css'


class CityCycle extends Component {
    cities = [{
        "name": "New York",
        "image": "../Assets/vacation.jpg"
    }, 
    {
        "name": "Berlin",
        "image": "../Assets/vacation.jpg"
    },
    {
        "name": "Barcelona",
        "image": "../Assets/vacation.jpg"
    },
    {
        "name": "Amsterdam",
        "image": "../Assets/vacation.jpg"
    },
    {
        "name": "London",
        "image": "../Assets/vacation.jpg"
    },
    {
        "name": "Paris",
        "image": "../Assets/vacation.jpg"
    },
    {
        "name": "Budapest",
        "image": "../Assets/vacation.jpg"
    },
    {
        "name": "Los Angeles",
        "image": "../Assets/vacation.jpg"
    },
    {
        "name": "Las Vegas",
        "image": "../Assets/vacation.jpg"
    },
    {
        "name": "Rome",
        "image": "../Assets/vacation.jpg"
    }];

    constructor(props) {
        super(props);
        this.state = {city: this.cities[Math.floor(Math.random() * this.cities.length)]};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.randomCity(),
            4000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    randomCity() {
        this.setState({
            city: this.cities[Math.floor(Math.random() * this.cities.length)]
        });
    }

    render() {
        return ( 
            <div id="vacation" background={this.state.city.image}>
                {this.state.city.name} 
                {/* <img id="vacation" alt="" src={require(this.state.city.image)}/> */}
                {/* <img id="vacation" alt="" src={require("../Assets/vacation.jpg")}/> */}
                
            </div>
        );
    }
}

export default CityCycle;