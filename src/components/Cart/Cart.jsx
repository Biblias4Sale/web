import CartView from './Cart.view'
import { useState } from 'react'
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
  const [newKey, setNewKey] = useState(1)

  const calculateNewTotal = () => {
    let newTotal = 0
    mainList.forEach(product => {
      newTotal = newTotal + product.price * product.qty
      setTotal(total => newTotal)
    })
  }

  useEffect(() => {
    calculateNewTotal()
  }, [calculateNewTotal])

  const addQtyToCart = (product) => {
    dispatch(AddProductToCart(product))
    setNewKey(prev => prev + 1)
    calculateNewTotal()
    console.log('Nuevo total:', total)
  }

  const subtractQtyFromCart = (id) => {
    dispatch(SubtractQtyFromCart(id))
    setNewKey(prev => prev + 1)
    calculateNewTotal()
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
    setNewKey(prev => prev + 1)
    dispatch(AddProductToSaved(product))
  }

  const subtractQtyFromSaved = (id) => {
    setNewKey(prev => prev + 1)
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
      newKey={newKey}
    />
  )
}

export default Cart
