import { Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Camaras from '../../../../assets/camaras.jpg'
import { ImgWidth } from '../../HomeStyle'

export const RightImg = () => {
  return (
    <Row>
      <Link
        to={{
          pathname: '/catalogo',
          state: { category: 'Camaras' }
        }}
      >
        <Image
          src={Camaras} alt='Camaras NOI LOAN' style={ImgWidth('100vh')}
        />
      </Link>
    </Row>
  )
}
