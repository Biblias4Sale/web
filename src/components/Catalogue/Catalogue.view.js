import { Pages } from './modules/Pages'
import { Container, Col } from 'react-bootstrap'
import { headerProducts, productsCat } from './CatalogueStyle'
import SelectOptions from './modules/SelectOptions'
import { CenterBanner } from './modules/CenterBanner'
import { ListCategories } from './Options/Filterby/Categories'
import { SubCategories } from './Options/Filterby/SubCategories'
import { Rating } from './Options/Filterby/Rating'
import { Price } from './Options/Filterby/Price'

const CatalogueView = ({ options, finalList, handleChangeMulti, handleChange, handleCategoryChange, actualSubcategories }) => {
  return (
    <div>
      <CenterBanner />
      <Container style={productsCat}>
        <Col lg={3}>
          <ListCategories options={options} handleCategoryChange={handleCategoryChange} />
          <SubCategories handleChangeMulti={handleChangeMulti} actualSubcategories={actualSubcategories} />
          <Price handleChange={handleChange} options={options} />
          <Rating handleChange={handleChange} handleChangeMulti={handleChangeMulti} />
        </Col>
        <Col lg={9}>
          <div style={headerProducts}>
            <h3>{options.category}</h3>
          </div>
          <SelectOptions />
          <Pages finalList={finalList} />
        </Col>
      </Container>
    </div>
  )
}

export default CatalogueView
