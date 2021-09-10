import { Modal } from 'react-bootstrap'
import { Login } from './modules/Login/Login'
import { CreateAccount } from './modules/CreateAccount/CreateAccount'
import { useState } from 'react'

export const Session = (props) => {
  const [showModal, setShowModal] = useState('init')

  return (
    <div>
<<<<<<< HEAD
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
          ACA VA EL BOTON GOOGLE
        </Modal.Body>
      </Modal>
=======
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
>>>>>>> develop

    </div>
  )
}
