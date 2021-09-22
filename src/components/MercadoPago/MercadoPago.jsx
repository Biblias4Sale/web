import { useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ApiURL } from '../../config/config'
import { Modal } from 'react-bootstrap'
import { CheckInfo } from './CheckInfo/CheckInfo'
// import { Pay } from './modules/Pay'

export const Checkout = (props) => {
  // const user = useSelector(state => state.logged.user)
  const userCart = useSelector(state => state.userCart)

  const [url, setUrl] = useState('')

  const mpCart = userCart.map(product => (
    {
      currency_id: 'ARS',
      // description: product.brand + ' ' + product.model,
      title: product.brand + ' ' + product.model,
      unit_price: parseInt(product.price),
      quantity: parseInt(product.qty)
    }))

  const payment = async () => {
    const response = await axios.post(`${ApiURL}/api/v1/mercadopago`, mpCart, { withCredentials: true })
    return response.data
  }

  
  useEffect(() => {
    payment().then(res => setUrl(res.url))
  }, [])

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
          {props.checkoutView === 'pay' ? <iframe title='Finaliza tu compra' src={url} style={{ width: '100%', height: '600px' }} /> : null}
        </Modal.Body>
      </Modal>
    </div>
  )
}
