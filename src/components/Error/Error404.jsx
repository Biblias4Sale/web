import { Container, Col, Row, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import error404 from '../../assets/error404.png'

export const NotFound = () => {
  return (
    <Container>
      <Row>
        <Col lg={2} />
        <Col lg={8} className='d-flex justify-content-center flex-column'>
          <Row className='justify-content-center' style={{ height: '70vh' }}>
            <Image src={error404} style={{ width: '85%' }} />
          </Row>
          <div className='d-flex justify-content-center m-2'>
            <h4> OOPS! Página no encontrada </h4>
          </div>
          <Row className='d-flex flex-row mb-5'>
            <Link
              to='/'
              className='d-flex justify-content-center'
              style={{ width: '50%', textDecoration: 'none' }}
            >
              <Button variant='dark'> VOLVER A HOME </Button>
            </Link>
            <Link
              to='/catalogo'
              className='d-flex justify-content-center'
              style={{ width: '50%', textDecoration: 'none' }}
            >
              <Button variant='dark'> NUESTROS PRODUCTOS </Button>
            </Link>
          </Row>
        </Col>
        <Col lg={2} />
      </Row>
    </Container>
  )
}
