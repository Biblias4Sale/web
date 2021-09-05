import { Row, Image } from 'react-bootstrap'
import LineaExpertos from '../../../../assets/lineaExpertos.jpg'
import { ImgWidth } from '../../HomeStyle'

export const TopImg = () => {
  return (
    <Row>
      <Image src={LineaExpertos} alt='Linea expertos ' style={ImgWidth('60vh')} />
    </Row>
  )
}
