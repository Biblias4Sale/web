import styles from './Cart.module.css'
import Main from './Main'
import Saved from './Saved'

const CartView = ({ main, saved, total, addQty, RemoveProduct, subtractQty, addSaved, actualView, setActualView }) => {
  return (
    <>
      <div id={styles.banner} />

      <div id={styles.mainContainer}>

        <div id={styles.header}>
          <ul>
            <li className={styles.headerItem} onClick={() => setActualView('main')}> {`Carrito (${main.length})`}</li>
            <li className={styles.headerItem} onClick={() => setActualView('saved')}>  {`Guardados (${saved.length})`}  </li>
          </ul>
        </div>

        {actualView === 'main'
          ? <Main main={main} total={total} addQty={addQty} RemoveProduct={RemoveProduct} subtractQty={subtractQty} addSaved={addSaved} />
          : <Saved saved={saved} addQty={addQty} RemoveProduct={RemoveProduct} subtractQty={subtractQty} addSaved={addSaved} />}
      </div>
    </>
  )
}

export default CartView
