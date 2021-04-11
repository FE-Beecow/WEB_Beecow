
import './App.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from './components/home';
import FormLogin from './components/login/formLogin';
import LoginModal from './components/login/modalLogin';
import FormRegister from './components/register/formRegister';
import Navbar from './components/navbar';
import Alert from './common/components/alert';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        {/* <Alert /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={LoginModal} />
          <Route path="/register" component={FormRegister} />
        </Switch>
        {/* <Router>
            <div className="App">
              <Route path="/" exact component={Home} />
              <Route path="/login" component={LoginModal} />
              <Route path="/register" component={FormRegister} />
            </div>
          </Router> */}
      </Router>
    )
  }
}
