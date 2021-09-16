import axios from 'axios'
import { ApiURL } from '../../config/config'
import {
  GET_REVIEWS,
  GET_FAVORITES,
  DELETE_FAVORITES
} from './constants'

export const getReviews = () => {
  return async function (dispatch) {
    const reviews = await axios.get(`${ApiURL}/products/reviews`)
    return dispatch({ type: GET_REVIEWS, payload: reviews.data })
  }
}

export const getFavorites = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`${ApiURL}/favorites/${id}`)
    return dispatch({ type: GET_FAVORITES, payload: response.data })
  }
}

export const deleteFavorites = () => {
  return { type: DELETE_FAVORITES }
}
