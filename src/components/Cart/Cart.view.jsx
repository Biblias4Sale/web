import styles from './Cart.module.css'

export const CartView = () => {
  return (
    <>
      <div id={styles.banner} />
      <div id={styles.mainContainer}>
        <div id={styles.header}>
          <ul>
            <li className={styles.headerItem}> Carrito </li>
            <li className={styles.headerItem}> Guardados </li>
          </ul>
        </div>
        body
      </div>
    </>
  )
}

export default CartView
