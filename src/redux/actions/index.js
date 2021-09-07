import axios from 'axios'
import { GET_PRODUCTS, GET_PRODUCT_BY_ID, SET_LOGGED, GET_CATEGORIES, CREATE_USER, IS_LOGGED } from './constants'
import { ApiURL } from '../../config/config'
// import { create } from 'yup/lib/Reference'

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
    console.log('action', createUser)
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
    const product = {
      brand: response.data.brand,
      model: response.data.model,
      img: response.data.img,
      description: response.data.description,
      price: '$' + new Intl.NumberFormat('es-ES').format(response.data.price.toString()),
      points: response.data.points,
      subCategoryId: response.data.subCategoryId
    }
    return dispatch({ type: GET_PRODUCT_BY_ID, payload: product })
  }
}

export const getCategories = (payload) => {
  return {
    type: GET_CATEGORIES,
    payload
  }
}

export const isLogged = (payload) => {
  return {
    type: IS_LOGGED,
    payload
  }
}
