import FavoritesView from './FavoritesView'
import { useSelector, useDispatch } from 'react-redux'
import { AddProductToCart } from '../../../../redux/actions/cartActions'
import { RemoveProductFromFavorites } from '../../../../redux/actions/index'
export const Favorites = () => {
  const dispatch = useDispatch()
  const favorite = useSelector((state) => state.favorites)

  const moveToCart = (product) => {
    dispatch(AddProductToCart(product))
    dispatch(RemoveProductFromFavorites(product.id))
  }
  const RemovefromFavorites = (id) => {
    dispatch(RemoveProductFromFavorites(id))
  }
  return (
    <FavoritesView
      favorite={favorite}
      moveToCart={moveToCart}
      RemovefromFavorites={RemovefromFavorites}
    />
  )
}
export default Favorites
