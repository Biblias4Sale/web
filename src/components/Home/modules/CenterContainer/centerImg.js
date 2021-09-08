import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Luces from '../../../../assets/luces.jpg'
import { CenterImgs } from '../../HomeStyle'

export const CenterImg = () => {
  return (
    <Col xs={8} lg={4} className='d-flex justify-content-center'>
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
