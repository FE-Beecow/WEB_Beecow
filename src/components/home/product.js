import React, { Component } from 'react'
import carrot from '../../assets/images/carrot.jpg'
import cupCarrot from '../../assets/images/cup-carrot.jpg'
import potato from '../../assets/images/potato.jpg'
import { listProduct } from '../../common/constants'
// import banner1 from '../../assets/images/banner1.jpg'
// import banner2 from '../../assets/images/banner1.jpg'
// import banner3 from '../../assets/images/banner1.jpg'
export default class ProductHome extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    // const {listProduct} = this.props
    return (
      <div className='content-product clearfix'>
        <div className='container'>
          <div className='header-product clearfix'>
            <p className='title'>Shop New</p>
          </div>
          <div className='row'>
            <div className='col-md-3 col-xs-12 col-sm-6'>
              <div className='nor'>
                <img src={carrot} className='img-responsive' />
              </div>
            </div>
            <div className='col-md-3 col-xs-12 col-sm-6'>
              <div className='nor'>
                <img src={carrot} className='img-responsive' />
                <div className='fade-in'>
                  <img src={carrot} className='img-responsive' />
                  <div className='product-btn row'>
                    <div className='product-list'>
                      <div className='col-md-4 col-sm-4 col-xs-4 icon'>
                        <a><i className='fa fa-shopping-basket'><span className='tooltiptext'>Select Options</span></i></a>
                      </div>
                      <div className='col-md-4 col-sm-4 col-xs-4 icon'>
                        <a><i className='fa fa-files-o'><span className='tooltiptext'>Compare</span></i></a>
                      </div>
                      <div className='col-md-4 col-sm-4 col-xs-4 icon'>
                        <a><i className='fa fa-arrows-alt'><span className='tooltiptext'>Quick View</span></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='product-item'>
                  <span><i className='fa fa-heart-o' /></span>
                </div>
                <div className='price'>
                  <span className='real'>$120.00</span>-<span className='real'>$452.00</span>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-xs-12 col-sm-6'>
              <div className='nor'>
                <img src={potato} className='img-responsive' />
                <div className='fade-in'>
                  <img src={potato} className='img-responsive' />
                  <div className='product-btn row'>
                    <div className='product-list'>
                      <div className='col-md-4 col-sm-4 col-xs-4 icon'>
                        <a><i className='fa fa-shopping-basket'><span className='tooltiptext'>Add To Carts</span></i></a>
                      </div>
                      <div className='col-md-4 col-sm-4 col-xs-4 icon'>
                        <a><i className='fa fa-files-o'><span className='tooltiptext'>Compare</span></i></a>
                      </div>
                      <div className='col-md-4 col-sm-4 col-xs-4 icon'>
                        <a><i className='fa fa-arrows-alt'><span className='tooltiptext'>Quick View</span></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='product-item'>
                  <span><i className='fa fa-heart-o' /></span>
                </div>
                <div className='price'>
                  <span className='real'>$120.00</span>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-xs-12 col-sm-6'>
              <div className='nor'>
                <img src={cupCarrot} className='img-responsive' />
                <div className='fade-in'>
                  <img src={cupCarrot} className='img-responsive' />
                  <div className='product-btn row'>
                    <div className='product-list'>
                      <div className='col-md-4 col-sm-4 col-xs-4 icon'>
                        <a><i className='fa fa-shopping-basket'><span className='tooltiptext'>Select Options</span></i></a>
                      </div>
                      <div className='col-md-4 col-sm-4 col-xs-4 icon'>
                        <a><i className='fa fa-files-o'><span className='tooltiptext'>Compare</span></i></a>
                      </div>
                      <div className='col-md-4 col-sm-4 col-xs-4 icon'>
                        <a><i className='fa fa-arrows-alt'><span className='tooltiptext'>Quick View</span></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='product-item'>
                  <span><i className='fa fa-heart-o' /></span>
                </div>
                <div className='price'>
                  <span className='real'>$120.00</span>-<span className='real'>$452.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
