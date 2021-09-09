import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { EditAccountView } from './EditAccountView'
import { editUser } from '../../redux/actions'

const validations = yup.object().shape({
  name: yup.string().required('Por favor ingrese tu nombre'),
  lastName: yup.string().required('Por favor ingrese tu apellido'),
  email: yup.string().email('Por favor ingrese un mail valido').required('Por favor ingrese un mail'),
  // confirmEmail: yup.string().email().required().oneOf([yup.ref("email"), null], "Emails must match"),
  password: yup.string().required('Por favor ingrese una contraseña').min(6, 'Por favor ingrese una contraseña de al menos 6 caracteres'),
  // .matches('/^(?=.*)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/', 'La contraseña debe contener al menos 6 caracteres, al menos un numero, al menos una minúscula, al menos una mayúscula')
  confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], 'La contraseña debe coincidir')
})

export const EditAccount = ({ handleClose }) => {
  const dispatch = useDispatch()
  const oldInfo = useSelector(state => state.logged)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validations)
  })

  // Submit your data into Redux store
  const onSubmit = (data) => {
    console.log(data)
    handleClose()
    dispatch(editUser(oldInfo.id, data.name))
    // dispatch(setLogged(data))
  }

  return (
    <div>
      <EditAccountView
        register={register}
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
      />
    </div>
  )
}
