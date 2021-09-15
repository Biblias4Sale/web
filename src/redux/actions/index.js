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
  SET_SEARCH_STRING,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  ADD_PRODUCT_TO_SAVED,
  SUBTRACT_QTY_FROM_CART,
  REMOVE_PRODUCT_FROM_SAVED,
  SUBTRACT_QTY_FROM_SAVED,
  QTY_CHOOSE_FROM_CART
} from './constants'

import { ApiURL } from '../../config/config'

export const setLogged = (loginInfo) => {
  return {
    type: SET_LOGGED,
    payload: loginInfo
  }
}

export const createUser = (registerInfo) => {
  return {
    type: CREATE_USER,
    payload: registerInfo
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
    return dispatch({ type: GET_PRODUCT_BY_ID, payload: response.data })
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
            password: editUser.data.password,
            cp: editUser.data.cp,
            address: editUser.data.address,
            city: editUser.data.city,
            province: editUser.data.province,
            phone: editUser.data.phone
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

export const AddProductToCart = (newproduct) => {
  let newQty = 1
  if (newproduct.qty) newQty = newproduct.qty

  return {
    type: ADD_PRODUCT_TO_CART,
    payload: { ...newproduct, qty: newQty }
  }
}

export const RemoveProductFromCart = (id) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: id
  }
}

export const SubtractQtyFromCart = (id) => {
  return {
    type: SUBTRACT_QTY_FROM_CART,
    payload: id
  }
}

export const AddProductToSaved = (newproduct) => {
  return {
    type: ADD_PRODUCT_TO_SAVED,
    payload: newproduct
  }
}

export const RemoveProductFromSaved = (id) => {
  return {
    type: REMOVE_PRODUCT_FROM_SAVED,
    payload: id
  }
}

export const SubtractQtyFromSaved = (id) => {
  return {
    type: SUBTRACT_QTY_FROM_SAVED,
    payload: id
  }
}

export const QtyChoiceFromCart = (id, newQty) => {
  return {
    type: QTY_CHOOSE_FROM_CART,
    payload: { id: id, qty: newQty }
  }
}
