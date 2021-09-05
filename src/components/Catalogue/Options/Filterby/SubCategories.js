import { Form, Container } from 'react-bootstrap'
import { labelGoto, checkGoto } from '../../CatalogueStyle'

export const SubCategories = ({ handleChangeMulti, actualSubcategories }) => {
  return (
    <Container>
      <div style={labelGoto}>
        <h4>Filtrar por</h4>
      </div>
      <hr style={{ width: '100%' }} />
      <Form>
        <h5>Sub-Categorías</h5>

        {actualSubcategories.map((subCategory, index) => {
          return (
            <div key={index} style={checkGoto}>
              <Form.Check type='checkbox' name='subCategory' label={subCategory} id={subCategory} onChange={(event) => handleChangeMulti(event)} />
            </div>
          )
        })}

      </Form>
    </Container>
  )
}
