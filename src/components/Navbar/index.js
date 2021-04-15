import React, { Component } from 'react'
// import './index.scss'
import logo from '../../assets/images/logo.png'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Nav, NavLink, Bars, NavMenu, NavBtn } from './NavbarElements';
// import { DropdownButton, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


class Navbar extends Component {
  constructor(props) {
    super(props)
   
    this.state = {
    
    }
   
  }


  



  render() {

    return (
      <>
        <Nav>
          <NavLink to="/">
            <img alt='logo ' src={logo} title='logo ' />
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to="/" activeStyle>
              Screen_01
            </NavLink>
            <NavLink to="/" activeStyle>
              Screen_02
            </NavLink>
            <NavLink to="/" activeStyle>
              Screen_03
            </NavLink>
            <NavLink to="/" activeStyle>
              Screen_04
            </NavLink>
            <NavLink to="/" activeStyle>
              Screen_05
            </NavLink>
          </NavMenu>
          <NavBtn>
          
          
          </NavBtn>
        </Nav>
      </>

    )
  }
}

const mapStateToProps = ({ user }) => ({
  user: user
})

export default withRouter(connect(mapStateToProps, null)(Navbar))