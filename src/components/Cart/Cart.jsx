import CartView from './Cart.view'
import { useState, useEffect } from 'react'
import { AddCart, DeleteProduct } from '../../redux/actions/index'
import { useSelector, useDispatch } from 'react-redux'

const ReduxCart = [
  {
    id: 5,
    brand: 'Canon',
    model: 'Powershot SX420',
    img: 'https://www.cordobadigital.net/wp-content/uploads/2020/06/sx420.jpeg',
    description: '20.0 mpx Procesador digic 4+ (+rápido y +calidad) Zoom 42x (24-1008 mm) Pantalla 3.0” VIDEO 720p HD Af de alta velocidad Estabilizador de imagen Modo auto inteligente',
    price: 51000,
    points: '3',
    stock: null,
    state: true,
    subCategoryId: 2,
    UserId: null,
    qty: 1
  },
  {
    id: 14,
    brand: 'Canon',
    model: 'SX100',
    img: 'https://arsonyb2c.vteximg.com.br/arquivos/ids/292451-550-550/ILCE-7M3_Black-1.jpg?v=637123589061300000',
    description: 'Una cámara linda',
    price: 80000,
    points: '5',
    stock: null,
    state: true,
    subCategoryId: 2,
    UserId: null,
    qty: 2
  }
]

// const cart = ReduxCart.slice()

export const Cart = () => {
  const dispatch = useDispatch()
  const [total, setTotal] = useState(2599)
  const cart = useSelector(state => state.cart)

  // useEffect(() => {
  //   setTotal(cart.reduce((acc, value) => acc.price + value.price))
  // }, [cart])

  const addOne = (product) => {
    dispatch(AddCart(product))
  }

  const deleteProduct = (id) => {
    dispatch(DeleteProduct(id))
  }

  // const handleUnits = (id, value) => {
  //   let newQty
  //   cart.forEach(product => {
  //     if (product.id === id) {
  //       newQty = product.qty + 1
  //     }
  //   }
  //   )
  //   console.log(cart)
  //   setCart(prev => {...prev, })
  // }

  return (
    <CartView cart={cart} total={total} addOne={addOne} deleteProduct={deleteProduct}/>
  )
}

export default Cart
