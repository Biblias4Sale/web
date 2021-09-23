import { Form, Container, Button, Row, Col } from 'react-bootstrap'
import { botton, containers } from './AddReviewStyle'

const AddReviewsView = ({
  handleSubmit,
  errors,
  handleChange,
  formData
}) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Col lg={3} sm={12} />
        <Col lg={6} style={containers}>
          <Row>
            <h5>Deja tu comentario sobre el producto:</h5>
          </Row>
          <Row>
            <Form.Group as={Row}>
              <Form.Label>Puntuación</Form.Label>
              <Col sm='8'>
                <input
                  type='range' name='rating' className='form-range' max='5' min='1' step='1' id='customRange3'
                  onChange={(event) => handleChange(event.target.name, event.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group>
              <Form.Label>Título</Form.Label>
              <Form.Control
                type='text'
                name='title'
                onChange={(event) => handleChange(event.target.name, event.target.value)}
              />
              <Row className='justify-content-center m-2'>
                <h6 className='text-danger'>{errors.title && errors.title}</h6>
              </Row>
            </Form.Group>
            <Form.Group>
              <Form.Label>Comentarios sobre el producto</Form.Label>
              <Form.Control
                as='textarea'
                type='text'
                name='description'
                style={{ height: '50px' }}
                onChange={(event) => handleChange(event.target.name, event.target.value)}
              />
              <Row className='justify-content-center m-2'>
                <h6 className='text-danger'>{errors.description && errors.description}</h6>
              </Row>
              <Row>
                {!errors.title && !errors.description && formData.description && formData.title
                  ? (
                    <Button type='submit' style={botton} variant='pl-1 pr-1 m-3 justify-content-center'>
                      Enviar
                    </Button>
                    )
                  : (
                    <Button type='submit' disabled style={botton} variant='pl-1 pr-1 m-3 justify-content-center'>
                      Enviar
                    </Button>)}
              </Row>
            </Form.Group>
          </Row>
        </Col>
      </Form>
      <Col lg={3} sm={12} />
    </Container>
  )
}

export default AddReviewsView
