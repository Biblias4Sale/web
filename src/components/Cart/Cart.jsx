import CartView from './Cart.view'
import { useState, useEffect } from 'react'
import { AddProductToCart, RemoveProductFromCart, subtractQtyFromCart, AddProductToSaved } from '../../redux/actions/index'
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

  const RemoveProduct = (id) => {
    dispatch(RemoveProductFromCart(id))
  }
<<<<<<< HEAD
  
  return (
    <CartView cart={cart} total={total} addQty={addQty} RemoveProduct={RemoveProduct} subtractQty={subtractQty}/>
=======
  const addSaved = (product) => {
    dispatch(AddProductToSaved(product))
    dispatch(RemoveProductFromCart(product.id))
  }

  return (
    <CartView cart={cart} total={total} addQty={addQty} RemoveProduct={RemoveProduct} subtractQty={subtractQty} addSaved={addSaved} />
>>>>>>> 2a1f87bf60dafe10765d94e229a5e449fb38dd39
  )
}

export default Cart
