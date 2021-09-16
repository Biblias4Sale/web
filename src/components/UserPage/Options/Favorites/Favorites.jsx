import FavoritesView from './FavoritesView'
import { useSelector, useDispatch } from 'react-redux'
import { getFavorites } from '../../../../redux/actions/index'
import { ApiURL } from '../../../../config/config'
import axios from 'axios'

export const Favorites = (props) => {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites)
  const userID = useSelector(state => state.logged.user.id)

  const moveToCart = async (productID) => {
    await axios.delete(`${ApiURL}/favorites/${userID}/${productID}`)
    // ACA FALTA AGREGAR AL CARRITO DE USUARIO
    dispatch(getFavorites(productID))
  }

  const RemovefromFavorites = async (productID) => {
    await axios.delete(`${ApiURL}/favorites/${userID}/${productID}`)
    dispatch(getFavorites(userID))
  }

  return (
    <FavoritesView
      favorites={favorites}
      moveToCart={moveToCart}
      RemovefromFavorites={RemovefromFavorites}
    />
  )
}
export default Favorites
