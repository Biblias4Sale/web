import { Navbar, Container } from 'react-bootstrap'
import { LogoBox } from './modules/LogoBox'
import { LinksBox } from './modules/LinksBox'
import { IconsBox } from './modules/IconsBox'
import { NavContainer } from './NavBarStyle'

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' style={NavContainer}>
      <Container>
        <LogoBox />
        <LinksBox />
        <IconsBox />
      </Container>
    </Navbar>
  )
}
