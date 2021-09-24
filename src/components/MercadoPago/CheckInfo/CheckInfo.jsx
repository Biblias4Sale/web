import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { CheckInfoView } from './CheckInfoView'
import { getCart } from '../../../redux/actions/cartActions'
import { editUser } from '../../../redux/actions/userActions'

const CheckInfo = ({ setCheckoutView, total }) => {
  const dispatch = useDispatch()
  const oldInfo = useSelector(state => state.logged)
  const userID = oldInfo.user.id

  const { handleSubmit } = useForm()

  const [formData, setFormData] = useState({
    cp: oldInfo.user.cp,
    address: oldInfo.user.address,
    city: oldInfo.user.city,
    province: oldInfo.user.province,
    phone: oldInfo.user.phone
  })

  const [errors, setErrors] = useState({
    cp: false,
    address: false,
    city: false,
    province: false,
    phone: false
  })

  const onSubmit = async () => {
    // await axios.post(`${ApiURL}/cart/confirmCart/${cartID}/${userID}`, { price: total })
    dispatch(editUser(oldInfo.user.id, formData, oldInfo.token, oldInfo.cart))
    setTimeout(() => {
      dispatch(getCart(userID))
    }, 1000)
    setCheckoutView('choose')
  }

  const handleChange = (event, value) => {
    const phoneFormat = /^[0-9]{1,12}$/
    const adressFormat = /^[#.0-9a-zA-Z\s,-]+$/
    setErrors((prev) => ({ ...prev, [event]: false }))
    let errorString
    if (event === 'cp') errorString = 'un código postal'
    if (event === 'address') errorString = 'una dirección'
    if (event === 'city') errorString = 'una ciudad'
    if (event === 'province') errorString = 'una provincia'
    if (event === 'phone') errorString = 'un telefóno'

    if (!value) {
      setErrors((prev) => ({ ...prev, [event]: `Ingresa ${errorString}` }))
    } else {
      if (event === 'address' || event === 'city' || event === 'province') {
        if (!value.match(adressFormat)) {
          setErrors((prev) => ({
            ...prev,
            [event]: `Ingresa ${errorString} válido`
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
      <CheckInfoView
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
        formData={formData}
        handleChange={handleChange}
      />
    </div>
  )
}

export default CheckInfo
