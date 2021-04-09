// import React, { Component } from 'react'
// import { Tab } from 'semantic-ui-react'
// import { required, validPassword, isEmailValid } from '../../common/emplement/definition';
// const panes = [
//   {
//     menuItem: 'Email',
//     render: (props) => <Tab.Pane attached={false}>vvv</Tab.Pane>,
//   },
//   {
//     menuItem: 'Phone',
//     render: (props) => <Tab.Pane attached={false}>aa</Tab.Pane>,
//   },
// ]
// export default class TabComponent extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//           emailError: null,
//           passwordError: null,
//           password: '',
//           email: '',
//           validationErrors: {},
//           revealPassword: '',
//         }
//       }
    
//       handleChange = (e) => {
//         const isCheckbox = e.target.type === 'checkbox';
//         this.setState({
//           [e.target.name]: isCheckbox ? e.target.checked : e.target.value
//         });
//       }
    
//       handleSubmit = (e) => {
//         e.preventDefault();
//         const isFormValid = this.validate()
//         const { email, password } = this.state
//         if (isFormValid && email === 'admin@gmail.com' && password === '123456') {
//           this.goToHomePage()
//         }
//       }
    
//       validate = () => {
//         const { email, password } = this.state
//         const emailError = isEmailValid(email)
//         const passwordError = validPassword(password)
//         this.setState({ emailError, passwordError })
//         if (!!emailError?.length || !!passwordError?.length) {
//           return false
//         }
//         return true
//       }
      
//    // go to home page
//    goToHomePage() {
//     this.props.history.push('/home')
//   }

//     render() {
//         const { email, password, emailError, passwordError, revealPassword, phoneNumber, fullName } = this.state
//         return (
//             <div>
//                 <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
//                 <div className='form'>
//         <Form name='form' onSubmit={this.handleSubmit}>
//           <div className='form-group'>
//             <input
//               id='fullName'
//               name='fullName'
//               type='text'
//               value={fullName}
//               onKeyPress={this.handleKeyPress}
//               placeholder='Name' />
//             <p className='text-error'></p>
//           </div>
//           <div className='form-group'>
//             <input
//               id='email'
//               name='email'
//               type='text'
//               onChange={this.handleChange}
//               value={email}
//               onKeyPress={this.handleKeyPress}
//               placeholder='Email' />
//             <p className='text-error'>{emailError}</p>
//           </div>
//           <div className='form-group'>
//             <input
//               id='phone'
//               name='phone'
//               type='number'
//               value={phoneNumber}
//               onKeyPress={this.handleKeyPress}
//               placeholder='Phone' />
//             <p className='text-error'></p>
//           </div>

//           <div className='form-group'>
//             <input
//               id='password'
//               name='password'
//               type='password'
//               onChange={this.handleChange}
//               value={password}
//               onKeyPress={this.handleKeyPress}
//               placeholder='Password' />
//             <p className='text-error'>{passwordError}</p>
//           </div>
//           <div className='form-group'>
//             <input
//               id='revealPassword'
//               name='revealPassword'
//               type='password'
//               value={revealPassword}
//               onKeyPress={this.handleKeyPress}
//               placeholder='Comfirm Password' />
//             <p className='text-error'>{passwordError}</p>
//           </div>
//           <button type='submit' className='btn btn-primary' onClick={this.loginAction}>Register</button>
//         </Form>
//       </div>
//             </div>
//         )
//     }
// }
