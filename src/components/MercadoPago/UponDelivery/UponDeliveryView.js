import WhatsApp from '../../../assets/WhatsApp.png'
import { Container, Col } from 'react-bootstrap'

export const UponDeliveryView = () => {
  return (
    <Container className='d-flex align-items-center'>
      <Col lg={6}>
        <h6>Contactate con nosotros mediante WhatsApp para continuar con tu proceso de pago contraentrega: </h6>
      </Col>
      <Col lg={6}>
        <img src={WhatsApp} alt=' https://wa.me/qr/XL6FSI2JL73CD1' />
      </Col>
    </Container>
  )
}
