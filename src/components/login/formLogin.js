import React, { Component } from 'react';
import './index.scss'
import Form from "react-bootstrap/Form";
import { validPassword, isEmailValid } from '../../common/emplement/definition';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import { login } from '../../redux/actions/user'

class FormLogin extends Component {

  constructor(props) {
    super(props)
    this.onChooseBusiness = this.onChooseBusiness.bind(this)
    //this.goToRegister = this.goToRegister.bind(this)
    this.state = {
      emailError: null,
      passwordError: null,
      password: '',
      email: '',
      validationErrors: {},
      isOpen: false

    }
  }

  // goToRegister() {
  //   this.props.onClose()
  //   this.props.goToRegister()
  // }
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
    const isFormValid = this.validate()
    const { email, password } = this.state
    if (isFormValid) {
      this.props.login({ userName: email, password }).then(() => {
        this.props.onClose()
      })
    }
  }

  validate = () => {
    const { email, password } = this.state
    const emailError = isEmailValid(email)
    const passwordError = validPassword(password)
    this.setState({ emailError, passwordError })
    if (!!emailError?.length || !!passwordError?.length) {
      return false
    }
    return true
  }

  // go to home page
  goToHomePage() {
    //this.props.history.push('/home')
  }

  render() {
    const { email, password, emailError, passwordError } = this.state
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
              value={email}
              onKeyPress={this.handleKeyPress} 
              placeholder='Please input your email or phone number'/>
            <p className='text-error'>{emailError}</p>
          </div>
          <div className='form-group'>
            <label>Password</label><span className='text-red'>*</span>
            <input
              id='password'
              name='password'
              type='password'
              onChange={this.handleChange}
              value={password}
              onKeyPress={this.handleKeyPress} 
              placeholder='Please input your password'/>
            <p className='text-error'>{passwordError}</p>
            <button type='submit' className='btn btn-primary'>Login</button>
          </div>
          {/* <div className='form-group form-check'>
            <input type='checkbox' className='form-check-input' id='exampleCheck1' />
            <label className='form-check-label' for='exampleCheck1'>Check me out</label>
          </div> */}
        </Form>
        <div className='fogot-pass'>Forgot password?</div>
        <div className='question'>Don't have an account yet?
            <span className='sign-up' onClick={this.onChooseBusiness} >Sign up</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  user: user
})

const mapDispatchToProps = {
  login
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormLogin))