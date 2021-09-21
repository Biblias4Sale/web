import axios from 'axios'
import { ApiURL } from '../../config/config'
import {
  GET_PRODUCTS,
  GET_CATEGORIES,
  SET_SEARCH_RESULT,
  SET_SEARCH_STRING
} from './constants'

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
