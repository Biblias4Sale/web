import React from 'react'
import { Container } from 'react-bootstrap'
import { labelGoto, checkGoto } from '../../CatalogueStyle'
import { Categories } from '../../../NavBar/modules/DropCategories/categories'

export const ListCategories = ({ options, handleCategoryChange }) => {
  const allCategories = Categories()

  return (
    <Container>
      <div style={labelGoto}>
        <h4>IR A</h4>
      </div>
      <hr style={{ width: '100%' }} />
      {allCategories.map((category, i) => {
        if (category !== options.category) {
          return (
            <div key={i} style={checkGoto} onClick={() => handleCategoryChange(category)}>
              {category}
            </div>
          )
        } else return null
      })}

    </Container>
  )
}
