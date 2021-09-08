import { Col, Image, NavLink } from 'react-bootstrap'
import InstagramLogo from '../../../assets/instagramLogo.png'
import { InstagramLink, InstagramLogoStyle } from '../FooterStyle'

export const InstagramBox = () => {
  const url = 'https://www.instagram.com/noiloan_latam/'

  return (
    <Col xs={4} lg={4} className='d-flex justify-content-center align-items-center'>
      <NavLink href={url} target='_blank' className='d-flex justify-content-center align-items-center fw-bold' style={InstagramLink}>
        Síguenos en
        <Image src={InstagramLogo} style={InstagramLogoStyle} />
      </NavLink>
    </Col>
  )
}
