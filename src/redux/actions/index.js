import axios from 'axios'
import { ApiURL } from '../../config/config'
import {
  GET_REVIEWS,
  GET_FAVORITES
} from './constants'

export const getReviews = () => {
  return async function (dispatch) {
    const reviews = await axios.get(`${ApiURL}/products/reviews`)
    return dispatch({ type: GET_REVIEWS, payload: reviews.data })
  }
}

export const getFavorites = (userID) => {
  return async function (dispatch) {
    const response = await axios.get(`${ApiURL}/favorites/${userID}`)
    return dispatch({ type: GET_FAVORITES, payload: response.data })
  }
}
