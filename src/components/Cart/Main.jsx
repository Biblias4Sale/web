
import { useState } from 'react'
import CheckOut from '../MercadoPago/CheckOut'
import { Session } from '../Session/Session'
import MainView from './MainView.jsx'

const Main = ({
  total,
  mainList,
  addQtyToCart,
  removeFromCart,
  subtractQtyFromCart,
  moveToSaved,
  newKey,
  logged
}) => {
  const [showMP, setShowMP] = useState(false)
  const [showSession, setShowSession] = useState(false)
  const [sessionView, setSessionView] = useState('init')
  const [checkoutView, setCheckoutView] = useState('')

  const shop = () => {
    if (logged) {
      setShowMP(true)
      setCheckoutView('check')
    } else setShowSession(true)
  }

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
          <CheckOut show={showMP} checkoutView={checkoutView} setCheckoutView={setCheckoutView} onHide={() => setShowMP(false)} />
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
      />
    </>
  )
}

export default Main
