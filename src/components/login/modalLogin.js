import React from 'react'
import { Header, Modal } from 'semantic-ui-react'
import FormLogin from './formLogin'
import '../../common/modal/index.scss'

class LoginModal extends React.Component {
  constructor(props) {
    super(props)
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      open: false
    }
  }

  handleShow() {
    this.setState({ open: true })
  }
  handleClose() {
    this.setState({ open: false })
  }
  render() {
    const { open } = this.state
    return (
      <div className='modal-login'>
        <Modal
          closeIcon
          open={open}
          onHide={this.handleClose}
          onClose={() => this.setState({ open: false })}
          onOpen={() => this.setState({ open: true })}
        >
          <Header content='Login' />
          <Modal.Content>
            <FormLogin {...this.props} onClose={this.handleClose} />
          </Modal.Content>
        </Modal>
      </div>
    )
  }

}

export default LoginModal
