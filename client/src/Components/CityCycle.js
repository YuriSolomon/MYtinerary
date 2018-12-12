import React, {Component} from 'react';

class CityCycle extends Component {
    cities = [{
        "name": "New York",
        "image": <img className="vacation" alt="" src={require("../Assets/vacation.jpg")}/>        
    }, 
    {
        "name": "Berlin",
        "image": <img className="vacation" alt="" src={require("../Assets/vacation.jpg")}/>        
    },
    {
        "name": "Barcelona",
        "image": <img className="vacation" alt="" src={require("../Assets/vacation.jpg")}/>        
    },
    {
        "name": "Amsterdam",
        "image": <img className="vacation" alt="" src={require("../Assets/vacation.jpg")}/>        
    },
    {
        "name": "London",
        "image": <img className="vacation" alt="" src={require("../Assets/vacation.jpg")}/>        
    },
    {
        "name": "Paris",
        "image": <img className="vacation" alt="" src={require("../Assets/vacation.jpg")}/>        
    },
    {
        "name": "Budapest",
        "image": <img className="vacation" alt="" src={require("../Assets/vacation.jpg")}/>        
    },
    {
        "name": "Los Angeles",
        "image": <img className="vacation" alt="" src={require("../Assets/vacation.jpg")}/>        
    },
    {
        "name": "Las Vegas",
        "image": <img className="vacation" alt="" src={require("../Assets/vacation.jpg")}/>
    },
    {
        "name": "Rome",
        "image": <img className="vacation" alt="" src={require("../Assets/vacation.jpg")}/>
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
            <div className="city1">
                {this.state.city.image}
                <div className="centered"><h3>{this.state.city.name}</h3></div>
            </div>
        );
    }
}

export default CityCycle;