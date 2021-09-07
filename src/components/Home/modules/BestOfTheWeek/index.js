import { Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import verMas from '../../../../assets/verMas.png'
import { ProductsBox } from './products'
import { TitleBox } from './title'
import { BestOfTheWeekStyle } from '../../HomeStyle'

export const BestOfTheWeek = () => {
  return (
    <Container style={BestOfTheWeekStyle}>
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
