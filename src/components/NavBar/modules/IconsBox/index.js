import { Container } from 'react-bootstrap'
import { CartIcon } from './cartIcon'
import { UserIcon } from './userIcon'
import { SetSurface } from '../../NavBarStyle'
import { LikeIcon } from './LikeIcon'

export const IconsBox = () => {
  return (
    <Container className='d-flex justify-content-around align-items-center' style={SetSurface('40vh')}>
      <LikeIcon />
      <CartIcon />
      <UserIcon />
    </Container>
  )
}
