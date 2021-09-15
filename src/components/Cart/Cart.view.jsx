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
  handleChange,
  newKey
}) => {
  return (
    <>
      <div id={styles.banner} />

      <div id={styles.mainContainer}>
        <div id={styles.header}>
          <ul>
            <li
              className={styles.headerItem}
              onClick={() => setActualView('main')}
            >
              {' '}
              {`Carrito (${mainList.length})`}
            </li>
            <li
              className={styles.headerItem}
              onClick={() => setActualView('saved')}
            >
              {' '}
              {`Guardados (${savedList.length})`}
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
              handleChange={handleChange}
              newKey={newKey}
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
            />
            )}
      </div>
    </>
  )
}

export default CartView
