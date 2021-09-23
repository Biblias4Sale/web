import { Container, Button, Col, Row } from 'react-bootstrap'
import { botton } from './ChoosePaymentStyle'

const ChoosePayment = ({ setCheckoutView }) => {
  return (
    <Container>
      <Row className='d-flex justify-content-center align-items-center'>
        <h6>¿Cómo deseas realizar tu pago?</h6>
      </Row>
      <Row className='d-flex flex-wrap'>
        <Col>
          <Button style={botton} onClick={() => setCheckoutView('delivery')}>Pago contraentrega</Button>
        </Col>
        <Col>
          <Button style={botton} onClick={() => setCheckoutView('pay')}>MercadoPago</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ChoosePayment
