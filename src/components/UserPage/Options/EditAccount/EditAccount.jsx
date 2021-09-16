import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
// import * as yup from 'yup'
import { EditAccountView } from './EditAccountView'
import { editUser } from '../../../../redux/actions/userActions'
import { toastCustom } from '../../../common/Toastify'

export const EditAccount = () => {
  const [modalShow, setModalShow] = useState(false)
  const dispatch = useDispatch()
  const oldInfo = useSelector(state => state.logged)

  const { handleSubmit } = useForm()

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    cp: '',
    address: '',
    city: '',
    province: '',
    phone: ''
  })

  const [errors, setErrors] = useState({
    name: true,
    lastName: true,
    email: true,
    password: true,
    confirmPassword: true,
    cp: true,
    address: true,
    city: true,
    province: true,
    phone: true
  })
  // Submit your data into Redux store
  const onSubmit = async () => {
    try {
      dispatch(editUser(oldInfo.user.id, formData, oldInfo.token))
      toastCustom('Cuenta actualizada exitosamente', 'success', 4000, 'bottom-right')
    } catch (error) {
      console.log('Error en actualizar cuenta', error)
      toastCustom('Cuenta no ha sido actualizada', 'error', 4000, 'bottom-right')
    }
  }

  const handleChange = (event, value) => {
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const nameFormat = /^[a-zA-Z]{1,15}$/
    const phoneFormat = /^[0-9]{1,12}$/
    const passwordFormat = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/
    setErrors((prev) => ({ ...prev, [event]: false }))
    let errorString
    if (event === 'name') errorString = 'un nombre'
    if (event === 'lastName') errorString = 'un apellido'
    if (event === 'email') errorString = 'un correo electrónico'
    if (event === 'password') errorString = 'una contraseña'
    if (event === 'confirmPassword') errorString = 'nuevamente la contraseña'
    if (event === 'cp') errorString = 'un código postal'
    if (event === 'address') errorString = 'una dirección'
    if (event === 'city') errorString = 'una ciudad'
    if (event === 'province') errorString = 'una provincia'
    if (event === 'phone') errorString = 'un telefóno'

    if (!value) {
      setErrors((prev) => ({ ...prev, [event]: `Ingresa ${errorString}` }))
    } else {
      if (event === 'name' || event === 'lastName' || event === 'address' || event === 'city' || event === 'province') {
        if (!value.match(nameFormat)) {
          setErrors((prev) => ({
            ...prev,
            [event]: `Ingresa ${errorString} válido`
          }))
        }
      }
      if (event === 'email') {
        if (!value.match(emailFormat)) {
          setErrors((prev) => ({
            ...prev,
            [event]: `Ingresa ${errorString} válido`
          }))
        }
      }
      if (event === 'password') {
        if (!value.match(passwordFormat)) {
          setErrors((prev) => ({
            ...prev,
            [event]: 'Debe tener al entre 6 y 10 caracteres; y al menos un número, una minúscula y una mayúscula.'
          }))
        }
      }

      if (event === 'confirmPassword') {
        if (formData.password !== value) {
          setErrors((prev) => ({
            ...prev,
            [event]: 'Las contraseñas no coinciden'
          }))
        }
      }
    }
    if (event === 'phone' || event === 'cp') {
      if (!value.match(phoneFormat)) {
        setErrors((prev) => ({
          ...prev,
          [event]: `Ingresa ${errorString} válido`
        }))
      }
    }
    setFormData((prev) => ({ ...prev, [event]: value }))
  }
  return (
    <div>
      <EditAccountView
        // register={register}
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
        oldInfo={oldInfo.user}
        setModalShow={setModalShow}
        modalShow={modalShow}
        handleChange={handleChange}
      />
    </div>
  )
}
