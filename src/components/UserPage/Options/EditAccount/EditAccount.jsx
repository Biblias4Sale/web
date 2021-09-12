import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { EditAccountView } from './EditAccountView'
import { editUser } from '../../../../redux/actions/index'
import { toastCustom } from '../../../common/Toastify'

const validations = yup.object().shape({
  name: yup.string().required('Por favor ingrese tu nombre'),
  lastName: yup.string().required('Por favor ingrese tu apellido'),
  email: yup.string().email('Por favor ingrese un mail valido').required('Por favor ingrese un mail'),
  // confirmEmail: yup.string().email().required().oneOf([yup.ref("email"), null], "Emails must match"),
  password: yup.string().required('Por favor ingrese una contraseña').min(6, 'Por favor ingrese una contraseña de al menos 6 caracteres'),
  confirmPassword: yup.string().required('Por favor confirme su contraseña').oneOf([yup.ref('password'), null], 'La contraseña debe coincidir'),
  cp: yup.string(),
  address: yup.string(),
  city: yup.string(),
  province: yup.string(),
  phone: yup.string()
})

export const EditAccount = () => {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  const oldInfo = useSelector(state => state.logged)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validations)
  })

  // Submit your data into Redux store
  const onSubmit = async (data) => {
    try {
      dispatch(editUser(oldInfo.user.id, data, oldInfo.token))
      toastCustom('Cuenta actualizada exitosamente', 'success', 4000, 'bottom-right')
    } catch (error) {
      console.log('Error en actualizar cuenta', error)
      toastCustom('Cuenta no ha sido actualizada', 'error', 4000, 'bottom-right')
    }
  }

  return (
    <div>
      <EditAccountView
        register={register}
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
        oldInfo={oldInfo.user}
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </div>
  )
}
