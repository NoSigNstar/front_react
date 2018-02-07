import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Login from './components/Authentication/login';

class App extends Component {
  render() {
    return (
      <h1>
        <Router>
          <div>
            <Link to={"/login"} />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
      </h1>
    );
  }
}

export default App;
