import { Row, Image } from 'react-bootstrap'
import Camaras from '../../../../assets/camaras.jpg'
import { ImgWidth } from '../../HomeStyle'

export const RightImg = () => {
  return (
    <Row>
      <Image src={Camaras} alt='Camaras NOI LOAN' style={ImgWidth('100vh')} />
    </Row>
  )
}
