import CartView from './Cart.view'
import { useState, useEffect } from 'react'
import {
  AddProductToCart,
  RemoveProductFromCart,
  AddProductToSaved,
  subtractQtyFromCart
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

  const RemoveProduct = (id) => {
    dispatch(RemoveProductFromCart(id))
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
      RemoveProduct={RemoveProduct}
      addSaved={addSaved}
      subtractQty={subtractQty}
      actualView={actualView}
      setActualView={setActualView}
    />
  )
}

export default Cart
