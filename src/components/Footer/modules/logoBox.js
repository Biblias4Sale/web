import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/logo.png'
import { LogoStyle, LogoCol } from '../FooterStyle'

export const LogoBox = () => {
  return (
    <Link to='/'>
      <Col xs={6} lg={6} style={LogoCol}>
        <img src={Logo} alt='NOI LOAN.' style={LogoStyle} title='NOI LOAN logo' />
      </Col>
    </Link>
  )
}
