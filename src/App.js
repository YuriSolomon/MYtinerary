import React, { Component } from 'react';
import Landing from './Components/Landing';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Link to='/login'>login</Link>
            <Link to='/signup'>signup</Link>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={SignUp}/>
          </div>
        </BrowserRouter>
        <Landing/>
      </div>
    );
  }
}

export default App;