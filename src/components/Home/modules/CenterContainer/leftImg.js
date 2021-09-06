import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Camara from '../../../../assets/camara.jpg'
import { StyleContainer, CenterImgs } from '../../HomeStyle'

export const LeftImg = () => {
  return (
    <Col lg={4} style={StyleContainer}>
      <Link
        to={{
          pathname: '/catalogo',
          state: { category: 'Lentes' }
        }}
      >
        <Image src={Camara} style={CenterImgs} />
      </Link>
    </Col>
  )
}
