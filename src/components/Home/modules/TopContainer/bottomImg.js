import { Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Accesorios from '../../../../assets/accesorios.jpg'
import { ImgWidth } from '../../HomeStyle'

export const BottomImg = () => {
  return (
    <Link
      to={{
        pathname: '/catalogo',
        state: { category: 'Accesorios' }
      }}
    >
      <Row>
        <Image src={Accesorios} alt='Accesorios NOI LOAN' style={ImgWidth('299px')} />
      </Row>
    </Link>
  )
}
