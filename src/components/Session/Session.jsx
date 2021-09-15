import { Modal } from 'react-bootstrap'
import { Login } from './modules/Login/Login'
import { CreateAccount } from './modules/CreateAccount/CreateAccount'

export const Session = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size='lg'
        centered
      >
        <Modal.Header>
          <button type='button' className='btn-close' aria-label='Close' onClick={props.onHide} />
        </Modal.Header>

        <Modal.Body>
          {props.currentView === 'init' ? <Login setCurrentView={props.setCurrentView} /> : null}
          {props.currentView === 'create' ? <CreateAccount setCurrentView={props.setCurrentView} /> : null}
        </Modal.Body>
      </Modal>
    </div>
  )
}
