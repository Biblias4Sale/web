import CartView from './Cart.view'
import { useState, useEffect } from 'react'
import { AddCart, DeleteProduct } from '../../redux/actions/index'
import { useSelector, useDispatch } from 'react-redux'

let resTotal = 0

export const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const [total, setTotal] = useState()

  useEffect(() => {
    cart.forEach(product => {
      resTotal = resTotal + product.price
    })
    setTotal(resTotal)
    // setTotal(cart.reduce((acc, value) => acc.price + value.price))
  }, [cart])

  console.log('TOTAL', total)

  const addOne = (product) => {
    dispatch(AddCart(product))
  }

  const deleteProduct = (id) => {
    dispatch(DeleteProduct(id))
  }

  return (
    <CartView cart={cart} total={total} addOne={addOne} deleteProduct={deleteProduct} />
  )
}

export default Cart
