import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { LoginView } from './LoginView'
import { setLogged } from '../../redux/actions'
import axios from 'axios'
import { ApiURL } from '../../config/config'

const validations = yup.object().shape({
  email: yup.string().email('Por favor ingrese un mail valido').required('Por favor ingrese un mail'),
  password: yup.string().required('Por favor ingrese una contraseña').min(6, 'Por favor ingrese una contraseña de al menos 6 caracteres')
})

export const Login = ({ setShowModal }) => {
  const dispatch = useDispatch()

  const [errorAuth, setErrorAuth] = useState('')

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validations)
  })

  // Submit your data into Redux store
  const onSubmit = async (loginInfo) => {
    try {
      const response = await axios.post(`${ApiURL}/login`, loginInfo, { withCredentials: true })
      setShowModal(response.data.name)
      setTimeout(() => {
        dispatch(setLogged(response.data))
      }, 1000)
    } catch (error) {
      setErrorAuth('Datos invalidos, intentá nuevamente')
    }
  }

  return (
    <div>
      <LoginView
        setShowModal={setShowModal}
        register={register}
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
        errorAuth={errorAuth}
      />
    </div>
  )
}
