import { NavDropdown } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { Categories } from './categories'
import { MapCategories } from './mapCategories'
import { CategoriesTitle } from '../../NavBarStyle'

const DropCategories = (props) => {
  const allCategories = Categories()
  const location = props.location.pathname

  return (
    <>
      {
      location === '/catalogo'
        ? ''
        : (
          <NavDropdown
            title={
              <span style={CategoriesTitle}>Categorías</span>
            }
            className='d-flex justify-content-center ms-3'
          >
            <NavDropdown.Item className='fw-bolder text-info'> Categorías </NavDropdown.Item>
            <NavDropdown.Divider />
            <div className='d-flex flex-column color-black'>
              <MapCategories allCategories={allCategories} />
            </div>
          </NavDropdown>
          )
      }
    </>
  )
}

export default withRouter(DropCategories)
