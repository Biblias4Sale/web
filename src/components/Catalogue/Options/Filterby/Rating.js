import { Form, Container } from 'react-bootstrap'
import { checkRating } from '../../CatalogueStyle'
import { BsStarFill } from 'react-icons/bs'

export const Rating = ({ handleChangeMulti }) => {
  return (
    <Container>
      <hr style={{ width: '100%' }} />
      <h5>Calificación</h5>
      <Form>
        <div style={checkRating}>
          <Form.Check type='checkbox' name='raiting' id='5' onChange={(event) => handleChangeMulti(event)} />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
        <div style={checkRating}>
          <Form.Check type='checkbox' name='raiting' id='4' onChange={(event) => handleChangeMulti(event)} />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
        <div style={checkRating}>
          <Form.Check type='checkbox' name='raiting' id='3' onChange={(event) => handleChangeMulti(event)} />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
        <div style={checkRating}>
          <Form.Check type='checkbox' name='raiting' id='2' onChange={(event) => handleChangeMulti(event)} />
          <BsStarFill />
          <BsStarFill />
        </div>
        <div style={checkRating}>
          <Form.Check type='checkbox' name='raiting' id='1' onChange={(event) => handleChangeMulti(event)} />
          <BsStarFill />
        </div>
      </Form>
    </Container>
  )
}
