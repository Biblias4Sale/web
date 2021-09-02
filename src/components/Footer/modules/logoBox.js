import { Col } from 'react-bootstrap'
import Logo from '../../../assets/logo.png'
import { LogoStyle, LogoCol } from '../FooterStyle'

export const LogoBox = () => {
  return (
    <Col xs={6} lg={6} style={LogoCol}>
      <img src={Logo} alt='NOI LOAN.' style={LogoStyle} />
    </Col>
  )
}
