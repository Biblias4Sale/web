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
        <Col lg={2} md={10} xs={12}>
          <LogoBox />
        </Col>
        <Col lg={10} md={2} xs={12}>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav '>
            <Nav className='me-auto align-items-center'>
              <Col xl={5} lg={5} className='d-flex justify-content-center align-items-end' style={{ marginTop: '10px' }}>
                <SearchBar />
              </Col>
              <Col xl={4} lg={3} className='d-flex justify-content-center'>
                <LinksBox />
              </Col>
              <Col xl={3} lg={3} className='d-flex'>
                <IconsBox />
              </Col>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Container>
    </Navbar>
  )
}
