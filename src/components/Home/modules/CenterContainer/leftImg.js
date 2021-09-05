import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Soportes from '../../../../assets/soportes.jpg'
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
        <Image src={Soportes} style={CenterImgs} />
      </Link>
    </Col>
  )
}
