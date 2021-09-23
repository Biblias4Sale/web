import { Container } from 'react-bootstrap'
import { CartIcon } from './cartIcon'
import { UserIcon } from './userIcon'
import { SetSurface } from '../../NavBarStyle'
import { LikeIcon } from './LikeIcon'
import { useSelector } from 'react-redux'

export const IconsBox = () => {
  const logged = useSelector((state) => state.logged)
  return (
    <Container className='d-flex justify-content-between align-items-end' style={SetSurface('40vh', '6vh')}>
      {logged
        ? <LikeIcon />
        : null}
      <CartIcon />
      <UserIcon />
    </Container>
  )
}
