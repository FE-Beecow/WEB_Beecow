import React, { Component } from 'react'
import './index.scss'
import { connect } from 'react-redux';
import { getAllBusiness, setBusiness } from '../../redux/actions/user'

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
        Home
      </div>
    )
  }
}

const mapDispatchToProps = {
  getAllBusiness,
  setBusiness
}

export default connect(null, mapDispatchToProps)(Home)
