import axios from 'axios'
import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  DELETE_DETAILS,
  GET_CATEGORIES,
  SET_SEARCH_RESULT,
  SET_SEARCH_STRING
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
