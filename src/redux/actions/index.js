import axios from 'axios'
import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  DELETE_DETAILS,
  SET_LOGGED,
  GET_CATEGORIES,
  CREATE_USER,
  GET_REVIEWS,
  LOG_OUT,
  SET_SEARCH_RESULT,
  SET_SEARCH_STRING
} from './constants'

import { ApiURL } from '../../config/config'

// export const setLogged = (loginInfo) => {
//   return async function (dispatch) {
//     const response = await axios.post(`${ApiURL}/login`, loginInfo, {
//       withCredentials: true
//     })
//     return dispatch({
//       type: SET_LOGGED,
//       payload: response.data
//     })
//   }
// }

export const setLogged = (loginInfo) => {
  return {
    type: SET_LOGGED,
    payload: loginInfo
  }
}

export const createUser = (payload) => {
  return async function (dispatch) {
    axios
      .post(`${ApiURL}/user`, payload, { withCredentials: true })
      .then((createUser) => {
        if (createUser.status === 201) {
          return dispatch({
            type: CREATE_USER,
            payload: createUser.data
          })
        }
      })
      .catch((e) => window.alert('ESE USUARIO YA EXISTE'))
  }
}

export const getProducts = () => {
  return async function (dispatch) {
    const response1 = await axios.get(`${ApiURL}/products`)
    return dispatch({ type: GET_PRODUCTS, payload: response1.data })
  }
}

export const getProductById = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`${ApiURL}/products/detail/${id}`)
    const product = {
      brand: response.data.brand,
      model: response.data.model,
      img: response.data.img,
      description: response.data.description,
      price:
        '$' +
        new Intl.NumberFormat('es-ES').format(response.data.price.toString()),
      points: response.data.points,
      subCategoryId: response.data.subCategoryId
    }
    return dispatch({ type: GET_PRODUCT_BY_ID, payload: product })
  }
}

export const deleteDetails = () => {
  return {
    type: DELETE_DETAILS
  }
}

export const getCategories = (payload) => {
  return {
    type: GET_CATEGORIES,
    payload
  }
}

export const getReviews = () => {
  return async function (dispatch) {
    const reviews = await axios.get(`${ApiURL}/products/reviews`)
    return dispatch({ type: GET_REVIEWS, payload: reviews.data })
  }
}

export const logOut = () => {
  axios.get(`${ApiURL}/logout`, { withCredentials: true })
  return {
    type: LOG_OUT
  }
}

export const editUser = (id, data, token) => {
  return async function (dispatch) {
    axios.put(`${ApiURL}/user/${id}`, data, { withCredentials: true })
      .then(editUser => {
        const EditedUser = {
          user: {
            id: editUser.data.id,
            name: editUser.data.name,
            lastName: editUser.data.lastName,
            email: editUser.data.email,
            password: editUser.data.password
          },
          token
        }
        if (editUser.status === 200) {
          return dispatch({
            type: SET_LOGGED,
            payload: EditedUser
          })
        }
      })
      .catch(e => window.alert('Usuario No Modificado'))
  }
}
export const setSearchResult = (searchResults) => {
  return {
    type: SET_SEARCH_RESULT,
    payload: searchResults
  }
}

export const setSearchString = (searchString) => {
  return {
    type: SET_SEARCH_STRING,
    payload: searchString
  }
}

export const deleteUser = (id) => {
  console.log('soy id en action', id)
  return async function (dispatch) {
    axios.delete(`${ApiURL}/user/${id}`, { withCredentials: true })
      .then(deleteUser => {
        if (deleteUser.status === 200) {
          return dispatch({
            type: LOG_OUT
          })
        }
      })
      .catch(e => console.log('Usuario No ha sido deshabilitado'))
  }
}
