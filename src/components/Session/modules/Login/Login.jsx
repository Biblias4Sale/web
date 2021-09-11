import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLogged } from '../../../../redux/actions'
import { toastCustom } from '../../../common/Toastify'
import axios from 'axios'
import { ApiURL } from '../../../../config/config'
import { LoginView } from './LoginView'

export const Login = ({ setShowModal }) => {
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

  // Submit your data into Redux store
  const onSubmit = async () => {
    try {
      const response = await axios.post(`${ApiURL}/login`, formData)
      dispatch(setLogged(response.data))
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
      if (!value.match(emailFormat)) setErrors(prev => ({ ...prev, [event]: 'Ingresa un e-mail} válido' }))
    }

    if (event === 'password') {
      if (!value) setErrors(prev => ({ ...prev, [event]: 'Ingresa tu contraseña' }))
    }

    setFormData(prev => ({ ...prev, [event]: value }))
  }

  return (
    <div>
      <LoginView
        setShowModal={setShowModal}
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
        errorAuth={errorAuth}
        handleChange={handleChange}
      />
    </div>
  )
}
