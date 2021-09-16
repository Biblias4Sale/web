import FavoritesView from './FavoritesView'
import { useSelector, useDispatch } from 'react-redux'
// import { AddProductToCart } from '../../../../redux/actions/cartActions'
import { getFavorites } from '../../../../redux/actions/index'
import { ApiURL } from '../../../../config/config'
import axios from 'axios'

export const Favorites = (props) => {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites)
  const userID = useSelector(state => state.logged.user.id)

  console.log(userID)

  const moveToCart = (productID) => {
    // dispatch(AddProductToCart(product))
    // dispatch(RemoveProductFromFavorites(product.id))
    dispatch(getFavorites(productID))
  }

  const RemovefromFavorites = async (productID) => {
    console.log('quiero borrarte', productID)
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
