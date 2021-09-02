import {
  Container,
  Col,
  Row
} from 'react-bootstrap'

import LineaExpertos from '../../assets/lineaExpertos.jpg'
import Accesorios from '../../assets/accesorios.jpg'
import Camaras from '../../assets/camaras.jpg'
import CargadoresYbaterias from '../../assets/cargadoresYbaterias.jpg'
import Luces from '../../assets/luces.jpg'
import Soportes from '../../assets/soportes.jpg'

import { Link } from 'react-router-dom'

// import { Style } from './HomeStyle'

export const HomeView = () => {
  return (
    <div className='m-0'>
      <Container>
        <Row className='m-0'>
          <Col className='m-0'>
            <Link to=''>
              <div><img className='w-100' alt='imagen no encontrada' src={LineaExpertos} /></div>
            </Link>
            <Link to=''>
              <div><img className='w-100' alt='imagen no encontrada' src={Accesorios} /></div>
            </Link>
          </Col>
          <Col>
            <Link to=''>
              <div><img className='w-100' height='700px' alt='imagen no encontrada' src={Camaras} /></div>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to=''>
              <div><img className='w-100' alt='imagen no encontrada' src={Soportes} /></div>
            </Link>
          </Col>
          <Col>
            <Link to=''>
              <div><img className='w-100' alt='imagen no encontrada' src={Luces} /></div>
            </Link>
          </Col>
          <Col>
            <Link to=''>
              <div><img className='w-100' alt='imagen no encontrada' src={CargadoresYbaterias} /></div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
