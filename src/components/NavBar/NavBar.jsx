import { Nav, Navbar, Container, Col } from 'react-bootstrap'
import { LogoBox } from './modules/LogoBox'
import { LinksBox } from './modules/LinksBox'
import { IconsBox } from './modules/IconsBox'
import { SearchBar } from '../SearchBar/SearchBar'
import { NavContainer } from './NavBarStyle'

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' style={NavContainer}>
      <Container>
        <Col lg={2}>
          <LogoBox />
        </Col>
        <Col lg={10}>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav '>
            <Nav className='me-auto aling-items-center'>
              <Col lg={8}>
                <SearchBar />
              </Col>
              <Col lg={4}>
                <LinksBox />
              </Col>
              <Col lg={4}>
                <IconsBox />
              </Col>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Container>
    </Navbar>
  )
}
