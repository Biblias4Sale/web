import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import AddReviewView from './AddReviewsView'
import { toastCustom } from '../../../common/Toastify'
import { Modal } from 'react-bootstrap'
import axios from 'axios'
import { ApiURL } from '../../../../config/config'

export const AddReview = (props) => {
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
    const ParagraphFormat = /[^\r\n]+((\r|\n|\r\n)[^\r\n]+)*/
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
    if (event === 'description') {
      if (!value.match(ParagraphFormat)) {
        setErrors((prev) => ({
          ...prev,
          [event]: `Ingresa ${errorString} válido`
        }))
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
      axios.post(`${ApiURL}/reviews/${props.idProductSold}`, formData, { withCredentials: true })
      toastCustom('Gracias por dejar tu comentario sobre el producto', 'success', 4000, 'bottom-right')
      props.onHide()
    } catch (error) {
      console.log('Error al agregar comentario', error)
      toastCustom('No pudo ser guardado tu comentario', 'error', 4000, 'bottom-right')
    }
  }

  return (
    <Modal
      {...props}
      size='lg'
      centered
    >
      <Modal.Header>
        <button type='button' className='btn-close' aria-label='Close' onClick={props.onHide} />
      </Modal.Header>
      <Modal.Body>
        <AddReviewView
          handleSubmit={handleSubmit(onSubmit)}
          errors={errors}
          handleChange={handleChange}
          formData={formData}
        />
      </Modal.Body>
    </Modal>

  )
}
export default AddReview
