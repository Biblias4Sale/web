import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Luces from '../../../../assets/luces.jpg'
import { StyleContainer, CenterImgs } from '../../HomeStyle'

export const CenterImg = () => {
  return (
    <Col lg={4} style={StyleContainer}>
      <Link
        to={{
          pathname: '/catalogo',
          state: { category: 'Luces' }
        }}
      >
        <Image src={Luces} style={CenterImgs} />
      </Link>
    </Col>
  )
}
