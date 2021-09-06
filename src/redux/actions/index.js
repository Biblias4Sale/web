import axios from 'axios'
import { GET_PRODUCTS, GET_PRODUCT_BY_ID, SET_LOGGED, GET_CATEGORIES, CREATE_USER } from './constants'
import { ApiURL } from '../../config/config'

<<<<<<< HEAD
export const setLogged = (data) => {
  console.log(data)
  return async function (dispatch) {
    const login = await axios.get(`${ApiURL}/login`, { email: 'tom@hanks.com', password: 'tom1234.' })
    console.log('soy login', login)
    return dispatch({ type: SET_LOGGED, login })
=======
export const setLogged = (loginInfo) => {
  return async function (dispatch) {
    const response = await axios.post(`${ApiURL}/login`, loginInfo, { withCredentials: true })
    return dispatch({
      type: SET_LOGGED,
      payload: response.data
    })
>>>>>>> 70503adfd3be906e8e3923584aa4594be3be516c
  }
}

export const createUser = (payload) => {
  return async function () {
<<<<<<< HEAD
    const createUser = await axios.post(`${ApiURL}/user`, payload)
=======
    const createUser = await axios.post(`${ApiURL}/user`, payload, { withCredentials: true })
>>>>>>> 70503adfd3be906e8e3923584aa4594be3be516c
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
