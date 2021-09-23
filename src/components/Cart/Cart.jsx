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
  const cartID = useSelector(state => state.logged ? state.userCart.id : null)
  const mainList = useSelector((state) => state.logged ? state.userCart.products : state.cart.main)
  const savedList = useSelector((state) => state.logged ? state.userSaved : state.cart.saved)
  const [actualView, setActualView] = useState('main')
  const [total, setTotal] = useState()
  const [newKey, setNewKey] = useState(1)
  const [disableInput, setDisableInput] = useState(false)

  const calculateNewTotal = () => {
    let newTotal = 0
    mainList && mainList
      .filter(product => product.stock > 0)
      .forEach(product => {
        newTotal = newTotal + product.price * product.qty
        setTotal(total => newTotal)
      })

    mainList && mainList.sort((a, b) => {
      if (a.model > b.model) {
        return 1
      }
      if (a.model < b.model) {
        return -1
      }
      return 0
    })
  }

  useEffect(() => {
    if (userID !== null) {
      dispatch(getCart(userID))
      dispatch(getSaved(userID))
    }
  }, [dispatch, userID])

  useEffect(() => {
    calculateNewTotal()
  })

  const addQtyToCart = async (product) => {
    if (logged) {
      setDisableInput(true)
      try {
        await axios.post(`${ApiURL}/cart/addProduct/${cartID}/${product.id}`)
          .then(() => {
            setTimeout(() => {
              dispatch(getCart(userID))
              setDisableInput(false)
            }, 250)
          })
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
      setDisableInput(true)
      try {
        await axios.post(`${ApiURL}/cart/subProduct/${cartID}/${productID}`)
          .then(() => {
            setTimeout(() => {
              dispatch(getCart(userID))
              setDisableInput(false)
            }, 250)
          })
      } catch (error) {
        toastCustom('Error: intente nuevamente', 'error', 4000, 'bottom-right')
      }
    } else {
      dispatch(SubtractQtyFromCart(productID))
      setNewKey(prev => prev + 1)
    }
  }

  const moveToCart = (product) => {
    if (logged) {
      try {
        axios.delete(`${ApiURL}/savedProducts/${userID}/${product.id}`)
        axios.post(`${ApiURL}/cart/addProduct/${cartID}/${product.id}`, { qty: product.qty })
          .then(() => {
            dispatch(getSaved(userID))
            dispatch(getCart(userID))
          })
        toastCustom('Producto movido al carrito', 'success', 4000, 'bottom-right')
      } catch (error) {
        toastCustom('Error: el producto no pudo ser movido', 'error', 4000, 'bottom-right')
      }
    } else {
      dispatch(AddProductToCart(product))
      dispatch(RemoveProductFromSaved(product.id))
    }
  }

  const removeFromCart = (productID) => {
    if (logged) {
      try {
        axios.delete(`${ApiURL}/cart/delProduct/${cartID}/${productID}`)
          .then(() => {
            dispatch(getCart(userID))
          })
      } catch (error) {
        toastCustom('Error: el producto no pudo ser eliminado', 'error', 4000, 'bottom-right')
      }
    } else {
      dispatch(RemoveProductFromCart(productID))
    }
  }

  const removeFromSaved = (productID) => {
    if (logged) {
      try {
        axios.delete(`${ApiURL}/savedProducts/${userID}/${productID}`)
          .then(() => {
            dispatch(getSaved(userID))
          })
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
        await axios.post(`${ApiURL}/savedProducts/${userID}/${product.id}`, { qty: product.qty })
        await axios.delete(`${ApiURL}/cart/delProduct/${cartID}/${product.id}`)
          .then(() => {
            dispatch(getCart(userID))
            dispatch(getSaved(userID))
          }
          )
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
      setDisableInput(true)
      try {
        await axios.post(`${ApiURL}/savedProducts/${userID}/${product.id}`)
        setTimeout(() => {
          dispatch(getSaved(userID))
          setDisableInput(false)
        }, 500)
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
      setDisableInput(true)
      try {
        await axios.patch(`${ApiURL}/savedProducts/${userID}/${productID}`)
        setTimeout(() => {
          dispatch(getSaved(userID))
          setDisableInput(false)
        }, 500)
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
      logged={logged}
      disableInput={disableInput}
      cartID={cartID}
      userID={userID}
    />
  )
}

export default Cart
