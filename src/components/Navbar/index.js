import React, { Component } from 'react'
// import './index.scss'
import logo from '../../assets/images/logo.jpg'
import ModalLogin from '../login/modalLogin'
import { withRouter } from 'react-router';
import RegisterModal from '../register/modalRegister';
import BusinessModal from '../../common/modal/modalbusiness';
import { connect } from 'react-redux';
import { Nav, NavLink, Bars, NavMenu, NavBtn } from './navbarElements';
// import { DropdownButton, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Button, Dropdown } from 'semantic-ui-react'
import { userOptions } from '../../common/constants';
import { clearToken, getCurrentUser } from '../../utils/storage';

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
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  onLoginClick() {
    this.loginModalRef.current.handleShow()
  }

  onChooseBusiness() {
    this.chooseBusinessRef.current.handleShow()
  }

  logout() {
    clearToken()
    window.location.href = '/';
  }

  componentDidMount() {
    const config = {
      headers: {
        Authorization: 'Bearer' + localStorage.getItem('token')
      }
    };
    console.log(localStorage.getItem('token'))
  }

  handleMenuClick(e, { value }) {
    switch (value) {
      case 'edit':
        this.props.history.push('/register')
      case 'changePassword':
        break;
      default:
        this.logout()
    }
  }

  

  renderUser() {
    const user = getCurrentUser()
    if (user) {
      if(!user.status){
        return <> <span className='user-name'>
        <Dropdown
          text={user.email}
          icon='user'
          floating
          labeled
          button
          className='button icon'
        >
          <Dropdown.Menu>
            {userOptions.map((option) => (
              <Dropdown.Item onClick={this.handleMenuClick} key={option.value} {...option} />
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </span></>
      }else {
        return <>
          <Button primary className='user-name' onClick={this.onLoginClick} style={{ color: 'white' }}><i className="fa fa-user-o" aria-hidden="true"></i><a style={{marginLeft: '10px'}}>Register/Login</a></Button ></>
      }
      
    }
    else {
      return <>
        <Button primary className='user-name' onClick={this.onLoginClick} style={{ color: 'white' }}><i className="fa fa-user-o" aria-hidden="true"></i><a style={{marginLeft: '10px'}}>Register/Login</a></Button ></>
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
              onLoginClick = {this.onLoginClick}
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

export default withRouter(connect(mapStateToProps, null)(Navbar))