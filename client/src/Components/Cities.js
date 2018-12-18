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
                this.setState({cities: json});
                console.log(this.state)
            });
    };

    render() {
        return (
            <div className="cities">
                {this.state.cities.map((city,i) => (
                    <div className="city" key={i}>
                        {/* {city.image} */}
                        {/* <div className="centered"> */}
                            <h3>{city.name}</h3>
                            <h5>{city.country}</h5>
                        {/* </div> */}
                    </div>
                ))}
                <Footer/>
            </div>
        );
    }
}

export default Cities;