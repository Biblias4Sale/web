import {
  InputGroup,
  FormControl,
  Container,
  Row
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { Style, Input, Contenedor } from './SearchBarStyle'

export const SearchBarView = ({ handleChangeSearchBar, result, search, searching }) => {
  return (
    <div style={Contenedor}>
      <Container>
        <InputGroup>
          <InputGroup.Text style={Style} className='bg-white'>
            <FormControl
              style={Input}
              value={searching}
              placeholder='Buscar...'
              onChange={e => handleChangeSearchBar(e)}
            />

            <Link
              to={{
                pathname: '/catalogo'
              }}
              className='align-self-center text-decoration-none text-black'
            >
              <FiSearch className='m-1' size={30} onClick={search} />
            </Link>

          </InputGroup.Text>
        </InputGroup>
        <Row className='justify-content-center text-center' />
      </Container>
    </div>
  )
}
