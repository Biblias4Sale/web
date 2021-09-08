import {
  InputGroup,
  FormControl,
  Container,
  Row
} from 'react-bootstrap'

import { FiSearch } from 'react-icons/fi'
// import { AllProducts } from './modules/AllProducts'
import { Style, Input, Contenedor } from './SearchBarStyle'

export const SearchBarView = ({ handleChangeSearchBar, result, search }) => {
  return (
    <div style={Contenedor}>
      <Container>
        <InputGroup>
          <InputGroup.Text style={Style} className='bg-white'>
            <FormControl
              style={Input}
              placeholder='Buscar...'
              onChange={e => handleChangeSearchBar(e)}
            />
            <FiSearch className='m-1' size={30} onClick={search} />
          </InputGroup.Text>
        </InputGroup>
        <Row className='justify-content-center text-center'>
          {/* <AllProducts result={result} /> */}
        </Row>
      </Container>
    </div>
  )
}
