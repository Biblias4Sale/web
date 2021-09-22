import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLogged } from '../../../../redux/actions/userActions'
import { getCart, getSaved, cleanGuestCart } from '../../../../redux/actions/cartActions'
import { getFavorites } from '../../../../redux/actions/index'
import { toastCustom } from '../../../common/Toastify'
import axios from 'axios'
import { ApiURL, url } from '../../../../config/config'
import { LoginView } from './LoginView'

export const Login = ({ setCurrentView }) => {
  const dispatch = useDispatch()

  const [errorAuth, setErrorAuth] = useState('')
  const { handleSubmit } = useForm()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    email: false,
    contraseña: false
  })

  const guestCart = useSelector((state) => state.cart.main)
  const guestSaved = useSelector((state) => state.cart.saved)

  const joinCarts = async (cartID, userID) => {
    try {
      await guestCart.forEach((product) => {
        axios.post(`${ApiURL}/cart/addProduct/${cartID}/${product.id}`, { qty: product.qty })
      })
      await guestSaved.forEach((product) => {
        axios.post(`${ApiURL}/savedProducts/${userID}/${product.id}`, { qty: product.qty })
      })
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = async () => {
    try {
      const response = await axios.post(`${ApiURL}/login`, formData)
      dispatch(setLogged(response.data))
      await joinCarts(response.data.cart, response.data.user.id)
      dispatch(cleanGuestCart())
      setTimeout(() => {
        dispatch(getFavorites(response.data.user.id))
        dispatch(getCart(response.data.user.id))
        dispatch(getSaved(response.data.user.id))
      }, 1000)

      toastCustom(`Bienvenidx nuevamente ${response.data.user.name}!`, 'success', 4000, 'bottom-right')
    } catch (error) {
      setErrorAuth('Datos inválidos, intenta nuevamente')
    }
  }

  const handleChange = (event, value) => {
    setErrors(prev => ({ ...prev, [event]: false }))
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (event === 'email') {
      if (!value) setErrors(prev => ({ ...prev, [event]: 'Ingresa tu dirección de correo electrónico' }))
      if (!value.match(emailFormat)) setErrors(prev => ({ ...prev, [event]: 'Ingresa un e-mail válido' }))
    }

    if (event === 'password') {
      if (!value) setErrors(prev => ({ ...prev, [event]: 'Ingresa tu contraseña' }))
    }

    setFormData(prev => ({ ...prev, [event]: value }))
  }

  // google

  const cb = (newWindow, queryUrl) => {
    if (newWindow) {
      const timer = setInterval(() => {
        newWindow.window.close()
        if (newWindow.closed) {
          console.log('se cerro')
          if (timer) {
            axios.get(queryUrl, { withCredentials: true })
            .then(response => console.log(response.data))
            clearInterval(timer)
          }
        }
      },2000)
    }
  }

  const googleLogin = () => {
    let queryUrl
    (window.location.hostname.includes('localhost'))
      ? (queryUrl = 'http://localhost:3001/api/v1/user')
      : (queryUrl = 'https://noiloan.herokuapp.com/api/v1/user')
      
    if(window.location.hostname.includes('localhost')){
      const newWindow = window.open(url.local, '_blank', 'width=400, height=600')
      return cb(newWindow, queryUrl)
    }else{
      const newWindow = window.open(url.production, '_blank', 'width=400, height=600')
      return cb(newWindow, queryUrl)
    }
  }

  return (
    <div>
      <LoginView
        setCurrentView={setCurrentView}
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
        errorAuth={errorAuth}
        handleChange={handleChange}
        googleLogin={googleLogin}
      />
    </div>
  )
}
