import { Container, Button, Col, Row } from 'react-bootstrap'

const ChoosePayment = ({ setCheckoutView }) => {
  return (
    <Container className='d-flex flex-wrap'>
      <Row>
        <Col>
          <Button onClick={() => console.log('te prometo que voy a pagar')}>Pago contraentrega</Button>
        </Col>
        <Col>
          <Button onClick={() => setCheckoutView('pay')}>MercadoPago</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ChoosePayment
