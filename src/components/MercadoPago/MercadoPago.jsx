// import { useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ApiURL } from '../../config/config'
import { Modal } from 'react-bootstrap'
import { CheckInfo } from './CheckInfo/CheckInfo'
// import { Pay } from './modules/Pay'

export const MercadoPago = (props) => {
  // const user = useSelector(state => state.logged.user)
  // const userCart = useSelector(state => state.userCart)

  const [actualView, setActualView] = useState('check')
  const [url, setUrl] = useState('')

  const payment = async () => {
    const response = await axios.post(`${ApiURL}/api/v1/mercadopago`,
      // HARTCODEADO PORQUE NO SE QUE DATOS MANDAR DEL CARRITO (:
      [{
        currency_id: 'ARS',
        description: 'ndfkjgnrjl',
        title: 'Una camara Noilan',
        unit_price: 20000,
        quantity: 2
      },
      {
        currency_id: 'ARS',
        description: 'ndfkjgnrjl',
        title: 'Una camara Noilan',
        unit_price: 88000,
        quantity: 2
      }]
      , { withCredentials: true })
      console.log(response.data, 'holis')
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
          {actualView === 'pay' ? <CheckInfo setActualView={setActualView} /> : null}
          {actualView === 'check' ? <iframe title='Finaliza tu compra' src={url} style={{ width: '100%', height: '600px' }} /> : null}
        </Modal.Body>
      </Modal>
    </div>
  )
}
