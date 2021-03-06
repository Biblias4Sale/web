import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'
import { ApiURL } from '../../../../config/config'
import { CreateAccountView } from './CreateAccountView'
import { setLogged } from '../../../../redux/actions/userActions'
import { getCart, getSaved, cleanGuestCart } from '../../../../redux/actions/cartActions'
import { getFavorites } from '../../../../redux/actions/index'
import { toastCustom } from '../../../common/Toastify'

export const CreateAccount = ({ setCurrentView }) => {
  const dispatch = useDispatch()

  // const [errorAuth, setErrorAuth] = useState('');
  const { handleSubmit } = useForm()

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({
    name: true,
    lastName: true,
    email: true,
    password: true,
    confirmPassword: true
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

  // Submit your data into Redux store
  const onSubmit = async () => {
    try {
      const response = await axios.post(`${ApiURL}/user`, formData)
      dispatch(setLogged(response.data))
      await joinCarts(response.data.cartID, response.data.user.id)
      dispatch(cleanGuestCart())
      setTimeout(() => {
        dispatch(getFavorites(response.data.user.id))
        dispatch(getCart(response.data.user.id))
        dispatch(getSaved(response.data.user.id))
      }, 1000)
      toastCustom(`Cuenta creada exitosamente. Bienvenid@ ${response.data.user.name}!`, 'success', 4000, 'bottom-right')
    } catch (error) {
      console.log('Error en crear cuenta:', error)
      toastCustom('Ya existe una cuenta con esa direcci??n de e-mail', 'error', 4000, 'bottom-right')
      // setErrorAuth('Ya existe una cuenta con esa direcci??n de e-mail');
    }
  }

  const handleChange = (event, value) => {
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const nameFormat = /^[a-zA-Z]{1,15}$/
    const passwordFormat = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/
    setErrors((prev) => ({ ...prev, [event]: false }))
    let errorString
    if (event === 'name') errorString = 'un nombre'
    if (event === 'lastName') errorString = 'un apellido'
    if (event === 'email') errorString = 'un correo electr??nico'
    if (event === 'password') errorString = 'una contrase??a'
    if (event === 'confirmPassword') errorString = 'nuevamente la contrase??a'

    if (!value) {
      setErrors((prev) => ({ ...prev, [event]: `Ingresa ${errorString}` }))
    } else {
      if (event === 'name' || event === 'lastName') {
        if (!value.match(nameFormat)) {
          setErrors((prev) => ({
            ...prev,
            [event]: `Ingresa ${errorString} v??lido`
          }))
        }
      }
      if (event === 'email') {
        if (!value.match(emailFormat)) {
          setErrors((prev) => ({
            ...prev,
            [event]: `Ingresa ${errorString} v??lido`
          }))
        }
      }
      if (event === 'password') {
        if (!value.match(passwordFormat)) {
          setErrors((prev) => ({
            ...prev,
            [event]: 'Debe tener al entre 6 y 10 caracteres; y al menos un n??mero, una min??scula y una may??scula.'
          }))
        }
      }

      if (event === 'confirmPassword') {
        if (formData.password !== value) {
          setErrors((prev) => ({
            ...prev,
            [event]: 'Las contrase??as no coinciden'
          }))
        }
      }
    }
    setFormData((prev) => ({ ...prev, [event]: value }))
  }

  return (
    <div>
      <CreateAccountView
        setCurrentView={setCurrentView}
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
        // errorAuth={errorAuth}
        handleChange={handleChange}
      />
    </div>
  )
}
