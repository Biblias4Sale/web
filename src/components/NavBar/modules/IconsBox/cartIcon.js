import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Cursor } from '../../NavBarStyle'

export const CartIcon = () => {
  const cart = useSelector(state => state.cart.main)
  return (
    <div>
    <Link to='/cart' className='text-decoration-none'>
      <div className='d-flex align-content-end justify-content-center'>{cart.length}</div>
      <HiOutlineShoppingCart size={33} title='Shopping cart' style={Cursor} />
    </Link>
    </div>
  )
}
