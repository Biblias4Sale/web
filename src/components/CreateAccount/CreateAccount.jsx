import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { CreateAccountView } from './CreateAccountView'
import { createUser } from '../../redux/actions'

const validations = yup.object().shape({
  name: yup.string().required('Por favor ingrese tu nombre'),
  lastName: yup.string().required('Por favor ingrese tu apellido'),
  email: yup.string().email('Por favor ingrese un mail valido').required('Por favor ingrese un mail'),
  // confirmEmail: yup.string().email().required().oneOf([yup.ref("email"), null], "Emails must match"),
  password: yup.string().required('Por favor ingrese una contraseña')
    .matches('^(?=.*[A-Za-z])("?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{6,}$',
      'Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character')
  // confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match')
})

export const CreateAccount = ({ setShowModal }) => {
  const dispatch = useDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validations)
  })

  // Submit your data into Redux store
  const onSubmit = (data) => {
    window.alert('Cuenta Creada')
    dispatch(createUser(data))
  }

  return (
    <div>
      <CreateAccountView
        setShowModal={setShowModal}
        register={register}
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
      />
    </div>
  )
}
