import { Form, Container } from 'react-bootstrap'
import { checkGoto, inputFilterby } from '../../CatalogueStyle'

export const Price = () => {
  return (
    <Container>
      <hr style={{ width: '100%' }} />
      <Form>
        <h5>Precio</h5>
        <div style={checkGoto}>
          <Form.Check type='checkbox' label='Hasta $30.000' />
        </div>
        <div style={checkGoto}>
          <Form.Check type='checkbox' label='Entre $30.000 y $ 250.000' />
        </div>
        <div style={checkGoto}>
          <Form.Check type='checkbox' label='Mas de 250.000' />
        </div>
        <div style={inputFilterby}>
          <Form.Control type='input' placeholder='Mínimo' />
          -
          <Form.Control type='input' placeholder='Máximo' />
        </div>
      </Form>
    </Container>

  )
}
