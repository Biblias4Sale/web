import { Modal } from 'react-bootstrap'
import { Login } from './modules/Login/Login'
import { CreateAccount } from './modules/CreateAccount/CreateAccount'
import { EditAccount } from '../EditAccount/EditAccount'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export const Session = (props) => {
  const [showModal, setShowModal] = useState('init')
  const logged = useSelector(state => state.logged)

  return (
    <div>
      {!logged
        ? (
          <Modal
            {...props}
            size='lg'
            centered
          >
            <Modal.Header closeButton>
              .
            </Modal.Header>
            <Modal.Body>
              {showModal !== 'init' && showModal !== 'create' ? <h1>Bienvenido {showModal} !</h1> : null}
              {showModal === 'init' ? <Login setShowModal={setShowModal} /> : null}
              {showModal === 'create' ? <CreateAccount setShowModal={setShowModal} /> : null}
              {/* ACA VA EL BOTON GOOGLE */}
            </Modal.Body>
          </Modal>
          )
        : (
          <Modal
            {...props}
            size='lg'
            centered
          >
            <Modal.Header closeButton>
              .
            </Modal.Header>
            <Modal.Body>
              <EditAccount setShowModal={setShowModal} />
            </Modal.Body>
          </Modal>
          )}

    </div>
  )
}
