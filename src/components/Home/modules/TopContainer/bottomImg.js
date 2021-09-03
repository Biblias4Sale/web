import { Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Accesorios from '../../../../assets/accesorios.jpg'
import { ImgWidth } from '../../HomeStyle'

export const BottomImg = () => {
  return (
    <Row>
      <Link to=''>
        <Image src={Accesorios} alt='Accesorios NOI LOAN' style={ImgWidth('40vh')} />
      </Link>
    </Row>
  )
}
