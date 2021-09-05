import { Container } from 'react-bootstrap'
import { ProductsBox } from './products'
import { TitleBox } from './title'

export const BestOfTheWeek = () => {
  return (
    <Container style={{ marginTop: '80px' }}>
      <TitleBox />
      <ProductsBox />
      HOLA SOY BOTON CON IMAGEN VER MAS
    </Container>
  )
}
