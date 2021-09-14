import { Link } from 'react-router-dom'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Cursor } from '../../NavBarStyle'

export const CartIcon = () => {
  return (
    <Link to='/cart'>
      <HiOutlineShoppingCart size={32} title='Shopping cart' style={Cursor} />
    </Link>
  )
}
