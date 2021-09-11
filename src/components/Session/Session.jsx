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
        <Modal.Header>
          <button type='button' class='btn-close' aria-label='Close' onClick={() => props.setModalShow(false)} />
        </Modal.Header>
        <Modal.Body>
          {showModal === 'init' ? <Login setShowModal={setShowModal} /> : null}
          {showModal === 'create' ? <CreateAccount setShowModal={setShowModal} /> : null}
        </Modal.Body>
      </Modal>

    </div>
  )
}
