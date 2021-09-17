import { useSelector } from "react-redux"
import axios from 'axios'
import { useEffect, useState } from "react"
import {ApiURL} from '../../config/config'
import { Modal } from 'react-bootstrap'
import { Loading } from '../common/spinner'
// import { Pay } from './modules/Pay'

export const MercadoPago = (props) => {
    // if(props.user.address || props.user.city || props.user.province || props.user.cp || props.user.phone) props.setCurrentView('check')
    // if(!props.user.address || !props.user.city || !props.user.province || !props.user.cp || !props.user.phone) props.setCurrentView('pay')

    // const user = useSelector(state => state.logged.userCart)

    // const payment = async () => {
    //       const response = await axios.post(`${ApiURL}/api/v1/mercadopago`, 
    //         {
    //             "currency_id": "ARS",
    //             "description": "Alta facha",
    //             "title": "Una camara Noilan",
    //             "unit_price": 20000,
    //             "quantity": 2
    //          }
    //       , {withCredentials: true})
    //       return response.data
    //     }

    // const [actualView, setActualView] = useState('pay')

    // let response 

    // useEffect(async () => {
    //    response = await payment()
    // }, [])

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
        {/* {
            !response?.url ? <Loading /> */}
         <iframe src={`http://stackoverflow.com/questions/42914666/react-router-external-link`} style={{width:'100%', height:'600px'}}/>   
        {/* } */}
        </Modal.Body>
      </Modal>
    </div>
  )
}
