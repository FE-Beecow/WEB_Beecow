import React, { Component } from 'react'
// import './index.scss'
import logo from '../../assets/images/logo.jpg'
import ModalLogin from '../login/modalLogin'
import { withRouter } from 'react-router';
import RegisterModal from '../register/modalRegister';
import BusinessModal from '../../common/modal/modalbusiness';
import { connect } from 'react-redux';
import {Nav, NavLink, Bars, NavMenu, NavBtn} from './NavbarElements';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.onLoginClick = this.onLoginClick.bind(this)
        this.logout = this.logout.bind(this)
        this.state = {
            isOpen: false
        }
        this.loginModalRef = React.createRef();
        this.chooseBusinessRef = React.createRef();
        this.onChooseBusiness = this.onChooseBusiness.bind(this)
    }

    onLoginClick() {
        this.loginModalRef.current.handleShow()
    }

    onChooseBusiness() {
        this.chooseBusinessRef.current.handleShow()
    }

    logout() {
      localStorage.removeItem('user');
      window.location.href = '/';
    }

    componentDidMount(){
      const config ={
        headers:{
          Authorization:'Bearer' + localStorage.getItem('token')
        }
      };
      console.log(localStorage.getItem('token'))

      // axios.get('userToken', config).then(
      //   res=>{

      //     console.log(res.data)
      //   },
      )
    }

    renderUser() {
        const { user } = this.props
        if(user.currentUser){
            return <> <span className='user-name'>
                <DropdownButton
                  alignRight
                  title={user?.currentUser?.username}
                  id="dropdown-menu-align-right"
                >
                  <Dropdown.Item href="/">Edit Profile</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="/">Change Password</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="/">Privacy Settings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="/">Delete Account</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={this.logout}>Logout</Dropdown.Item>
                </DropdownButton>
              </span></>
        }
        else{
            return <>
              <span className='user-name' onClick={this.onLoginClick} style={{color: 'white'}}><i className="fa fa-user-o" aria-hidden="true"></i>Sign In</span></>
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
            <ModalLogin
                  ref={this.loginModalRef}
                  onChooseBusiness={this.onChooseBusiness}
              />
              <BusinessModal
                  ref={this.chooseBusinessRef}
              />
              {
                  this.renderUser()
              }
          </NavBtn>
        </Nav>
      </>
          
      )
    }
}

const mapStateToProps = ({ user }) => ({
    user: user
})

export default connect(mapStateToProps, null)(Navbar)