import { Row, Col, Image } from 'react-bootstrap'
import Camaras from '../../../assets/camaras.jpg'
import { NavLink } from 'react-router-dom'

export const AllProducts = (props) => {
  return (
    <Row>
      {props.search?.map(elem => (
        <NavLink to={'/details/' + elem.id} key={elem.id} style={{ textDecoration: 'none' }}>
          <Col key={elem.name} lg={8}>
            <h3>
              {elem.name}
            </h3>
            <h5>
              {elem.points}
            </h5>
            <Image src={Camaras} alt='No encontrada' width='100px' />
          </Col>
        </NavLink>
      ))}
    </Row>
  )
}
