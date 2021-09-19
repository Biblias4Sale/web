import { Container } from 'react-bootstrap'
import { RaitngStars } from '../../modules/optionsComponent/rating'

export const Rating = ({ handleChangeMulti }) => {
  return (
    <Container>
      <hr />
      <h5>Calificación</h5>
      <RaitngStars handleChangeMulti={handleChangeMulti} />
    </Container>
  )
}
