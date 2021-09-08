import {
  InputGroup,
  FormControl,
  Row
} from 'react-bootstrap'

import { FiSearch } from 'react-icons/fi'
import { AllProducts } from './modules/AllProducts'
import { Style, Input } from './SearchBarStyle'

export const SearchBarView = ({ handleChangeSearchBar, search }) => {
  return (
    <>
      <InputGroup>
        <InputGroup.Text style={Style} className='bg-white w-100'>
          <FiSearch className='m-1' size={30} />
          <FormControl
            style={Input}
            placeholder='Busca tu poducto..'
            onChange={e => handleChangeSearchBar(e)}
          />
        </InputGroup.Text>
      </InputGroup>
      <Row className='justify-content-center text-center'>
        <AllProducts search={search} />
      </Row>
    </>
  )
}
