import React, { Component } from 'react';
import { validPassword, isEmailValid, validNumber } from '../../common/emplement/definition';
import CheckList from '../../common/components/checkList';
import { shipperOpptions, genderOptions, categoriesOpptions } from '../../common/constants';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/user'
import { Form, Select, Input } from 'semantic-ui-react'
import hidePassword from '../../assets/images/hide-eye.png'
import showPassword from '../../assets/images/show_password.png'
import ModalLogin from '../login/modalLogin'
class FormRegister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: '',
      password: '',
      userName: '',
      address: '',
      comfirmPassword: '',
      emailError: null,
      passwordError: null,
      phoneNumberError: null,
      validationErrors: {},
      phone: '',
      isShow: false,
      type: 'password',
      typePasswordCF : 'password'
    }
    this.loginModalRef = React.createRef();
    this.onLoginClick = this.onLoginClick.bind(this)
    this.clickShowPassword = this.clickShowPassword.bind(this)
    this.clickShowPasswordComfirm = this.clickShowPasswordComfirm.bind(this)
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
      this.props.register({ email, password, fullName, phone, address, businessId }).then(res => {
        console.log('res')
        console.log(res)
        if(res.payload.data.status == '999'){
          const emailError = res.payload.data.message
          this.setState({ emailError})
        }
        if(res.payload.data.status == '998'){
          const phoneNumberError = res.payload.data.message
          this.setState({ phoneNumberError})
        }else{
          window.location.href = '/';
        }
      })
    }
  }

  validate = () => {
    const { email, password, phone } = this.state
    const emailError = isEmailValid(email)
    const passwordError = validPassword(password)
    const phoneNumberError = validNumber(phone)
    this.setState({ emailError, passwordError })
    if (!!emailError?.length || !!passwordError?.length || !!phoneNumberError?.length) {
      return false
    }
    return true
  }

  goToHomePage() {
    this.props.history.push('/home')
  }

  onLoginClick() {
    this.loginModalRef.current.handleShow()
  }

  renderCategories() {
    const { businessId, business } = this.props
    if (!businessId) {
      window.location.href = '/';
    }
    const { name } = business.find((b) => b.id === businessId)
    if (name === 'Shipper') {
      return <><CheckList name='Shipping Type' options={shipperOpptions} /></>
    } else if (name === 'Farmer') {
      return <><CheckList name='Categories' options={categoriesOpptions} /></>
    }
    else{
      return <>
              <Form.Field>
                <div className='title'> Gender<span className='text-red start'>*</span>
                </div>
                <Select placeholder='Gender' options={genderOptions} />
              </Form.Field>
              <Form.Field>
                <div className='title'>
                  {/* <label>Date of Birth</label><span className='text-red start'>*</span> */}
                  Date of Birth<span className='text-red start'>*</span>
                </div>
                <div className="ui calendar" id="example1">
                  <div className="ui input left icon">
                    {/* <i className="calendar icon"></i> */}
                    <input type="date" name='dob' placeholder="Date of Birth" />
                  </div>
                </div>
              </Form.Field>
            </>
    }
  }

  name_form_register() {
    const { businessId, business } = this.props
    if (!businessId) {
      window.location.href = '/';
    }
    const { name } = business.find((b) => b.id === businessId)
    if (name === 'Shipper') {
      return <><p className='title-page'>Shipper Registration form</p></>
    } else if (name === 'Farmer') {
      return <><p className='title-page'>Farmer Registration form</p></>
    }
    else{
      return <><p className='title-page'>Buyer Registration form</p></>
    }
  }

  clickShowPassword = () => this.setState(({ type}) => ({
    type: type === 'password' ? 'text' : 'password',
  }))
  clickShowPasswordComfirm = () => this.setState(({ typeCf}) => ({
    typePasswordCF: typeCf === 'password' ? 'text' : 'password'
  }))

  render() {
    const { email, address, password, emailError, phoneNumberError, passwordError, comfirmPassword, phone, fullName } = this.state
    return (
      <div className='form-register  col-md-5 offset-md-4'>
        {this.name_form_register()}
        <Form name='form' onSubmit={this.handleSubmit}>
          <Form.Field>
            <div className='title'>
              {/* <label>Full Name</label><span className='text-red start'>*</span> */}
              Full Name<span className='text-red start'>*</span>
            </div>
            <input
              id='fullName'
              name='fullName'
              type='text'
              value={fullName}
              onChange={this.handleChange}
              placeholder='Full name...' />
          </Form.Field>
          <p className='text-error'></p>
          <Form.Field>
            <div className='title'>
              {/* <label>Email</label><span className='text-red start'>*</span> */}
              Email<span className='text-red start'>*</span>
            </div>
            <input
              id='email'
              name='email'
              type='text'
              onChange={this.handleChange}
              value={email}
              onKeyPress={this.handleKeyPress}
              placeholder='Email' />
          </Form.Field>
          <p className='text-error'>{emailError}</p>
          <Form.Field>
            <div className='title'>
              {/* <label>Phone</label><span className='text-red start'>*</span> */}
              Phone<span className='text-red start'>*</span>
            </div>
            <input
              id='phoneNumber'
              name='phone'
              type='number'
              onChange={this.handleChange}
              value={phone}
              onKeyPress={this.handleKeyPress}
              placeholder='Phone number' />
          </Form.Field>
          <p className='text-error'>{phoneNumberError}</p>
          <Form.Field>
            <div className='title'>
              {/* <label>Password</label><span className='text-red start'>*</span> */}
              Password<span className='text-red start'>*</span>
            </div>
            <input
              id='password'
              name='password'
              type={this.state.type}
              onChange={this.handleChange}
              value={password}
              onKeyPress={this.handleKeyPress}
              placeholder='Password' />
               <span className='show-hide' onClick={this.clickShowPassword}>{this.state.type === 'text' ? <><img src={hidePassword}/></> :  <><img src={showPassword}/></>}</span>
          </Form.Field>
          <p className='text-error'>{passwordError}</p>
          <Form.Field>
            <div className='title'>
              {/* <label>Re-enter Password</label><span className='text-red start'>*</span> */}
              Re-enter Password<span className='text-red start'>*</span>
            </div>
            <input
              id='comfirmPassword'
              name='comfirmPassword'
              type={this.state.typePasswordCF}
              value={comfirmPassword}
              onChange={this.handleChange}
              placeholder='Comfirm Password' />
               <span className='show-hide-comfirm' onClick={this.clickShowPasswordComfirm}>{this.state.typePasswordCF === 'text' ? <><img src={hidePassword}/></> :  <><img src={showPassword}/></>}</span>
          </Form.Field>
          <p className='text-error'>{passwordError}</p>
          <Form.Field>
            <div className='title'>
              {/* <label>Address</label><span className='text-red start'>*</span> */}
              Address<span className='text-red start'>*</span>
            </div>
            <input
              id='address'
              name='address'
              type='text'
              value={address}
              onChange={this.handleChange}
              placeholder='Address' />
          </Form.Field>
          <p className='text-error'></p>
          {
            this.renderCategories()
          }
          <div className='rows'>
            <div className='row form-login'>
              <button type='submit' className='btn btn-primary' onClick={this.loginAction}>Register</button>
            </div>
            <div className='row'>
              <p className='question'>Already registered?
                <span className='sign-up' onClick={this.onLoginClick}>Log In</span>
              </p>
            </div>
          </div>
          
          <ModalLogin
              ref={this.loginModalRef}
              onLoginClick = {this.onLoginClick}
            />
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