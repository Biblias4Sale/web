import { Col, NavDropdown } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { Categories } from './categories'
import { MapCategories } from './mapCategories'
import { CategoriesDrop, CategoriesDropTitle } from '../../NavBarStyle'

const DropCategories = (props) => {
  const allCategories = Categories()
  const location = props.location.pathname

  return (
    <>
      {
      location === '/catalogo'
        ? ''
        : (
          <Col xs={6} sm={6} md={6} lg={4}>
            <NavDropdown title='Categorías' style={CategoriesDrop}>
              <NavDropdown.Item style={CategoriesDropTitle}> Categorías </NavDropdown.Item>
              <NavDropdown.Divider />
              <div className='d-flex flex-column color-black'>
                <MapCategories allCategories={allCategories} />
              </div>
            </NavDropdown>
          </Col>
          )
      }
    </>
  )
}

export default withRouter(DropCategories)
