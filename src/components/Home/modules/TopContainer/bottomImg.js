import { Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Accesorios from '../../../../assets/accesorios.jpg'

export const BottomImg = () => {
  return (
    <Link
      to={{
        pathname: '/catalogo',
        state: { category: 'Accesorios' }
      }}
    >
      <Row>
        <Image src={Accesorios} alt='Accesorios NOI LOAN' fluid />
      </Row>
    </Link>
  )
}
