import { Form, Container } from 'react-bootstrap'
import { labelGoto, checkGoto } from '../../CatalogueStyle'

export const SubCategories = ({ handleOptionsChange }) => {
  return (
    <Container>
      <div style={labelGoto}>
        <h4>Filtrar por</h4>
      </div>
      <hr style={{ width: '100%' }} />
      <Form>
        <h5>Sub-Categorías</h5>
        <div style={checkGoto}>
          <Form.Check type='checkbox' label='Compact' id='Compact' onChange={(event) => handleOptionsChange(event)} />
        </div>
        <div style={checkGoto}>
          <Form.Check type='checkbox' label='Compact Avanzada' id='Compact+' onChange={(event) => handleOptionsChange(event)} />
        </div>
        <div style={checkGoto}>
          <Form.Check type='checkbox' label='DSLR' id='DSLR' onChange={(event) => handleOptionsChange(event)} />
        </div>
        <div style={checkGoto}>
          <Form.Check type='checkbox' label='Lens-Style' id='Lens' onChange={(event) => handleOptionsChange(event)} />
        </div>
      </Form>
    </Container>
  )
}
