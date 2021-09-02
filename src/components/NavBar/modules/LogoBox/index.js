import { Col } from 'react-bootstrap'
import Logo from '../../../../assets/logo.png'
import { LogoContainer, LogoStyle } from '../../NavBarStyle'

export const LogoBox = () => {
  return (
    <Col xs={12} sm={7} lg={4} style={LogoContainer}>
      <img src={Logo} alt='NOI LOAN' style={LogoStyle} />
    </Col>
  )
}
