import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/logo.png'
import { LogoStyle, LogoCol } from '../FooterStyle'

export const LogoBox = () => {
  return (
    <Col xs={6} lg={6} style={LogoCol}>
      <Link to='/'>
        <img src={Logo} alt='NOI LOAN.' style={LogoStyle} title='NOI LOAN logo' />
      </Link>
    </Col>
  )
}
