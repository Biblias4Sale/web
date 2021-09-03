import { Col, NavDropdown } from 'react-bootstrap'
import { Categories } from './categories'
import { CategoriesDropTitle } from '../../NavBarStyle'

export const DropCategories = () => {
  return (
    <Col xs={6} sm={6} md={6} lg={4}>
      <NavDropdown title='Categorías'>
        <NavDropdown.Item style={CategoriesDropTitle}> Categorías </NavDropdown.Item>
        <NavDropdown.Divider />
        {Categories.map(item =>
          <NavDropdown.Item href={`/${item}`} key={item}>
            {item}
          </NavDropdown.Item>
        )}
      </NavDropdown>
    </Col>
  )
}
