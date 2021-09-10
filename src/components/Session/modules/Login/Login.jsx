import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLogged } from '../../../../redux/actions'
import axios from 'axios'
import { ApiURL } from '../../../../config/config'
import { LoginView } from './LoginView'

export const Login = ({ setShowModal }) => {
  const dispatch = useDispatch()

  const [errorAuth, setErrorAuth] = useState('')
  const { handleSubmit} = useForm()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    email: false,
    password: false
  })

  // Submit your data into Redux store  
  const onSubmit = async () => {
    try {
      const response = await axios.post(`${ApiURL}/login`, formData)
      setShowModal(response.data.user.name)
      setTimeout(() => {
        dispatch(setLogged(response.data))
      }, 2000)
    } catch (error) {
      setErrorAuth('Datos inválidos, intenta nuevamente')
    }
  }

  const handleChange = (event, value) => {
    setErrors(prev => ({ ...prev, [event]: false }))
    if (!value) setErrors(prev => ({ ...prev, [event]: `Ingresa tu ${event}`}))
    else setFormData(prev => ({ ...prev, [event] : value }))
  }

  const handleBlur = (event, value) => {
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!value) {
      setErrors(prev => ({ ...prev, [event] : `Ingresa tu ${event}` }))
    }
    else{
      if(event === 'email') {
        if (!value.match(emailFormat)) { 
        setErrors(prev => ({ ...prev, [event] : `Ingresa un ${event} válido` }))
      }
    }
    }
  }

  return (
    <div>
      <LoginView
        setShowModal={setShowModal}
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
        errorAuth={errorAuth}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
    </div>
  )
}
