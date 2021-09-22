import { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'
import CheckOut from '../MercadoPago/CheckOut'
import { Session } from '../Session/Session'
import MainView from './MainView.jsx'
import axios from 'axios'
import { ApiURL } from '../../config/config'

const Main = ({
  total,
  mainList,
  addQtyToCart,
  removeFromCart,
  subtractQtyFromCart,
  moveToSaved,
  newKey,
  logged,
  disableInput,
  cartID,
  userID
}) => {
  const [showMP, setShowMP] = useState(false)
  const [showSession, setShowSession] = useState(false)
  const [sessionView, setSessionView] = useState('init')
  const [checkoutView, setCheckoutView] = useState('')
  const [mpCart, setMpCart] = useState([])
  const [url, setUrl] = useState('')

  const Payment = async () => {
    const response = await axios.post(`${ApiURL}/api/v1/mercadopago`, mpCart, { withCredentials: true })
    return response.data
  }

  const shop = () => {
    if (logged) {
      Payment().then(res => {
        setUrl(res.url)
      })
      mainList.forEach(product => {
        if (product.stock < 1) moveToSaved(product)
      })
      setShowMP(true)
      setCheckoutView('check')
    } else setShowSession(true)
  }

  useEffect(() => {
    const arr = mainList
      .filter(product => product.stock > 0)
      .map(product => (
        {
          currency_id: 'ARS',
          description: product.description,
          title: product.brand + ' ' + product.model,
          unit_price: parseInt(product.price),
          quantity: parseInt(product.qty)
        }))
    setMpCart(arr)
  }, [mainList, cartID, userID])

  return (
    <>
      {!logged
        ? (
          <Session
            currentView={sessionView}
            setCurrentView={setSessionView}
            show={showSession}
            onHide={() => setShowSession(false)}
          />
          )
        : (
          <CheckOut
            url={url}
            mpCart={mpCart}
            show={showMP}
            checkoutView={checkoutView}
            setCheckoutView={setCheckoutView}
            onHide={() => setShowMP(false)}
          />
          )}

      <MainView
        mainList={mainList}
        shop={shop}
        removeFromCart={removeFromCart}
        newKey={newKey}
        setShowSession={setShowSession}
        showSession={showSession}
        setCurrentView={setSessionView}
        currentView={sessionView}
        logged={logged}
        showMP={showMP}
        setShowMP={setShowMP}
        moveToSaved={moveToSaved}
        subtractQtyFromCart={subtractQtyFromCart}
        addQtyToCart={addQtyToCart}
        total={total}
        disableInput={disableInput}
        mpCart={mpCart}
      />
    </>
  )
}

export default Main
