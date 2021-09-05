import { Row, Image } from 'react-bootstrap'
import Accesorios from '../../../../assets/accesorios.jpg'
import { ImgWidth } from '../../HomeStyle'

export const BottomImg = () => {
  return (
    <Row>
      <Image src={Accesorios} alt='Accesorios NOI LOAN' style={ImgWidth('40vh')} />
    </Row>
  )
}
