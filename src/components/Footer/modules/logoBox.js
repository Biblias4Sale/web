import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/logo.png'
import { LogoStyle, LogoCol } from '../FooterStyle'

export const LogoBox = () => {
  return (
    <Col xs={12} lg={4} style={LogoCol}>
      <Link to='/'>
        <Image src={Logo} alt='NOI LOAN.' style={LogoStyle} title='NOI LOAN logo' />
      </Link>
    </Col>
  )
}
