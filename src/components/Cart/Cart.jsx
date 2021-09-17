import CartView from './Cart.view'
import { useState, useEffect } from 'react'
import {
  AddProductToCart,
  RemoveProductFromCart,
  AddProductToSaved,
  SubtractQtyFromCart,
  RemoveProductFromSaved,
  SubtractQtyFromSaved,
  getCart,
  getSaved
} from '../../redux/actions/cartActions'
import { useSelector, useDispatch } from 'react-redux'
import { toastCustom } from '../common/Toastify'
import { ApiURL } from '../../config/config'
import axios from 'axios'

export const Cart = () => {
  const dispatch = useDispatch()
  const logged = useSelector(state => state.logged)
  const userID = useSelector(state => state.logged ? state.logged.user.id : null)
  const cartID = useSelector(state => state.logged ? state.logged.cart.id : null)
  const mainList = useSelector((state) => state.logged ? state.userCart : state.cart.main)
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
  })

  const addQtyToCart = (product) => {
    dispatch(AddProductToCart(product))
    setNewKey(prev => prev + 1)
    calculateNewTotal()
  }

  const subtractQtyFromCart = (id) => {
    dispatch(SubtractQtyFromCart(id))
    setNewKey(prev => prev + 1)
    calculateNewTotal()
  }

  const moveToCart = async (product) => {
    if (logged) {
      console.log('Moviendo de guardados de usuario a carrito de usuario')
      try {
        await axios.delete(`${ApiURL}/cart/saveProduct/${userID}/${product.id}`)
        await axios.post(`${ApiURL}/cart/${cartID}/${product.id}`)
        dispatch(getCart(userID))
        dispatch(getSaved(userID))
        toastCustom('Producto movido al carrito', 'success', 4000, 'bottom-right')
      } catch (error) {
        toastCustom('Error: el producto no pudo ser movido', 'error', 4000, 'bottom-right')
      }
    } else {
      dispatch(AddProductToCart(product))
      dispatch(RemoveProductFromSaved(product.id))
    }
  }

  const removeFromCart = async (productID) => {
    if (logged) {
      console.log('Eliminando producto del carrito de usuario')
      try {
        await axios.delete(`${ApiURL}/cart/delProduct/${cartID}/${productID}`)
        dispatch(getCart(userID))
        // toastCustom('Producto eliminado del carrito', 'success', 4000, 'bottom-right')
      } catch (error) {
        toastCustom('Error: el producto no pudo ser eliminado', 'error', 4000, 'bottom-right')
      }
    } else {
      console.log('Eliminando producto del carrito de invitado')
      dispatch(RemoveProductFromCart(productID))
    }
  }

  const removeFromSaved = (id) => {
    dispatch(RemoveProductFromSaved(id))
  }

  const moveToSaved = async (product) => {
    if (logged) {
      console.log('Moviendo de carrito de usuario a guardados de usuario')
      try {
        await axios.delete(`${ApiURL}/cart/delProduct/${cartID}/${product.id}`)
        await axios.post(`${ApiURL}/saveProduct/${userID}`, { productID: product.id })
        dispatch(getCart(userID))
        dispatch(getSaved(userID))
        toastCustom('Producto movido a guardados', 'success', 4000, 'bottom-right')
      } catch (error) {
        toastCustom('Error: el producto no pudo ser movido', 'error', 4000, 'bottom-right')
      }
    } else {
      dispatch(AddProductToSaved(product))
      dispatch(RemoveProductFromCart(product.id))
    }
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
