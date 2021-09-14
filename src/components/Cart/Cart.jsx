import CartView from './Cart.view'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AddCart } from '../../redux/actions/index'

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

  return (
    <CartView cart={cart} addOne={addOne} total={total} />
  )
}

export default Cart
