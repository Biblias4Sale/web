import { Modal } from 'react-bootstrap'
import { Login } from '../Login/Login'

export const ModalUser = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton aria-label='close'>
        .
      </Modal.Header>
      <Modal.Body>
        <Login />
      </Modal.Body>
    </Modal>
  )
}
