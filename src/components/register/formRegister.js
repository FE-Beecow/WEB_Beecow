import React, { Component } from 'react';
import './register.scss';
import { validPassword, isEmailValid, validNumber } from '../../common/emplement/definition';
import CheckList from '../../common/components/checkList';
import { shipperOpptions, genderOptions } from '../../common/constants';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/user'
import { Form, Select } from 'semantic-ui-react'

class FormRegister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: '',
      password: '',
      email: '',
      address: '',
      comfirmPassword: '',
      emailError: null,
      passwordError: null,
      phoneNumberError: null,
      validationErrors: {},
      phone: ''
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
    const { email, password, fullName, phone, address } = this.state
    const { businessId } = this.props
    if (isFormValid) {
      this.props.register({ email, password, fullName, phone, address, businessId })
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
    const { businessId, business } = this.props
    const { name } = business.find((b) => b.id === businessId)
    if (name === 'Shipper') {
      return <><CheckList name='Shipping Type' options={shipperOpptions} /></>
    } else if (name === 'Farmer') {
      return <><CheckList name='Categories' options={shipperOpptions} /></>
    }
  }

  render() {
    const { email, address, password, emailError, phoneNumberError, passwordError, comfirmPassword, phoneNumber, fullName } = this.state
    return (
      <div className='form-register  col-md-5 offset-md-3'>
        <p className='title-page'>Register</p>
        <Form name='form' onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Full Name</label><span className='text-red'>*</span>
            <input
              id='fullName'
              name='fullName'
              type='text'
              value={fullName}
              onChange={this.handleChange}
              placeholder='Full name...' />
            <div className='text-error'></div>
          </Form.Field>
          <Form.Field>
            <label>Email</label><span className='text-red'>*</span>
            <input
              id='email'
              name='email'
              type='text'
              onChange={this.handleChange}
              value={email, phoneNumber}
              onKeyPress={this.handleKeyPress}
              placeholder='Email' />
            <p className='text-error'>{emailError}</p>
          </Form.Field>
          <Form.Field>
            <label>Phone</label><span className='text-red'>*</span>
            <input
              id='phoneNumber'
              name='phone'
              type='number'
              onChange={this.handleChange}
              value={phoneNumber}
              onKeyPress={this.handleKeyPress}
              placeholder='Phone number' />
            <br />
            <p className='text-error'>{phoneNumberError}</p>
          </Form.Field>
          <Form.Field>
            <label>Password</label><span className='text-red'>*</span>
            <input
              id='password'
              name='password'
              type='password'
              onChange={this.handleChange}
              value={password}
              onKeyPress={this.handleKeyPress}
              placeholder='Password' />
            <p className='text-error'>{passwordError}</p>
          </Form.Field>
          <Form.Field>
            <label>Re-enter Password</label><span className='text-red'>*</span>
            <input
              id='comfirmPassword'
              name='comfirmPassword'
              type='password'
              value={comfirmPassword}
              onChange={this.handleChange}
              placeholder='Comfirm Password' />
            <p className='text-error'>{passwordError}</p>
          </Form.Field>
          <Form.Field>
            <label>Address</label><span className='text-red'>*</span>
            <input
              id='address'
              name='address'
              type='text'
              value={address}
              onChange={this.handleChange}
              placeholder='Address' />
          </Form.Field>
          <Form.Field
            control={Select}
            options={genderOptions}
            label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
            placeholder='Gender'
            search
            searchInput={{ id: 'form-select-control-gender' }}
          />
          <Form.Field>
            <label>Date of Birth</label><span className='text-red'>*</span>
            <div className="ui calendar" id="example1">
              <div className="ui input left icon">
                {/* <i className="calendar icon"></i> */}
                <input type="date" name='dob' placeholder="Date of Birth" />
              </div>
            </div>
          </Form.Field>
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
const mapStateToProps = ({ user }) => {
  return {
    businessId: user.currentBusinessId,
    business: user.business
  }
}

const mapDispatchToProps = {
  register
}

export default connect(mapStateToProps, mapDispatchToProps)(FormRegister)