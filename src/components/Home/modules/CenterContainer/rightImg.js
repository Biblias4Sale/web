import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CargadoresYbaterias from '../../../../assets/cargadoresYbaterias.jpg'
import { CenterImgs } from '../../HomeStyle'

export const RightImg = () => {
  return (
    <Col xs={8} lg={4} className='d-flex justify-content-center'>
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
