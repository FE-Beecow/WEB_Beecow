import React, { Component } from 'react'
import './index.scss'
import logo from '../../assets/images/logo.jpg'
import ModalLogin from '../login/modalLogin'
import { withRouter } from 'react-router';
import RegisterModal from '../register/modalRegister';
import BusinessModal from '../../common/modal/modalbusiness';
import { connect } from 'react-redux';
import { Dropdown } from 'react-bootstrap'
import { getAllBusiness, setBusiness } from '../../redux/actions/user'

class Home extends Component {
  constructor(props) {
    super(props)
  }


  componentDidMount() {
    this.props.getAllBusiness()
  }

  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}

const mapDispatchToProps = {
  getAllBusiness,
  setBusiness
}

export default connect(null, mapDispatchToProps)(Home)
