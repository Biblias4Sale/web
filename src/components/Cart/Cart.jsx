import CartView from './Cart.view'
import { useState, useEffect } from 'react'
import { AddProductToCart, RemoveProductFromCart, subtractQtyFromCart } from '../../redux/actions/index'
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

  const addQty = (product) => {
    dispatch(AddProductToCart(product))
  }

  const subtractQty = (product) => {
    dispatch(subtractQtyFromCart(product))
  }

  const RemoveProduct = (id) => {
    dispatch(RemoveProductFromCart(id))
  }
  
  const subPriceTotal = () => {
    for (let i = 0; i < cart.length; i++) {
      for (let j = 1; j < cart.length -1; j++) {
        let acc = 0
        if(i.id === i.id) acc++
        return acc
      }
    }
  }

  console.log(subPriceTotal())
  
  return (
    <CartView cart={cart} total={total} addQty={addQty} RemoveProduct={RemoveProduct} subtractQty={subtractQty} subPriceTotal={subPriceTotal()}/>
  )
}

export default Cart
