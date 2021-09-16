
import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  ADD_PRODUCT_TO_SAVED,
  SUBTRACT_QTY_FROM_CART,
  REMOVE_PRODUCT_FROM_SAVED,
  SUBTRACT_QTY_FROM_SAVED
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
