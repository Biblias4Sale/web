import axios from 'axios'
import { GET_PRODUCTS, GET_PRODUCT_BY_ID, SET_LOGGED, GET_CATEGORIES, CREATE_USER } from './constants'
import { ApiURL } from '../../config/config'

export const setLogged = (loginInfo) => {
  return async function (dispatch) {
    const response = await axios.post(`${ApiURL}/login`, loginInfo, { withCredentials: true })
    return dispatch({
      type: SET_LOGGED,
      payload: response.data
    })
  }
}

export const createUser = (payload) => {
  return async function () {
    const createUser = await axios.post(`${ApiURL}/user`, payload, { withCredentials: true })
    return {
      type: CREATE_USER,
      createUser
    }
  }
}

export const getProducts = () => {
  return async function (dispatch) {
    const response1 = await axios.get(`${ApiURL}/products`)
    return dispatch({ type: GET_PRODUCTS, payload: response1.data })
  }
}

export const getProductById = (id) => {
  return async dispatch => {
    const response = await axios.get(`${ApiURL}/products/detail/${id}`)
    return dispatch({ type: GET_PRODUCT_BY_ID, payload: response })
  }
}

export const getCategories = (payload) => {
  return {
    type: GET_CATEGORIES,
    payload
  }
}
