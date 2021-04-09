
import './App.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './components/home';
import FormLogin from './components/login/formLogin';
import LoginModal from './components/login/modalLogin';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App">
            <Route path="/" exact component={Home} />
            <Route path="/login" component={LoginModal} />
          </div>
        </Router>
      </div>
    )
  }
}
