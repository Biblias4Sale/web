import { Container } from 'react-bootstrap'
import { LogoBox } from './modules/logoBox'
import { MercadoPagoBox } from './modules/mpBox'
import { MainContainer } from './FooterStyle'
import { InstagramBox } from './modules/instagramBox'

export const Footer = () => {
  return (
    <div style={MainContainer}>
      <hr />
      <Container className='d-flex  flex-row flex-wrap'>
        <LogoBox />
        <InstagramBox />
        <MercadoPagoBox />
      </Container>
    </div>
  )
}
