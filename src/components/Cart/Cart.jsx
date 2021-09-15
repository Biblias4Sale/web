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
  let resTotal = 0

  const dispatch = useDispatch()
  const main = useSelector((state) => state.cart.main)
  const saved = useSelector((state) => state.cart.saved)
  const [total, setTotal] = useState()
  
  useEffect(() => {
    main.forEach(product => {
      resTotal = resTotal + (product.price * product.qty)
    })
    setTotal(resTotal)
  }, [main])

  const [actualView, setActualView] = useState('main')


  const handleChange = (e) => {
    console.log(e, 'no entre')

  }

  const addQty = (product) => {
    console.log('soy la funcion q suma')
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
