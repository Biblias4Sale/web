import { AiOutlineHeart } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { toastCustom } from './Toastify'
import { getFavorites } from '../../redux/actions/index'
// import { addProductToFavorites } from '../../redux/actions/index'
import { ApiURL } from '../../config/config'
import axios from 'axios'

export const ButtonLike = ({ product }) => {
  const dispatch = useDispatch()
  const id = useSelector(state => state.logged.user.id)

  const handleClick = async () => {
    try {
      await axios.post(`${ApiURL}/favorites/${id}/${product.id}`)
      dispatch(getFavorites(id))
      toastCustom('Producto agregado favoritos', 'success', 4000, 'bottom-right')
    } catch (error) {
      toastCustom('Producto no pudo ser agregado', 'error', 4000, 'bottom-right')
    }
  }
  return (
    <div style={{ color: 'red', cursor: 'pointer' }}><AiOutlineHeart onClick={handleClick} /></div>
  )
}
