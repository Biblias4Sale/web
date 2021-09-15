import { AiOutlineHeart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { toastCustom } from './Toastify'
import { addProductToFavorites } from '../../redux/actions/index'

export const ButtonLike = ({ product }) => {
  const dispatch = useDispatch()

  const handleClick = async () => {
    try {
      dispatch(addProductToFavorites(product))
      toastCustom('Producto agregado favoritos', 'success', 2000, 'bottom-right')
    } catch (error) {
      console.log('Error a agregar al carrito', error)
      toastCustom('Producto no pudo ser agregado', 'error', 2000, 'bottom-right')
    }
  }
  return (
    <div style={{ color: 'red', cursor: 'pointer' }}><AiOutlineHeart onClick={handleClick} /></div>
  )
}
