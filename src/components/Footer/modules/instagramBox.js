import { Col, Image, NavLink } from 'react-bootstrap'
import InstagramLogo from '../../../assets/instagramLogo.png'

export const InstagramBox = () => {
  const url = 'https://www.instagram.com/noiloan_latam/'
  return (
    <Col xs={6} lg={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <NavLink href={url} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', color: 'black' }}>
        Síguenos en
        <Image src={InstagramLogo} style={{ width: '10%', marginLeft: '15px' }} />
      </NavLink>
    </Col>
  )
}
