import { Col, NavDropdown } from 'react-bootstrap'
import { Categories } from './categories'
import { CategoriesDrop, CategoriesDropTitle } from '../../NavBarStyle'

export const DropCategories = () => {
  const allCategories = Categories()

  return (
    <Col xs={6} sm={6} md={6} lg={4}>
      <NavDropdown title='Categorías' style={CategoriesDrop}>
        <NavDropdown.Item style={CategoriesDropTitle}> Categorías </NavDropdown.Item>
        <NavDropdown.Divider />
        {allCategories.map(item =>
          <NavDropdown.Item href={`/${item}`} key={item}>
            {item}
          </NavDropdown.Item>
        )}
      </NavDropdown>
    </Col>
  )
}
