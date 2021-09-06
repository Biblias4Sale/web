import { Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import verMas from '../../../../assets/verMas.png'
import { ProductsBox } from './products'
import { TitleBox } from './title'

export const BestOfTheWeek = () => {
  return (
    <Container style={{ marginTop: '80px', width: '80vw' }}>
      <TitleBox />
      <ProductsBox />
      <div className='d-flex justify-content-center'>
        <Link to='/catalogo'>
          <Image src={verMas} alt='No encontrada' width='200vw' />
        </Link>
      </div>
    </Container>
  )
}
