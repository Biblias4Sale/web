
import axios from 'axios'
import { GET_PRODUCTS, SET_LOGGED, GET_CATEGORIES } from './constants'
import { ApiURL } from '../../config/config'

export const setLogged = (data) => {
  return {
    type: SET_LOGGED,
    payload: data
  }
}

export const getProducts = () => {
  return async function (dispatch) {
    const response1 = await axios.get(`${ApiURL}/products`)
    return dispatch({ type: GET_PRODUCTS, payload: response1.data })
  }
}

export const getCategories = (payload) => {
  return {
    type: GET_CATEGORIES,
    payload
  }
}
