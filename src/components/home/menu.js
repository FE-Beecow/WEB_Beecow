import React, { Component } from 'react'
import logo from '../../assets/images/logo-farm.png'
import { Button, Dropdown } from 'semantic-ui-react';
import { userOptions } from '../../common/constants';
import { clearToken, getCurrentUser } from '../../utils/storage';
import ModalLogin from '../login/modalLogin';
import ModalBusiness from '../../common/modal/modalbusiness';
export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.onLoginClick = this.onLoginClick.bind(this)
    this.logout = this.logout.bind(this)
    this.state = {
      isOpen: false,
    }
    this.loginModalRef = React.createRef();
    this.chooseBusinessRef = React.createRef();
    this.onChooseBusiness = this.onChooseBusiness.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }
  componentDidMount() {
    const config = {
      headers: {
        Authorization: 'Bearer' + localStorage.getItem('token')
      }
    };
    console.log(localStorage.getItem('token'))
  }

  handleMenuClick(e, { value }) {
    switch (value) {
      case 'edit':
        this.props.history.push('/register')
      case 'changePassword':
        break;
      default:
        this.logout()
    }
  }
  onLoginClick() {
    this.loginModalRef.current.handleShow()
  }

  onChooseBusiness() {
    this.chooseBusinessRef.current.handleShow()
  }
  logout() {
    clearToken()
    window.location.href = '/';
  }
  renderUser() {
    const user = getCurrentUser()
    if (user) {
      if (!user.status) {
        return <> <span className='user-name'>
          <Dropdown
            text={user.email}
            icon='user'
            floating
            labeled
            button
            className='button icon'
          >
            <Dropdown.Menu>
              {userOptions.map((option) => (
                <Dropdown.Item onClick={this.handleMenuClick} key={option.value} {...option} />
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </span></>
      } else {
        return <>
          <Button className='user-name' onClick={this.onLoginClick} style={{ color: 'white' }}><i className="fa fa-user-o" aria-hidden="true"></i><a style={{ marginLeft: '10px' }}>Register/Login</a></Button ></>
      }

    }
    else {
      return <>
        <Button className='user-name' onClick={this.onLoginClick} style={{ color: 'white' }}><i className="fa fa-user-o" aria-hidden="true"></i><a style={{ marginLeft: '10px' }}>Register/Login</a></Button ></>
    }
  }
  render() {
    return (
      <div className="type-1900">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="header-second">
                <div className="col-md-4 col-sm-3">
                  <div className="logo-top">
                    <img src={logo} className="img-responsive" alt="logo" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="smart-search">
                    <form className="smart-search-form" action="#">
                      <input type="text" name="s" placeholder="Search here..." onfocus />
                      <input type="hidden" name="post_type" defaultValue="product" />
                      <input className="cat-value" type="hidden" name="product_cat" defaultValue />
                      <div id="show-btn" className="icon-search"><i className="fa fa-search" aria-hidden="true" /></div>
                    </form>
                  </div>
                </div>
                <div class="col-md-2 col-sm-3">
                  <div class="mini-cart">
                    {
                      this.renderUser()
                    }
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="menu-top">
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="right-menu col-sm-2 col-xs-6">
                  <div className="right-category-dropdown">
                    <span className="menu-right" data-toggle="collapse" data-target="#collape">
                      <i className="fa fa-bars" aria-hidden="true" />
                    </span>
                  </div>
                  <ul id="collape" className="list-category-dropdown collapse">
                    <li className="has-cat-mega">
                      <a href="#">Computers
                      <img width={20} height={16} src="#" className="attachment-full size-full" alt="" />
                      </a>
                    </li>
                    <li className="has-cat-mega">
                      <a href="#">Electronis
                      <img width={20} height={19} src="#" className="attachment-full size-full" alt="" />
                      </a>
                    </li>
                    <li className>
                      <a href="#">Fashion
                      <img width={20} height={19} src="#" className="attachment-full size-full" alt="" />
                        <img width={20} height={19} src className="attachment-full size-full" alt="" />
                      </a>
                    </li>
                    <li className="has-cat-mega">
                      <a href="#">Food
                      <img width={20} height={21} src="#" className="attachment-full size-full" alt="" />
                        <img width={20} height={21} src className="attachment-full size-full" alt="" />
                      </a>
                    </li>
                  </ul>
                  <a href="#" className="expand-category-link" />
                </div>
                {/* menu nav */}
                <div className="menunav">
                  <span className="menuiconnav" data-toggle="collapse" data-target="#navbar">
                    <i className="fa fa-bars" aria-hidden="true" />
                  </span>
                  <div className="menumobile">
                    <div className="col-md-12 col-sm-12 col-xs-2 mmcontext">
                      <ul className id="collap">
                        {/*Item Home*/}
                        <li>
                          <div className="title">
                            <a href="#">HOME <i className="fa fa-angle-down" aria-hidden="true" /></a>
                          </div>
                          <div className="context">
                            <ul>
                              <li><a href="#"><p>Home 1</p></a></li>
                              <li><a href="#"><p>Home 2</p></a></li>
                              <li><a href="#"><p>Home 3</p></a></li>
                              <li><a href="#"><p>Home 4</p></a></li>
                            </ul>
                          </div>
                        </li>
                        {/*Item Shop*/}
                        <li>
                          <div className="title">
                            <a href="#">Shops <i className="fa fa-angle-down" aria-hidden="true" /></a>
                          </div>
                          <div className="contextshop">
                            <div className="col-sm-4">
                              <h2>Shop Pages</h2>
                              <div className="contextinformation">
                                <ul>
                                  <li><a href="#"><p>Shop</p></a></li>
                                  <li><a href="#"><p>Shop list</p></a></li>
                                  <li><a href="#"><p>Shop list full</p></a></li>
                                  <li><a href="#"><p>Shop grid – Sidebar</p></a></li>
                                  <li><a href="#"><p>Shop list – Sidebar</p></a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <h2>Product Pages</h2>
                              <div className="contextinformation">
                                <ul>
                                  <li><a href="#"><p>Product Simple</p></a></li>
                                  <li><a href="#"><p>Product Variable</p></a></li>
                                  <li><a href="#"><p>Product Grouped</p></a></li>
                                  <li><a href="#"><p>Product External</p></a></li>
                                  <li><a href="#"><p>Product Deals</p></a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <h2>MORE PAGES...</h2>
                              <div className="contextinformation">
                                <ul>
                                  <li><a href="#"><p>Cart</p></a></li>
                                  <li><a href="#"><p>Checkout</p></a></li>
                                  <li><a href="#"><p>My account</p></a></li>
                                  <li><a href="#"><p>Wishlist</p></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        {/*Item Blog*/}
                        <li>
                          <div className="title">
                            <a href="#">Blog</a>
                          </div>
                        </li>
                        {/*Item MegaMenu*/}
                        <li>
                          <div className="title">
                            <a href="#">Mega Menu <i className="fa fa-angle-down" aria-hidden="true" /></a>
                          </div>
                          <div className="contextmega">
                            <div className="col-sm-4">
                              <div className="megaone">
                                <h2>Categories</h2>
                                <div className="megacategory">
                                  <ul>
                                    <li><a href="#"><p>Shop</p></a></li>
                                    <li><a href="#"><p>Shop list</p></a></li>
                                    <li><a href="#"><p>Shop list full</p></a></li>
                                    <li><a href="#"><p>Shop grid – Sidebar</p></a></li>
                                    <li><a href="#"><p>Shop list – Sidebar</p></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="megaone">
                                <h2>Top Sellers</h2>
                                <div className="megacategory">
                                  <ul>
                                    <li><a href="#"><p>Shop</p></a></li>
                                    <li><a href="#"><p>Shop list</p></a></li>
                                    <li><a href="#"><p>Shop list full</p></a></li>
                                    <li><a href="#"><p>Shop grid – Sidebar</p></a></li>
                                    <li><a href="#"><p>Shop list – Sidebar</p></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        {/*Item About*/}
                        <li>
                          <div className="title">
                            <a href="#">About</a>
                          </div>
                        </li>
                        {/*Item Contact*/}
                        <li>
                          <div className="title">
                            <a href="#">Contact</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="activemenumobile" />
                </div>
                <div className="buttonclosemenu">
                  <span><i className="fa fa-times" aria-hidden="true" /></span>
                </div>
                <ModalLogin
                  ref={this.loginModalRef}
                  onChooseBusiness={this.onChooseBusiness}
                />
                <ModalBusiness
                  ref={this.chooseBusinessRef}
                  onLoginClick={this.onLoginClick}
                />
                <a href="#" className="toggle-mobile-menu"><span>Menu</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
