import axios from 'axios'
import { ApiURL } from '../../config/config'
import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  ADD_PRODUCT_TO_SAVED,
  SUBTRACT_QTY_FROM_CART,
  REMOVE_PRODUCT_FROM_SAVED,
  SUBTRACT_QTY_FROM_SAVED,
  GET_CART,
  GET_SAVED,
  CLEAN_GUEST_CART,
  SET_STATUS
} from './constants'

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

export const cleanGuestCart = () => {
  return {
    type: CLEAN_GUEST_CART
  }
}

export const getCart = (userID) => {
  return async function (dispatch) {
    const response = await axios.get(`${ApiURL}/cart/${userID}`)
    return dispatch({ type: GET_CART, payload: response.data })
  }
}

export const getSaved = (userID) => {
  return async function (dispatch) {
    const response = await axios.get(`${ApiURL}/savedProducts/${userID}`)
    return dispatch({ type: GET_SAVED, payload: response.data })
  }
}

export const setCartState = (id) => {
  return async dispatch => {
    const response = await axios.put(`${ApiURL}/cart/update/${id}`)
    return dispatch({ type: SET_STATUS, payload: response.data })
  }
}
