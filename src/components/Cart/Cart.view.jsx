import styles from './Cart.module.css'
import Main from './Main'
import Saved from './Saved'

const CartView = ({
  main,
  saved,
  total,
  addQty,
  removeFromCart,
  removeFromSaved,
  subtractQty,
  moveToCart,
  moveToSaved,
  actualView,
  setActualView,
  handleChange
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
              {`Carrito (${main.length})`}
            </li>
            <li
              className={styles.headerItem}
              onClick={() => setActualView('saved')}
            >
              {' '}
              {`Guardados (${saved.length})`}
            </li>
          </ul>
        </div>

        {actualView === 'main'
          ? (
            <Main
              main={main}
              total={total}
              addQty={addQty}
              removeFromCart={removeFromCart}
              subtractQty={subtractQty}
              moveToSaved={moveToSaved}
              handleChange={handleChange}
            />
            )
          : (
            <Saved
              saved={saved}
              moveToCart={moveToCart}
              removeFromSaved={removeFromSaved}
            />
            )}
      </div>
    </>
  )
}

export default CartView
