import axios from 'axios'
import {
  GET_REVIEWS,
  ADD_PRODUCT_TO_FAVORITES,
  REMOVE_PRODUCT_FROM_FAVORITES
} from './constants'

import { ApiURL } from '../../config/config'

export const getReviews = () => {
  return async function (dispatch) {
    const reviews = await axios.get(`${ApiURL}/products/reviews`)
    return dispatch({ type: GET_REVIEWS, payload: reviews.data })
  }
}

export const addProductToFavorites = (product) => {
  return {
    type: ADD_PRODUCT_TO_FAVORITES,
    payload: product
  }
}
export const RemoveProductFromFavorites = (id) => {
  return {
    type: REMOVE_PRODUCT_FROM_FAVORITES,
    payload: id
  }
}
