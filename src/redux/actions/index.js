
import axios from 'axios'
import { GET_PRODUCTS, SET_LOGGED, GET_CATEGORIES, CREATE_USER } from './constants'
import { ApiURL } from '../../config/config'

export const setLogged = (data) => {
  return {
    type: SET_LOGGED,
    payload: data
  }
}

export const createUser = (payload) => {
  return async function () {
    const createUser = await axios.post(`${ApiURL}/algo`, payload)
    console.log(payload)
    return {
      type: CREATE_USER,
      createUser
    }
  }
}

export function getProducts () {
  return async function (dispatch) {
    const response1 = await axios.get(`${ApiURL}/product`)
    return dispatch({ type: GET_PRODUCTS, payload: response1.data })
  }
}

export const getCategories = (payload) => {
  return {
    type: GET_CATEGORIES,
    payload
  }
}
