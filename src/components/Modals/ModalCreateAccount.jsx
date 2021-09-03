import { Modal } from 'react-bootstrap'
import { CreateAccount } from '../CreateAccount/CreateAccount'

export const ModalCreateAccount = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        .
      </Modal.Header>
      <Modal.Body>
        <CreateAccount />
      </Modal.Body>
    </Modal>
  )
}
