import {
  InputGroup,
  FormControl,
  Container,
  Col,
  Row
} from 'react-bootstrap'

import { FiSearch } from 'react-icons/fi'
import { AllProducts } from './modules/AllProducts'
import { Style, Input, Contenedor } from './SearchBarStyle'

export const SearchBarView = ({ handleChangeSearchBar, search }) => {
  return (
    <div style={Contenedor}>
      <Container>
        <Col>
          <InputGroup size='md' className='bg-white justify-content-center m-6'>
            <InputGroup.Text style={Style} className='bg-white w-75 m-6'>
              <FiSearch className='m-1' size={30} />
              <FormControl
                style={Input}
                placeholder='Busca tu poducto..'
                onChange={e => handleChangeSearchBar(e)}
              />
            </InputGroup.Text>
          </InputGroup>
        </Col>
        <Row className='justify-content-center text-center'>
          <AllProducts search={search} />
        </Row>
      </Container>
    </div>
  )
}
