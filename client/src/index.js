import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header';
import Landing from './Components/Landing';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Cities from './Components/Cities';

ReactDOM.render(
    <div>
        <BrowserRouter>
            <div id="general">
                <Header/>
                <Route exact path='/' component={Landing}/>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/cities' component={Cities}/>
            </div>
        </BrowserRouter>
    </div>,
    document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
