import axios from 'axios'
import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  DELETE_DETAILS,
  GET_CATEGORIES,
  GET_REVIEWS,
  SET_SEARCH_RESULT,
  SET_SEARCH_STRING,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  ADD_PRODUCT_TO_SAVED,
  SUBTRACT_QTY_FROM_CART,
  REMOVE_PRODUCT_FROM_SAVED,
  ADD_PRODUCT_TO_FAVORITES,
  REMOVE_PRODUCT_FROM_FAVORITES,
  SUBTRACT_QTY_FROM_SAVED
} from './constants'

import { ApiURL } from '../../config/config'

export const getProducts = () => {
  return async function (dispatch) {
    const response1 = await axios.get(`${ApiURL}/products`)
    return dispatch({ type: GET_PRODUCTS, payload: response1.data })
  }
}

export const getProductById = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`${ApiURL}/products/detail/${id}`)
    // const product = {
    //   id: response.data.id,
    //   brand: response.data.brand,
    //   model: response.data.model,
    //   img: response.data.img,
    //   description: response.data.description,
    //   price:
    //     '$' +
    //     new Intl.NumberFormat('es-ES').format(response.data.price.toString()),
    //   points: response.data.points,
    //   subCategoryId: response.data.subCategoryId
    // }
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

export const addProductToFavorites = (product) => {
  return {
    type: ADD_PRODUCT_TO_FAVORITES,
    payload: product
  }
}
export const RemoveProductFromFavorites = (id) => {
  return {
    type: REMOVE_PRODUCT_FROM_FAVORITES,
    payload: id
  }
}

export const SubtractQtyFromSaved = (id) => {
  return {
    type: SUBTRACT_QTY_FROM_SAVED,
    payload: id
  }
}
