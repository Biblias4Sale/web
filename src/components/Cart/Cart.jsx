import CartView from './Cart.view'
import { useState, useEffect } from 'react'
import {
  AddProductToCart,
  RemoveProductFromCart,
  AddProductToSaved,
  subtractQtyFromCart,
  RemoveProductFromSaved
} from '../../redux/actions/index'
import { useSelector, useDispatch } from 'react-redux'

export const Cart = () => {
  const dispatch = useDispatch()
  const main = useSelector((state) => state.cart.main)
  const saved = useSelector((state) => state.cart.saved)
  const [total, setTotal] = useState()
  const [actualView, setActualView] = useState('main')

  // useEffect(() => {
  //   main.forEach((product) => {
  //     resTotal = resTotal + product.price * product.qty
  //   })
  //   setTotal(resTotal)
  // }, [main])

  // console.log('Main', main)

  const handleChange = (event, value) => {
    console.log(event)
    console.log(value)
  }

  const addQty = (product) => {
    dispatch(AddProductToCart(product))
  }

  const subtractQty = (id) => {
    console.log('soy la funcion q resta')
    dispatch(subtractQtyFromCart(id))
  }

  const moveToCart = (product) => {
    dispatch(AddProductToCart(product))
    dispatch(RemoveProductFromSaved(product.id))
  }

  const removeFromCart = (id) => {
    dispatch(RemoveProductFromCart(id))
  }

  const removeFromSaved = (id) => {
    dispatch(RemoveProductFromSaved(id))
  }

  const moveToSaved = (product) => {
    dispatch(AddProductToSaved(product))
    dispatch(RemoveProductFromCart(product.id))
  }

  return (
    <CartView
      main={main}
      saved={saved}
      total={total}
      addQty={addQty}
      removeFromCart={removeFromCart}
      removeFromSaved={removeFromSaved}
      moveToCart={moveToCart}
      moveToSaved={moveToSaved}
      subtractQty={subtractQty}
      actualView={actualView}
      setActualView={setActualView}
      handleChange={handleChange}
    />
  )
}

export default Cart
