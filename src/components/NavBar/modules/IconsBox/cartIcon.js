import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Cursor } from '../../NavBarStyle'

export const CartIcon = () => {
  const cart = useSelector((state) => state.logged ? state.userCart : state.cart.main)

  return (
    <div className='position-relative mt-2'>
      <Link to='/cart' className='text-decoration-none'>
        {cart && cart.length > 0
          ? <div className='position-absolute bottom-0 start-50 mb-2 translate-middle' style={{ color: 'black' }}>{cart.length}</div>
          : null}
        <HiOutlineShoppingCart size={32} title='Shopping cart' style={Cursor} />
      </Link>
    </div>
  )
}
