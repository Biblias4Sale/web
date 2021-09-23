import WhatsApp from '../../../assets/WhatsApp.png'
import { Container, Col } from 'react-bootstrap'

const UponDelivery = () => {
  return (
    <Container className='d-flex align-items-center'>
      <Col lg={6}>
        <h6>Contactate con nosotros mediante WhatsApp para continuar con tu proceso de pago contraentrega: </h6>
      </Col>
      <Col lg={6} className='d-flex justify-content-center align-items-center'>
        <img src={WhatsApp} alt=' https://wa.me/qr/XL6FSI2JL73CD1' />
      </Col>
    </Container>
  )
}
export default UponDelivery
