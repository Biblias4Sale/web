import axios from 'axios'
import { ApiURL } from '../../../../config/config'
import { MyShoppingView } from './MyShoppingView'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export const MyShopping = () => {
  const userID = useSelector(state => state.logged.user.id)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get(`${ApiURL}/cart/orders/${userID}`)
      setOrders(response.data)
    }
    getOrders()
  }, [userID])

  return (
    <div>
      <MyShoppingView orders={orders} />
    </div>
  )
}
