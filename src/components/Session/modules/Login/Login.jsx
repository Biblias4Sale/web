// import * as yup from 'yup'
// import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLogged } from '../../../../redux/actions'
import axios from 'axios'
import { ApiURL } from '../../../../config/config'
import { LoginView } from './LoginView'

// const validations = yup.object().shape({
//   email: yup.string().email('Por favor ingrese un mail valido').required('Por favor ingrese un mail'),
//   password: yup.string().required('Por favor ingrese una contraseña').min(6, 'Por favor ingrese una contraseña de al menos 6 caracteres')
// })

export const Login = ({ setShowModal }) => {
  const dispatch = useDispatch()

  const [errorAuth, setErrorAuth] = useState('')
  const { register, handleSubmit} = useForm()

  const [errors, setErrors] = useState({
    email: false,
    password: false
  })

  // Submit your data into Redux store  
  const onSubmit = async (loginInfo) => {
    try {
      const response = await axios.post(`${ApiURL}/login`, loginInfo)
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
    if (!value) setErrors(prev => ({ ...prev, [event]: `Tenes que ingresar tu ${event}`}))
  }

  const handleBlur = (event) => {

  }

  return (
    <div>
      <LoginView
        setShowModal={setShowModal}
        register={register}
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
        errorAuth={errorAuth}
        handleChange={handleChange}
      />
    </div>
  )
}
