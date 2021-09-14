import CartView from './Cart.view'
import { useState, useEffect } from 'react'
import { AddProductToCart, RemoveProductFromCart } from '../../redux/actions/index'
import { useSelector, useDispatch } from 'react-redux'

let resTotal = 0

export const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.main)
  const [total, setTotal] = useState()

  useEffect(() => {
    cart.forEach(product => {
      resTotal = resTotal + product.price
    })
    setTotal(resTotal)
  }, [cart])

  const addOne = (product) => {
    dispatch(AddProductToCart(product))
  }

  const RemoveProduct = (id) => {
    dispatch(RemoveProductFromCart(id))
  }

  return (
    <CartView cart={cart} total={total} addOne={addOne} RemoveProduct={RemoveProduct} />
  )
}

export default Cart
