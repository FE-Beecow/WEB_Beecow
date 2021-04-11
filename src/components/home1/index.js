import React, { Component } from 'react'
import './index.scss'
import logo from '../../assets/images/logo.jpg'
import ModalLogin from '../login/modalLogin'
import { withRouter } from 'react-router';
import RegisterModal from '../register/modalRegister';
import BusinessModal from '../../common/modal/modalbusiness';
import { connect } from 'react-redux';
import { Dropdown } from 'react-bootstrap'

class Home1 extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        
        return (
            <span>HOME</span>
        )


    }
}

export default Home1
