import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CargadoresYbaterias from '../../../../assets/cargadoresYbaterias.jpg'
import { StyleContainer, CenterImgs } from '../../HomeStyle'

export const RightImg = () => {
  return (
    <Col lg={4} style={StyleContainer}>
      <Link
        to={{
          pathname: '/catalogo',
          state: { category: 'Cargadores y baterías' }
        }}
      >
        <Image src={CargadoresYbaterias} style={CenterImgs} />
      </Link>
    </Col>
  )
}
