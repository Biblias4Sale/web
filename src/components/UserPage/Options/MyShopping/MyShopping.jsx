import axios from 'axios'
import { ApiURL } from '../../../../config/config'
import { MyShoppingView } from './MyShoppingView'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { AddReview } from '../AddReviews/AddReview'

export const MyShopping = () => {
  const userID = useSelector(state => state.logged.user.id)
  const [orders, setOrders] = useState([])
  const [modalShow, setModalShow] = useState(false)
  const [idProductSold, setIdProductSold] = useState()

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get(`${ApiURL}/cart/orders/${userID}`)
      setOrders(response.data)
      console.log('MIS COMPRAS', response.data)
    }
    getOrders()
  }, [userID])

  const makeReview = (id) => {
    setIdProductSold(id)
    setModalShow(true)
    // console.log('HAGO EL REVIEW', idProductSold)
  }

  return (
    <div>
      <MyShoppingView orders={orders} makeReview={makeReview} />
      <AddReview
        idProductSold={idProductSold}
        show={modalShow}
        onHide={() => {
          setModalShow(false)
          setTimeout(() => {
          }, 500)
        }}
      />
    </div>
  )
}
