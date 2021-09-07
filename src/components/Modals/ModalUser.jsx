import { Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Login } from '../Login/Login'
import { CreateAccount } from '../CreateAccount/CreateAccount'

import { useState } from 'react'

export const ModalUser = (props) => {
  const [showModal, setShowModal] = useState('init')


  const handleClose = () => {
    setTimeout(() => {
      props.setModalShow(false)
    }, 1500)
  }

  return (
    <Modal
      {...props}
      size='lg'
      centered
    >
      <Modal.Header closeButton>
        .
      </Modal.Header>
      <Modal.Body>
        {showModal === 'init' ? <Login setShowModal={setShowModal} handleClose={handleClose} /> : null}
        {showModal === 'create' ? <CreateAccount setShowModal={setShowModal} handleClose={handleClose} /> : null}
      </Modal.Body>
    </Modal>
  )
}
