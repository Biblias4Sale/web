import { Form, Container } from 'react-bootstrap'
import { labelGoto, checkGoto } from '../../CatalogueStyle'

export const Categories = () => {
  return (
    <Container>
      <div style={labelGoto}>
        <h4>Filtrar por</h4>
      </div>
      <hr style={{ width: '100%' }} />
      <Form>
        <h5>Categorías</h5>
        <div style={checkGoto}>
          <Form.Check type='checkbox' label='Compact' />
        </div>
        <div style={checkGoto}>
          <Form.Check type='checkbox' label='Compact Avanzada' />
        </div>
        <div style={checkGoto}>
          <Form.Check type='checkbox' label='DSLR' />
        </div>
        <div style={checkGoto}>
          <Form.Check type='checkbox' label='Lens-Style' />
        </div>
      </Form>
    </Container>
  )
}
