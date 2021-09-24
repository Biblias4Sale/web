import axios from 'axios'
import { ApiURL } from '../../config/config'
import {
  GET_FAVORITES
} from './constants'

export const getFavorites = (userID) => {
  return async function (dispatch) {
    const response = await axios.get(`${ApiURL}/favorites/${userID}`)
    return dispatch({ type: GET_FAVORITES, payload: response.data })
  }
}
