import { Pages } from './modules/Pages'
import { Container, Col, Row } from 'react-bootstrap'
import { headerProducts, productsCat } from './CatalogueStyle'
// import SelectOptions from './modules/SelectOptions'
import { CenterBanner } from './modules/CenterBanner'
import { ListCategories } from './Options/Filterby/Categories'
import { SubCategories } from './Options/Filterby/SubCategories'
import { Rating } from './Options/Filterby/Rating'
import { Price } from './Options/Filterby/Price'

const CatalogueView = ({ options, finalList, handleSubCategoryChange, handleChange }) => {
  return (
    <div>
      <Container style={productsCat}>
        <Row>
          <CenterBanner />
        </Row>
        <Col lg={3}>
          <ListCategories options={options} />
          <SubCategories handleSubCategoryChange={handleSubCategoryChange} />
          <Price handleChange={handleChange} />
          <Rating handleChange={handleChange} />
        </Col>
        <Col lg={9}>
          <div style={headerProducts}>
            <h3>{options.category}</h3>
          </div>
          {/* <SelectOptions /> */}
          <Pages finalList={finalList} />
        </Col>
      </Container>
    </div>
  )
}

export default CatalogueView
