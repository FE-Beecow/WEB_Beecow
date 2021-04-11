import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeAlert } from '../../redux/actions/alert'
import {
  Button,
  Header,
  Segment,
  TransitionablePortal,
} from 'semantic-ui-react'
import { messageTypes } from '../constants'

class Alert extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.open) {
      setTimeout(() => { this.props.closeAlert() }, 5000)
    }
  }

  renderIcon() {
    const { messageType } = this.props
    if (messageType === messageTypes.success) return <i class="fa fa-check" aria-hidden="true"></i>
    return <i class="fa fa-times" aria-hidden="true"></i>
  }
  render() {
    const { open, messageType, message } = this.props

    return (
      <TransitionablePortal
        closeOnTriggerClick
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        open={open}
      >
        <Segment
          style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}
          className={messageType}
        >
          <p>{this.renderIcon()}{message}</p>
        </Segment>
      </TransitionablePortal>
    )
  }
}

function mapStateToProps({ alert }) {
  return {
    open: alert.open,
    messageType: alert.messageType,
    message: alert.message
  }
}

const mapDispatchToProps = {
  closeAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert)