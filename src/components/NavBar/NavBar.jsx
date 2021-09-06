import { Nav, Navbar, Container } from 'react-bootstrap'
import { LogoBox } from './modules/LogoBox'
import { LinksBox } from './modules/LinksBox'
import { IconsBox } from './modules/IconsBox'
import { NavContainer } from './NavBarStyle'

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' style={NavContainer}>
      <Container>
        <LogoBox />
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <LinksBox />
            <IconsBox />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
