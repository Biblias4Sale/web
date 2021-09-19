import { Col, Image } from 'react-bootstrap'
import Logo from '../../../assets/mercadoPago.png'
import { LogoMPStyle, MPCol } from '../FooterStyle'

export const MercadoPagoBox = () => {
  return (
    <Col xs={4} lg={4} className='d-flex justify-content-end' style={MPCol}>
      <Image src={Logo} alt='MERCADO PAGO' style={LogoMPStyle} title='mercado pago' />
    </Col>
  )
}
