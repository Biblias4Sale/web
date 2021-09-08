import { Modal } from 'react-bootstrap'
import { Login } from '../Login/Login'
import { CreateAccount } from '../CreateAccount/CreateAccount'
import { EditAccount } from '../EditAccount/EditAccount'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export const ModalUser = (props) => {
  const [showModal, setShowModal] = useState('init')
  const logged = useSelector(state => state.logged)

  const handleClose = () => {
    setTimeout(() => {
      props.setModalShow('')
    }, 1500)
  }

  return (
    <div>
      {!logged
        ? <Modal
            {...props}
            size='lg'
            centered
          >
          <Modal.Header closeButton>
            .
          </Modal.Header>
          <Modal.Body>
            {showModal === 'init Erieli' ? <Login setShowModal={setShowModal} handleClose={handleClose} /> : null}
            {showModal === 'create' ? <CreateAccount setShowModal={setShowModal} handleClose={handleClose} /> : null}
          </Modal.Body>
        </Modal>
        : <Modal
            {...props}
            size='lg'
            centered
          >
          <Modal.Header closeButton>
            .
          </Modal.Header>
          <Modal.Body>
            <EditAccount setShowModal={setShowModal} handleClose={handleClose} />
          </Modal.Body>
        </Modal>}
    </div>
  )
}
