import React from 'react'
import { Header, Modal } from 'semantic-ui-react'
import FormRegister from './formRegister'
import '../../common/modal/index.scss'

class RegisterModal extends React.Component {
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
            <div className='Sign up'>
                <Modal
                    closeIcon
                    open={open}
                    onHide={this.handleClose}
                    onClose={this.handleClose}
                    onOpen={this.handleShow}
                >
                    <Header content='Register' />
                    <Modal.Content>
                        <FormRegister {...this.props} onClose={this.handleClose}/>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }

}

export default RegisterModal
