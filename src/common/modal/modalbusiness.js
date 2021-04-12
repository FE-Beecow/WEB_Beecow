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
    this.backToPage = this.backToPage.bind(this)
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

  backToPage() {
    this.handleClose()
    this.props.onLoginClick()
  }
  render() {
    const { open, businessId } = this.state
    const { business } = this.props
    // const buttonClass = `continute ${businessId ? '' : 'disable'}`
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
            <Form className='form-chooseBusiness'>
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
            </Form>
            <div className='action'>
              <button className='btn-back col-md-4 ' onClick={this.backToPage}>Back</button>
              <button className={this.state.businessId ? 'continute col-md-4 offset-md-4 ' : 'disable col-md-4 offset-md-4'}  onClick={this.handleNext}>Continue</button>
            </div>
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
