import React from 'react'
import { Container } from 'react-bootstrap'
import { Categories } from '../../../NavBar/modules/DropCategories/categories'
import { MapCategories } from '../../modules/optionsComponent/mapCategories'

export const ListCategories = ({ options, handleCategoryChange }) => {
  const allCategories = Categories()

  return (
    <Container>
      <div className='mt-1'>
        <h4>IR A</h4>
      </div>
      <hr />
      <MapCategories
        allCategories={allCategories}
        options={options}
        handleCategoryChange={handleCategoryChange}
      />
    </Container>
  )
}
