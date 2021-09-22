import styles from './Cart.module.css'
import Main from './Main'
import Saved from './Saved'

const CartView = ({
  mainList,
  savedList,
  total,
  addQtyToCart,
  removeFromCart,
  removeFromSaved,
  subtractQtyFromCart,
  subtractQtyFromSaved,
  moveToCart,
  moveToSaved,
  addQtyToSaved,
  actualView,
  setActualView,
  newKey,
  logged,
  disableInput,
  cartID,
  userID
}) => {
  return (
    <>
      <div id={styles.banner} />

      <div id={styles.mainContainer}>
        <div id={styles.header}>
          <ul>
            <li
              className={actualView === 'main' ? styles.headerSelectedItem : styles.headerItem}
              onClick={() => setActualView('main')}
            >
              {`Carrito (${mainList && mainList.length})`}
            </li>
            <li
              className={actualView === 'saved' ? styles.headerSelectedItem : styles.headerItem}
              onClick={() => setActualView('saved')}
            >
              {`Guardados (${savedList && savedList.length})`}
            </li>
          </ul>
        </div>

        {actualView === 'main'
          ? (
            <Main
              mainList={mainList}
              total={total}
              addQtyToCart={addQtyToCart}
              removeFromCart={removeFromCart}
              subtractQtyFromCart={subtractQtyFromCart}
              moveToSaved={moveToSaved}
              newKey={newKey}
              logged={logged}
              disableInput={disableInput}
              cartID={cartID}
              userID={userID}
            />
            )
          : (
            <Saved
              savedList={savedList}
              moveToCart={moveToCart}
              removeFromSaved={removeFromSaved}
              addQtyToSaved={addQtyToSaved}
              subtractQtyFromSaved={subtractQtyFromSaved}
              newKey={newKey}
              disableInput={disableInput}
            />
            )}
      </div>
    </>
  )
}

export default CartView
