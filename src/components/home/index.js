import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAllBusiness, setBusiness } from '../../redux/actions/user'
import { divide } from 'lodash-es';
import Product from './product';
import HomeFarmer from '../farmer';
import ProductHome from './product';

class Home extends Component {
  constructor(props) {
    super(props)
  }


  componentDidMount() {
    this.props.getAllBusiness()
  }

  render() {
    return (
      <div>
        {/* <HomeFarmer/> */}
        <ProductHome/>
     
      </div>
     )
  }
}

const mapDispatchToProps = {
  getAllBusiness,
  setBusiness
}

export default connect(null, mapDispatchToProps)(Home)
