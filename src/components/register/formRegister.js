import React, { Component } from 'react';
import './register.scss';
import Form from "react-bootstrap/Form";
import { validPassword, isEmailValid, validNumber } from '../../common/emplement/definition';
import CheckboxCategories from '../../common/checkbox/categoriesCheckbox';
import CheckboxShipper from '../../common/checkbox/shipperCheckbox';

export default class FormComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      email: '',
      address: '',
      comfirmPassword: '',
      emailError: null,
      passwordError: null,
      phoneNumberError: null,
      validationErrors: {},
      //date = date.calendar(),
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleChange = (e) => {
    const isCheckbox = e.target.type === 'checkbox';
    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = this.validate()
    const { email, password } = this.state
    if (isFormValid && email === 'admin@gmail.com' && password === '123456') {
      this.goToHomePage()
    }
  }

  validate = () => {
    const { email, password, phoneNumber } = this.state
    const emailError = isEmailValid(email)
    const passwordError = validPassword(password)
    const phoneNumberError = validNumber(phoneNumber)
    this.setState({ emailError, passwordError })
    if (!!emailError?.length || !!passwordError?.length || !!phoneNumberError?.length) {
      return false
    }
    return true
  }

  goToHomePage() {
    this.props.history.push('/home')
  }

  handleLogin() {
    const { openLogin, onClose } = this.props
    onClose()
    openLogin()
  }

  renderCategories() {
    let bussiness = ''
    if(bussiness === 'shipper') {
      return <><CheckboxShipper {...this.props} /></>
    } else if(bussiness === 'buyer') {
      return <><span>buyer</span></>
    }
    return <><CheckboxCategories {...this.props} /></>
  }

  render() {
    const { email, address, password, emailError, phoneNumberError, passwordError, comfirmPassword, phoneNumber, fullName } = this.state
    return (
      <div className='form'>
        <Form name='form' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input
              id='fullName'
              name='fullName'
              type='text'
              value={fullName}
              onKeyPress={this.handleKeyPress}
              placeholder='Full name...' />
            <p className='text-error'></p>
          </div>
          <div className='form-group'>
            <input
              id='email'
              name='email'
              type='text'
              onChange={this.handleChange}
              value={email, phoneNumber}
              onKeyPress={this.handleKeyPress}
              placeholder='Email' />
            <p className='text-error'>{emailError}</p>
          </div>
          <div className='form-group'>
            <input
              id='phoneNumber'
              name='phoneNumber'
              type='number'
              onChange={this.handleChange}
              value={phoneNumber}
              onKeyPress={this.handleKeyPress}
              placeholder='Phone number' />
            <p className='text-error'>{phoneNumberError}</p>
          </div>
          <div className='form-group'>
            <input
              id='password'
              name='password'
              type='password'
              onChange={this.handleChange}
              value={password}
              onKeyPress={this.handleKeyPress}
              placeholder='Password' />
            <p className='text-error'>{passwordError}</p>
          </div>
          <div className='form-group'>
            <input
              id='comfirmPassword'
              name='comfirmPassword'
              type='password'
              value={comfirmPassword}
              onKeyPress={this.handleKeyPress}
              placeholder='Comfirm Password' />
            <p className='text-error'>{passwordError}</p>
          </div>
          <div className='form-group'>
            <input
              id='address'
              name='address'
              type='text'
              value={address}
              onKeyPress={this.handleKeyPress}
              placeholder='Address' />

          </div>
          <div className="ui calendar" id="example1">
            <div className="ui input left icon">
              {/* <i className="calendar icon"></i> */}
              <input type="date" placeholder="Date of Birth" />
            </div>
          </div>
          <div className='form-group'>
            <p>categories</p>
           
          </div>

          {
            this.renderCategories()
          }

          <button type='submit' className='btn btn-primary' onClick={this.loginAction}>Register</button>
          <p className='question'>Already registered?
            <span className='sign-up' onClick={this.handleLogin}>Log In</span>
          </p>
        </Form>
      </div>

    )
  }
}
