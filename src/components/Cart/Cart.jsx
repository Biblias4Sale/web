import CartView from './Cart.view'
import { useState, useEffect } from 'react'
import { AddProductToCart, RemoveProductFromCart, AddProductToSaved, subtractQtyFromCart } from '../../redux/actions/index'
import { useSelector, useDispatch } from 'react-redux'

let resTotal = 0

export const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.main)
  const [total, setTotal] = useState()
  
  useEffect(() => {
    cart.forEach(product => {
      resTotal = resTotal + product.price * product.qty
    })
    setTotal(resTotal)
  }, [cart])

  const addQty = (product) => {
    dispatch(AddProductToCart(product))
  }

  const subtractQty = (id) => {
    dispatch(subtractQtyFromCart(id))
  }

  const RemoveProduct = (id) => {
    dispatch(RemoveProductFromCart(id))
  }
  const addSaved = (product) => {
    dispatch(AddProductToSaved(product))
    dispatch(RemoveProductFromCart(product.id))
  }

  return (
    <CartView cart={cart} total={total} addQty={addQty} RemoveProduct={RemoveProduct} addSaved={addSaved} subtractQty={subtractQty} />
  )
}

export default Cart
