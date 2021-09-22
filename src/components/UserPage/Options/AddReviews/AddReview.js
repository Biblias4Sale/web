import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addReview } from '../../../../redux/actions'
import AddReviewView from './AddReviewsView'
import { toastCustom } from '../../../common/Toastify'

export const AddReview = () => {
  const dispatch = useDispatch()
  const { handleSubmit } = useForm()

  const [formData, setFormData] = useState({
    title: '',
    rating: '',
    description: ''
  })

  const [errors, setErrors] = useState({
    title: false,
    rating: false,
    description: false
  })

  const handleChange = (event, value) => {
    const titleFormat = /^[#.0-9a-zA-Z\s,-]+$/
    const numberFormat = /^[0-9]{1,12}$/
    setErrors((prev) => ({ ...prev, [event]: false }))
    let errorString
    if (event === 'title') errorString = 'un título'
    if (event === 'description') errorString = 'una descripción'
    if (event === 'rating') errorString = 'una puntuación'
    if (!value) {
      setErrors((prev) => ({ ...prev, [event]: `Ingresa ${errorString}` }))
    } else {
      if (event === 'title' || event === 'description') {
        if (!value.match(titleFormat)) {
          setErrors((prev) => ({
            ...prev,
            [event]: `Ingresa ${errorString} válido`
          }))
        }
      }
    }
    if (event === 'rating') {
      if (!value.match(numberFormat)) {
        setErrors((prev) => ({
          ...prev,
          [event]: `Ingresa ${errorString} válido`
        }))
      }
    }
    setFormData((prev) => ({ ...prev, [event]: value }))
  }

  const onSubmit = async () => {
    try {
      dispatch(addReview(formData))
      toastCustom('Gracias por dejar su comentario sobre el producto', 'success', 4000, 'bottom-right')
    } catch (error) {
      console.log('Error agregar comentario', error)
      toastCustom('No pudo ser guardado su comentario', 'error', 4000, 'bottom-right')
    }
  }

  return (
    <div>
      <AddReviewView
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
        handleChange={handleChange}
        formData={formData}
      />
    </div>
  )
}
export default AddReview
