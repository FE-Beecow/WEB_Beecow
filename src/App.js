
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

import Alert from './common/components/alert';
import Navbar from './components/navbar';
import Menu from './components/home/menu';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Menu/>
        {/* <Navbar /> */}
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
