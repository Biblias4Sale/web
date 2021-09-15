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

let resTotal = 0

export const Cart = () => {
  const dispatch = useDispatch()
  const main = useSelector((state) => state.cart.main)
  const saved = useSelector((state) => state.cart.saved)
  const [total, setTotal] = useState()
  const [actualView, setActualView] = useState('main')

  useEffect(() => {
    main.forEach((product) => {
      resTotal = resTotal + product.price * product.qty
    })
    setTotal(resTotal)
  }, [main])

  const addQty = (product) => {
    dispatch(AddProductToCart(product))
  }

  const subtractQty = (id) => {
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

  const addSaved = (product) => {
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
      addSaved={addSaved}
      subtractQty={subtractQty}
      actualView={actualView}
      setActualView={setActualView}
    />
  )
}

export default Cart
