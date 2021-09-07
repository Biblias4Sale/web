import { Col } from 'react-bootstrap'
import { ListCategories } from '../../Options/Filterby/Categories'
import { SubCategories } from '../../Options/Filterby/SubCategories'
import { Price } from '../../Options/Filterby/Price'
import { Rating } from '../../Options/Filterby/Rating'

export const LeftContainer = ({ options, handleCategoryChange, handleChangeMulti, actualSubcategories, handleChange }) => {
  return (
    <Col lg={3}>
      <ListCategories options={options} handleCategoryChange={handleCategoryChange} />
      <SubCategories handleChangeMulti={handleChangeMulti} actualSubcategories={actualSubcategories} />
      <Price handleChange={handleChange} options={options} />
      <Rating handleChange={handleChange} handleChangeMulti={handleChangeMulti} />
    </Col>
  )
}
