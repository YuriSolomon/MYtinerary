import React from 'react';
import Footer from './Footer';

class Cities extends React.Component{
    constructor() {
        super();
        this.state = {
            cities: []
        }
    }
    
    componentDidMount() {
        fetch(`http://localhost:5000/cities/all`)
            .then(response => response.json())
            .then(json => {
                this.setState.cities = json;
            });
        };

    render() {
        return (
            <div className="cities">
                {this.state.cities.map((city,i) => (
                    <div className="city" key={i}>
                        {/* {city.image} */}
                        <div className="centered"><h3>{city}</h3></div>
                    </div>
                ))}
                <Footer/>
            </div>
        );
    }
}

export default Cities;