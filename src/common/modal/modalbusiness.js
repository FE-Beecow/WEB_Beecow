import React from 'react'
import { Header, Modal } from 'semantic-ui-react'
import './index.scss'
import { Form, Radio } from 'semantic-ui-react'
import { notSelect } from '../emplement/definition'
import { connect } from 'react-redux'
import { getAllBusiness } from '../../redux/actions/user'

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

  componentDidMount() {
    this.props.getAllBusiness()
  }


  handleShow() {
    this.setState({ open: true })
  }
  handleClose() {
    this.setState({ open: false })
  }
  handleChange = (e, { value }) => {
    this.setState({ businessId: value })
  }

  handleNext() {
    let { business, textError } = this.state;
    textError = notSelect(textError)
    this.handleClose();
    this.props.goToRegister()
  }
  render() {
    const { open, businessId } = this.state
    const { business } = this.props
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
                  <Form.Field>
                    <Radio
                      key={id}
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
              <button className='continute' onClick={this.handleNext}>Continute</button>
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
  getAllBusiness
}

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(BusinessModal)
