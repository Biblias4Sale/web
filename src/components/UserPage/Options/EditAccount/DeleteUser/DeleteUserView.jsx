import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'

export const DeleteUserView = ({ handleOnSubmit, showModal, handleClose }) => {
  return (
    <>
      <Modal
        show={showModal}
        onHide={handleClose}
      >
        <Modal.Header>¿Está seguro que desea eliminar su cuenta?</Modal.Header>
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
