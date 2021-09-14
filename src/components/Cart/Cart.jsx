import CartView from './Cart.view'
import { useState, useEffect } from 'react'
import { AddProductToCart, AddProductToSaved, RemoveProductFromCart } from '../../redux/actions/index'
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

  const deleteProduct = (id) => {
    dispatch(RemoveProductFromCart(id))
  }
  const addSaved = (product) => {
    dispatch(AddProductToSaved(product))
    dispatch(RemoveProductFromCart(product.id))
  }

  return (
    <CartView cart={cart} total={total} addOne={addOne} deleteProduct={deleteProduct} addSaved={addSaved} />
  )
}

export default Cart
