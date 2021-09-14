import { HiOutlineShoppingCart } from 'react-icons/hi'
import { ButtonCartStyle } from '../ProductDetailsStyle'
import { useDispatch } from 'react-redux'
import { AddProductToCart } from '../../../redux/actions'
import { toastCustom } from '../../common/Toastify'

export const ButtonCart = ({ product }) => {
  const dispatch = useDispatch()
  const onSubmit = async () => {
    try {
      dispatch(AddProductToCart(product))
      toastCustom('Producto agregado al carrito', 'success', 2000, 'bottom-right')
    } catch (error) {
      console.log('Error a agregar al carrito', error)
      toastCustom('Producto no pudo ser agregado', 'error', 2000, 'bottom-right')
    }
  }

  return (
    <div variant='dark' style={ButtonCartStyle} onClick={onSubmit}>
      <HiOutlineShoppingCart size={25} style={{ marginRight: '20px' }} />
      AGREGAR AL CARRITO
    </div>
  )
}
