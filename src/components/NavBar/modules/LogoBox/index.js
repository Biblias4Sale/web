import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../../../assets/logo.png'
import { LogoContainer, LogoStyle } from '../../NavBarStyle'

export const LogoBox = () => {
  return (
    <Col xs={12} sm={7} lg={5} style={LogoContainer}>
      <Link to='/'>
        <Image src={Logo} alt='NOI LOAN' style={LogoStyle} title='NOI LOAN' />
      </Link>
    </Col>
  )
}
