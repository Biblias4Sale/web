import { Link } from 'react-router-dom'

export const Pay = () => {

    return (
        <div>
           <Link target="_blank" to={ window.location= 'https://www.mercadopago.com.ar/checkout/v1/payment/redirect/exception?pref_i=267902892-2e14fdb6-f1a2-4137-abcc-6615c8678e24' }  /> 
           {/* <a target="_blank" href='https://www.mercadopago.com.ar/checkout/v1/payment/redirect/exception?pref_i=267902892-2e14fdb6-f1a2-4137-abcc-6615c8678e24' >CLick</a> */}
        </div>
    )
}
