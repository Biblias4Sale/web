import { NavDropdown, Dropdown } from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const DropCategories = (props) => {
  const allCategories = useSelector(state => state.categories)
  const location = props.location.pathname

  return (
    <>
      {
      location === '/catalogo'
        ? ''
        : (
          <NavDropdown
            style={{ color: 'black' }}
            title='Categorías'
          >
            {allCategories.map(category =>
              <Link
                key={category}
                to={{
                  pathname: '/catalogo',
                  state: { category: category }
                }}
                className='align-self-center text-decoration-none text-black'
              >
                <Dropdown.Item as='button'>
                  {category}
                </Dropdown.Item>
              </Link>
            )}
          </NavDropdown>
          )
      }
    </>
  )
}

export default withRouter(DropCategories)
