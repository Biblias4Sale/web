import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'

export const DeleteUserView = ({ handleOnSubmit, handleClose, showModal, setShowModal }) => {
  return (
    <>
      <Modal show={showModal}>
        <Modal.Body>¿Está seguro que desea eliminar su cuenta?</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant='primary' onClick={handleOnSubmit}>
            Si
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}
