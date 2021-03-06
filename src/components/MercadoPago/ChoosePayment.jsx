import { Container, Button, Col, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { botton } from './ChoosePaymentStyle'
import { ApiURL } from '../../config/config'
import { getCart } from '../../redux/actions/cartActions'
import axios from 'axios'

const ChoosePayment = ({ setCheckoutView, cartID, total }) => {
  const dispatch = useDispatch()

  const userID = useSelector(state => state.logged ? state.logged.user.id : null)

  const delivered = async () => {
    await axios.post(`${ApiURL}/cart/confirmCart/${cartID}/${userID}`, { price: total })
    axios.put(`${ApiURL}/cart/update/${cartID}?status=Entregado`)
    setCheckoutView('delivery')
    dispatch(getCart(userID))
  }

  const mpCheckOut = async () => {
    await axios.post(`${ApiURL}/cart/confirmCart/${cartID}/${userID}`, { price: total })
      .then(() => {
        dispatch(getCart(userID))
      })
    setCheckoutView('pay')
  }

  return (
    <Container>
      <Row className='d-flex justify-content-center' style={{ textAlign: 'center' }}>
        <h5 style={{ marginBottom: '25px' }}>¿Cómo deseas realizar tu pago?</h5>
      </Row>
      <Row className='d-flex flex-wrap'>
        <Col lg={6} className='d-flex justify-content-center align-items-center'>
          <Button style={botton} onClick={delivered}>Pago contraentrega</Button>
        </Col>
        <Col lg={6} className='d-flex justify-content-center align-items-center'>
          <Button style={botton} onClick={mpCheckOut}>MercadoPago</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ChoosePayment
