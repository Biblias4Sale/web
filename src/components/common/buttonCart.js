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
  const cartID = useSelector(state => state.logged ? state.logged.cart.id : null)
  const logged = useSelector(state => state.logged)

  const addToCart = async () => {
    console.log(cartID)
    if (logged) {
      try {
        await axios.post(`${ApiURL}/cart/addProduct/${cartID}/${product.id}`)
        toastCustom('Producto agregado al carrito', 'success', 4000, 'bottom-right')
        setTimeout(() => {
          dispatch(getCart(userID))
        }, 1000)
      } catch (error) {
        toastCustom('El producto no pudo ser agregado', 'error', 4000, 'bottom-right')
      }
    } else {
      dispatch(AddProductToCart(product))
      toastCustom('Producto agregado al carrito', 'success', 4000, 'bottom-right')
    }
  }
  return (
    <div className='d-flex justify-content-center'>
      <Button variant='dark' size='sm' className='d-flex align-items-center text-nowrap' onClick={product.stock > 0 ? addToCart : addToCart}>
        {product.stock > 0 ? <HiOutlineShoppingCart size={25} className='me-2' /> : null}
        {product.stock > 0 ? <h6> AGREGAR AL CARRITO </h6> : <h6>SIN STOCK</h6>}
      </Button>
    </div>
  )
}
