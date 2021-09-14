import CartView from './Cart.view'
import { useState, useEffect } from 'react'
import { AddCart, DeleteProduct } from '../../redux/actions/index'
import { useSelector, useDispatch } from 'react-redux'

export const Cart = () => {
  const dispatch = useDispatch()
  const [total, setTotal] = useState(2599)
  const cart = useSelector(state => state.cart)

  const addOne = (product) => {
    dispatch(AddCart(product))
  }

  const deleteProduct = (id) => {
    dispatch(DeleteProduct(id))
  }

  return (
    <CartView cart={cart} total={total} addOne={addOne} deleteProduct={deleteProduct}/>
  )
}

export default Cart
