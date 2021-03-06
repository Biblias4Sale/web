import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { EditAccountView } from './EditAccountView'
import { editUser } from '../../../../redux/actions/userActions'
import { toastCustom } from '../../../common/Toastify'

export const EditAccount = () => {
  const [modalShow, setModalShow] = useState(false)
  const dispatch = useDispatch()
  const oldInfo = useSelector(state => state.logged)

  const { handleSubmit } = useForm()

  const [formData, setFormData] = useState({
    name: oldInfo.user.name,
    lastName: oldInfo.user.lastName,
    email: oldInfo.user.email,
    password: oldInfo.user.password,
    confirmPassword: '',
    cp: oldInfo.user.cp,
    address: oldInfo.user.address,
    city: oldInfo.user.city,
    province: oldInfo.user.province,
    phone: oldInfo.user.phone
  })

  const [errors, setErrors] = useState({
    name: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
    cp: false,
    address: false,
    city: false,
    province: false,
    phone: false
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
    const nameFormat = /^[a-zA-Z]{1,20}$/
    const phoneFormat = /^[0-9]{1,12}$/
    const adressFormat = /^[#.0-9a-zA-Z\s,-]+$/
    const passwordFormat = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/
    setErrors((prev) => ({ ...prev, [event]: false }))
    let errorString
    if (event === 'name') errorString = 'un nombre'
    if (event === 'lastName') errorString = 'un apellido'
    if (event === 'email') errorString = 'un correo electr??nico'
    if (event === 'password') errorString = 'una contrase??a'
    if (event === 'confirmPassword') errorString = 'nuevamente la contrase??a'
    if (event === 'cp') errorString = 'un c??digo postal'
    if (event === 'address') errorString = 'una direcci??n'
    if (event === 'city') errorString = 'una ciudad'
    if (event === 'province') errorString = 'una provincia'
    if (event === 'phone') errorString = 'un telef??no'

    if (!value) {
      setErrors((prev) => ({ ...prev, [event]: `Ingresa ${errorString}` }))
    } else {
      if (event === 'name' || event === 'lastName' || event === 'province') {
        if (!value.match(nameFormat)) {
          setErrors((prev) => ({
            ...prev,
            [event]: `Ingresa ${errorString} v??lido`
          }))
        }
      }
      if (event === 'address' || event === 'city') {
        if (!value.match(adressFormat)) {
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
    if (event === 'phone' || event === 'cp') {
      if (!value.match(phoneFormat)) {
        setErrors((prev) => ({
          ...prev,
          [event]: `Ingresa ${errorString} v??lido`
        }))
      }
    }
    setFormData((prev) => ({ ...prev, [event]: value }))
  }
  return (
    <div>
      <EditAccountView
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
        oldInfo={oldInfo.user}
        setModalShow={setModalShow}
        modalShow={modalShow}
        handleChange={handleChange}
        formData={formData}
      />
    </div>
  )
}
