
import { Modal } from 'react-bootstrap'
import { CheckInfo } from './CheckInfo/CheckInfo'

const CheckOut = (props) => {
  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.onHide}
        {...props}
        size='lg'
        centered
      >
        <Modal.Header>
          <button type='button' className='btn-close' aria-label='Close' onClick={props.onHide} />
        </Modal.Header>

        <Modal.Body>
          {props.checkoutView === 'check' ? <CheckInfo setCheckoutView={props.setCheckoutView} /> : null}
          {props.checkoutView === 'pay' ? <iframe title='Finaliza tu compra' src={props.url} style={{ width: '100%', height: '600px' }} /> : null}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default CheckOut
