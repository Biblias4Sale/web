import { useSelector } from "react-redux"
import axios from 'axios'
import { useEffect, useState } from "react"
import {ApiURL} from '../../config/config'
import { Modal } from 'react-bootstrap'
import { Loading } from '../common/spinner'
import { CheckInfo } from "./CheckInfo/CheckInfo"
// import { Pay } from './modules/Pay'

export const MercadoPago = (props) => {
    const user = useSelector(state => state.logged.user)
    // const userCart = useSelector(state => state.userCart)

    const [actualView, setActualView] = useState('init')

    const [url, setUrl] = useState('');
   
    const check = () => {
        if(user.address || user.city || user.province || user.cp || user.phone) return setActualView('pay')
        if(!user.address || !user.city || !user.province || !user.cp || !user.phone) return setActualView('check')
    }


    const payment = async () => {
          const response = await axios.post(`${ApiURL}/api/v1/mercadopago`, 
          //HARTCODEADO PORQUE NO SE QUE DATOS MANDAR DEL CARRITO (:
            {
                "currency_id": "ARS",
                "description": "ndfkjgnrjl",
                "title": "Una camara Noilan",
                "unit_price": 20000,
                "quantity": 2
             }
          , {withCredentials: true})
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
        {actualView === 'check' ? <CheckInfo /> : <Loading />}
        {actualView === 'pay' ? <iframe title='Finaliza tu compra' src={url} style={{width:'100%', height:'600px'}}/> : <Loading />} 
        </Modal.Body>
      </Modal>
    </div>
  )
}
