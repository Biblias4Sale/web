
import { useState } from 'react'
import { MercadoPago } from '../../components/MercadoPago/MercadoPago'
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
  const [currentView, setCurrentView] = useState('init')

  const shop = () => {
    if (logged) setShowMP(true)
    else setShowSession(true)
  }

  return (
    <>
      {!logged
        ? (
          <Session
            currentView={currentView}
            setCurrentView={setCurrentView}
            show={showSession}
            onHide={() => setShowSession(false)}
          />
          )
        : (
          <MercadoPago show={showMP} onHide={() => setShowMP(false)} />
          )}

      <MainView
        mainList={mainList}
        shop={shop}
        removeFromCart={removeFromCart}
        newKey={newKey}
        setShowSession={setShowSession}
        showSession={showSession}
        setCurrentView={setCurrentView}
        currentView={currentView}
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
