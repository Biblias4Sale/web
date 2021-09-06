import { Container } from 'react-bootstrap'
import { LogoBox } from './modules/logoBox'
import { MercadoPagoBox } from './modules/mpBox'
import { MainContainer, ContainerStyle } from './FooterStyle'
import { InstagramBox } from './modules/instagramBox'

export const Footer = () => {
  return (
    <div style={MainContainer}>
      <hr />
      <Container style={ContainerStyle}>
        <LogoBox />
        <InstagramBox />
        <MercadoPagoBox />
      </Container>
    </div>
  )
}
