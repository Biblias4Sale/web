import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'
import { ApiURL } from '../../../../config/config'
import { CreateAccountView } from './CreateAccountView'
import { createUser } from '../../../../redux/actions'

export const CreateAccount = ({ setShowModal }) => {
  const dispatch = useDispatch()

  const [errorAuth, setErrorAuth] = useState('')
  const { handleSubmit} = useForm()

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({
    name: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false
  })


   // Submit your data into Redux store  
  const onSubmit = async () => {
    try {
      const response = await axios.post(`${ApiURL}/user`, formData, { withCredentials: true })
      setShowModal(response.data.user.name)
      setTimeout(() => {
        dispatch(createUser(response.data))
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
    const nameFormat = /^[a-zA-Z]{1,12}$/
    const passwordFormat = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/
    if (!value) {
      setErrors(prev => ({ ...prev, [event] : `Ingresa tu ${event}` }))
    }
    else{
      if(event === 'name' || event === 'lastName') {
        if (!value.match(nameFormat)) { 
              setErrors(prev => ({ ...prev, [event] : `Ingresa un ${event} válido entre 1 y 12 caracteres` }))
          }
        } 
      if(event === 'email') {
        if (!value.match(emailFormat)) { 
        setErrors(prev => ({ ...prev, [event] : `Ingresa un ${event} válido` }))
      }
    }
    if (event === 'password' || event ===  'confirmPassword') {
      if (!value.match(passwordFormat)) { 
        setErrors(prev => ({ ...prev, [event] : `Ingresa un ${event} válido. Debe tener al entre 6 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos` }))
        }
      }
  }
}
  return (
    <div>
      <CreateAccountView
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
