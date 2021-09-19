import { useSelector } from "react-redux"
import axios from 'axios'
import { useEffect, useState } from "react"
import {ApiURL} from '../../config/config'
import { Modal } from 'react-bootstrap'
import { CheckInfo } from "./CheckInfo/CheckInfo"
// import { Pay } from './modules/Pay'

export const MercadoPago = (props) => {
    const user = useSelector(state => state.logged.user)
    const userCart = useSelector(state => state.userCart)

    const [actualView, setActualView] = useState('init')

    const [url, setUrl] = useState('');
   
    const check = () => {
        if(user?.address || user?.city || user?.province || user?.cp || user?.phone) return setActualView('pay')
        if(!user?.address || !user?.city || !user?.province || !user?.cp || !user?.phone) return setActualView('check')
    }

    // const cart = userCart.map(elem => (
    //     {
    // title: elem.model, 
    // description: elem.brand,
    // price: elem.price,
    // quantity: elem.qty
    //   })
    // )

    // const [totalPrice, setTotalPrice] = useState()
    // const [totalQty, setTotalQty] = useState()

    // const calculateTotal = () => {
    //     let newPrice = 0
    //     let newQty = 0
    //     cart.forEach(elem => {
    //         newPrice = newPrice + elem.price * elem.quantity
    //         newQty = newQty + elem.quantity
    //       setTotalPrice(totalPrice => newPrice)
    //       setTotalQty(totalQty => newQty)
    //     })
    //   }

    // console.log(cart)
    // 
    // "description": userCart[0].brand,
    // "title": userCart[0].model,
    // "unit_price": userCart[0].price,
    // "quantity": parseInt(userCart[0].qty)
    

    const payment = async () => {
          const response = await axios.post(`${ApiURL}/api/v1/mercadopago`, 
          //HARTCODEADO PORQUE NO SE QUE DATOS MANDAR DEL CARRITO (:
            {
                "currency_id": "ARS",
                "description": "carrito",
                "title": "productos",
                "unit_price": 1516,
                "quantity": 2
             }
          , {withCredentials: true})
          console.log(response.data, 'dataaaaaaaaa')
          return response.data
        }

    useEffect( () => {
        check()
        payment().then(res => setUrl(res.url))
    }, [])

    return (
     <div>
      <Modal
        show={props.show}
        onHide={props.onHide}
        {...props}
        size='lg'
        centered
        >
        <Modal.Header>
          <button type='button' className='btn-close' aria-label='Close' onClick={props.onHide} />
        </Modal.Header>

        <Modal.Body>
        {actualView === 'pay' ? <CheckInfo /> : null}
        {actualView === 'check' ? <iframe title='Finaliza tu compra' src={url} style={{width:'100%', height:'600px'}}/> : null} 
        </Modal.Body>
      </Modal>
    </div>
  )
}
