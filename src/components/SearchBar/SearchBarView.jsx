import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  InputGroup,
  FormControl,
  Container,
  Col
} from 'react-bootstrap'

import { FiSearch } from 'react-icons/fi'
import { Style, Input, Contenedor } from './SearchBarStyle'

export const SearchBarView = () => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const handleChangeSearchBar = async e => {
    e.persist()
    await setSearch({ search: e.target.value })
    console.log(search)
  }
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
                value={search}
              />
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Container>
    </div>
  )
}
