import React from 'react'
import { Header, Modal } from 'semantic-ui-react'
import './index.scss'
import { Form, Radio } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setBusiness } from '../../redux/actions/user'
import { withRouterInnerRef } from '../../common/HOC/routerFowardRef'

class BusinessModal extends React.Component {
  constructor(props) {
    super(props)
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleNext = this.handleNext.bind(this)
    this.state = {
      open: false,
      business: null,
      textError: '',
    }
  }

  handleShow() {
    this.setState({ open: true })
  }
  handleClose() {
    this.setState({ open: false })
  }
  handleChange = (e, { value }) => {
    this.setState({ businessId: value })
    this.props.setBusiness(value)
  }

  handleNext() {
    this.handleClose()
    this.props.history.push('/register')
  }

  render() {
    const { open, businessId } = this.state
    const { business } = this.props
    const buttonClass = `continute ${businessId ? '' : 'disable'}`
    return (
      <div className='modal-login'>
        <Modal
          closeIcon
          open={open}
          onHide={this.handleClose}
          onClose={() => this.setState({ open: false })}
          onOpen={() => this.setState({ open: true })}
        >
          <Header content='Choose your business' />
          <Modal.Content>
            <Form>
              {
                business?.map(({ id, name }) => (
                  <Form.Field key={id}>
                    <Radio
                      label={name}
                      name='radioGroup'
                      value={id}
                      checked={businessId === id}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                ))
              }
              <p>{this.state.textError}</p>
              <button className={buttonClass} onClick={this.handleNext}>Continute</button>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  business: user.business
})

const mapDispatchToProps = {
  setBusiness
}

export default withRouterInnerRef(connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(BusinessModal))
