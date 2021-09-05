import { Form, Container } from 'react-bootstrap'
import { labelGoto, checkGoto } from '../../CatalogueStyle'

export const SubCategories = ({ handleSubCategoryChange }) => {
  return (
    <Container>
      <div style={labelGoto}>
        <h4>Filtrar por</h4>
      </div>
      <hr style={{ width: '100%' }} />
      <Form>
        <h5>Sub-Categorías</h5>
        <div style={checkGoto}>
          <Form.Check type='checkbox' label='Mirrorless' id='Mirrorless' onChange={(event) => handleSubCategoryChange(event)} />
        </div>
        <div style={checkGoto}>
          <Form.Check type='checkbox' label='Semi-Reflex' id='Semi-Reflex' onChange={(event) => handleSubCategoryChange(event)} />
        </div>
        <div style={checkGoto}>
          <Form.Check type='checkbox' label='DSLR' id='DSLR' onChange={(event) => handleSubCategoryChange(event)} />
        </div>
        <div style={checkGoto}>
          <Form.Check type='checkbox' label='Lens-Style' id='Lens' onChange={(event) => handleSubCategoryChange(event)} />
        </div>
      </Form>
    </Container>
  )
}
