import { Col, NavDropdown } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { Categories } from './categories'
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
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {allCategories.map(item =>
                  <Link
                    key={item}
                    to={{
                      pathname: '/catalogo',
                      state: { category: item }
                    }}
                    style={{ textDecoration: 'none' }}
                  >
                    {item}
                  </Link>
                )}
              </div>
            </NavDropdown>
          </Col>
          )
      }
    </>
  )
}

export default withRouter(DropCategories)
