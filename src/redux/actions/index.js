
import { GET_PRODUCTS, SET_LOGGED, GET_CATEGORIES } from './constants'

export const setLogged = () => {
  return {
    type: SET_LOGGED,
    payload: true
  }
}

export const getProducts = (payload) => {
  return {
    type: GET_PRODUCTS, 
    payload,
  }
}

export const getCategories = (payload) => {
  return {
    type: GET_CATEGORIES, 
    payload,
  }
}