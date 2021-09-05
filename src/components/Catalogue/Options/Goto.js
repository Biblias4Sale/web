import { Form, Container } from 'react-bootstrap'
import { labelGoto, checkGoto } from '../CatalogueStyle'

export const Goto = () => {
  return (
    <Container>
      <div style={labelGoto}>
        <h4>IR A</h4>
      </div>
      <hr style={{ width: '100%' }} />
      <Form>
        <div style={checkGoto}>
          <Form.Check type='radio' label='Accesorios' />
        </div>
        <div style={checkGoto}>
          <Form.Check type='radio' label='Soportes' />
        </div>
        <div style={checkGoto}>
          <Form.Check type='radio' label='Luces' />
        </div>
        <div style={checkGoto}>
          <Form.Check type='radio' label='Cargadores y baterías' />
        </div>
      </Form>
    </Container>
  )
}
