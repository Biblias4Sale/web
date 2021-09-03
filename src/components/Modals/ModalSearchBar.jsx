import { Modal } from 'react-bootstrap'
import { SearchBar } from '../SearchBar/SearchBar'

export const ModalSearchBar = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      centered
    >
      <Modal.Header closeButton className='close'>
        .
      </Modal.Header>
      <Modal.Body>
        <SearchBar />
      </Modal.Body>
    </Modal>
  )
}
