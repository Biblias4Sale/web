import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'

export const DeleteUserView = (props) => {
  return (
    <>
      <Modal
        {...props}
      >
        <Modal.Header>¿Está seguro que desea eliminar su cuenta?</Modal.Header>
        <Modal.Footer>
          <Button variant='secondary' onClick={props.onHide}>
            Cancelar
          </Button>
          <Button variant='primary' onClick={props.handleOnSubmit}>
            Si
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}
