import {
  InputGroup,
  FormControl,
  Container,
  Col
} from 'react-bootstrap'

import { FiSearch } from 'react-icons/fi'
import { Style, Input, Contenedor } from './SearchBarStyle'

export const SearchBarView = () => {
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
              />
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Container>
    </div>
  )
}
