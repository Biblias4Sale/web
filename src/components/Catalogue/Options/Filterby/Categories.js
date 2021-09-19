import React from 'react'
import { Container } from 'react-bootstrap'
import { MapCategories } from '../../modules/optionsComponent/mapCategories'
import { useSelector } from 'react-redux'

export const ListCategories = ({ options, handleCategoryChange }) => {
  const allCategories = useSelector(state => state.categories)

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
