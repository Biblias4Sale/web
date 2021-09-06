import { Container } from 'react-bootstrap'
import { SearchIcon } from './searchIcons'
import { CartIcon } from './cartIcon'
import { UserIcon } from './userIcon'
import { SetSurface } from '../../NavBarStyle'

export const IconsBox = () => {
  return (
    <Container className='d-flex justify-content-around' style={SetSurface('40vh')}>
      <SearchIcon />
      <CartIcon />
      <UserIcon />
    </Container>
  )
}
