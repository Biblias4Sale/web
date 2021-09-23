import FavoritesView from './FavoritesView'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFavorites } from '../../../../redux/actions/index'
import { getCart } from '../../../../redux/actions/cartActions'
import { ApiURL } from '../../../../config/config'
import { toastCustom } from '../../../common/Toastify'

import axios from 'axios'

export const Favorites = (props) => {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites)
  const userID = useSelector(state => state.logged.user.id)
  const cartID = useSelector(state => state.logged ? state.userCart.id : null)

  useEffect(() => {
    dispatch(getFavorites(userID))
  }, [userID, dispatch])

  const moveToCart = async (productID) => {
    // await axios.delete(`${ApiURL}/favorites/${userID}/${productID}`)
    await axios.post(`${ApiURL}/cart/addProduct/${cartID}/${productID}`)
      .then(() => {
        toastCustom('Producto agregado al carrito', 'success', 4000, 'bottom-right')
      })
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
