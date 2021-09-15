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
  const dispatch = useDispatch()
  const mainList = useSelector((state) => state.cart.main)
  const savedList = useSelector((state) => state.cart.saved)
  const [actualView, setActualView] = useState('main')
  const [total, setTotal] = useState()
  const [key, setKey] = useState(1)

  useEffect(() => {
    let newTotal = 0
    mainList.forEach(product => {
      newTotal = newTotal + product.price * product.qty
    })
    setTotal(total => newTotal)
  }, [mainList])

  const handleChange = (e) => {
    // console.log(e, 'no entre')
  }

  const addQtyToCart = (product) => {
    dispatch(AddProductToCart(product))
    setKey(prev => prev + 1)
    console.log('Nuevo total:', total)
  }

  const subtractQtyFromCart = (id) => {
    dispatch(SubtractQtyFromCart(id))
    setKey(prev => prev + 1)
    console.log('Nuevo total:', total)
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
    setKey(prev => prev + 1)
    dispatch(AddProductToSaved(product))
  }

  const subtractQtyFromSaved = (id) => {
    setKey(prev => prev + 1)
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
      key={key}
    />
  )
}

export default Cart
