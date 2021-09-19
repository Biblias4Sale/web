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
  const savedList = useSelector((state) => state.logged ? state.userSaved : state.cart.saved)
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

  const addQtyToCart = async (product) => {
    if (logged) {
      try {
        await axios.post(`${ApiURL}/cart/addProduct/${cartID}/${product.id}`)
        dispatch(getCart(userID))
      } catch (error) {
        toastCustom('Error: intente nuevamente', 'error', 4000, 'bottom-right')
      }
    } else {
      dispatch(AddProductToCart(product))
      setNewKey(prev => prev + 1)
      calculateNewTotal()
    }
  }

  const subtractQtyFromCart = async (productID) => {
    if (logged) {
      try {
        await axios.post(`${ApiURL}/cart/subProduct/${cartID}/${productID}`)
        dispatch(getCart(userID))
      } catch (error) {
        toastCustom('Error: intente nuevamente', 'error', 4000, 'bottom-right')
      }
    } else {
      dispatch(SubtractQtyFromCart(productID))
      setNewKey(prev => prev + 1)
      calculateNewTotal()
    }
  }

  const moveToCart = async (product) => {
    if (logged) {
      try {
        await axios.delete(`${ApiURL}/savedProducts/${userID}/${product.id}`)
        await axios.post(`${ApiURL}/cart/addProduct/${cartID}/${product.id}`, { qty: product.qty })
        dispatch(getSaved(userID))
        dispatch(getCart(userID))
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
      try {
        await axios.delete(`${ApiURL}/cart/delProduct/${cartID}/${productID}`)
        dispatch(getCart(userID))
        // toastCustom('Producto eliminado del carrito', 'success', 4000, 'bottom-right')
      } catch (error) {
        toastCustom('Error: el producto no pudo ser eliminado', 'error', 4000, 'bottom-right')
      }
    } else {
      dispatch(RemoveProductFromCart(productID))
    }
  }

  const removeFromSaved = async (productID) => {
    if (logged) {
      try {
        await axios.delete(`${ApiURL}/savedProducts/${userID}/${productID}`)
        dispatch(getSaved(userID))
      } catch (error) {
        toastCustom('Error: el producto no pudo ser eliminado', 'error', 4000, 'bottom-right')
      }
    } else {
      dispatch(RemoveProductFromSaved(productID))
    }
  }

  const moveToSaved = async (product) => {
    if (logged) {
      try {
        await axios.delete(`${ApiURL}/cart/delProduct/${cartID}/${product.id}`)
        await axios.post(`${ApiURL}/savedProducts/${userID}/${product.id}`, { qty: product.qty })
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

  const addQtyToSaved = async (product) => {
    if (logged) {
      try {
        await axios.post(`${ApiURL}/savedProducts/${userID}/${product.id}`)
        dispatch(getSaved(userID))
      } catch (error) {
        toastCustom('Error: intente nuevamente', 'error', 4000, 'bottom-right')
      }
    } else {
      setNewKey(prev => prev + 1)
      dispatch(AddProductToSaved(product))
    }
  }

  const subtractQtyFromSaved = async (productID) => {
    if (logged) {
      try {
        await axios.patch(`${ApiURL}/savedProducts/${userID}/${productID}`)
        dispatch(getSaved(userID))
      } catch (error) {
        toastCustom('Error: intente nuevamente', 'error', 4000, 'bottom-right')
      }
    } else {
      setNewKey(prev => prev + 1)
      dispatch(SubtractQtyFromSaved(productID))
    }
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
