import React, { Component } from 'react'
import './index.scss'
import logo from '../../assets/images/logo.jpg'
import ModalLogin from '../login/modalLogin'
import { withRouter } from 'react-router';
import RegisterModal from '../register/modalRegister';
import BusinessModal from '../../common/modal/modalbusiness';
import { connect } from 'react-redux';
import { Dropdown } from 'react-bootstrap'

class Home extends Component {
    constructor(props) {
        super(props)
        this.onLoginClick = this.onLoginClick.bind(this)
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

    // goToRegister() {
    //     this.registerModalRef.current.handleShow()
    // }

    onChooseBusiness() {
        this.chooseBusinessRef.current.handleShow()
    }

    renderUser() {
        const { user } = this.props
        if(user.currentUser){
            return <> <span className='user-name'><i className="fa fa-user-o" aria-hidden="true"></i>{user?.currentUser?.username}</span></>
        }
        else{
            return <><span className='user-name' onClick={this.onLoginClick}><i className="fa fa-user-o" aria-hidden="true"></i>Sign In</span></>
        }
        // return <><span>
        //     <Dropdown>
        //         <Dropdown.Toggle variant="success" id="dropdown-basic">
        //             Dropdown Button
        //         </Dropdown.Toggle>

        //         <Dropdown.Menu>
        //             <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        //             <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        //             <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        //         </Dropdown.Menu>
        //     </Dropdown>
        //     </span></>
    }

    render() {
        
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
                        //goToRegister={this.goToRegister.bind(this)}
                        onChooseBusiness={this.onChooseBusiness}
                    />
                    <BusinessModal
                        ref={this.chooseBusinessRef}
                    />
                    {
                       this.renderUser()
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
