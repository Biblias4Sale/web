import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/logo.png'
import { LogoStyle, LogoCol } from '../FooterStyle'

export const LogoBox = () => {
  return (
    <Col xs={4} lg={4} className='d-flex align-items-center' style={LogoCol}>
      <Link to='/'>
        <Image src={Logo} alt='NOI LOAN.' className='d-flex align-items-center' style={LogoStyle} title='NOI LOAN logo' />
      </Link>
    </Col>
  )
}
