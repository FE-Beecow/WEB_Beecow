export const FormError = (props) => {
    if (props.isHidden) return null
    return (<div>{props.errorMessage}</div>)
}
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import update from 'immutability-helper';
import TestImage from '../../common/assets/images/logo.png';
import FooterSecure from '../../common/footer-secure/footer-secure.component';
import Label from '../../element/label/label.component';
import Input from '../../element/input/input.component';
import Select from '../../element/select/select.component';
import Checkbox from '../../element/checkbox/checkbox.component';
import { login, loginWithoutPassword } from '../../../actions/user';
import { validate, rule } from '../../element/rule.executor'
import { required, notSelect } from '../../element/rule.definition';
import * as ObjectUtils from '../../../utils/object';

const countryCallingCodes = [
    { id: 65, label: '+65(SG)' },
    { id: 84, label: '+84(VN)' },
];

const loginRules = {
    nationalPhoneNumber: rule('nationalPhoneNumber', 'Phone number', required),
    password: rule('password', 'Password', required),
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.modelChanged = this.modelChanged.bind(this);
        this.loginAction = this.loginAction.bind(this);
        this.revealPassword = this.revealPassword.bind(this);
        // this.accountKitSmsLogin = this.accountKitSmsLogin.bind(this);
        this.validateBeforeSubmit = this.validateBeforeSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.model = {
            countryCallingCode: 65,
            nationalPhoneNumber: '',
            password: '',
        };
        this.state = {
            countryCallingCode: 65,
            isLoginFailed: false,
            isRevealPassword: false,
            passwordType: 'password',
            nationalPhoneNumber: '',
            password: '',
            validationErrors: { },
        }
    }

    componentWillMount() {
    }

    componentDidMount() {
        document.getElementsByClassName('server-loading-spin')[0].remove();
        document.getElementById('app').style = '';    
        // console.log('window.AccountKit????', window.AccountKit);
        // if (!window.AccountKit) {
        //   (cb => {
        //     const tag = document.createElement('script');
        //     tag.setAttribute(
        //       'src',
        //       'https://sdk.accountkit.com/en_US/sdk.js'
        //     );
        //     tag.setAttribute('id', 'account-kit');
        //     tag.setAttribute('type', 'text/javascript');
        //     tag.setAttribute('async', true);
        //     tag.onload = cb;
        //     document.head.appendChild(tag);
        //   })(() => {
        //     window.AccountKit_OnInteractive = this.accountKitSDKOnload.bind(this);
        //     if (document.getElementsByClassName('server-loading-spin')[0]) {
        //         document.getElementsByClassName('server-loading-spin')[0].remove();
        //         document.getElementById('app').style = '';    
        //     }
        //   });
        // }
  
    }
    
    componentWillReceiveProps(nextProps) {
    }

    static fetchData(store, match, query) {
        return null;
    }

    modelChanged(e, field, value) {
        this.model[field] = value;
        let newState = update(this.state, {
            [field]: {$set: value},
            isLoginFailed: {$set: false},
        });
        let fieldRules = [];
        fieldRules.push(loginRules[field]);
        if (Object.prototype.toString.call(fieldRules[0]) == '[object Function]') {
            const validateValue = validate(newState, fieldRules);
            if (ObjectUtils.isNotEmpty(validateValue)) {
                newState.validationErrors = Object.assign(newState.validationErrors, validateValue);
            } else {
                delete newState.validationErrors[field];
            }
        }
        this.setState(newState);
    }

    /* accountKitSDKOnload() {
        window.AccountKit.init({
            appId: '355132038323466',
            state: '123456789',
            version: 'v1.0',
            fbAppEventsEnabled: false
        });
    } */

    /* accountKitSmsLogin(e) {
        e.preventDefault();
        window.AccountKit.login('PHONE', {}, res => {
            if (res.status === 'PARTIALLY_AUTHENTICATED') {
                const credentials = {
                    providerKey: 'nationalPhoneNumber',
                    providerValue: res.code,
                    source: 'facebook_accountkit',
                }
                this.props.loginWithoutPassword(credentials).then(() => {
                    this.props.history.push('/dashboard');
                });
            } else if (res.status === 'NOT_AUTHENTICATED') {
              // handle authentication failure
            } else if (res.status === 'BAD_PARAMS') {
              // handle bad parameters
            }
        });
    } */

    validateBeforeSubmit(source) {
        // Do state validation.
        let validateValue = validate(source, Object.values(loginRules));
        if (ObjectUtils.isNotEmpty(validateValue)) {
            this.setState({ validationErrors: validateValue });
            return false;
        }
        return true;
    }

    loginAction() {
        if (this.validateBeforeSubmit(this.state)) {
            const credentials = {
                providerKey: 'phoneNumber',
                providerValue: `+${this.model.countryCallingCode}${this.model.nationalPhoneNumber}`,
                password: this.model.password
            }
            this.props.login(credentials).then((res) => {
                this.setState({
                  countryCallingCode: 65,
                  isLoginFailed: false,
                  isRevealPassword: false,
                  passwordType: 'password',
                  nationalPhoneNumber: '',
                  password: '',
                  validationErrors: { },
                });
                this.props.history.push('/dashboard');
            }, (e) => {
                this.setState({ isLoginFailed: true });
            });
        } else {
           this.validateBeforeSubmit(this.state);
        }
    }

    handleKeyPress(e) {
        if(e.key === 'Enter') {
            this.loginAction();
        }
    }

    revealPassword() {
        const isRevealPassword = !this.state.isRevealPassword;
        this.setState({ isRevealPassword, passwordType: isRevealPassword ? 'text' : 'password' });    
    }

    render() {
        return (
            <div className='col-md-4 form-login'>
                <div className='box p20'>
                    <div className='box-content'>
                        <div className='text-center mBT40'>
                            <h1 className='logo'><Link to='/'><img src={TestImage}/> </Link> </h1>
                            <h2>Login</h2>
                            <p>Login with your mobile phone and password</p>
                        </div>
                        <form>
                            <div className='form-list row'>
                                <div className='form-group col-md-12'>
                                    <Label title='Mobile Number' />
                                    <div className='mobile-field clearfix'>
                                        <div className='country-code'>
                                            <div className='styled-select'>
                                                <Select 
                                                    id='mobile-country'
                                                    data-model='countryCallingCode'
                                                    selected={this.state.countryCallingCode} 
                                                    data={countryCallingCodes}
                                                    key='countryCallingCode'
                                                    disabledChooseOption={true}
                                                    optKey='id'
                                                    value='label'
                                                    onChange={this.modelChanged}/>
                                            </div>
                                        </div>
                                        <div className='mobile-phone'>
                                            <Input 
                                                id='mobile-phone'
                                                name='mobile-phone'
                                                type='phone'
                                                data-model='nationalPhoneNumber'
                                                data-error={this.state.validationErrors['nationalPhoneNumber']}
                                                onFocus={this.modelChanged}
                                                onChange={this.modelChanged}
                                                value={this.state.nationalPhoneNumber}
                                                onKeyPress={this.handleKeyPress} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='form-list row'>
                                <div className='form-group col-md-12'>
                                    <Label title='Password' />
                                    <div className='mobile-field clearfix'>
                                        <Input 
                                            id='password' 
                                            type={this.state.passwordType} 
                                            data-model='password'
                                            data-error={this.state.validationErrors['password']}
                                            onFocus={this.modelChanged}
                                            onChange={this.modelChanged}
                                            value={this.state.password}
                                            onKeyPress={this.handleKeyPress} />
                                        <div className='right-password'>
                                            <a onClick={this.revealPassword}><i className='fa fa-eye'/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='form-list row'>
                                <div className='form-group col-md-6 text-left'>
                                    <Checkbox id='global-loyalty' type='checkbox' text='Remember me.'/>
                                </div>
                            </div>
                            <div className='form-list row'>
                                <div className='form-group col-sm-6 '>
                                    <button type='button' className='btn-full btn-red' onClick={this.loginAction}>
                                        Login
                                    </button>
                                </div>
                            </div>
                            {/* <div className='form-list row'>
                                <div className='form-group col-sm-12 '>
                                    <button onClick={this.accountKitSmsLogin} className='btn-full btn-blue'>
                                        Login via Facebook
                                    </button>
                                </div>
                            </div> */} 
                            {
                                !this.state.isLoginFailed ? (<div></div>) :
                                (
                                    <div className="validation-error">
                                        <span className="text">Username & password are not correct, please try again!</span>
                                    </div>
                                )
                            }
                        </form>
                    </div>
                </div>
                <FooterSecure />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ login, loginWithoutPassword }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Login);
