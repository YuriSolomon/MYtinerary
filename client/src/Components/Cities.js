import React from 'react';

class Cities extends React.Component{
    cities = [{
        name: "New York",
        image: <img className="vacation" alt="" src={require("../Assets/vacation1.png")}/>        
    }, 
    {
        name: "Berlin",
        image: <img className="vacation" alt="" src={require("../Assets/vacation1.png")}/>        
    },
    {
        name: "Barcelona",
        image: <img className="vacation" alt="" src={require("../Assets/vacation1.png")}/>        
    },
    {
        name: "Amsterdam",
        image: <img className="vacation" alt="" src={require("../Assets/vacation1.png")}/>        
    },
    {
        name: "London",
        image: <img className="vacation" alt="" src={require("../Assets/vacation1.png")}/>        
    },
    {
        name: "Paris",
        image: <img className="vacation" alt="" src={require("../Assets/vacation1.png")}/>        
    },
    {
        name: "Budapest",
        image: <img className="vacation" alt="" src={require("../Assets/vacation1.png")}/>        
    },
    {
        name: "Los Angeles",
        image: <img className="vacation" alt="" src={require("../Assets/vacation1.png")}/>        
    },
    {
        name: "Las Vegas",
        image: <img className="vacation" alt="" src={require("../Assets/vacation1.png")}/>
    },
    {
        name: "Rome",
        image: <img className="vacation" alt="" src={require("../Assets/vacation1.png")}/>
    }];
    render() {
        return (
            <div className="cities">
                {this.cities.map(city => (
                    <div className="city">
                        {city.image}
                        <div className="centered"><h3>{city.name}</h3></div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Cities;