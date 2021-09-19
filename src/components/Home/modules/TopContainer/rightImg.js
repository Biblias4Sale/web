import { Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Camaras from '../../../../assets/camaras.jpg'
import { ImgHeight } from '../../HomeStyle'

export const RightImg = () => {
  return (
    <Link
      to={{
        pathname: '/catalogo',
        state: { category: 'Camaras' }
      }}
    >
      <Row style={ImgHeight('100%')}>
        <Image src={Camaras} alt='Camaras NOI LOAN' fluid />
      </Row>
    </Link>
  )
}
