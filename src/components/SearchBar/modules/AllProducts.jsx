import { Row, Col, Image } from 'react-bootstrap'
import Camaras from '../../../assets/camaras.jpg'

export const AllProducts = (props) => {
  return (
    <Row>
      {props.search?.map(elem => (
        <Col key={elem.name} lg={8}>
          <h3>
            {elem.name}
          </h3>
          <h5>
            {elem.points}
          </h5>
          <Image src={Camaras} alt='Imagen no encontrada' width='100px' />
        </Col>
      ))}
    </Row>
  )
}
