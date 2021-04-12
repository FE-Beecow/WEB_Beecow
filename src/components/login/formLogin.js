import React, { Component } from 'react';
import './index.scss'
import Form from "react-bootstrap/Form";
import { validPassword, isEmailValid, validNumber} from '../../common/emplement/definition';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import { login } from '../../redux/actions/user'
import { openAlert } from '../../redux/actions/alert'
import { messageTypes } from '../../common/constants';
import hidePassword from '../../assets/images/hide-eye.png'
import showPassword from '../../assets/images/show_password.png'

class FormLogin extends Component {

  constructor(props) {
    super(props)
    this.onChooseBusiness = this.onChooseBusiness.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      emailError: null,
      passwordError: null,
      phoneNumberError: null,
      password: '',
      email: '',
      phoneNumber: '',
      validationErrors: {},
      isOpen: false,
      type: 'password',

    }
  }
  onChooseBusiness() {
    this.props.onClose()
    this.props.onChooseBusiness()
  }
  handleChange = (e) => {
    const isCheckbox = e.target.type === 'checkbox';
    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // const isFormValid = this.validate()
    const { email, password, phoneNumber } = this.state
 
      this.props.login({ userName: email, password, phoneNumber }).then(res => {
        if(res.payload.data.status == 104){
          const emailError = 'Pasword or Email or Phone is incorrect'
          this.setState({ emailError})
        }else{
          const { openAlert, onClose } = this.props
          openAlert({ messageType: messageTypes.success, message: '123123' })
          onClose()
          window.location.href = '/';
        }
      })
    
  }

  // validate = () => {
  //   const { email, password, phoneNumber } = this.state
  //   const emailError = isEmailValid(email)
  //   const passwordError = validPassword(password)
  //   const phoneNumberError = validNumber(phoneNumber)
  //   this.setState({ emailError, passwordError })
  //   if (!!emailError?.length || !!passwordError?.length || !!phoneNumberError?.length) {
  //     return false
  //   }
  //   return true
  // }

  handleClick = () => this.setState(({ type }) => ({
    type: type === 'password' ? 'text' : 'password'
  }))

  render() {
    const { email, password, phoneNumber, emailError, passwordError,phoneNumberError } = this.state
    return (
      <div>
        <Form className='form' name='form' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>Email address or phone number </label><span className='text-red'>*</span>
            <input
              id='email'
              name='email'
              type='text'
              onChange={this.handleChange}
              value={email || phoneNumber}
              onKeyPress={this.handleKeyPress}
              placeholder='Please input your email or phone number' />
            <p className='text-error'>{emailError}</p>
            <p className='text-error'>{phoneNumberError}</p>
          </div>
          <div className='form-group'>
            <label>Password</label><span className='text-red'>*</span>
            <input
              id='password'
              name='password'
              type={this.state.type}
              onChange={this.handleChange}
              value={password}
              onKeyPress={this.handleKeyPress}
              placeholder='Please input your password' />
            <span className='show-hide' onClick={this.handleClick}>{this.state.type === 'text' ? <><img src={hidePassword}/></> :  <><img src={showPassword}/></>}</span>
            <p className='text-error'>{passwordError}</p>
            <button type='submit' className='btn'>Login</button>
          </div>
          {/* <div className='form-group form-check'>
            <input type='checkbox' className='form-check-input' id='exampleCheck1' />
            <label className='form-check-label' for='exampleCheck1'>Check me out</label>
          </div> */}
        </Form>
        <div className='fogot-pass'>Forgot password?</div>
        <div className='question'>Don't have an account yet?
            <span className='sign-up' onClick={this.onChooseBusiness} >Register</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  user: user
})

const mapDispatchToProps = {
  login,
  openAlert
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormLogin))