import { Form, Container } from 'react-bootstrap'
import { checkRating } from '../../CatalogueStyle'
import { BsStarFill } from 'react-icons/bs'

export const Rating = () => {
  return (
    <Container>
      <hr style={{ width: '100%' }} />
      <h5>Calificación</h5>
      <Form>
        <div style={checkRating}>
          <Form.Check type='checkbox' />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
        <div style={checkRating}>
          <Form.Check type='checkbox' />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
        <div style={checkRating}>
          <Form.Check type='checkbox' />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
        <div style={checkRating}>
          <Form.Check type='checkbox' />
          <BsStarFill />
          <BsStarFill />
        </div>
        <div style={checkRating}>
          <Form.Check type='checkbox' />
          <BsStarFill />
        </div>
      </Form>
    </Container>
  )
}
