import { Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Accesorios from '../../../../assets/accesorios.jpg'
import { ImgWidth } from '../../HomeStyle'

export const BottomImg = () => {
  return (
    <Link to='/product'>
      <Row>
        <Image src={Accesorios} alt='Accesorios NOI LOAN' style={ImgWidth('40vh')} />
      </Row>
    </Link>
  )
}
