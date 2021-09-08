import { Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LineaExpertos from '../../../../assets/lineaExpertos.jpg'

export const TopImg = () => {
  return (
    <Link to='/catalogo'>
      <Row>
        <Image src={LineaExpertos} alt='Linea expertos ' fluid />
      </Row>
    </Link>
  )
}
