import { Button } from 'react-bootstrap'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { AddProductToCart, getCart } from '../../redux/actions/cartActions'

import { useSelector, useDispatch } from 'react-redux'
import { toastCustom } from './Toastify'
import { ApiURL } from '../../config/config'
import axios from 'axios'

export const ButtonCart = ({ product }) => {
  const dispatch = useDispatch()
  const userID = useSelector(state => state.logged ? state.logged.user.id : null)
  const cartID = useSelector(state => state.logged ? state.userCart.id : null)
  const logged = useSelector(state => state.logged)

  // console.log('user:', userID)
  // console.log('cart:', cartID)
  // console.log('product:', product.id)

  const onSubmit = async () => {
    if (logged) {
      console.log('agrego a carrito de usuario')
      try {
        await axios.post(`${ApiURL}/cart/addProduct/${cartID}/${product.id}`)
        dispatch(getCart(userID))

        toastCustom('Producto agregado al carrito', 'success', 4000, 'bottom-right')
      } catch (error) {
        console.log('Error a agregar al carrito', error)
        toastCustom('Producto no pudo ser agregado', 'error', 4000, 'bottom-right')
      }
    } else {
      console.log('agrego a carrito de invitado')
      dispatch(AddProductToCart(product)) // << AGREGA AL CARRITO DE INVITADO
    }
  }
  return (
    <div className='d-flex justify-content-center'>
      <Button variant='dark' size='sm' className='d-flex align-items-center text-nowrap' onClick={onSubmit}>
        <HiOutlineShoppingCart size={25} className='me-2' />
        <h6> AGREGAR AL CARRITO </h6>
      </Button>
    </div>
  )
}
