import FavoritesView from './FavoritesView'
import { useSelector, useDispatch } from 'react-redux'
import { getFavorites } from '../../../../redux/actions/index'
import { getCart } from '../../../../redux/actions/cartActions'
import { ApiURL } from '../../../../config/config'
import axios from 'axios'

export const Favorites = (props) => {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites)
  const userID = useSelector(state => state.logged.user.id)
  const cartID = useSelector(state => state.logged ? state.userCart.id : null)

  const moveToCart = async (productID) => {
    await axios.delete(`${ApiURL}/favorites/${userID}/${productID}`)
    await axios.post(`${ApiURL}/cart/addProduct/${cartID}/${productID}`)
    dispatch(getCart(userID))
    dispatch(getFavorites(userID))
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
