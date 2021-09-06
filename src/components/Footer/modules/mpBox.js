import { Col, Image } from 'react-bootstrap'
import Logo from '../../../assets/mercadoPago.png'
import { LogoMPStyle, MPCol } from '../FooterStyle'

export const MercadoPagoBox = () => {
  return (
    <Col xs={6} lg={4} style={MPCol}>
      <Image src={Logo} alt='MERCADO PAGO' style={LogoMPStyle} title='mercado pago' width='120px' />
    </Col>
  )
}
