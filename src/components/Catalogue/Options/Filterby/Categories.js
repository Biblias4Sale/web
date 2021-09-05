import React from 'react'
import { Form, Container } from 'react-bootstrap'
import { labelGoto, checkGoto } from '../../CatalogueStyle'
import { Categories } from '../../../NavBar/modules/DropCategories/categories'

export const ListCategories = () => {
  const allCategories = Categories()

  return (
    <Container>
      <div style={labelGoto}>
        <h4>IR A</h4>
      </div>
      <hr style={{ width: '100%' }} />
      <Form>
        {allCategories.map((category, i) => {
          return (
            <div key={i} style={checkGoto}>
              <Form.Check type='radio' label={category} />
            </div>
          )
        })}

      </Form>
    </Container>
  )
}
