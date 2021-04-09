import React, { Component } from 'react'
import './index.scss'
import logo from '../../assets/images/logo.jpg'
import ModalLogin from '../login/modalLogin'
import { withRouter } from 'react-router';
import RegisterModal from '../register/modalRegister';
import BusinessModal from '../../common/modal/modalbusiness';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props)
        this.onLoginClick = this.onLoginClick.bind(this)
        this.state = {
            isOpen: false
        }
        this.loginModalRef = React.createRef();
        this.registerModalRef = React.createRef();
        this.chooseBusiness = React.createRef();
    }

    onLoginClick() {
        this.loginModalRef.current.handleShow()
    }

    goToRegister() {
        this.registerModalRef.current.handleShow()
    }

    onChooseBusiness() {
        this.chooseBusiness.current.handleShow()
    }

    render() {
        const { user } = this.props
        return (
            <div className='topnav '>
                <div className='content-header' >
                    <div className='logo-page'>
                        <img alt='logo ' className='desktop-display' src={logo} title='logo ' />
                    </div>
                </div>
                <div className='content-header' href='# '>Tạo cửa hàng</div>
                <div className='content-header' href='# '>SHOPING</div>
                <div className='content-header' href='# '>
                    <button class="button button1">Green</button>
                </div>
                <div className='content-header' href='# '>
                    <button class="button button1">Green</button>
                </div>
                <div className='content-header content-right' href='# '>
                    <ModalLogin
                        ref={this.loginModalRef}
                        goToRegister={this.goToRegister.bind(this)}
                        onChooseBusiness={this.onChooseBusiness.bind(this)}
                    />
                    <RegisterModal
                        ref={this.registerModalRef}
                        openLogin={this.onLoginClick}
                    />
                    <BusinessModal
                        ref={this.chooseBusiness}
                        goToRegister={this.goToRegister.bind(this)}
                    />
                    {
                        user.currentUser && <span><i className="fa fa-user-circle-o"></i>{user?.currentUser?.email}</span>
                    }
                    {
                        !user.currentUser && <span onClick={this.onLoginClick}><i className="fa fa-user-circle-o"></i>{user?.currentUser?.email}</span>
                    }
                </div>
            </div>
        )


    }
}

const mapStateToProps = ({ user }) => ({
    user: user
})

export default connect(mapStateToProps, null)(Home)
