import CartView from './Cart.view'
import { useState, useEffect } from 'react'
import {
  AddProductToCart,
  RemoveProductFromCart,
  AddProductToSaved,
  SubtractQtyFromCart,
  RemoveProductFromSaved,
  SubtractQtyFromSaved
} from '../../redux/actions/index'
import { useSelector, useDispatch } from 'react-redux'

export const Cart = () => {
  // let resTotal = 0

  const dispatch = useDispatch()
  const mainList = useSelector((state) => state.cart.main)
  const savedList = useSelector((state) => state.cart.saved)
  const [total, setTotal] = useState(50)

  // useEffect(() => {
  //   mainList.forEach(product => {
  //     resTotal = resTotal + (product.price * product.qty)
  //   })
  //   setTotal(resTotal)
  // }, [mainList])

  const [actualView, setActualView] = useState('main')

  const handleChange = (e) => {
    console.log(e, 'no entre')
  }

  const addQtyToCart = (product) => {
    dispatch(AddProductToCart(product))
  }

  const subtractQtyFromCart = (id) => {
    dispatch(SubtractQtyFromCart(id))
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

  const addQtyToSaved = (product) => {
    dispatch(AddProductToSaved(product))
  }

  const subtractQtyFromSaved = (id) => {
    dispatch(SubtractQtyFromSaved(id))
  }

  return (
    <CartView
      mainList={mainList}
      savedList={savedList}
      total={total}
      addQtyToCart={addQtyToCart}
      subtractQtyFromCart={subtractQtyFromCart}
      removeFromCart={removeFromCart}
      removeFromSaved={removeFromSaved}
      addQtyToSaved={addQtyToSaved}
      subtractQtyFromSaved={subtractQtyFromSaved}
      moveToCart={moveToCart}
      moveToSaved={moveToSaved}
      actualView={actualView}
      setActualView={setActualView}
      handleChange={handleChange}
    />
  )
}

export default Cart
