import { Modal } from 'react-bootstrap'
import { Login } from './modules/Login/Login'
import { CreateAccount } from './modules/CreateAccount/CreateAccount'
import { useState } from 'react'

export const Session = (props) => {
  const [showModal, setShowModal] = useState('init')
  return (
    <div>
      <Modal
        {...props}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          .
        </Modal.Header>
        <Modal.Body>
          {showModal === 'init' ? <Login setShowModal={setShowModal} /> : null}
          {showModal === 'create' ? <CreateAccount setShowModal={setShowModal} /> : null}
          {/* ACA VA EL BOTON GOOGLE */}
        </Modal.Body>
      </Modal>

    </div>
  )
}
