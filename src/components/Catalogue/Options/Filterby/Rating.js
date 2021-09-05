import { Form, Container } from 'react-bootstrap'
import { checkRating } from '../../CatalogueStyle'
import { BsStarFill } from 'react-icons/bs'

export const Rating = ({ handleChange }) => {
  return (
    <Container>
      <hr style={{ width: '100%' }} />
      <h5>Calificación</h5>
      <Form>
        <div style={checkRating}>
          <Form.Check type='checkbox' name='raiting' id='5' onChange={(event) => handleChange(event)} />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
        <div style={checkRating}>
          <Form.Check type='checkbox' name='raiting' id='4' onChange={(event) => handleChange(event)} />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
        <div style={checkRating}>
          <Form.Check type='checkbox' name='raiting' id='3' onChange={(event) => handleChange(event)} />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
        <div style={checkRating}>
          <Form.Check type='checkbox' name='raiting' id='2' onChange={(event) => handleChange(event)} />
          <BsStarFill />
          <BsStarFill />
        </div>
        <div style={checkRating}>
          <Form.Check type='checkbox' name='raiting' id='1' onChange={(event) => handleChange(event)} />
          <BsStarFill />
        </div>
      </Form>
    </Container>
  )
}
