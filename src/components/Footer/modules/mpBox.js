import { Col } from 'react-bootstrap'
import Logo from '../../../assets/mercadoPago.png'
import { LogoMPStyle, MPCol } from '../FooterStyle'

export const MercadoPagoBox = () => {
  return (
    <Col xs={6} lg={6} style={MPCol}>
      <img src={Logo} alt='MERCADO PAGO' style={LogoMPStyle} />
    </Col>
  )
}
