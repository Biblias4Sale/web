import { Container } from 'react-bootstrap'
import { CartIcon } from './cartIcon'
import { UserIcon } from './userIcon'
import { SetSurface } from '../../NavBarStyle'

export const IconsBox = () => {
  return (
    <Container className='d-flex justify-content-around align-items-center' style={SetSurface('40vh')}>
      <CartIcon />
      <UserIcon />
    </Container>
  )
}
