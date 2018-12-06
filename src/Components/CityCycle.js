import React, { Component } from 'react';

class CityCycle extends Component {
    getCity(props) {
        var cities = ["New York","Berlin","Barcelona","Amsterdam","London","Paris"];
        var city = cities[Math.floor(Math.random()*cities.length)];
        props.ranCity =( <p>{city}</p> );
    }
    render() {
        return (
            <div>
        
            </div>
    );
  }
}

export default CityCycle;
