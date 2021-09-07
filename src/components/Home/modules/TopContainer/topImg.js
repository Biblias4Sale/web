import { Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LineaExpertos from '../../../../assets/lineaExpertos.jpg'
import { ImgWidth } from '../../HomeStyle'

export const TopImg = () => {
  return (
    <Link to='/catalogo'>
      <Row>
        <Image src={LineaExpertos} alt='Linea expertos ' style={ImgWidth('60%')} />
      </Row>
    </Link>
  )
}
