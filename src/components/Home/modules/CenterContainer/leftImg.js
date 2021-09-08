import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Lentes from '../../../../assets/lentes.jpg'
import { CenterImgs } from '../../HomeStyle'

export const LeftImg = () => {
  return (
    <Col xs={8} lg={4} className='d-flex justify-content-center'>
      <Link
        to={{
          pathname: '/catalogo',
          state: { category: 'Lentes' }
        }}
      >
        <Image src={Lentes} style={CenterImgs} />
      </Link>
    </Col>
  )
}
