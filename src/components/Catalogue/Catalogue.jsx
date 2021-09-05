import { Pages } from './modules/Pages'
import { Container, Col, Row } from 'react-bootstrap'
import { headerProducts, productsCat } from './CatalogueStyle'
import SelectOptions from './modules/SelectOptions'
import { CenterBanner } from './modules/CenterBanner'
import { Goto } from './Options/Goto'
import { Categories } from './Options/Filterby/Categories'
import { Rating } from './Options/Filterby/Rating'
import { Price } from './Options/Filterby/Price'

export const Catalogue = () => {
  return (
    <div>
      <Container style={productsCat}>
        <Row>
          <CenterBanner />
        </Row>
        <Col lg={3}>
          <Goto />
          <Categories />
          <Price />
          <Rating />
        </Col>
        <Col lg={9}>
          <div style={headerProducts}>
            <h3>Cámaras</h3>
          </div>
          <SelectOptions />
          <Pages />
        </Col>
      </Container>
    </div>
  )
}
