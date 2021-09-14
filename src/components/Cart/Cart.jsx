import CartView from './Cart.view'
import { useState, useEffect } from 'react'
import { AddProductToCart, RemoveProductFromCart } from '../../redux/actions/index'
import { useSelector, useDispatch } from 'react-redux'

let resTotal = 0

export const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.main)
  const [total, setTotal] = useState()
  const [subTotal, setSubTotal] = useState()
  
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
  
  // const subPriceTotal = (id) => {
  //   let acc = 0
  //   cart.forEach(elem => {
  //     if(elem.id === id) acc++
  //     elem.price + elem.price})
  //   }
  
  return (
    <CartView cart={cart} total={total} addOne={addOne} deleteProduct={deleteProduct} subTotal={subTotal}/>
    )
  }
  
  export default Cart
  