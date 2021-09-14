import { Button } from 'react-bootstrap'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { AddProductToCart } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { toastCustom } from './Toastify'

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
    <div className='d-flex justify-content-center'>
      <Button variant='dark' size='sm' className='d-flex align-items-center text-nowrap' onClick={onSubmit}>
        <HiOutlineShoppingCart size={25} className='me-2' />
        <h6> AGREGAR AL CARRITO </h6>
      </Button>
    </div>
  )
}
