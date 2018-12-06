import React, { Component } from 'react';
import Landing from './Components/Landing';
import { BrowserRouter, Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing/>
      </div>
    );
  }
}

export default App;
