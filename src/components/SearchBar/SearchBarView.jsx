import {
  InputGroup,
  FormControl
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { Style, Input } from './SearchBarStyle'

export const SearchBarView = ({ handleChangeSearchBar, result, search, searching }) => {
  return (
    <div>
      <InputGroup.Text style={Style} className='bg-transparent w-100'>
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
    </div>
  )
}
